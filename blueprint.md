# Blueprint: Piquer Visuals Website

## Overview

This is a portfolio website for Piquer Visuals, a high-performance sports photography service. The site showcases a gallery of work, information about the photographer, and details on the services offered.

## Project Structure

*   `public/index.html`: The main landing page.
*   `public/gallery.html`: The image gallery page.
*   `styles/style.css`: Main stylesheet for the website.
*   `styles/gallery-style.css`: Specific styles for the gallery page.
*   `scripts/main.js`: Main JavaScript file for the landing page.
*   `scripts/gallery.js`: JavaScript for the gallery page, including dynamic image loading and pagination.
*   `images/`: Folder containing all the images for the gallery.
*   `firebase.json`: Configuration file for Firebase services, primarily Hosting.

## Change Log

### Fix: Directory Listing Issue

**User Request:** The web server was showing a directory listing instead of rendering the `index.html` page.

**Action Taken:**

1.  **Created `firebase.json`:** A `firebase.json` file was created in the project root.
2.  **Configured Hosting:** The file was configured to set the `public` directory for Firebase Hosting to the `public` folder. This tells the development server to treat the `public` directory as the root of the website and serve `index.html` by default.

### Fix: Broken File Paths

**User Request:** After moving `index.html` and `gallery.html` into a `public` directory, all file paths for CSS, JavaScript, and images were broken.

**Actions Taken:**

1.  **Updated `public/index.html`:** Corrected all `href` and `src` paths to use `../` to navigate up one level from the `public` directory.
2.  **Updated `public/gallery.html`:** Corrected all `href` and `src` paths similarly.
3.  **Updated `scripts/gallery.js`:**
    *   Corrected the image path to `../images/`.
    *   Populated the `imageFiles` array with the actual list of image files found in the `images` directory.
