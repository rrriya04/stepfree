# StepFree – Public Accessibility Issue Reporter

**StepFree** is a modern, responsive, and accessible ReactJS web application built with Vite. It allows citizens and pedestrians to report public accessibility barriers—such as blocked footpaths, broken wheelchair ramps, damaged sidewalks, construction obstructions, and inaccessible entrances—and track their resolution status in real time.

Designed for an individual college ReactJS course assignment, this project demonstrates core React principles, state management with hooks, client-side form validation, dynamic filtering, conditional rendering, and responsive UI design without any external backend or complex UI libraries.

---

## 🌟 Key Features

1. **Interactive Real-Time Dashboard & Statistics**:
   - Automatically tracks **Total Reports**, **Pending Reports**, **Under Review**, and **Resolved Reports**.
   - Live updates whenever new reports are submitted, statuses are updated, or reports are deleted.
   - Clickable stat cards that act as quick status filters.

2. **Client-Side Validated Report Submission**:
   - Validates Full Name (minimum 2 letters, cannot be solely numbers or spaces).
   - Validates Email Address with regular expression formatting.
   - Validates Location / Street Address (minimum 3 characters).
   - Validates Category Selection (Blocked Footpath, Broken Ramp, Damaged Sidewalk, Inaccessible Entrance, Construction Obstruction, Missing Accessibility Signage, Other).
   - Validates Severity Selection (Low, Medium, High).
   - Validates Issue Description (between 20 and 300 characters) with a live character counter.
   - Clean UX: errors only appear upon interaction/blur or submit attempts, and disappear immediately once corrected.
   - Auto-resets upon successful submission with a clear success notification banner.

3. **Multi-Criteria Search & Filtering**:
   - Real-time search by issue title, location, or street address.
   - Dropdown filter by Category.
   - Dropdown filter by Severity.
   - Dropdown filter by Status (Reported, In Review, Resolved).
   - "Clear All Filters" button with active filter counter.
   - User-friendly empty state with quick reset action.

4. **Interactive Report Management**:
   - Status changer dropdown directly on each report card.
   - Delete report with an accessible confirmation modal.
   - Distinguishes initial sample reports from community-submitted reports.

5. **Responsive & Accessible Design**:
   - Color palette inspired by clean municipal dashboards: light cream/slate background, deep navy typography, and emerald green accents.
   - Fully responsive for mobile devices, tablets, and desktop displays.
   - Mobile navigation drawer with hamburger toggle.
   - Accessible ARIA labels, focus states, and semantic HTML elements.

---

## 📁 Project Structure

```text
stepfree/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx      # Academic context and project mission
│   │   ├── DeleteModal.jsx       # Modal dialog for delete confirmation
│   │   ├── FilterBar.jsx         # Search and multi-criteria filters
│   │   ├── Footer.jsx            # Responsive footer with links and notices
│   │   ├── HeroSection.jsx       # Hero banner with bespoke SVG illustration
│   │   ├── Navbar.jsx            # Header with brand and mobile navigation
│   │   ├── Notification.jsx      # Toast alert banner for status messages
│   │   ├── ReportCard.jsx        # Individual accessibility card & status updater
│   │   ├── ReportForm.jsx        # Form with live client-side validation
│   │   ├── ReportsSection.jsx    # Feed container & empty state
│   │   ├── StatCard.jsx          # Interactive metric card
│   │   └── StatsSection.jsx      # 4 dynamic dashboard metrics
│   ├── data/
│   │   └── sampleReports.js      # 5 realistic initial sample reports & constants
│   ├── App.jsx                   # Main application state & handlers
│   ├── index.css                 # Clean CSS design system & media queries
│   └── main.jsx                  # React DOM entry point
├── index.html                    # HTML5 entry with Google Fonts
├── package.json                  # Dependencies and build scripts
├── vite.config.js                # Vite build and dev server config
└── README.md                     # Documentation and deployment guide
```

---

## 🛠️ Technology Stack

- **React 18** (Functional components, `useState`, `useEffect`)
- **Vite 5** (Fast development server and optimized bundler)
- **Vanilla CSS3** (CSS custom properties, Flexbox, CSS Grid, media queries)
- **HTML5 & SVG** (Semantic markup and bespoke vector illustrations)
- **Browser localStorage** (Beginner-friendly client-side persistence)

---

## 🚀 Installation & Running the Project Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (comes bundled with Node.js)

