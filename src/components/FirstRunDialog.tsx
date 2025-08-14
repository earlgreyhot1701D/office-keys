import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const TUTORIAL_KEY = 'ok_tutorial_seen_v1';

interface FirstRunDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FirstRunDialog({ isOpen, onOpenChange }: FirstRunDialogProps) {
  const [dontShowAgain, setDontShowAgain] = useState(true);
  const focusRef = useRef<HTMLButtonElement>(null);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        focusRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleStartPractice = () => {
    if (dontShowAgain) {
      localStorage.setItem(TUTORIAL_KEY, '1');
    }
    onOpenChange(false);
  };

  const handleSkip = () => {
    if (dontShowAgain) {
      localStorage.setItem(TUTORIAL_KEY, '1');
    }
    onOpenChange(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      handleSkip();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-lg" 
        role="dialog" 
        aria-modal="true"
        onKeyDown={handleKeyDown}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Welcome to Office Keys</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How it works:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• New Test gives a different passage at the same level</li>
                <li>• Home opens the level selector (Short / Medium / Long)</li>
                <li>• Shortcuts: N New Test, R Try Again, H/Esc Home</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Hand position:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                <li>• Index fingers on F and J (feel the bumps)</li>
                <li>• Keep wrists straight, eyes on the text (not the keys)</li>
              </ul>
            </div>
            
            <p className="text-xs text-muted-foreground italic">
              Privacy note: Results save on this device only (no account needed).
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="dont-show-again"
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(checked === true)}
              aria-label="Don't show this dialog again"
            />
            <Label 
              htmlFor="dont-show-again" 
              className="text-sm cursor-pointer"
            >
              Don't show this again
            </Label>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              ref={focusRef}
              onClick={handleStartPractice}
              className="flex-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Start practice
            </Button>
            <Button 
              variant="secondary"
              onClick={handleSkip}
              className="flex-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Skip for now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function shouldShowFirstRun(): boolean {
  return !localStorage.getItem(TUTORIAL_KEY);
}