import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TextSelectorProps {
  onTextSelect: (text: string, selectedLevel?: 'short' | 'medium' | 'long') => void;
  currentText: string;
}

const SAMPLE_TEXTS = [
  {
    title: "Short Passages",
    difficulty: "Easy",
    level: "short" as const,
    description: "Brief sentences perfect for building confidence and speed"
  },
  {
    title: "Medium Passages", 
    difficulty: "Medium",
    level: "medium" as const,
    description: "Moderate length texts for developing consistency"
  },
  {
    title: "Long Passages",
    difficulty: "Hard", 
    level: "long" as const,
    description: "Extended paragraphs for endurance and focus training"
  }
];

const TextSelector = ({ onTextSelect, currentText }: TextSelectorProps) => {
  const [customText, setCustomText] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const handlePresetSelect = (level: 'short' | 'medium' | 'long') => {
    onTextSelect('', level); // Pass empty text and the selected level
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SAMPLE_TEXTS.map((sample, index) => (
                <Card 
                  key={index}
                  className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                  onClick={() => handlePresetSelect(sample.level)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{sample.title}</h3>
                      <Badge className={getDifficultyColor(sample.difficulty)}>
                        {sample.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sample.description}
                    </p>
                    <div className="mt-4 text-xs text-muted-foreground font-medium">
                      Click to start with a {sample.level} passage
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