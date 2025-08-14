export interface AdaptiveConfig {
  length: 'short' | 'medium' | 'long';
  punctuation: boolean;
  focusTag: 'letters' | 'numbers' | 'punctuation' | 'mixed';
}

export interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
  timeElapsed: number;
}

export interface ErrorsByChar {
  [char: string]: number;
}

export function nextConfigFrom(
  stats: TypingStats, 
  errorsByChar?: ErrorsByChar
): AdaptiveConfig {
  const { wpm, accuracy } = stats;
  
  // Base configuration
  let config: AdaptiveConfig = {
    length: 'medium',
    punctuation: true,
    focusTag: 'mixed'
  };
  
  // Rule 1: High performer → advanced content
  if (wpm >= 35 && accuracy >= 95) {
    config.length = 'long';
    config.punctuation = true;
    config.focusTag = 'mixed';
    return config;
  }
  
  // Rule 2: Low accuracy → simplified content
  if (accuracy < 90) {
    config.length = 'short';
    config.punctuation = false;
    config.focusTag = 'letters';
    return config;
  }
  
  // Rules 3-4: Error pattern analysis (if available)
  if (errorsByChar) {
    const totalErrors = Object.values(errorsByChar).reduce((sum, count) => sum + count, 0);
    
    if (totalErrors > 0) {
      // Count errors by category
      let digitErrors = 0;
      let punctuationErrors = 0;
      
      for (const [char, count] of Object.entries(errorsByChar)) {
        if (/\d/.test(char)) {
          digitErrors += count;
        } else if (/[,.;:!?'"()[\]{}]/.test(char)) {
          punctuationErrors += count;
        }
      }
      
      const digitErrorRate = digitErrors / totalErrors;
      const punctuationErrorRate = punctuationErrors / totalErrors;
      
      // Rule 3: If digits dominate errors → focus on numbers
      if (digitErrorRate > 0.3) {
        config.focusTag = 'numbers';
      }
      // Rule 4: If punctuation dominates errors → focus on punctuation
      else if (punctuationErrorRate > 0.3) {
        config.focusTag = 'punctuation';
      }
    }
  }
  
  return config;
}