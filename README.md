#  FourFront Management Web App Dashboard clone – Frontend Assessment

---

##  Overview

This project is a responsive frontend interface built to match the provided mobile/tablet reference design.

It demonstrates:

- Clean layout structure
- Responsive design implementation
- Dynamic DOM manipulation
- Modal onboarding interaction
- Interactive membership toggle behavior

The design maintains consistent brand styling (gold accents, rounded profile image, card structure) while allowing flexibility for desktop layout interpretation.

---

## 🚀 Getting Started

This is a static frontend project and does not require any backend.

###  Clone the Repository

```bash
git clone <your-repository-link>
cd fourfront-frontend
```

###  Open the Project

You can open `index.html` directly in your browser:

```
double-click index.html
```

Or use a simple local server:

```bash
npx serve .
```

No additional dependencies are required.

---

##  Project Structure

```
/
 ├── index.html
 ├── css/
 │   └── styles.css
 ├── js/
 │   └── script.js
 └── assets/
     └── images/
```

- `index.html` → Main layout structure  
- `styles.css` → Custom styling and branding  
- `script.js` → Modal logic and dynamic UI behavior  

---

##  Design Features

###  Brand Styling

- Gold accent color used consistently for primary highlights
- Rounded profile image
- Card-based layout
- Clean spacing and typography hierarchy

Gold color is defined using a CSS variable:

```css
:root {
  --gold: #c9a227;
}
```

---

##  Onboarding Modal (Dynamic Profile Setup)

When a user first visits the page:

- A modal automatically appears
- The user is prompted to:
  - Enter their name
  - Upload a profile image

After submission:

- The modal closes
- The profile card updates dynamically
- The uploaded image replaces the default avatar
- The entered name is displayed in the profile section

This is handled using JavaScript DOM manipulation and FileReader API.

If the user refreshes the page, the modal reappears (no local storage persistence by design for assessment simplicity).

---

##  Membership Toggle Behavior

The interface includes two membership options:

- Foundation Membership
- Economy Membership

### Default State

- Foundation membership has a gold background
- Economy membership has a muted/dull blue background

### Toggle Behavior

When a membership card is clicked:

- The selected card becomes visually active
- Additional information expands below the card
- The expanded section displays:
  - White text
  - Dark grey / black background
- The previously active card resets to its original style

This interaction is handled through:

- Class toggling via JavaScript
- Conditional styling through CSS classes

This approach avoids page reloads and keeps interaction smooth.

---

##  Responsive Design

The layout prioritizes mobile and tablet view consistency based on the reference image.

Desktop layout:

- Expands grid sections
- Maintains card proportions
- Preserves rounded profile image styling
- Retains brand color integrity

Bootstrap utility classes were used for layout structure, with custom CSS layered on top for brand-specific styling.

---

##  Footer Credits Strip

A full-width gold strip appears at the bottom of the page containing:

```
FourFront Management @ 2025 All rights reserved
```

Styling:

- Gold background
- White centered text
- Lightweight typography
- Responsive across screen sizes

---

##  Interaction Logic Summary

### Modal Logic
- Triggered on DOMContentLoaded
- Prevents background interaction until submitted
- Updates profile card dynamically

### Toggle Logic
- Uses event listeners
- Applies/removes active classes
- Controls conditional visibility of expanded sections

---

## Development Approach

The project was built incrementally with logical separation of concerns:

1. Base HTML structure
2. Bootstrap layout scaffolding
3. Custom CSS styling
4. Profile card implementation
5. Membership section layout
6. Toggle interaction logic
7. Onboarding modal implementation
8. Footer credits strip addition
9. Responsive refinements

Each major feature was committed separately to reflect structured frontend development workflow.

---

## Testing the Project

To test functionality:

1. Open `index.html`
2. Confirm onboarding modal appears
3. Enter a name and upload an image
4. Verify profile updates correctly
5. Toggle between membership options
6. Confirm dynamic styling and content changes

---

## License

Developed as part of a frontend technical assessment.
