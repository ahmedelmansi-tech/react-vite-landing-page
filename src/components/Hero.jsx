import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { codeExamples } from "../data/CodeExamples";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Hero = () => {
  const [mouseMove, setMuseMove] = useState({ x: 0, y: 0 });
  const [tabActive, setTabActive] = useState("App.jsx");

  useEffect(() => {
    function moving(e) {
      setMuseMove({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", moving);

    return () => window.removeEventListener("mousemove", moving);
  }, []);

  return (
    <section className="relative flex justify-center items-center min-h-screen text-white border-t-2 border-red-600 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* -----------Mouse Moving -------------- */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(600px circle at ${mouseMove.x}px ${mouseMove.y}px, rgba(59,30,246,.15),transparent  40%)`,
        }}
      />

      {/*Pulse balls */}
      <div className="absolute top-50 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-3xl bg-cyan-500/10  animate-pulse" />

      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000" />
      <div />

      {/* --------------------CONTENT--------------------------------------- */}

      <div className="w-full max-w-7xl relative mx-auto">
        <div className="max-w-7xl mx-auto border flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div>
            <h2>HELLO AHMED</h2>
          </div>
          <div className="relative order-2 w-full">
            {/* Outer Layer */}
            <div className="relative bg-white/5  backdrop-blur-xl rounded sm:rounded-xl p-3 sm:p-4 shadow-2xl border border-white/10">
              {/* Inner layer */}
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/2 rounded-lg sm:h-[350px] h-[280px] lg:h-[450px] border border-white/5 overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-2 sm:p-3 bg-white/5 rounded-md border-b border-white/1">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 sm:space-x-2.5">
                      <div className="size-2  sm:size-3 rounded-full bg-red-500" />
                      <div className="size-2  sm:size-3 rounded-full bg-yellow-500" />
                      <div className="size-2  sm:size-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-gray-300 sm:text-sm">
                      CodeFlow
                    </span>
                  </div>
                  <div>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="p-2 sm:p-4 relative h-full">
                  <div className="flex items-center space-x-1 sm:space-x-2.5 mb-2">
                    <button
                      onClick={() => setTabActive("App.jsx")}
                      className={`px-4 py-2 ${
                        tabActive === "App.jsx"
                          ? "bg-blue-500/30"
                          : "bg-white/5"
                      } rounded-t-lg text-sm sm:text-lg border border-white/50 text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      App.js
                    </button>
                    <button
                      onClick={() => setTabActive("Hero.jsx")}
                      className={`px-4 py-2 ${
                        tabActive === "Hero.jsx"
                          ? "bg-blue-500/30"
                          : "bg-white/5"
                      } rounded-t-lg text-sm sm:text-lg border border-white/50 text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Hero.js
                    </button>
                    <button
                      onClick={() => setTabActive("Navbar.jsx")}
                      className={`px-4 py-2 ${
                        tabActive === "Navbar.jsx"
                          ? "bg-blue-500/30"
                          : "bg-white/5"
                      } rounded-t-lg text-sm sm:text-lg border border-white/50 text-gray-300 transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.js
                    </button>
                  </div>
                  {/* Code View  */}
                  <div className="relative grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        height: "100%",
                        fontSize: "11px",
                        border: "1px solid #3c3c3c",
                        lineHeight: "1.4",
                      }}
                    >
                      {codeExamples[tabActive]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
