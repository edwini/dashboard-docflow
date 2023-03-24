This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run in Production
```bash
npm run build
npm run start
```

## Docker info

to run image
```bash
docker run --env-file=./.env -p 3001:3000 node-dashboard-docflow:latest 
```

The first step is to install Tailwind CSS. You can do this by running the following command:
npm install -D tailwindcss postcss autoprefixer

Add dependencies
Next add the following dependencies:
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react