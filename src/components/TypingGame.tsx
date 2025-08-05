import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TypingGameProps {
  text: string;
  onComplete: (stats: TypingStats) => void;
}

interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
  timeElapsed: number;
}

const TypingGame = ({ text, onComplete }: TypingGameProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [errors, setErrors] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && startTime) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  // Calculate stats
  const calculateWPM = () => {
    if (timeElapsed === 0) return 0;
    const wordsTyped = currentIndex / 5; // Standard: 5 characters = 1 word
    return Math.round((wordsTyped / timeElapsed) * 60);
  };

  const calculateAccuracy = () => {
    if (currentIndex === 0) return 100;
    return Math.round(((currentIndex - errors) / currentIndex) * 100);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (!isActive && value.length > 0) {
      setIsActive(true);
      setStartTime(Date.now());
    }

    // Check if character is correct
    if (value.length > userInput.length) {
      const newChar = value[value.length - 1];
      const expectedChar = text[currentIndex];
      
      if (newChar !== expectedChar) {
        setErrors(prev => prev + 1);
      }
      
      setCurrentIndex(prev => prev + 1);
    } else if (value.length < userInput.length) {
      // Handle backspace
      setCurrentIndex(value.length);
    }

    setUserInput(value);

    // Check if completed
    if (value.length === text.length) {
      setIsActive(false);
      onComplete({
        wpm: calculateWPM(),
        accuracy: calculateAccuracy(),
        errors,
        timeElapsed
      });
    }
  };

  // Reset game
  const resetGame = () => {
    setCurrentIndex(0);
    setUserInput('');
    setErrors(0);
    setStartTime(null);
    setIsActive(false);
    setTimeElapsed(0);
    inputRef.current?.focus();
  };

  // Toggle pause
  const togglePause = () => {
    setIsActive(!isActive);
    if (!isActive && startTime) {
      setStartTime(Date.now() - timeElapsed * 1000);
    }
  };

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = '';
      
      if (index < currentIndex) {
        // Already typed
        const userChar = userInput[index];
        className = userChar === char ? 'text-game-correct' : 'text-game-incorrect bg-error/20';
      } else if (index === currentIndex) {
        // Current character
        className = 'text-game-current bg-warning/20';
      } else {
        // Not yet typed
        className = 'text-game-pending';
      }

      return (
        <span
          key={index}
          className={cn(
            'transition-all duration-150',
            className
          )}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{calculateWPM()}</div>
            <div className="text-sm text-muted-foreground">WPM</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-success">{calculateAccuracy()}%</div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-error">{errors}</div>
            <div className="text-sm text-muted-foreground">Errors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-warning">{timeElapsed}s</div>
            <div className="text-sm text-muted-foreground">Time</div>
          </CardContent>
        </Card>
      </div>

      {/* Text Display */}
      <Card>
        <CardContent className="p-8">
          <div className="text-lg leading-relaxed font-mono tracking-wide">
            {renderText()}
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={togglePause}
          variant="outline"
          size="lg"
          disabled={!startTime}
        >
          {isActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {isActive ? 'Pause' : 'Resume'}
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          size="lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Hidden Input */}
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="absolute opacity-0 pointer-events-none"
        disabled={!isActive && currentIndex === 0 ? false : !isActive}
      />
    </div>
  );
};

export default TypingGame;