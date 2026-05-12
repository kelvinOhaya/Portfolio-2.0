import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    items: [
      { name: "React", docs: "https://react.dev" },
      { name: "TypeScript", docs: "https://www.typescriptlang.org" },
      { name: "Next.js", docs: "https://nextjs.org" },
    ],
    color: "text-primary",
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", docs: "https://nodejs.org" },
      { name: "Python", docs: "https://www.python.org" },
      { name: "Express", docs: "https://expressjs.com" },
      { name: "Mongoose ODM", docs: "https://mongoosejs.com" },
      { name: "REST APIs", docs: null },
    ],
    color: "text-accent",
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "MongoDB", docs: "https://www.mongodb.com/docs" },
      { name: "Firebase", docs: "https://firebase.google.com/docs" },
    ],
    color: "text-secondary",
  },
  {
    category: "DevOps",
    icon: Code2,
    items: [
      { name: "CI/CD", docs: null },
      { name: "GitHub Actions", docs: "https://github.com/features/actions" },
      { name: "Vercel", docs: "https://vercel.com/docs" },
    ],
    color: "text-muted-foreground",
  },
  {
    category: "Design",
    icon: Palette,
    items: [
      { name: "Figma", docs: "https://figma.com" },
      { name: "UI/UX", docs: null },
      {
        name: "Responsive Design",
        docs: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      },
      { name: "Accessibility", docs: "https://www.w3.org/WAI/WCAG21/quickref" },
    ],
    color: "text-primary",
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [
      { name: "Flutter", docs: "https://flutter.dev" },
      { name: "Dart", docs: "https://dart.dev" },
      {
        name: "Progressive Web Apps",
        docs: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
      },
    ],
    color: "text-accent",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <span className="text-accent">My Expertise</span>
              <div className="w-1 h-8 bg-primary rounded-full" />
            </div>

            <h2 className="mb-4 text-foreground">Technical Skills</h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and frameworks I've learned through coursework,
              personal projects, and hands-on practice.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal key={skill.category} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={skill.color} size={24} />
                    <h3 className="text-foreground">{skill.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <motion.span
                        key={item.name}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          item.docs
                            ? "bg-muted text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                            : "bg-muted text-muted-foreground"
                        }`}
                        whileHover={item.docs ? { scale: 1.1, y: -2 } : {}}
                        {...(item.docs && {
                          onClick: () => window.open(item.docs, "_blank"),
                          role: "button",
                          tabIndex: 0,
                          onKeyDown: (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              window.open(item.docs, "_blank");
                            }
                          },
                        })}
                        title={
                          item.docs
                            ? `Learn more about ${item.name}`
                            : undefined
                        }
                      >
                        {item.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
