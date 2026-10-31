# Nipunya Vinod - Personal Portfolio Website
### Aspiring AI & ML Engineer
**Branch:** Artificial Intelligence and Machine Learning (AI & ML)  
**College:** BGS College of Engineering and Technology  

---

## 📖 1. Project Overview

This website is a multipage personal developer portfolio created as a personal web development project. Built to showcase **honest self-assessment, clear technical vision, genuine foundational skills, and modern user-centered design**, it serves as an enduring professional space throughout engineering studies and beyond.

### Core Tenets of this Portfolio:
1. **Authenticity:** No fabricated projects, fake awards, or exaggerated skill levels. All skills are accurately marked as *Beginner*, *Exploring*, or *Developing*.
2. **Minimal & Professional Aesthetics:** Built with a minimal light theme featuring soft lavender, purple, and indigo accents, generous whitespace, rounded modern cards, and clean typography.
3. **No Stock/Fake Photos:** Adheres strictly to requirements by featuring an initial-based monogram (`NV`) and clean minimalist visual graphics.
4. **Pure Static Multi-page Architecture:** Five distinct, fully linked HTML pages designed without backend dependencies, ready for free hosting on **GitHub Pages**.

---

## 📁 2. Project Folder Structure

```
Portfolio/
│
├── index.html          # Page 1: Home page (Introduction, greeting & overview)
├── about.html          # Page 2: About Me (Interests, aspirations & philosophy)
├── education.html      # Page 3: Education & Skills (BGS College, skills & learning)
├── projects.html       # Page 4: Projects & Achievements (Tic-Tac-Toe, portfolio & journey)
├── contact.html        # Page 5: Contact page (Email, LinkedIn, GitHub & mail helper)
│
├── css/
│   └── style.css       # Shared stylesheet (Design tokens, layout, responsive queries)
│
├── js/
│   └── script.js       # Shared JavaScript (Mobile menu, active nav, copy-email toast)
│
├── images/
│   └── favicon.svg     # Custom SVG monogram browser favicon
│
└── README.md           # Complete project documentation & guide
```

---

## 💻 3. What Each File Does (Beginner-Friendly Explanation)

If you are new to web development, here is how the three core technologies work together:

### 1. HTML (`.html` files: `index.html`, `about.html`, etc.)
- **The Skeleton / Structure:** HTML (HyperText Markup Language) defines what content exists on the page (headings, paragraphs, buttons, lists, cards, and links).
- Each page is a separate HTML file so the website behaves as a genuine multipage site rather than a single scrolling feed.

### 2. CSS (`css/style.css`)
- **The Visual Appearance / Styling:** CSS (Cascading Style Sheets) controls how the HTML looks.
- It sets the soft lavender and purple color palette, fonts (*Plus Jakarta Sans*), rounded corners, spacing, shadows, and ensures the website automatically looks great on smartphones, tablets, and desktop monitors.

### 3. JavaScript (`js/script.js`)
- **The Behavior / Interactivity:** JavaScript makes elements respond when clicked or interacted with.
- In this portfolio, JavaScript handles:
  - Opening and closing the mobile navigation drawer (hamburger menu).
  - Automatically highlighting the current active page in the navigation bar.
  - The 1-click **"Copy Email"** button with a pop-up confirmation toast.
  - The contact form mail helper that formats your message and launches your email client.

---

## 🚀 4. How to Preview the Website Locally on Your Computer

You can preview the website offline at any time using any of these simple methods:

### Method A: Double-Click (Simplest)
1. Open your File Explorer and navigate to your `Portfolio` folder on the Desktop:  
   `C:\Users\DELL\Desktop\Portfolio`
2. Double-click `index.html`. It will instantly open in your default browser (Chrome, Edge, Firefox, Brave, etc.).
3. Click any link in the top navigation bar to test moving between all five pages!

### Method B: Using VS Code "Live Server" (Recommended for Developers)
1. Open VS Code and select **File > Open Folder...**, then select `Portfolio`.
2. Install the extension called **"Live Server"** by Ritwick Dey (if not already installed).
3. Right-click on `index.html` and choose **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html` and will automatically refresh whenever you edit code.

### Method C: Using Python's Built-In HTTP Server (Command Line)
1. Open PowerShell or Command Prompt.
2. Run:
   ```bash
   cd C:\Users\DELL\Desktop\Portfolio
   python -m http.server 8000
   ```
3. Open your browser and go to: `http://localhost:8000`

---

## ✏️ 5. How to Edit the Website Content

All files are structured with clear, beginner-friendly HTML comments.

1. **To update personal details:**
   - Open `index.html` or `about.html` in VS Code or Notepad.
   - Look for the text you want to change (for instance, inside `<p class="hero-intro-text">`).
   - Modify the text between the opening `<p>` and closing `</p>` tags, then save the file (`Ctrl + S`).

