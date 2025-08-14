import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings } from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  dyslexiaFont: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  dyslexiaFont: false,
};

function loadSettings(): AccessibilitySettings {
  try {
    const stored = localStorage.getItem('ok_accessibility_settings');
    return stored ? { ...DEFAULT_SETTINGS, ...JSON.parse(stored) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function saveSettings(settings: AccessibilitySettings) {
  try {
    localStorage.setItem('ok_accessibility_settings', JSON.stringify(settings));
  } catch (e) {
    console.warn('Failed to save accessibility settings:', e);
  }
}

function applySettingsToBody(settings: AccessibilitySettings) {
  const body = document.body;
  body.classList.toggle('ok-contrast', settings.highContrast);
  body.classList.toggle('ok-text-lg', settings.largeText);
  body.classList.toggle('ok-dyslexia', settings.dyslexiaFont);
}

export default function AccessibilitySettings() {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [isOpen, setIsOpen] = useState(false);

  // Load settings on mount and apply immediately
  useEffect(() => {
    const loadedSettings = loadSettings();
    setSettings(loadedSettings);
    applySettingsToBody(loadedSettings);
  }, []);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveSettings(newSettings);
    applySettingsToBody(newSettings);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Open accessibility settings"
          className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md" role="dialog" aria-modal="true">
        <DialogHeader>
          <DialogTitle>Accessibility Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <Label 
              htmlFor="high-contrast" 
              className="text-sm font-medium cursor-pointer"
            >
              High contrast
            </Label>
            <Switch
              id="high-contrast"
              checked={settings.highContrast}
              onCheckedChange={(checked) => updateSetting('highContrast', checked)}
              aria-label="Toggle high contrast mode"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label 
              htmlFor="large-text" 
              className="text-sm font-medium cursor-pointer"
            >
              Large text
            </Label>
            <Switch
              id="large-text"
              checked={settings.largeText}
              onCheckedChange={(checked) => updateSetting('largeText', checked)}
              aria-label="Toggle large text size"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label 
              htmlFor="dyslexia-font" 
              className="text-sm font-medium cursor-pointer"
            >
              Dyslexia-friendly font
            </Label>
            <Switch
              id="dyslexia-font"
              checked={settings.dyslexiaFont}
              onCheckedChange={(checked) => updateSetting('dyslexiaFont', checked)}
              aria-label="Toggle dyslexia-friendly font"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}