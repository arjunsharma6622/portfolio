import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trailStyles, setTrailStyles] = useState({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setTrailStyles({
        left: x - 50, // Adjust this value based on the width of the cursor trail
        top: y - 50, // Adjust this value based on the height of the cursor trail
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="z-10 fixed w-[100px] h-[100px] blur-2xl opacity-20 rounded-full pointer-events-none"
      style={{
        left: trailStyles.left + 'px',
        top: trailStyles.top + 'px',
        background: 'radial-gradient(circle, #BECCFF, 100%, transparent)',

      }}
    />
  );
};

export default CursorTrail;
