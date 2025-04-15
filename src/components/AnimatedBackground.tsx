
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const AnimatedBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const colors = ['#0D7680', '#FF5733', '#FFB61E', '#D4AF37'];

  useEffect(() => {
    const createBubble = () => {
      const newBubble: Bubble = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 100,
        size: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setBubbles(prev => [...prev, newBubble]);

      // Remove bubble after animation
      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
      }, 4000);
    };

    const interval = setInterval(createBubble, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{
            opacity: 0,
            scale: 0,
            x: bubble.x,
            y: bubble.y,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 1.5],
            y: bubble.y - window.innerHeight - 200,
            x: bubble.x + (Math.random() * 200 - 100),
          }}
          transition={{
            duration: 4,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            filter: 'blur(8px)',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
