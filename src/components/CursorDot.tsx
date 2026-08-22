import { useEffect, useRef } from 'react';

const CursorDot = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let hovering = false;

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX - 4}px`;
      dot.style.top = `${e.clientY - 4}px`;
      dot.style.opacity = '1';
    };

    const enter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, label[for]')) {
        hovering = true;
        dot.classList.add('hovering');
      }
    };

    const leave = () => {
      if (hovering) {
        hovering = false;
        dot.classList.remove('hovering');
      }
    };

    const down = () => dot.classList.add('clicking');
    const up = () => dot.classList.remove('clicking');

    // Hide on mobile / touch devices
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', enter, { passive: true });
    document.addEventListener('mouseout', leave, { passive: true });
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot hidden sm:block" style={{ opacity: 0 }} />;
};

export default CursorDot;
