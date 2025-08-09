import '../styles/globals.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    document.body.style.filter = `brightness(${brightness})`;
  }, [brightness]);

  return (
    <>
      <Component {...pageProps} />
      <div className="settings">
        Brightness:
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.1"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
      </div>
    </>
  );
}
