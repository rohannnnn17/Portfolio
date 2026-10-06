
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NotFound() {
  const gameRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const positionRef = useRef(50);
  const bugsRef = useRef<
    { id: number; x: number; y: number; speed: number }[]
  >([]);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const bugIdRef = useRef(0);
  const scoreRef = useRef(0);
  const gameOverRef = useRef(false);

  const movePlayer = (direction: number) => {
    if (gameOverRef.current) return;

    positionRef.current = Math.max(
      8,
      Math.min(92, positionRef.current + direction * 7)
    );

    if (playerRef.current) {
      playerRef.current.style.left = `${positionRef.current}%`;
    }
  };

  const restartGame = () => {
    bugsRef.current = [];
    positionRef.current = 50;
    scoreRef.current = 0;
    gameOverRef.current = false;

    setScore(0);
    setGameOver(false);

    if (playerRef.current) {
      playerRef.current.style.left = "50%";
    }

    lastTimeRef.current = performance.now();

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(gameLoop);
  };

  const gameLoop = (time: number) => {
    if (gameOverRef.current) return;

    const game = gameRef.current;

    if (!game) {
      animationRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    const delta = Math.min((time - lastTimeRef.current) / 16.67, 3);
    lastTimeRef.current = time;

    const rect = game.getBoundingClientRect();

    // Spawn bugs
    if (Math.random() < 0.025 * delta) {
      bugsRef.current.push({
        id: bugIdRef.current++,
        x: Math.random() * 90 + 5,
        y: -5,
        speed: 0.45 + Math.random() * 0.45 + scoreRef.current / 2500,
      });
    }

    // Move bugs
    bugsRef.current.forEach((bug) => {
      bug.y += bug.speed * delta;
    });

    // Remove bugs that passed the player
    const passed = bugsRef.current.filter((bug) => bug.y > 100);

    if (passed.length > 0) {
      scoreRef.current += passed.length;
      setScore(scoreRef.current);
    }

    bugsRef.current = bugsRef.current.filter((bug) => bug.y <= 100);

    // Collision detection
    const playerX = positionRef.current;

    for (const bug of bugsRef.current) {
      const verticalHit = bug.y > 82 && bug.y < 94;
      const horizontalHit = Math.abs(bug.x - playerX) < 7;

      if (verticalHit && horizontalHit) {
        gameOverRef.current = true;
        setGameOver(true);
        return;
      }
    }

    // Render bugs
    const existing = game.querySelectorAll("[data-bug]");

    existing.forEach((element) => {
      const id = Number(element.getAttribute("data-bug"));

      if (!bugsRef.current.some((bug) => bug.id === id)) {
        element.remove();
      }
    });

    bugsRef.current.forEach((bug) => {
      let element = game.querySelector(
        `[data-bug="${bug.id}"]`
      ) as HTMLDivElement | null;

      if (!element) {
        element = document.createElement("div");

        element.dataset.bug = String(bug.id);
        element.textContent = "✕";

        element.style.position = "absolute";
        element.style.fontFamily = "monospace";
        element.style.fontSize = "14px";
        element.style.fontWeight = "700";
        element.style.color = "#ef4444";
        element.style.transform = "translate(-50%, -50%)";
        element.style.pointerEvents = "none";

        game.appendChild(element);
      }

      element.style.left = `${bug.x}%`;
      element.style.top = `${bug.y}%`;
    });

    animationRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(gameLoop);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        event.preventDefault();
        movePlayer(-1);
      }

      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        event.preventDefault();
        movePlayer(1);
      }

      if (event.key === " " && gameOverRef.current) {
        event.preventDefault();
        restartGame();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-5 py-10 relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* 404 */}
        <div className="relative inline-block">
          <h1 className="font-mono text-[7rem] sm:text-[10rem] font-bold leading-none tracking-tighter">
            404
          </h1>

          <div className="absolute inset-0 translate-x-[3px] translate-y-[2px] text-teal-400/15 pointer-events-none select-none font-mono text-[7rem] sm:text-[10rem] font-bold leading-none tracking-tighter">
            404
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-400 mb-6">
          This page is missing.
          <br />
          <span className="text-gray-600">
            So naturally, we made a game out of it.
          </span>
        </p>

        {/* Game */}
        <div className="border border-gray-800 bg-[#080808] rounded-lg overflow-hidden">

          {/* Game header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 font-mono text-xs">

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-gray-500">
                bug-dodger.exe
              </span>
            </div>

            <span className="text-gray-400">
              SCORE:{" "}
              <span className="text-teal-400">
                {score}
              </span>
            </span>

          </div>

          {/* Game area */}
          <div
            ref={gameRef}
            className="relative h-64 sm:h-72 bg-[#050505] overflow-hidden"
          >

            {/* Scan lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, white 4px)",
              }}
            />

            {/* Terminal labels */}
            <div className="absolute top-3 left-4 font-mono text-[10px] text-gray-700">
              SYSTEM.STATUS: RUNNING
            </div>

            <div className="absolute top-3 right-4 font-mono text-[10px] text-gray-700">
              ← A / D →
            </div>

            {/* Player */}
            <div
              ref={playerRef}
              className="absolute bottom-[7%] font-mono text-xl font-bold text-teal-400 transition-[left] duration-75"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              &gt;_
            </div>

            {/* Ground */}
            <div className="absolute bottom-[3%] left-[4%] right-[4%] border-b border-gray-800" />

            {/* Game over */}
            {gameOver && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/75 backdrop-blur-[2px]">

                <div className="text-center">
                  <p className="font-mono text-red-400 text-sm mb-2">
                    SEGMENTATION FAULT
                  </p>

                  <p className="text-gray-500 text-xs mb-5">
                    You hit a bug.
                  </p>

                  <button
                    onClick={restartGame}
                    className="px-5 py-2 border border-gray-700 rounded-md font-mono text-xs text-gray-300 hover:border-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Restart [SPACE]
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Mobile controls */}
          <div className="flex sm:hidden border-t border-gray-800">

            <button
              type="button"
              onClick={() => movePlayer(-1)}
              className="flex-1 py-4 border-r border-gray-800 font-mono text-lg text-gray-400 active:text-teal-400"
              aria-label="Move left"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => movePlayer(1)}
              className="flex-1 py-4 font-mono text-lg text-gray-400 active:text-teal-400"
              aria-label="Move right"
            >
              →
            </button>

          </div>

        </div>

        {/* Instructions */}
        <p className="mt-4 font-mono text-[11px] text-gray-600">
          Use ← → or A / D to dodge the bugs
        </p>

        {/* Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/"
            className="px-6 py-3 rounded-md bg-white text-black font-medium transition-all duration-300 hover:bg-teal-300 hover:-translate-y-0.5"
          >
            ← Back Home
          </Link>

          <Link
            href="/#projects"
            className="px-6 py-3 rounded-md border border-gray-800 text-gray-300 font-medium transition-all duration-300 hover:border-teal-400/50 hover:text-teal-300"
          >
            View Projects
          </Link>

        </div>

        {/* Footer joke */}
        <p className="mt-10 font-mono text-xs text-gray-700">
          // You found the bug. Please don't tell production.
        </p>

      </div>
    </main>
  );
}