### Step 1: Open Terminal in the Project Directory
Navigate to the project folder:
```bash
cd "C:\Users\RIYA\.gemini\antigravity\scratch\stepfree"
```

### Step 2: Install Dependencies
Run the installation command:
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```

The terminal will display the local URL (typically `http://localhost:5173/`). Open this link in any modern web browser.

### Step 4: Build for Production
To create an optimized production build:
```bash
npm run build
```
The static output will be generated inside the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## 🧪 How to Test Form Validation

The application features comprehensive client-side form validation. Follow these test cases to demonstrate validation behavior:

### Test Case 1: Submitting an Empty Form
1. Scroll down to the **Report a Public Accessibility Issue** section.
2. Without entering any information, click **Submit Accessibility Report**.
3. **Expected Result**: The form will not submit. Validation error messages will immediately appear under the required fields:
   - *Issue Title*: "Issue title is required."
   - *Full Name*: "Full name is required."
   - *Email Address*: "Email address is required."
   - *Location*: "Location or street address is required."
   - *Category*: "Please select an accessibility issue category."
   - *Description*: "Description is required."
   The first invalid input is automatically focused.

### Test Case 2: Testing Invalid Inputs
1. **Full Name**: Enter `12345` or `   `.
   - **Expected Error**: "Full name cannot contain only numbers." or "Full name must include letters."
2. **Email Address**: Enter `test@` or `invalid-email`.
   - **Expected Error**: "Please enter a valid email address (e.g., user@example.com)."
3. **Location**: Enter `St`.
   - **Expected Error**: "Location must be at least 3 characters."
4. **Description**: Enter `Too short`.
   - **Expected Error**: "Description must be at least 20 characters (currently 9)."
   - The live character counter turns orange/warning: `9 / 300 characters (min 20)`.

### Test Case 3: Error Correction (Live Validation)
1. Type a valid name (e.g., `Alex Morgan`). Notice the error message under Full Name immediately disappears.
2. Type a valid email (e.g., `alex.m@example.org`). The email error disappears.
3. Select a Category (e.g., `Broken Ramp`). The category error disappears.
4. Type at least 20 characters into the description. The description error disappears and the character counter turns neutral.

### Test Case 4: Valid Submission
1. Complete all fields with valid data:
   - **Title**: `Uneven curb cut outside Metro Station`
   - **Full Name**: `Jordan Taylor`
   - **Email**: `jordan.t@example.com`
   - **Location**: `Central Metro Station, Exit 4`
   - **Category**: `Damaged Sidewalk`
   - **Severity**: `High`
   - **Description**: `The tactile warning paving has collapsed, creating a dangerous 4-inch drop for wheelchair commuters and visually impaired pedestrians.`
2. Click **Submit Accessibility Report**.
3. **Expected Result**:
   - A green toast notification banner appears: *"Your accessibility report has been submitted successfully!"*
   - The form is completely reset.
   - The screen smoothly scrolls to the Reports feed.
   - The new report card appears at the top of the feed with a **Community Report** badge and status **Reported**.
   - In the Dashboard statistics, both **Total Reports** and **Pending Reports** automatically increment by 1.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Visit [Vercel](https://vercel.com/) and sign in.
3. Click **Add New...** -> **Project**.
4. Import your `stepfree` repository.
5. In the Build and Output Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Vercel will build and provide a live `https://stepfree.vercel.app` URL within seconds.

### Deploy to GitHub Pages
1. In `vite.config.js`, add the repository name as the base:
   ```javascript
   export default defineConfig({
     base: '/<repository-name>/',
     plugins: [react()],
   });
   ```
2. In `package.json`, add the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`. Your project will be live at `https://<username>.github.io/<repository-name>/`.

---

## 🎓 Academic Demonstration Highlights

This project intentionally showcases:
- **Component Architecture**: 12 distinct components with clean single-responsibility separation.
- **State Management**: Uses `useState` for reports, filters, form values, errors, touched flags, and modal states.
- **Side Effects**: Uses `useEffect` for local storage syncing and toast auto-dismissal.
- **Controlled Components**: Every input, select, and textarea is strictly controlled by React state.
- **Array Methods**: `map()` for dynamic card and option rendering, `filter()` for search and multi-facet filtering.
- **Zero-Dependency Styling**: Responsive CSS without heavy UI frameworks (Tailwind, Bootstrap, MUI), making it easy to explain and evaluate.
