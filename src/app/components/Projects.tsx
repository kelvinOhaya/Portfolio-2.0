import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useNavigate } from "react-router";

const featuredProjects = [
  {
    title: "Watch Me",
    description:
      "Movie Database with local watchlist created with the TMDB API. Implemented with React.",
    image: "/screenshots/live/watch-me-desktop.png",
    tags: ["React", "TMDB API", "Vercel"],
    github: "#",
    live: "https://ohaya-watch-me.vercel.app/",
  },
  {
    title: "Mist",
    description:
      "Full-stack chat application with CRUD operations, JWT authentication, and real-time communication with Socket.IO.",
    image: "/screenshots/live/mist-desktop.png",
    tags: ["Socket.IO", "MongoDB", "JWT", "Railway"],
    github: "#",
    live: "https://ko-mist.netlify.app",
  },
  {
    title: "MD Pro",
    description:
      "Markdown notetaking web application created with Flutter and Firebase for seamless note syncing.",
    image: "/screenshots/live/md-pro-desktop.png",
    tags: ["Flutter", "Firebase", "Dart"],
    github: "#",
    live: "https://md-pro-45064.web.app/",
  },
  {
    title: "React Calculator",
    description:
      "GUI calculator built with React that can do basic arithmetic operations with a clean, intuitive interface.",
    image: "/screenshots/live/react-calculator-desktop.png",
    tags: ["React", "JavaScript", "Vercel"],
    github: "#",
    live: "https://calculator-livid-kappa-43.vercel.app/",
  },
];

export function Projects() {
  const navigate = useNavigate();
  const fallbackImage = "/favicon.svg";

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
                <div className="relative h-64 overflow-hidden">
                  <picture>
                    <source
                      srcSet={`/screenshots/live/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-mobile.png`}
                      media="(max-width: 640px)"
                    />
                    <img
                      src={`/screenshots/live/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-desktop.png`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.onerror = null;
                        img.src = fallbackImage;
                      }}
                    />
                  </picture>
                </div>

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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
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
