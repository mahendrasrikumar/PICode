# PICODE - Interactive Programming Learning Platform

A complete programming learning platform inspired by Programiz, built with React, TypeScript, and modern web technologies.

## 🚀 Features

### Core Learning Features
- **Interactive Programming Courses**: Python, JavaScript, Java, C++, and more
- **Code Examples Library**: Searchable collection with live execution
- **Online Compiler**: Support for 10+ programming languages via Judge0 API
- **Progress Tracking**: Save completed lessons and track learning journey
- **Exercises & Quizzes**: Hands-on practice with automated testing

### User Experience
- **Modern UI/UX**: Clean, responsive design with dark/light mode
- **User Authentication**: Secure signup/login with progress persistence
- **Code Saving**: Save and organize your code snippets
- **Achievements**: Earn badges and certificates
- **Blog Section**: Programming tutorials and industry insights

### Technical Features
- **Monaco Editor**: Professional code editing experience
- **Syntax Highlighting**: Support for multiple programming languages
- **Real-time Compilation**: Execute code safely in the browser
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Design System
- **Code Editor**: Monaco Editor (VS Code editor)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Compiler API**: Judge0 API (configurable)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Quick Start

1. **Clone and Install**
```bash
git clone <repository-url>
cd picode-learning-platform
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Open in Browser**
Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 🚀 Deployment Guide

### Netlify Deployment (Recommended)

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`
- The `_redirects` and `netlify.toml` files are already configured

3. **Environment Variables** (Optional)
```env
# Judge0 API Configuration
VITE_JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
VITE_JUDGE0_API_KEY=your_rapidapi_key
```

### Other Deployment Options

#### Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

#### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server for SPA routing

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Judge0 API Configuration (Optional)
VITE_JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
VITE_JUDGE0_API_KEY=your_rapidapi_key

# Firebase Configuration (Optional)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components
│   └── layout/         # Layout components
├── contexts/           # React Context providers
├── data/              # Static data and mock content
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── App.tsx            # Main application component
```

## 🎨 Customization

### Themes
- Modify `tailwind.config.js` for color schemes
- Update CSS variables in `src/index.css`
- Customize dark/light mode in `ThemeContext`

### Content
- Add courses in `src/data/courses.ts`
- Update blog posts in the same file
- Modify code examples and compiler languages

## 🔧 API Integration

### Judge0 Compiler API
```typescript
// Example API call
const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions', {
  method: 'POST',
  headers: {
    'X-RapidAPI-Key': 'your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    language_id: 71, // Python
    source_code: code,
    stdin: input
  })
});
```

## 📱 Mobile Optimization

The platform is fully responsive with:
- Mobile-first design approach
- Touch-friendly interface
- Optimized code editor for mobile
- Responsive navigation and layouts
- Bottom navigation for mobile devices

## 🔒 Security Features

- Input sanitization for code execution
- Secure authentication flow
- XSS protection
- Safe code compilation environment
- HTTPS enforcement

## 🚀 Performance Optimizations

- Code splitting with React.lazy
- Image optimization and lazy loading
- Efficient bundle size with Vite
- Optimized re-renders with React.memo
- Service worker ready for PWA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Contact: support@picode.dev

## 🎯 Roadmap

- [ ] Advanced code debugging tools
- [ ] Live coding sessions
- [ ] Community features
- [ ] Mobile app development
- [ ] AI-powered code suggestions
- [ ] Advanced analytics dashboard

---

**Built with ❤️ for the programming community**