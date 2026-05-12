import {
  Mail,
  Send,
  MessageSquare,
  Phone,
  Github,
  Linkedin,
  User,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const [selectedEmail, setSelectedEmail] = useState<"personal" | "school">(
    "personal",
  );
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showCopiedSnackbar, setShowCopiedSnackbar] = useState(false);

  const personalEmail = "kelvinohaya@gmail.com";
  const schoolEmail = "kelohaya@iu.edu";
  const phone = "+1 (317) 340-7529";
  const githubUrl = "https://github.com/kelvinohaya";
  const linkedinUrl = "https://linkedin.com/in/kelvin-ohaya";
  const animatedInputClass =
    "w-full px-4 py-3 bg-input-background border border-border rounded-lg text-foreground transition-[border-color,box-shadow,transform] duration-200 ease-out focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 focus:scale-[1.01]";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowCopiedSnackbar(true);
    setTimeout(() => setShowCopiedSnackbar(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipientEmail =
      selectedEmail === "personal" ? personalEmail : schoolEmail;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`,
    )}`;

    window.location.href = mailtoLink;

    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 px-6">
      <AnimatePresence>
        {showCopiedSnackbar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg z-50 flex items-center gap-3"
          >
            <div className="flex-1">Successfully copied to clipboard!</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="text-primary" size={32} />
            </div>

            <h2 className="mb-4 text-foreground">Let's Connect</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="mb-6 p-4 bg-background border border-border rounded-lg">
                <label className="block mb-3 text-foreground">
                  Send message to:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedEmail("personal")}
                    className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                      selectedEmail === "personal"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    <User size={18} />
                    <span>Personal Email</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedEmail("school")}
                    className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                      selectedEmail === "school"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M2 9L12 3L22 9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 10V20H9V15H15V20H20V10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="2"
                        y1="20"
                        x2="22"
                        y2="20"
                        strokeLinecap="round"
                      />
                      <rect
                        x="6"
                        y="12"
                        width="2"
                        height="2"
                        fill="currentColor"
                      />
                      <rect
                        x="16"
                        y="12"
                        width="2"
                        height="2"
                        fill="currentColor"
                      />
                    </svg>
                    <span>School Email</span>
                  </button>
                </div>
                <div className="mt-3 text-center text-sm text-muted-foreground">
                  {selectedEmail === "personal" ? personalEmail : schoolEmail}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={animatedInputClass}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={animatedInputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-foreground">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={animatedInputClass}
                />
              </div>

              <div>
                <label className="block mb-2 text-foreground">Message</label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${animatedInputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={!name || !email || !subject || !message}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleCopy(personalEmail)}
                  className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg transition-transform hover:scale-105 text-left w-full"
                >
                  <User size={20} className="text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground mb-1">
                      Personal Email
                    </div>
                    <div className="hover:text-primary transition-colors text-sm break-all text-foreground">
                      {personalEmail}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleCopy(schoolEmail)}
                  className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg transition-transform hover:scale-105 text-left w-full"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary flex-shrink-0"
                  >
                    <path
                      d="M2 9L12 3L22 9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 10V20H9V15H15V20H20V10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="2"
                      y1="20"
                      x2="22"
                      y2="20"
                      strokeLinecap="round"
                    />
                    <rect
                      x="6"
                      y="12"
                      width="2"
                      height="2"
                      fill="currentColor"
                    />
                    <rect
                      x="16"
                      y="12"
                      width="2"
                      height="2"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground mb-1">
                      School Email
                    </div>
                    <div className="hover:text-primary transition-colors text-sm break-all text-foreground">
                      {schoolEmail}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleCopy(phone)}
                  className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg transition-transform hover:scale-105 text-left w-full"
                >
                  <Phone size={20} className="text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground mb-1">
                      Phone
                    </div>
                    <div className="hover:text-primary transition-colors text-sm text-foreground">
                      {phone}
                    </div>
                  </div>
                </button>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg transition-transform hover:scale-105"
                >
                  <Github size={20} className="text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground mb-1">
                      GitHub
                    </div>
                    <div className="hover:text-primary transition-colors text-sm break-all text-foreground">
                      {githubUrl.replace("https://", "")}
                    </div>
                  </div>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-2 flex items-center gap-3 p-3 bg-background border border-border rounded-lg transition-transform hover:scale-105"
                >
                  <Linkedin size={20} className="text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground mb-1">
                      LinkedIn
                    </div>
                    <div className="hover:text-primary transition-colors text-sm break-all text-foreground">
                      {linkedinUrl.replace("https://", "")}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
