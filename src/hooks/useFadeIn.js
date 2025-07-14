import { useEffect } from 'react';

export default function useFadeIn() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const { initFadeIn } = require('../assets/js/animations');
    initFadeIn();
  }, []);
}
