# 🏢 Mini Real Estate Floor Selector

An interactive single-page React application that allows users to explore multiple towers, choose specific floors, view apartment layout thumbnails, and inspect full unit details.

---

## ✨ Features

- 🏙 **Tower Selection**: Choose from Tower A, B, or C
- 🧱 **Floor Selection**: View 15 floors dynamically
- 🏘 **Layout Previews**: View apartment layouts with area, room count, and type
- 🔍 **Detail View**: Zoom in on unit metadata and a full layout image
- 🎨 **Hover Animation**: Thumbnails gently scale and darken background on hover (smooth on mobile and desktop)
- 🔁 **Start Over**: Reset navigation at any point

---

## 🧰 Tech Stack

| Tool              | Purpose                                       |
|-------------------|-----------------------------------------------|
| [React](https://reactjs.org)             | UI Library                              |
| [Vite](https://vitejs.dev)               | Development Server + Build Tool         |
| [Tailwind CSS](https://tailwindcss.com)  | Utility-first CSS framework             |
| [Framer Motion](https://www.framer.com/motion/) | Animation library                        |
| [React Router DOM](https://reactrouter.com/) | Client-side routing                     |

---

## 📁 Project Structure

```
src/
├── App.jsx           # Main component logic (tower → floor → layout)
├── main.jsx          # App entry point
├── index.css         # Tailwind base styles
public/
└── _redirects        # Required for SPA routing on Netlify
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## 🌐 Deployment

This app can be deployed on any static hosting service (e.g., Vercel, Netlify).

### ✅ Netlify Settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- `_redirects` file for SPA routing:

```bash
/*    /index.html   200
```

---

## ⚠️ Known Limitations & Tradeoffs

- 📦 **No backend/API integration**: All layout/tower/floor data is currently hardcoded for prototyping.
- 🖼 **Static images**: Placeholder images are used; no zoom/pinch or gallery view.
- 🔄 **No persistent state**: Refreshing resets the app state (no URL memory).
- 🧪 **Limited responsiveness**: Works well on mobile and desktop but not deeply optimized for tablets or landscape modes.

---

## 🧠 Future Improvements

- ✅ Dynamic data from an API or CMS
- 🗺 URL-based navigation (e.g., `/tower-a/floor-5/unit-3`)
- 💾 Persistent selection state using query params or local storage
- 🖼 Image zoom/lightbox feature
- 👥 Admin panel for uploading real layouts and metadata

---

## 📸 Preview

![UI Preview](https://via.placeholder.com/800x400?text=Mini+Real+Estate+Selector)

---

## 📄 License

MIT License © 2025 COZYTECH
