import { useEffect } from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Chatbase script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "d_poBWtVe0Att0VbQoi8Q");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    // Style override for default widget if needed
    const style = document.createElement('style');
    style.innerHTML = `
      .sharen-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #f3e7ff, #b9b9ff);
        color: #000;
        font-weight: 600;
        padding: 0.8rem 1.5rem;
        border-radius: 9999px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        border: 1px solid #ddd;
        cursor: pointer;
        z-index: 9999;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: all 0.3s ease;
      }

      .sharen-button:hover {
        transform: scale(1.05);
        background: linear-gradient(135deg, #d8c2ff, #9fa0ff);
      }
    `;
    document.head.appendChild(style);

    // Button element
    const button = document.createElement('button');
    button.innerText = 'Ask Sharen';
    button.className = 'sharen-button';
    button.onclick = () => {
      const iframe = document.querySelector("iframe[src*='chatbase']");
      if (iframe) {
        iframe.contentWindow.postMessage({ event: "openChat" }, "*");
      }
    };
    document.body.appendChild(button);
  }, []);

  return <Component {...pageProps} />;
}
