# Hariom Yadav Portfolio

Premium futuristic developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Three.js, React Three Fiber, Drei, GSAP, and Lenis-ready architecture.

## Features

- Cinematic dark futuristic UI
- Fully responsive layout
- SEO metadata
- Glassmorphism and neon lighting
- 3D hero scene
- Animated sections and premium interactions
- Contact form with toast feedback

## Installation

```bash
npm install
npm run dev
```

## Suggested Production Dependencies

```bash
npm install next react react-dom three @react-three/fiber @react-three/drei framer-motion gsap lenis lucide-react react-hot-toast @emailjs/browser clsx tailwind-merge
npm install -D typescript tailwindcss postcss autoprefixer @types/react @types/react-dom @types/node
```

## Environment Variables

For EmailJS:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Set the environment variables in Vercel if using EmailJS/Resend.
4. Deploy with the default Next.js preset.

## Folder Structure

- `app/`
- `components/`
- `sections/`
- `lib/`
- `public/`

## Notes

- Add your real `resume.pdf` into `public/`.
- Replace the contact form stub with EmailJS or Resend when you are ready to send actual mail.
