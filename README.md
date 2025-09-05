# Yoom – Elevate Your Communication with Next.js & TypeScript

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Components-orange?style=for-the-badge&logo=radix-ui)
![Stream Video](https://img.shields.io/badge/Stream-Video-blueviolet?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)


Introducing **Yoom**, a cutting-edge **real-time video conferencing application** that combines the power of **Next.js, TypeScript, TailwindCSS, shadcn/ui, and the Stream Video API**. Experience seamless and engaging meetings just like Zoom, featuring crystal-clear video calls, effortless screen sharing, and efficient participant management.

🚀 **Explore the Demo:** [[yoom-delta-three.vercel.app](https://yoom-delta-three.vercel.app/)]

---

## ✨ Standout Features

- 🔗 **Secure Video Calls** – Enjoy real-time meetings backed by the robust Stream Video API.  
- 🖥 **Screen Sharing** – Effortlessly share your screen with participants for collaborative discussions.  
- 👥 **Lobby & Room Management** – Easily create, join, and manage your meeting rooms at your convenience.  
- 🎨 **Sleek, Modern UI** – Benefit from a responsive layout crafted with **TailwindCSS** and **shadcn/ui** components.  
- 🔒 **Secure Authentication** – Leverage **Clerk** for reliable user login and session handling.  
- 📱 **Fully Responsive** – Utilize the app seamlessly on desktop, tablet, and mobile devices.  

---

## 🛠️ Robust Tech Stack

- **Framework:** [Next.js 15](URL_8)  
- **Language:** [TypeScript](URL_9)  
- **UI Styling:** [TailwindCSS](URL_10)  
- **UI Components:** [shadcn/ui](URL_11)  
- **Authentication:** [Clerk](URL_12)  
- **Video API:** [Stream Video](URL_13)  
- **Deployment:** [Vercel](URL_14)  

---

## 🚀 Easy Setup

### 1. Clone the Repository
```bash
git clone URL_15
cd Yoom
```
### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Your Environment
#### Create a `.env.local` file in the project root and include the following:
```plaintext
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard

# Stream Video
NEXT_PUBLIC_STREAM_API_KEY=
NEXT_PUBLIC_STREAM_KEY=

# App Base URL
# Enter your deployed domain (e.g., URL_7)
# or use localhost for local development (http://localhost:3000)
NEXT_PUBLIC_BASE_URL=
```
👉 Don't forget to replace the placeholders with your Clerk and Stream Video credentials.

### 4. Start Your Development Server
```bash
npm run dev
# or
yarn dev
```

With Yoom, you’re not just building a video conferencing solution; you're empowering teams to collaborate and communicate effectively! Unleash the full potential of your projects today!
