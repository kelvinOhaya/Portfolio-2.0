import { ArrowDown, Workflow, Code2, Sparkles, Palette } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    function resize() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      draw();
    }

    function draw() {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);
      // subtle noise: draw many semi-transparent pixels
      const density = 0.0025; // lower = less noise
      const total = Math.floor(width * height * density);
      for (let i = 0; i < total; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const alpha = Math.random() * 0.08; // very subtle
        ctx.fillStyle = `rgba(0,0,0,${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* raster noise overlay (canvas) to hide remaining banding */}
      <canvas
        ref={canvasRef}
        id="hero-noise-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
      />

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.02, 1.05, 1.08, 1.05, 1.02, 1],
        }}
        transition={{
          rotate: {
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute top-20 left-10 text-accent opacity-10"
      >
        <Palette size={80} />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          y: [0, -6, -12, -16, -12, -6, 0],
        }}
        transition={{
          rotate: {
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute top-40 right-20 text-secondary opacity-10"
      >
        <Workflow size={60} />
      </motion.div>

      <motion.div
        animate={{
          rotate: 360,
          x: [0, 4, 8, 12, 16, 12, 8, 4, 0],
        }}
        transition={{
          rotate: {
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          },
          x: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-40 left-20 text-accent opacity-10"
      >
        <Code2 size={70} />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.05, 1.1, 1.14, 1.1, 1.05, 1],
          opacity: [0.12, 0.16, 0.2, 0.22, 0.2, 0.16, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 text-primary"
      >
        <Sparkles size={50} />
      </motion.div>

      <div className="max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-foreground mb-2 text-6xl">
            {"Kelvin Ohaya".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="whitespace-nowrap inline-block">
                {Array.from(word).map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 50, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: (wordIndex * 10 + charIndex) * 0.05,
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted-foreground"
          >
            Computer Science Student
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-card text-card-foreground border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 animate-bounce"
        >
          <ArrowDown className="mx-auto text-accent" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
