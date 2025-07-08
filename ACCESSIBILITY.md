# 🌐 Accessibility Features

This website implements comprehensive accessibility features to ensure it's usable by everyone, including users with disabilities. We've built both static accessibility compliance and a dynamic accessibility widget similar to WP Accessibility Helper.

## 🛠️ Accessibility Widget

The accessibility widget provides users with real-time controls to customize their browsing experience. It's located in the bottom-left corner of the screen.

### Features

#### 🔤 Font Controls
- **Font Size**: Adjustable from 50% to 200% (default: 100%)
- **Readable Font**: Switch to Arial for better readability
- **Font increase/decrease buttons**: Quick adjustment controls

#### 🎨 Visual Controls
- **Light Theme**: Standard bright theme
- **Dark Theme**: Inverted colors for better contrast in low light
- **High Contrast**: Enhanced contrast for visual impairments
- **Grayscale**: Remove colors for color-blind users
- **Invert Colors**: Full color inversion for specific visual needs

#### 🖱️ Navigation Aids
- **Underline Links**: Highlight all clickable links
- **Remove Animations**: Stop all CSS animations and transitions
- **Sound Controls**: Enable/disable interface sounds

#### ⌨️ Keyboard Shortcuts
- **Alt + Z**: Open accessibility widget
- **Alt + X**: Close accessibility widget

### Implementation

The widget is implemented as a React component (`AccessibilityWidget`) that:
- Saves settings to localStorage for persistence
- Applies changes dynamically using CSS classes and styles
- Provides ARIA-compliant controls
- Works with keyboard navigation

## 🏗️ Built-in Accessibility Features

### WCAG 2.1 AA Compliance
✅ **Skip Navigation**: Alt+Tab to skip to main content  
✅ **Semantic HTML**: Proper heading hierarchy (h1→h2→h3)  
✅ **ARIA Labels**: Comprehensive screen reader support  
✅ **Keyboard Navigation**: Full site navigation without a mouse  
✅ **Focus Indicators**: Visible focus outlines on all interactive elements  
✅ **Color Contrast**: Meets WCAG contrast requirements  
✅ **Alt Text**: Descriptive alternative text for all images  
✅ **Form Labels**: Proper labeling for all form inputs  

### Screen Reader Support
- **Live Regions**: Dynamic content updates announced to screen readers
- **Landmark Roles**: Clear page structure (banner, navigation, main, etc.)
- **Button States**: Proper state announcements (expanded/collapsed)
- **Link Context**: Descriptive link text and labels

### Keyboard Navigation
- **Tab Order**: Logical progression through interactive elements
- **Arrow Keys**: Gallery and video navigation
- **Escape Key**: Close modals and overlays
- **Enter/Space**: Activate buttons and controls

### Mobile Accessibility
- **Touch Targets**: Minimum 44px tap targets
- **Responsive Design**: Works across all device sizes
- **Voice Control**: Compatible with mobile accessibility features

## 🔧 Technical Implementation

### Components Enhanced for Accessibility
- **Navbar**: Skip links, proper ARIA labels, keyboard support
- **Video Gallery**: Screen reader announcements, keyboard controls
- **Image Gallery**: Dialog management, arrow key navigation
- **Services**: Interactive buttons with state management
- **Forms**: Proper labeling and error handling
- **FAQ**: Accordion with proper ARIA attributes

### CSS Classes Applied by Widget
```css
.dark-theme { filter: invert(1) hue-rotate(180deg); }
.high-contrast { filter: contrast(200%) brightness(150%); }
.grayscale { filter: grayscale(100%); }
.invert-colors { filter: invert(1); }
```

### Dynamic Styles
- Font size adjustments via CSS custom properties
- Link underlining via injected stylesheets
- Animation removal for motion-sensitive users
- Font family overrides for readability

## 🧪 Testing & Validation

### Tools Used
- **Accessibility Audit**: Built-in development tool for ongoing monitoring
- **Screen Reader Testing**: Compatible with NVDA, JAWS, and VoiceOver
- **Keyboard Testing**: Full navigation without mouse
- **Color Contrast**: Verified with WebAIM tools

### Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📱 Usage Instructions

### For Users with Visual Impairments
1. Use **Alt+Z** to open the accessibility widget
2. Increase font size with the slider or +/- buttons
3. Enable high contrast mode for better visibility
4. Turn on link underlining for clearer navigation
5. Use readable font for better text clarity

### For Users with Motor Impairments
1. Full keyboard navigation is available
2. Large touch targets on mobile devices
3. Remove animations to reduce motion
4. Sticky focus indicators show current position

### For Users with Cognitive Impairments
1. Clear heading structure for easy navigation
2. Consistent layout and navigation patterns
3. Option to remove distracting animations
4. Simple, clean design with good contrast

## 🔗 Legal Compliance

This implementation meets or exceeds:
- **ADA** (Americans with Disabilities Act)
- **Section 508** (US Federal accessibility requirements)
- **WCAG 2.1 AA** (Web Content Accessibility Guidelines)
- **EN 301 549** (European accessibility standard)

## 🚀 Getting Started

The accessibility widget is automatically included in your application. Users can access it via:
1. The blue accessibility button in the bottom-left corner
2. Keyboard shortcut Alt+Z
3. Settings persist across browser sessions

No additional setup or configuration is required!

---

For questions about accessibility features or to report accessibility issues, please contact us through the website's contact form. 