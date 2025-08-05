import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TextSelectorProps {
  onTextSelect: (text: string) => void;
  currentText: string;
}

const SAMPLE_TEXTS = [
  {
    title: "Beginner",
    difficulty: "Easy",
    text: "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet. Practice makes perfect when learning to type faster."
  },
  {
    title: "Intermediate", 
    difficulty: "Medium",
    text: "In the digital age, typing skills have become increasingly important for productivity and communication. Whether you're writing emails, coding, or creating documents, faster typing speeds can significantly improve your efficiency and reduce fatigue."
  },
  {
    title: "Advanced",
    difficulty: "Hard", 
    text: "Mastering the art of touch typing requires dedicated practice and proper technique. By maintaining correct finger placement on the home row keys and developing muscle memory through repetitive exercises, even complex punctuation and special characters become second nature."
  },
  {
    title: "Programming",
    difficulty: "Expert",
    text: `function calculateTypingSpeed(startTime, endTime, charactersTyped) {
  const timeInMinutes = (endTime - startTime) / 60000;
  const wordsPerMinute = (charactersTyped / 5) / timeInMinutes;
  return Math.round(wordsPerMinute);
}`
  }
];

const TextSelector = ({ onTextSelect, currentText }: TextSelectorProps) => {
  const [customText, setCustomText] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const handlePresetSelect = (text: string) => {
    onTextSelect(text);
    setShowCustom(false);
  };

  const handleCustomSubmit = () => {
    if (customText.trim()) {
      onTextSelect(customText.trim());
      setCustomText('');
      setShowCustom(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Hard': return 'bg-error text-error-foreground';
      case 'Expert': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Select Practice Text
            <Button
              variant="outline"
              onClick={() => setShowCustom(!showCustom)}
            >
              {showCustom ? 'Show Presets' : 'Custom Text'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showCustom ? (
            <div className="space-y-4">
              <Textarea
                placeholder="Enter your custom text here..."
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                rows={4}
                className="font-mono"
              />
              <div className="flex gap-2">
                <Button 
                  onClick={handleCustomSubmit}
                  disabled={!customText.trim()}
                >
                  Use This Text
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowCustom(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAMPLE_TEXTS.map((sample, index) => (
                <Card 
                  key={index}
                  className={cn(
                    "cursor-pointer transition-all hover:scale-105 hover:shadow-lg",
                    sample.text === currentText && "ring-2 ring-primary"
                  )}
                  onClick={() => handlePresetSelect(sample.text)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{sample.title}</h3>
                      <Badge className={getDifficultyColor(sample.difficulty)}>
                        {sample.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 font-mono leading-relaxed">
                      {sample.text}
                    </p>
                    <div className="mt-3 text-xs text-muted-foreground">
                      {sample.text.length} characters
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TextSelector;