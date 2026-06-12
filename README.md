📝 Airbnb Homepage Clone
A fully responsive frontend clone of the Airbnb homepage built from scratch as part of my web development internship with SkillfiedMentor.com. This project demonstrates component-based architecture, dynamic API data integration, complex state management, and mobile-first responsive design using React and Tailwind CSS.
_
**🚀 Live Demo Link**_ :


✨ Features
🔍 Advanced Responsive Search Bar
Desktop View: Multi-step horizontal bar featuring individual interactive tracking zones for Where (location), When (dates), and Who (guest count).

Mobile View: Fully adapted, fluid multi-step accordion-style overlay panel designed explicitly for touch ergonomics.

Live Data Fetching: Seamlessly integrated with the Teleport Cities API to dynamically suggest locations based on real-time keystroke lookups.

Performance Optimization: Built with a custom Debounce mechanism (300ms) to limit API server strain and optimize network requests.

**📱 Layout & Styling**
Designed a mirror layout of the Airbnb platform using utility-first classes via Tailwind CSS.

Built fluid layouts that smoothly scale from tiny smartphone dimensions up to high-definition desktop monitors.

Utilized interactive element states (hover transitions, active clicks, and shadow effects) to mimic production-level user experiences.
**
🛠️ Tech Stack & Tools**
Frontend Library: React (v19.x)

Build Tool / Bundler: Vite

Styling Engine: Tailwind CSS

Deployment Hosting: Vercel

Version Control: Git & GitHub

_**📂 Project Structure**_
Plaintext
Airbnb/
├── Airbnb/                 # Inner working React application source directory
│   ├── src/
│   │   ├── components/     # Reusable UI Components (Nav1, SearchBar, Cards)
│   │   ├── App.jsx         # Root layout orchestrator
│   │   └── main.jsx        # Application entry point
│   ├── package.json        # Inner configuration & package manifest
│   └── vite.config.js      # Vite compilation configurations
├── .gitignore              # Dependency lockouts from repository tracking
└── README.md               # Project documentation (This file)
💡 Engineering Challenges & Learnings
During the development process, I ran into several real-world engineering hurdles that greatly enhanced my technical troubleshooting skills:

Repository Structure & Deployment Scoping: * Challenge: The project root directory contained nested folders, which initially caused Vercel deployment builds to crash due to missing execution scripts.

Resolution: Mastered build pipeline mapping by configuring Vercel's Root Directory overrides to target the subfolder directly.

Strict Production Environments (Case Sensitivity):

Challenge: Local Windows environments ignore casing differences in imports, but production Linux instances crash immediately.

Resolution: Developed rigorous strict-naming code habits across component directories to meet production constraints.

Third-Party Compiler Configurations:

Challenge: Encountered an unresolved dependency crash during production bundling due to unmapped PostCSS modules (@tailwindcss/vite).

Resolution: Successfully audited dependency trees to reconcile missing plugins directly inside vite.config.js.

_**🚀 Local Setup Instructions**_
Follow these steps to run the project locally on your machine:

**Clone the repository:**

Bash
git clone https://github.com/sheelamahato27-ship-it/Airbnb-Clone.git
Navigate into the project folder:

Bash
cd Airbnb-Clone/Airbnb
Install the dependencies:

Bash
npm install
Start the local development server:

Bash
npm run dev


_**Acknowledgment**_
Thank you to SkillfiedMentor.com for providing the design brief, project guidelines, and technical parameters to help sharpen my skills in modern frontend development!
