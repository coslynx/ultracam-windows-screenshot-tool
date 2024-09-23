<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>ultracam-windows-screenshot-tool
</h1>
<h4 align="center">Ultra-Fast, Efficient, and Feature-Rich Screenshot Tool for Windows</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="Framework: React">
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend: Javascript, Html, Css">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs: Custom, Gemini, OpenAI">
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/ultracam-windows-screenshot-tool?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/ultracam-windows-screenshot-tool?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/ultracam-windows-screenshot-tool?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a project called "ultracam-windows-screenshot-tool" that provides a high-performance screenshot tool for Windows, leveraging the Desktop Duplication API for lightning-fast captures. It offers a user-friendly interface, various capture modes, and advanced options for capturing, editing, and sharing screenshots. 

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚡ | Ultra-Fast Capture   | Captures screenshots with unparalleled speed, utilizing the Windows Desktop Duplication API for minimal latency.                             |
| 🎨 | Versatile Capture Modes  | Offers multiple capture modes: full screen, region selection, and window capture, allowing users to capture specific areas with precision. |
| ⚙️ | Performance Optimization   | Employs optimized algorithms and data compression techniques for efficient processing and fast capture times, even on systems with limited resources.          |
| 🧰 | Advanced Options   | Provides customizable settings for capturing specific elements, delayed captures, automatic saving, and file naming conventions for specialized use cases.  |
| 🖼️ | Image Editing Features | Includes basic image editing functionality within the application for cropping, resizing, and color adjustments, enhancing the utility of the tool.         |
| ☁️ | Cloud Integration   | Enables direct upload of captured images to cloud storage services like Google Drive, Dropbox, or OneDrive, for easy sharing and collaboration.         |
| 💻 | Desktop Application | Built as a desktop application using Electron, providing a native-like experience for Windows users.                                   |
| 🌐 | Cross-Platform Support |  Planned for future development to support other operating systems beyond Windows.                                                           |

## 📂 Structure
```
ultracam-windows-screenshot-tool
├── src
│   ├── core
│   │   ├── capture
│   │   │   ├── utils.js
│   │   │   ├── captureModes.js
│   │   │   └── settings.js
│   │   ├── utils
│   │   │   ├── performance.js
│   │   │   └── imageProcessing.js
│   │   └── ui
│   │       ├── components
│   │       │   ├── CaptureButton.jsx
│   │       │   ├── CaptureOptions.jsx
│   │       │   ├── CaptureSettings.jsx
│   │       │   ├── CaptureModes.jsx
│   │       │   ├── CaptureHistory.jsx
│   │       │   ├── ImageEditor.jsx
│   │       │   └── CloudIntegration.jsx
│   │       ├── styles
│   │       │   ├── index.css
│   │       │   └── theme.js
│   │       └── app.jsx
│   ├── electron
│   │   ├── main.js
│   │   └── preload.js
│   ├── database
│   │   ├── models
│   │   │   ├── captureHistory.js
│   │   │   └── userSettings.js
│   │   └── index.js
│   ├── server
│   │   ├── routes
│   │   │   ├── capture.js
│   │   │   ├── settings.js
│   │   │   ├── history.js
│   │   │   └── cloud.js
│   │   ├── middleware
│   │   │   ├── auth.js
│   │   │   ├── validate.js
│   │   │   └── logger.js
│   │   └── index.js
│   └── package.json
└── README.md
```

  ## 💻 Installation
  ### 🔧 Prerequisites
  - Node.js
  - npm
  - Docker

  ### 🚀 Setup Instructions
  1. Clone the repository:
     - `git clone https://github.com/coslynx/ultracam-windows-screenshot-tool.git`
  2. Navigate to the project directory:
     - `cd ultracam-windows-screenshot-tool`
  3. Install dependencies:
     - `npm install`
  
  ## 🏗️ Usage
  ### 🏃‍♂️ Running the Project
  1. Start the development server:
     - `npm start`
  2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
  
  ### ⚙️ Configuration
  Adjust configuration settings in 'config.js' or '.env'.
  
  ### 📚 Examples
  - 📝 Example 1: How to capture a full-screen screenshot
  - 📝 Example 2: How to capture a specific region of the screen
  - 📝 Example 3: How to capture a screenshot of a particular window
  - 📝 Example 4: How to edit a captured image
  - 📝 Example 5: How to upload a screenshot to Google Drive

  ## 🌐 Hosting
  ### 🚀 Deployment Instructions
  1. Install the Heroku CLI:
     - `npm install -g heroku`
  2. Login to Heroku:
     - `heroku login`
  3. Create a new Heroku app:
     - `heroku create`
  4. Deploy the code:
     - `git push heroku main`

  ### 🔑 Environment Variables
  - `DB_HOST`: Database host
  - `DB_USER`: Database user
  - `DB_PASS`: Database password
  
  ## 📜 API Documentation
  ### 🔍 Endpoints
  - GET /api/captures: Retrieves a list of captured images.
  - POST /api/captures: Creates a new capture request.
  - GET /api/captures/:id: Retrieves a specific capture by ID.
  - PUT /api/captures/:id: Updates a specific capture by ID.
  - DELETE /api/captures/:id: Deletes a specific capture by ID.
  - POST /api/settings: Updates user settings.
  - GET /api/settings: Retrieves user settings.
  - POST /api/cloud/:service: Uploads an image to a cloud service.
  
  ### 🔒 Authentication
  Use JWT tokens for authentication.
  
  ### 📝 Examples
  - `curl -X GET http://localhost:3000/api/captures`
  - `curl -X POST http://localhost:3000/api/captures -d '{"mode": "fullScreen", "format": "png"}'`
  
  ## 📜 License
  This project is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).
  
  ## 👥 Authors
  - Author Name - [Spectra.codes](https://spectra.codes)
  - Creator Name - [DRIX10](https://github.com/Drix10)

  <p align="center">
    <h1 align="center">🌐 Spectra.Codes</h1>
  </p>
  <p align="center">
    <em>Why only generate Code? When you can generate the whole Repository!</em>
  </p>
  <p align="center">
	<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
	<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
	<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
	<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
  <p>