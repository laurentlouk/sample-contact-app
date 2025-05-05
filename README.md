# Quick start

We recommend using pnpm

```bash
npm install -g pnpm
```

## install dependencies

```bash
pnpm install
```

## run start

```bash
pnpm start
```

## run dev with react-scan

```bash
pnpm dev
```

## run build

```bash
pnpm build
```

---

# How styled-components work

```tsx
const name = "world";

function myTag(literals, ...subs) {
  console.log("literals:", literals);
  console.log("subs:", subs);
  return literals.map((s, i) => s + (subs[i] || "")).join("");
}

myTag`hello ${name}!`;
```

---

# How to compose a component highly-configurable

with this kind of components you can drop it anywhere to build your UI’s structure; Rather than writing raw CSS every time.
link: [Flex 👈🏻](https://github.com/laurentlouk/sample-contact-app/blob/dac31a4ad7c190eeb88b6c1b882b23a1311d6d4f/src/component/styles/Flex.styled.tsx)

---

## Remove before going to production

src/hooks/useUsers.ts -> setTimeout

this is just to simulate a delay in the response to show the loading state

---

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
