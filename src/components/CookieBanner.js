import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cookiesAccepted')) {
      setVisible(true);
    }
  }, []);
  if (!visible) return null;
  return (
    <aside id="cookie-banner" role="dialog" aria-live="polite" className="fixed bottom-0 left-0 right-0 bg-blue-100 p-4 flex justify-between items-center">
      <span className="text-sm text-gray-700">Мы используем cookie. Подробнее в <a href="/privacy-policy">Политике обработки данных</a>.</span>
      <button id="cookie-accept" className="btn">Принять</button>
    </aside>
  );
}
