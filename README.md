# Personal Portfolio

A modern, responsive personal portfolio website built with React, Framer Motion, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- 🎯 Interactive project showcase
- 📧 Contact form
- 🔗 Social media integration
- ⚡ Fast and optimized

## Sections

1. **Header** - Navigation with smooth scrolling
2. **Hero** - Introduction and call-to-action
3. **About** - Personal information and experience
4. **Skills** - Technical and soft skills with progress bars
5. **Projects** - Portfolio showcase with filtering
6. **Contact** - Contact form and information
7. **Footer** - Social links and copyright

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization Guide

### 1. Personal Information

Update your personal information in the following files:

#### Hero Section (`src/components/Hero.js`)
- Change "Your Name" to your actual name
- Update the title (e.g., "Full Stack Developer")
- Modify the description
- Update social media links

#### About Section (`src/components/About.js`)
- Update the personal description
- Modify your experience timeline
- Adjust skills and descriptions

#### Contact Section (`src/components/Contact.js`)
- Update email, phone, and location
- Modify social media links

### 2. Projects

Edit the projects array in `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    image: 'your-project-image-url',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'web', // 'web' or 'mobile'
    github: 'your-github-link',
    live: 'your-live-demo-link',
    featured: true // Set to true for featured projects
  },
  // Add more projects...
];
```

### 3. Skills

Update your skills in `src/components/Skills.js`:

#### Technical Skills
```javascript
const technicalSkills = [
  { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
  // Add more skills...
];
```

#### Soft Skills
```javascript
const softSkills = [
  { name: 'Problem Solving', level: 90 },
  // Add more skills...
];
```

### 4. Styling

The portfolio uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in `tailwind.config.js`
- Fonts: Modify font families in the CSS
- Animations: Adjust Framer Motion animations in components

### 5. Images

Replace placeholder images with your own:
- Project screenshots
- Profile picture (if desired)
- Custom icons

### 6. Deployment

#### Build for Production
```bash
npm run build
```

#### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

#### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## Technologies Used

- **React** - Frontend framework
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling

## File Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── App.js
├── index.js
└── index.css
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contact me.

## website 
https://ayoubdell.vercel.app/
---

Made with ❤️ using React & Framer Motion
