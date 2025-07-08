"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  suggestion: string;
}

export function AccessibilityAudit() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const auditAccessibility = () => {
      const foundIssues: AccessibilityIssue[] = [];

      // Check for images without alt text
      const images = document.querySelectorAll('img:not([alt])');
      if (images.length > 0) {
        foundIssues.push({
          type: 'error',
          message: `${images.length} תמונות ללא טקסט חלופי נמצאו`,
          element: 'img',
          suggestion: 'הוסף alt text לכל התמונות'
        });
      }

      // Check for buttons without accessible names
      const buttonsWithoutLabels = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      const problematicButtons = Array.from(buttonsWithoutLabels).filter(btn => 
        !btn.textContent?.trim() && !btn.querySelector('span.sr-only')
      );
      if (problematicButtons.length > 0) {
        foundIssues.push({
          type: 'warning',
          message: `${problematicButtons.length} כפתורים ללא תוויות נגישות`,
          element: 'button',
          suggestion: 'הוסף aria-label או טקסט נסתר לכפתורים'
        });
      }

      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      let hierarchyIssues = 0;
      headings.forEach(heading => {
        const currentLevel = parseInt(heading.tagName.charAt(1));
        if (currentLevel > previousLevel + 1) {
          hierarchyIssues++;
        }
        previousLevel = currentLevel;
      });
      if (hierarchyIssues > 0) {
        foundIssues.push({
          type: 'warning',
          message: `בעיות בהיררכיית כותרות נמצאו`,
          element: 'headings',
          suggestion: 'ודא שרמות הכותרות עוקבות בסדר הגיוני (h1, h2, h3...)'
        });
      }

      // Check for links without accessible names
      const linksWithoutLabels = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
      const problematicLinks = Array.from(linksWithoutLabels).filter(link => 
        !link.textContent?.trim() || link.textContent?.trim() === 'לחץ כאן'
      );
      if (problematicLinks.length > 0) {
        foundIssues.push({
          type: 'warning',
          message: `${problematicLinks.length} קישורים עם תוויות לא ברורות`,
          element: 'a',
          suggestion: 'הוסף תוויות ברורות לקישורים'
        });
      }

      // Check for form inputs without labels
      const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      const problematicInputs = Array.from(inputsWithoutLabels).filter(input => {
        const inputElement = input as HTMLInputElement;
        const id = inputElement.id;
        if (!id) return true;
        const label = document.querySelector(`label[for="${id}"]`);
        return !label;
      });
      if (problematicInputs.length > 0) {
        foundIssues.push({
          type: 'error',
          message: `${problematicInputs.length} שדות טופס ללא תוויות`,
          element: 'input',
          suggestion: 'הוסף label או aria-label לכל שדות הטופס'
        });
      }

      // Check for sufficient color contrast (basic check)
      const colorContrastInfo = {
        type: 'info' as const,
        message: 'בדיקת ניגודיות צבעים מומלצת',
        element: 'colors',
        suggestion: 'השתמש בכלים כמו WebAIM Color Contrast Checker לבדיקת ניגודיות'
      };
      foundIssues.push(colorContrastInfo);

      setIssues(foundIssues);
    };

    // Run audit after a short delay to ensure DOM is ready
    const timer = setTimeout(auditAccessibility, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;

  const errorCount = issues.filter(issue => issue.type === 'error').length;
  const warningCount = issues.filter(issue => issue.type === 'warning').length;
  const infoCount = issues.filter(issue => issue.type === 'info').length;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`בדיקת נגישות - ${errorCount} שגיאות, ${warningCount} אזהרות`}
      >
        <Info className="w-6 h-6" />
        {(errorCount > 0 || warningCount > 0) && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {errorCount + warningCount}
          </span>
        )}
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 w-96 bg-white border border-gray-200 rounded-lg shadow-xl p-4 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">ביקורת נגישות</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="סגור ביקורת נגישות"
            >
              ×
            </button>
          </div>

          <div className="space-y-3">
            {issues.length === 0 ? (
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>לא נמצאו בעיות נגישות</span>
              </div>
            ) : (
              issues.map((issue, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md border-r-4 ${
                    issue.type === 'error'
                      ? 'bg-red-50 border-red-400'
                      : issue.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-400'
                      : 'bg-blue-50 border-blue-400'
                  }`}
                >
                  <div className="flex items-start">
                    {issue.type === 'error' ? (
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    ) : issue.type === 'warning' ? (
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <Info className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    )}
                    <div className="text-sm">
                      <p className="font-medium">{issue.message}</p>
                      <p className="text-gray-600 mt-1">{issue.suggestion}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <p>סה"כ: {errorCount} שגיאות, {warningCount} אזהרות, {infoCount} הערות</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 