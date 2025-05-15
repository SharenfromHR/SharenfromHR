
import { useEffect } from 'react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "YOUR_CHATBOT_ID_HERE");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;
    document.body.appendChild(script);

    window.chatbaseConfig = {
      chatbotId: "d_poBWtVe0Att0VbQoi8Q",
      autoShow: false,
      showLauncher: false
    };
  }, []);

  return <Component {...pageProps} />;
}
