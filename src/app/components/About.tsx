import { Heart, MapPin, Calendar } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "motion/react";
import {
  ReactLogo,
  PythonLogo,
  ExpressLogo,
  CppLogo,
  FigmaLogo,
  MongoDBLogo,
  JavaLogo,
  FlutterLogo,
  DartLogo,
} from "./TechLogos";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <span className="text-accent">About Me</span>
              </div>

              <h2 className="mb-6 text-foreground">
                Learning, Building & Growing
              </h2>

              <p className="text-muted-foreground mb-6">
                I'm a Computer Science student passionate about software
                engineering. Whether it is designing user friendly experiences,
                or scalable APIs, I aim to provide quality results for any phase
                of the software development cycle.
              </p>

              <p className="text-muted-foreground mb-6">
                Through coursework, personal projects, and hands-on experience,
                I've developed skills in full-stack web and mobile development.
                Currently, I am actively seeking internship opportunities where
                I can help teams streamline their development processes and
                build efficient, scalable solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="text-accent" size={18} />
                  <span>Indianapolis, IN</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="text-accent" size={18} />
                  <span>Class of 2028</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="text-accent" size={18} />
                  <span>Open to Opportunities</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg h-[500px] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                {/* Top Row */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute top-8 left-1/4 -translate-x-1/2 text-primary"
                >
                  <ReactLogo size={55} />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 text-accent"
                >
                  <PythonLogo size={55} />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-8 left-3/4 -translate-x-1/2 text-secondary"
                >
                  <FigmaLogo size={55} />
                </motion.div>

                {/* Middle Row */}
                <motion.div
                  animate={{
                    x: [0, -10, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  }}
                  className="absolute top-1/2 left-12 -translate-y-1/2 text-muted-foreground"
                >
                  <ExpressLogo size={50} />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    },
                  }}
                  className="absolute top-1/2 right-12 -translate-y-1/2 text-primary"
                >
                  <MongoDBLogo size={50} />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent"
                >
                  <CppLogo size={55} />
                </motion.div>

                {/* Bottom Row */}
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    rotate: [0, -360],
                  }}
                  transition={{
                    x: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    },
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  }}
                  className="absolute bottom-8 left-1/4 -translate-x-1/2 text-secondary"
                >
                  <JavaLogo size={55} />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
                >
                  <FlutterLogo size={55} />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                  className="absolute bottom-8 left-3/4 -translate-x-1/2 text-muted-foreground"
                >
                  <DartLogo size={55} />
                </motion.div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
