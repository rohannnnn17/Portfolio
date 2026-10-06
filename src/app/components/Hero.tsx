
"use client";

import React, { useEffect, useRef, useState } from "react";

interface TerminalLine {
  type: "input" | "output" | "error" | "success";
  text: string;
}

const Hero: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "output",
      text: "Welcome to rohan@portfolio.",
    },
    {
      type: "output",
      text: "Type 'help' to see available commands.",
    },
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const commands = [
    "help",
    "about",
    "skills",
    "projects",
    "certs",
    "contact",
    "github",
    "whoami",
    "ls",
    "neofetch",
    "coffee",
    "git status",
    "hack",
    "sudo hire-rohan",
    "clear",
  ];

  const addLine = (
    type: TerminalLine["type"],
    text: string
  ) => {
    setHistory((prev) => [...prev, { type, text }]);
  };

  const navigateTo = (section: string) => {
    setTerminalOpen(false);

    setTimeout(() => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const executeCommand = (rawCommand: string) => {
    const cmd = rawCommand.trim().toLowerCase();

    if (!cmd) {
      addLine("input", "");
      return;
    }

    addLine("input", cmd);

    setCommandHistory((prev) => {
      if (prev[prev.length - 1] === cmd) {
        return prev;
      }

      return [...prev, cmd];
    });

    setHistoryIndex(-1);

    /* HELP */
    if (cmd === "help") {
      addLine(
        "output",
        "────────────────────────────────"
      );

      addLine("output", "NAVIGATION");
      addLine("output", "  about       About me");
      addLine("output", "  skills      Technical skills");
      addLine("output", "  projects    Selected projects");
      addLine("output", "  certs       Certifications");
      addLine("output", "  contact     Contact me");

      addLine("output", "");

      addLine("output", "SYSTEM");
      addLine("output", "  whoami      Current user");
      addLine("output", "  ls          List directories");
      addLine("output", "  github      Open GitHub");
      addLine("output", "  clear       Clear terminal");

      addLine("output", "");

      addLine("output", "FUN");
      addLine("output", "  neofetch    System information");
      addLine("output", "  coffee      Initialize coffee");
      addLine("output", "  git status  Check repository");
      addLine("output", "  hack        Attempt hacking");

      addLine("output", "");

      addLine(
        "output",
        "There may also be a few commands you weren't told about."
      );

      return;
    }

    /* ABOUT */
    if (cmd === "about") {
      addLine("output", "Opening About Me...");
      navigateTo("about");
      return;
    }

    /* SKILLS */
    if (cmd === "skills") {
      addLine("output", "Loading technical skills...");
      navigateTo("about");
      return;
    }

    /* PROJECTS */
    if (cmd === "projects") {
      addLine("output", "Loading selected projects...");
      navigateTo("projects");
      return;
    }

    /* CERTIFICATIONS */
    if (cmd === "certs" || cmd === "certifications") {
      addLine("output", "Opening certifications...");
      setTerminalOpen(false);

      setTimeout(() => {
        window.location.href = "/certifications";
      }, 100);

      return;
    }

    /* CONTACT */
    if (cmd === "contact") {
      addLine("output", "Opening contact...");
      navigateTo("contact");
      return;
    }

    /* GITHUB */
    if (cmd === "github") {
      addLine("success", "Opening GitHub...");

      window.open(
        "https://github.com/rohannnnn17",
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }

    /* WHOAMI */
    if (cmd === "whoami") {
      addLine("output", "rohan");
      addLine("output", "Programmer @ TCS");
      addLine("output", "Java & Full-Stack Developer");
      return;
    }

    /* LS */
    if (cmd === "ls") {
      addLine(
        "output",
        "about/   skills/   projects/   certifications/   contact/"
      );
      return;
    }

    /* NEOFETCH */
    if (cmd === "neofetch") {
      addLine("output", " ");
      addLine("output", "        █████████       rohan@portfolio");
      addLine("output", "       ██       ██      ───────────────");
      addLine("output", "      ██    R    ██     OS: RohanOS");
      addLine("output", "      ██         ██     Role: Programmer");
      addLine("output", "       ██       ██      Stack: Java / Spring");
      addLine("output", "        █████████       Frontend: React");
      addLine("output", "                       Database: MySQL / MongoDB");
      addLine("output", "                       Status: Building");
      addLine("output", "                       Coffee: Required");
      addLine("output", " ");
      return;
    }

    /* COFFEE */
    if (cmd === "coffee") {
      addLine("output", "Initializing coffee subsystem...");
      addLine("output", "[████████████████████] 100%");
      addLine("success", "☕ Coffee initialized.");
      addLine("output", "Java runtime: READY");
      addLine("output", "Motivation: 73%");
      addLine("output", "Bugs: CLASSIFIED");
      return;
    }

    /* GIT STATUS */
    if (cmd === "git status") {
      addLine("output", "On branch main");
      addLine("output", "");
      addLine("output", "Changes not staged for commit:");
      addLine("output", "  modified: portfolio");
      addLine("output", "  modified: sleep_schedule");
      addLine("output", "  deleted: social_life");
      addLine("output", "");
      addLine("output", "nothing added to commit.");
      return;
    }

    /* HACK */
    if (cmd === "hack") {
      addLine("output", "Initializing hack sequence...");
      addLine("output", "[████████████████████] 100%");
      addLine("output", "Access granted.");
      addLine("output", "");
      addLine("success", "Just kidding.");
      addLine("output", "It's a portfolio.");
      return;
    }
    
/* SECRET SEX COMMAND */

if (cmd === "sex") {
  addLine("output", "Nice try.");
  addLine("output", "");
  addLine("output", "This is a developer portfolio,");
  addLine("output", "not that kind of website.");
  addLine("output", "");
  addLine("output", "Current mode:");
  addLine("output", "Single-player.");
  addLine("output", "Multiplayer feature: not installed.");
  return;
}


    /* SECRET HIRE COMMAND */
    if (cmd === "sudo hire-rohan") {
      addLine("output", "[sudo] password for recruiter:");
      addLine("output", "Hint: You already have it.");
      addLine("output", "");
      addLine("output", "Checking candidate...");
      addLine("success", "✓ Java");
      addLine("success", "✓ Spring Boot");
      addLine("success", "✓ React");
      addLine("success", "✓ Problem solving");
      addLine("success", "✓ Projects");
      addLine("output", "");
      addLine("success", "Permission granted.");
      addLine("output", "Redirecting to contact...");

      setTimeout(() => {
        navigateTo("contact");
      }, 1200);

      return;
    }

    /* CLEAR */
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    /* UNKNOWN COMMAND */
    addLine(
      "error",
      `Command not found: ${cmd}`
    );

    addLine(
      "output",
      "Type 'help' to see available commands."
    );
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    executeCommand(command);
    setCommand("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    /* ESC */
    if (event.key === "Escape") {
      setTerminalOpen(false);
      return;
    }

    /* Arrow Up */
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setCommand(commandHistory[nextIndex]);
    }

    /* Arrow Down */
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCommand("");
        return;
      }

      setHistoryIndex(nextIndex);
      setCommand(commandHistory[nextIndex]);
    }

    /* TAB autocomplete */
    if (event.key === "Tab") {
      event.preventDefault();

      const matches = commands.filter((item) =>
        item.startsWith(command.toLowerCase())
      );

      if (matches.length === 1) {
        setCommand(matches[0]);
      }
    }
  };

  /* Focus terminal input */
  useEffect(() => {
    if (terminalOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [terminalOpen]);

  /* Scroll terminal */
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop =
        terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  /* Global ESC */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden text-white"
      data-aos="fade-in"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/assets/background-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">

          <p className="mb-4 font-mono text-sm tracking-widest text-teal-300">
            PROGRAMMER @ TCS
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Hi, I&apos;m Rohan.
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-200 md:text-3xl">
            Java &amp; Full-Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            I build reliable and scalable applications using{" "}
            <span className="text-teal-300">Java</span>,{" "}
            <span className="text-teal-300">Spring Boot</span>, and{" "}
            <span className="text-teal-300">React</span>, with a focus on
            clean code, problem-solving, and creating practical digital
            solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="#about"
              className="rounded-lg border border-teal-300 px-6 py-3 font-mono text-teal-300 transition-all duration-300 hover:bg-teal-300/10"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="rounded-lg bg-teal-300 px-6 py-3 font-mono text-black transition-all duration-300 hover:bg-teal-200"
            >
              View Projects
            </a>

            <button
              type="button"
              onClick={() => setTerminalOpen(true)}
              className="group rounded-lg border border-white/20 bg-black/20 px-5 py-3 font-mono text-sm text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-300/50 hover:bg-black/40 hover:text-teal-300"
            >
              <span className="mr-2 text-teal-300 transition-transform duration-300 group-hover:translate-x-0.5">
                $_
              </span>
              Terminal
            </button>

          </div>
        </div>
      </div>

      {/* Terminal */}
      {terminalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setTerminalOpen(false)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-800 bg-[#050505] text-left shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />

                <span className="ml-3 font-mono text-xs text-gray-500">
                  rohan@portfolio:~
                </span>
              </div>

              <button
                type="button"
                onClick={() => setTerminalOpen(false)}
                className="font-mono text-xs text-gray-600 transition-colors hover:text-gray-300"
              >
                ESC
              </button>

            </div>

            {/* Terminal Body */}
            <div
              ref={terminalBodyRef}
              className="h-[380px] overflow-y-auto p-5 font-mono text-xs sm:text-sm"
            >
              {history.map((line, index) => (
                <div
                  key={`${line.text}-${index}`}
                  className={`min-h-[20px] leading-relaxed ${
                    line.type === "input"
                      ? "text-gray-300"
                      : line.type === "error"
                      ? "text-red-400"
                      : line.type === "success"
                      ? "text-teal-300"
                      : "text-gray-500"
                  }`}
                >
                  {line.type === "input" && (
                    <span className="text-teal-300">
                      rohan@portfolio:~${" "}
                    </span>
                  )}

                  {line.text}
                </div>
              ))}

              {/* Command Input */}
              <form
                onSubmit={handleSubmit}
                className="mt-1 flex items-center"
              >
                <span className="shrink-0 text-teal-300">
                  rohan@portfolio:~$
                </span>

                <input
                  ref={inputRef}
                  value={command}
                  onChange={(event) =>
                    setCommand(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal command"
                  className="ml-2 min-w-0 flex-1 bg-transparent text-gray-200 outline-none caret-teal-300"
                />
              </form>
            </div>

            {/* Terminal Footer */}
            <div className="flex items-center justify-between border-t border-gray-800 px-4 py-3">
              <span className="font-mono text-[10px] text-gray-700">
                TAB autocomplete · ↑↓ history
              </span>

              <span className="font-mono text-[10px] text-gray-700">
                ESC close
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
