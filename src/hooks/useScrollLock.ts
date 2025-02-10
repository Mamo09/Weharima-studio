import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    let scrollPosition = 0;
    let scrollbarWidth = 0;

    if (isLocked) {
      // Store position and scrollbar width before locking
      scrollPosition = window.pageYOffset;
      scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Apply styles to lock scroll
      const bodyStyles = {
        position: 'fixed',
        top: `-${scrollPosition}px`,
        left: '0',
        right: '0',
        width: '100%',
        overflow: 'hidden',
        paddingRight: `${scrollbarWidth}px`,
      };

      // Apply styles to body
      Object.assign(document.body.style, bodyStyles);

      // Add class to handle any specific modal styles
      document.body.classList.add('modal-open');
    }

    return () => {
      if (isLocked) {
        // Remove styles
        const bodyStyles = {
          position: '',
          top: '',
          left: '',
          right: '',
          width: '',
          overflow: '',
          paddingRight: '',
        };

        // Reset body styles
        Object.assign(document.body.style, bodyStyles);

        // Remove modal class
        document.body.classList.remove('modal-open');

        // Restore scroll position
        window.scrollTo(0, scrollPosition);
      }
    };
  }, [isLocked]);
};