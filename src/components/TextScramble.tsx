import React, { useState, useEffect, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: any;
  speed?: number;
  hoverToScramble?: boolean;
}

const CYBER_CHARS = '!<>-_\\/[]{}—=+*^?#_0123456789';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  trigger,
  speed = 25,
  hoverToScramble = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);

  const scramble = () => {
    let iteration = 0;
    const maxIterations = text.length;

    if (frameRef.current) {
      clearInterval(frameRef.current);
    }

    frameRef.current = window.setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        if (frameRef.current) clearInterval(frameRef.current);
        setDisplayText(text);
      }

      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    scramble();
    return () => {
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [text, trigger]);

  return (
    <span
      className={className}
      onMouseEnter={hoverToScramble ? scramble : undefined}
    >
      {displayText}
    </span>
  );
};

export default TextScramble;
