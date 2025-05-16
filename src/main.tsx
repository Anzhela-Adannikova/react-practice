// main.tsx

// import { createRoot } from "react-dom/client";

// const techName = "React";
// const imgUrl =
//   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=640";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <div>
//     <h1>Welcome to {techName}</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its
//       own rules!
//     </p>
//     <img src={imgUrl} alt="Man, field and a mountain" width="640" />
//   </div>
// );
// src/main.tsx

// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// document.getElementById("root") –
// ми отримуємо посилання на DOM-елемент з index.html,
// у який React вставить розмітку. Це той самий <div id="root"></div> у HTML.
// ReactDOM.createRoot(container) –
// створює "React-корінь" для рендерингу.
// .render(element) – запускає рендер компонента App
// і всіх вкладених у нього компонентів.
