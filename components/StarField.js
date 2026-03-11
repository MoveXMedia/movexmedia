import { useEffect, useRef } from 'react';

export default function StarField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = 180;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2.5 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 4 + 2;
      const delay = Math.random() * 6;
      const minOpacity = Math.random() * 0.3 + 0.1;

      star.className = 'star';
      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        --duration: ${duration}s;
        --delay: ${delay}s;
        --min-opacity: ${minOpacity};
        opacity: ${minOpacity};
      `;
      fragment.appendChild(star);
    }

    container.appendChild(fragment);
    return () => { container.innerHTML = ''; };
  }, []);

  return <div className="stars" ref={containerRef} />;
}
