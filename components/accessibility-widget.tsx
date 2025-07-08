"use client";

import React, { useState, useEffect } from "react";
import { 
  Accessibility, 
  Type, 
  Eye, 
  Contrast, 
  Volume2, 
  VolumeX,
  Sun,
  Moon,
  RotateCcw,
  Underline,
  Palette,
  Settings,
  X,
  Minus,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface AccessibilitySettings {
  fontSize: number;
  contrast: string;
  theme: 'light' | 'dark' | 'high-contrast';
  underlineLinks: boolean;
  removeAnimations: boolean;
  grayscale: boolean;
  invertColors: boolean;
  readableFont: boolean;
  soundEnabled: boolean;
  cursorSize: number;
}

const STORAGE_KEY = 'accessibility-settings';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    contrast: 'normal',
    theme: 'light',
    underlineLinks: false,
    removeAnimations: false,
    grayscale: false,
    invertColors: false,
    readableFont: false,
    soundEnabled: true,
    cursorSize: 1
  });

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem(STORAGE_KEY);
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  // Apply accessibility settings to document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // Font size
    root.style.fontSize = `${newSettings.fontSize}%`;

    // Theme and contrast
    body.classList.remove('dark-theme', 'high-contrast', 'grayscale', 'invert-colors');
    
    if (newSettings.theme === 'dark') {
      body.classList.add('dark-theme');
    } else if (newSettings.theme === 'high-contrast') {
      body.classList.add('high-contrast');
    }

    // Grayscale
    if (newSettings.grayscale) {
      body.classList.add('grayscale');
    }

    // Invert colors
    if (newSettings.invertColors) {
      body.classList.add('invert-colors');
    }

    // Underline links
    if (newSettings.underlineLinks) {
      const style = document.getElementById('accessibility-underline-links') || document.createElement('style');
      style.id = 'accessibility-underline-links';
      style.textContent = 'a { text-decoration: underline !important; }';
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('accessibility-underline-links');
      if (style) style.remove();
    }

    // Remove animations
    if (newSettings.removeAnimations) {
      const style = document.getElementById('accessibility-no-animations') || document.createElement('style');
      style.id = 'accessibility-no-animations';
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('accessibility-no-animations');
      if (style) style.remove();
    }

    // Readable font
    if (newSettings.readableFont) {
      const style = document.getElementById('accessibility-readable-font') || document.createElement('style');
      style.id = 'accessibility-readable-font';
      style.textContent = `
        * {
          font-family: Arial, sans-serif !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('accessibility-readable-font');
      if (style) style.remove();
    }

    // Cursor size
    root.style.setProperty('--cursor-size', `${newSettings.cursorSize}`);
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      contrast: 'normal',
      theme: 'light',
      underlineLinks: false,
      removeAnimations: false,
      grayscale: false,
      invertColors: false,
      readableFont: false,
      soundEnabled: true,
      cursorSize: 1
    };
    setSettings(defaultSettings);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'z') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.altKey && e.key === 'x') {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Widget Toggle Button */}
      <Button
        className="fixed bottom-4 left-4 z-50 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "סגור כלי נגישות" : "פתח כלי נגישות (Alt+Z)"}
        aria-expanded={isOpen}
      >
        <Accessibility className="h-6 w-6 text-white" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <Card className="fixed bottom-20 left-4 z-50 w-80 max-h-96 overflow-y-auto bg-white shadow-xl border">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Accessibility className="h-5 w-5" />
              כלי נגישות
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              aria-label="סגור כלי נגישות (Alt+X)"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-4 space-y-4">
            {/* Font Size Control */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Type className="h-4 w-4" />
                גודל גופן: {settings.fontSize}%
              </label>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateSetting('fontSize', Math.max(50, settings.fontSize - 10))}
                  aria-label="הקטן גופן"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={([value]) => updateSetting('fontSize', value)}
                  min={50}
                  max={200}
                  step={10}
                  className="flex-1"
                  aria-label="גודל גופן"
                />
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateSetting('fontSize', Math.min(200, settings.fontSize + 10))}
                  aria-label="הגדל גופן"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Theme Controls */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Palette className="h-4 w-4" />
                ערכת צבעים
              </label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  size="sm"
                  variant={settings.theme === 'light' ? 'default' : 'outline'}
                  onClick={() => updateSetting('theme', 'light')}
                  className="text-xs"
                >
                  <Sun className="h-3 w-3 mr-1" />
                  בהיר
                </Button>
                <Button
                  size="sm"
                  variant={settings.theme === 'dark' ? 'default' : 'outline'}
                  onClick={() => updateSetting('theme', 'dark')}
                  className="text-xs"
                >
                  <Moon className="h-3 w-3 mr-1" />
                  כהה
                </Button>
                <Button
                  size="sm"
                  variant={settings.theme === 'high-contrast' ? 'default' : 'outline'}
                  onClick={() => updateSetting('theme', 'high-contrast')}
                  className="text-xs"
                >
                  <Contrast className="h-3 w-3 mr-1" />
                  ניגודיות
                </Button>
              </div>
            </div>

            {/* Toggle Options */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  variant={settings.underlineLinks ? 'default' : 'outline'}
                  onClick={() => updateSetting('underlineLinks', !settings.underlineLinks)}
                  className="text-xs"
                >
                  <Underline className="h-3 w-3 mr-1" />
                  קו תחתי
                </Button>
                <Button
                  size="sm"
                  variant={settings.readableFont ? 'default' : 'outline'}
                  onClick={() => updateSetting('readableFont', !settings.readableFont)}
                  className="text-xs"
                >
                  <Type className="h-3 w-3 mr-1" />
                  גופן ברור
                </Button>
                <Button
                  size="sm"
                  variant={settings.removeAnimations ? 'default' : 'outline'}
                  onClick={() => updateSetting('removeAnimations', !settings.removeAnimations)}
                  className="text-xs"
                >
                  עצור אנימציות
                </Button>
                <Button
                  size="sm"
                  variant={settings.grayscale ? 'default' : 'outline'}
                  onClick={() => updateSetting('grayscale', !settings.grayscale)}
                  className="text-xs"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  אפור
                </Button>
                <Button
                  size="sm"
                  variant={settings.invertColors ? 'default' : 'outline'}
                  onClick={() => updateSetting('invertColors', !settings.invertColors)}
                  className="text-xs col-span-2"
                >
                  הפוך צבעים
                </Button>
              </div>
            </div>

            {/* Sound Control */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                {settings.soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                צלילים
              </label>
              <Button
                size="sm"
                variant="outline"
                onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
                aria-label={settings.soundEnabled ? "בטל צלילים" : "הפעל צלילים"}
              >
                {settings.soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
            </div>

            {/* Reset Button */}
            <Button
              onClick={resetSettings}
              variant="outline"
              className="w-full"
              aria-label="אפס הגדרות נגישות"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              אפס הגדרות
            </Button>

            {/* Keyboard Shortcuts Info */}
            <div className="text-xs text-muted-foreground border-t pt-2">
              <p>קיצורי מקלדת:</p>
              <p>Alt+Z - פתח כלי נגישות</p>
              <p>Alt+X - סגר כלי נגישות</p>
            </div>
          </div>
        </Card>
      )}

      {/* CSS Styles */}
      <style jsx global>{`
        .dark-theme {
          filter: invert(1) hue-rotate(180deg);
        }
        .high-contrast {
          filter: contrast(200%) brightness(150%);
        }
        .grayscale {
          filter: grayscale(100%);
        }
        .invert-colors {
          filter: invert(1);
        }
        html {
          cursor: auto;
        }
        * {
          cursor: inherit;
        }
      `}</style>
    </>
  );
} 