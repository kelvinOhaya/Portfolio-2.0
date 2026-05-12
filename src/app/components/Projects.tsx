import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useNavigate } from "react-router";

const featuredProjects = [
  {
    title: "Watch Me",
    description:
      "Movie Database with local watchlist created with the TMDB API. Implemented with React.",
    codeLinks: [
      { label: "Code", url: "https://github.com/kelvinOhaya/watch-me" },
    ],
    tags: ["React", "TMDB API", "Vercel"],
    live: "https://ohaya-watch-me.vercel.app/",
  },
  {
    title: "Mist",
    description:
      "Full-stack chat application with CRUD operations, JWT authentication, and real-time communication with Socket.IO.",
    codeLinks: [
      { label: "Backend", url: "https://github.com/kelvinOhaya/mist-backend" },
      {
        label: "Frontend",
        url: "https://github.com/kelvinOhaya/mist-frontend",
      },
    ],
    tags: ["Socket.IO", "MongoDB", "JWT", "Railway"],
    live: "https://ko-mist.netlify.app",
  },
  {
    title: "MD Pro",
    description:
      "Markdown notetaking web application created with Flutter and Firebase for seamless note syncing.",
    codeLinks: [
      { label: "Code", url: "https://github.com/kelvinOhaya/MDProFlutter" },
    ],
    tags: ["Flutter", "Firebase", "Dart"],
    live: "https://md-pro-45064.web.app/",
  },
  {
    title: "React Calculator",
    description:
      "GUI calculator built with React that can do basic arithmetic operations with a clean, intuitive interface.",
    codeLinks: [
      { label: "Code", url: "https://github.com/kelvinOhaya/Calculator" },
    ],
    tags: ["React", "JavaScript", "Vercel"],
    live: "https://calculator-livid-kappa-43.vercel.app/",
  },
];

export function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <span className="text-accent">Portfolio</span>
              <div className="w-1 h-8 bg-primary rounded-full" />
            </div>

            <h2 className="mb-4 text-foreground">Featured Projects</h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that demonstrate my technical skills and
              passion for building functional, user-friendly applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="p-6">
                  <h3 className="mb-3 text-foreground">{project.title}</h3>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.codeLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                        <span>{link.label}</span>
                      </a>
                    ))}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate("/projects")}
              className="group text-foreground hover:text-primary transition-all hover:scale-110 flex items-center gap-2"
            >
              <div className="flex items-center group-hover:rotate-[360deg] transition-transform duration-500">
                <ChevronRight size={20} />
                <ChevronRight size={20} className="-ml-3" />
              </div>
              <span>Full Project Showcase</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