2. **To add a newly earned skill or certificate:**
   - Open `education.html` or `projects.html`.
   - In `education.html`, find `<div class="cards-grid-3" id="skillsGrid">` to add or update your skill cards.
   - In `projects.html`, update the `achievementsCard` or add a new project card.

3. **To change colors or styling:**
   - Open `css/style.css`.
   - At the top of the file under `:root`, you will find easy variables like `--primary: #7c3aed;` and `--primary-light: #f5f3ff;`. You can tweak any color token in one single place!

---

## 🌐 6. How to Publish for Free Using GitHub Pages

You can host this static portfolio 100% free with an official `.github.io` URL.

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account: [https://github.com/Nipunya27](https://github.com/Nipunya27).
2. Click the **`+`** icon in the top right corner and choose **"New repository"**.
3. Name your repository:
   - Option A: `portfolio` (Live URL will be: `https://nipunya27.github.io/portfolio/`)
   - Option B (User site): `Nipunya27.github.io` (Live URL will be: `https://nipunya27.github.io/`)
4. Set visibility to **Public**.
5. Leave "Add a README file" unchecked (since we already have a detailed `README.md`).
6. Click **"Create repository"**.

### Step 2: Push Your Files to GitHub
Open PowerShell in your project directory (`C:\Users\DELL\Desktop\Portfolio`) and execute:

```powershell
# 1. Initialize local git repository
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "Initial release of multipage personal portfolio website"

# 4. Set default branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL if named 'portfolio')
git remote add origin https://github.com/Nipunya27/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

*(Alternatively, if you prefer the browser UI, you can click "uploading an existing file" on GitHub and drag & drop all files and folders).*

### Step 3: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click **Settings** (tab at the top with the gear icon).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **"Build and deployment" > "Source"**, select **Deploy from a branch**.
5. Under **"Branch"**, select `main` and folder `/ (root)`, then click **Save**.
6. Wait 1 to 2 minutes. Refresh the page, and GitHub will provide your live link:
   > **"Your site is live at https://nipunya27.github.io/portfolio/"**

### Step 4: How to Update Your Website in the Future
Whenever you make changes to files:
```powershell
git add .
git commit -m "Update skills and project details"
git push origin main
```
GitHub Pages will automatically update your live site within 60 seconds!

---

## ✅ 7. Pre-Evaluation Checklist (Testing All 5 Pages)

Before presenting to your faculty, verify each item:

- [x] **Home (`index.html`):** Welcome banner, Nipunya Vinod, Aspiring AI & ML Engineer, BGS College of Engineering and Technology, intro paragraph, CTA buttons, and verified GitHub/LinkedIn links work.
- [x] **About Me (`about.html`):** Introduction, 5 core interests, career aspirations, learning philosophy, and engineering mindset.
- [x] **Education & Skills (`education.html`):** BGS College card, easily updatable year of study, beginner-level technical skills (C, HTML, CSS, JavaScript, GitHub, Problem-solving), currently learning topics, and soft skills.
- [x] **Projects (`projects.html`):**
  - Tic-Tac-Toe Game (Completed, beginner project, verified link to `https://github.com/Nipunya27/TIc-Tac-Toe`).
  - Portfolio Website (In Progress, personal web development project, technologies listed).
  - Learning Journey (6 continuous learning milestones).
  - Future Projects (3 placeholder cards with "Coming Soon" and "Planned" tags).
  - Achievements note (honest disclaimer that milestones will be added as earned).
- [x] **Contact (`contact.html`):** Email (`nipunyav@gmail.com`), GitHub and LinkedIn buttons, working 1-click "Copy Email" with toast feedback, and transparent static email helper.
- [x] **Navigation Bar:** Header logo links to Home, all 5 links navigate smoothly, active page highlighted, and mobile hamburger menu toggles properly on phones.
- [x] **Footer:** Shared footer across all 5 pages with college affiliation, site map, and copyright.

---

## 🎤 8. Professional Portfolio Presentation Guide

When presenting your portfolio to mentors, peers, or recruiters, use these key talking points:

### 1. Vision & Identity
> *"I designed this website as an authentic, professional portfolio representing my journey as an aspiring AI & ML engineer at BGS College of Engineering and Technology. It honestly showcases where I am, what I am actively learning, and what projects I have built."*

### 2. Audience & Usability
- **Mentors & Recruiters:** Easy navigation to inspect foundational programming skills, source code on GitHub, and professional background.
- **Peers & Collaborators:** Clear contact avenues via LinkedIn and Email with 1-click clipboard convenience.

### 3. Engineering Execution
- Pure semantic HTML5, Vanilla CSS3, and JavaScript—fast, clean, and zero third-party dependencies.
- Minimal light theme with soft lavender/purple accents matching modern software developer aesthetics.
- Fully responsive across desktop, tablet, and mobile devices with keyboard accessibility.
- Static architecture designed for free, secure deployment on GitHub Pages.

---

**Crafted with care by Nipunya Vinod &bull; BGS College of Engineering and Technology**
