import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const projectSections = [
  {
    season: "Spring 2026",
    projects: [
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
        title: "MD Pro",
        description:
          "Markdown notetaking web application created with Flutter and Firebase.",
        codeLinks: [
          { label: "Code", url: "https://github.com/kelvinOhaya/MDProFlutter" },
        ],
        tags: ["Flutter", "Firebase", "Dart"],
        live: "https://md-pro-45064.web.app/",
      },
    ],
  },
  {
    season: "Fall 2025",
    projects: [
      {
        title: "Portfolio v 1.0",
        description:
          "Created a personal portfolio website using HTML, CSS, and JavaScript. Deployed with Netlify.",
        codeLinks: [
          {
            label: "Code",
            url: "https://github.com/kelvinOhaya/Portfolio-2.0",
          },
        ],
        tags: ["HTML", "CSS", "JavaScript", "Netlify"],
        live: "https://kelvin-ohaya-portfolio.netlify.app/",
      },
      {
        title: "Mist",
        description:
          "Full-stack chat application with CRUD operations and JWT authentication. Implemented real-time communication with Socket.IO and data aggregation pipelines with MongoDB. Deployed with Railway (Backend API), Netlify (Frontend), and MongoDB Atlas (Database).",
        codeLinks: [
          {
            label: "Backend",
            url: "https://github.com/kelvinOhaya/mist-backend",
          },
          {
            label: "Frontend",
            url: "https://github.com/kelvinOhaya/mist-frontend",
          },
        ],
        tags: ["Socket.IO", "MongoDB", "JWT", "Railway", "Netlify"],
        live: "https://ko-mist.netlify.app",
      },
    ],
  },
  {
    season: "Spring 2025",
    projects: [
      {
        title: "React Calculator",
        description:
          "GUI calculator built with React that can do basic arithmetic. Deployed with Vercel.",
        codeLinks: [
          { label: "Code", url: "https://github.com/kelvinOhaya/Calculator" },
        ],
        tags: ["React", "JavaScript", "Vercel"],
        live: "https://calculator-livid-kappa-43.vercel.app/",
      },
    ],
  },
];

interface AllProjectsPageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function AllProjectsPage({
  isDarkMode,
  toggleDarkMode,
}: AllProjectsPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleBackToPortfolio = () => {
    navigate("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 350);
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClick={handleBackToPortfolio}
          className="group flex items-center gap-2 text-foreground hover:text-primary transition-all hover:scale-110 mb-12"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-foreground">All Projects</h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            All of my projects in one place
          </p>
        </motion.div>

        <div className="space-y-14">
          {projectSections.map((section, sectionIndex) => (
            <div key={section.season}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border" />
                <h3 className="text-foreground text-sm tracking-[0.25em] uppercase whitespace-nowrap">
                  {section.season}
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + sectionIndex * 0.1 + index * 0.03,
                    }}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-5">
                      <h3 className="mb-2 text-foreground text-lg">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 flex-wrap">
                        {project.codeLinks.map((link) => (
                          <a
                            key={`${project.title}-${link.label}`}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={16} />
                            <span>{link.label}</span>
                          </a>
                        ))}
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
