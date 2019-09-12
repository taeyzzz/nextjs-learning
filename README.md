# Learning Next.js


# How to Run this project
- yarn
- npm run dev-express
- http://localhost:3000

# Script
```bash
"scripts": {
  "dev": "next",
  "dev-express": "NODE_ENV=development PORT=3000 node server.js",
  "build": "next build",
  "start": "next start",
  "export": "next export",
  "serve": "NODE_ENV=production PORT=3000 node server.js"
},
```

## Script explaination
```bash
npm run dev
```
Run dev mode with Provide nextjs command. The result is run front end without any backend.

```bash
npm run dev-express
```
Run dev mode with express framework. The result is run front-end by express and handle backend with express.

```bash
npm run build
```
Compile next.js app in production mode and the result of this command i think it in .next folder.

```bash
npm run export
```
It gonna export next.js app to static html and output it gonna be out folder.

```bash
npm run start
```
Run next.js server to serve production build after npm run build without backend.

```bash
npm run serve
```
Run both front-end that we had build and back-end express in production mode.
