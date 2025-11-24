import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "AI Code Completion",
    description:
      "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
    imagePosition: "left",
  },
];

const Features = () => {
  return (
    <section
      id="feature"
      className="py-16 sm:py-20 px-8 sm:px-6 lg:px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-15 sm:mb-12">
          <h2 className="text-6xl sm:text-4xl mb-6 sm:mb-9 font-bold leading-tight">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent ">
              Your Complete Devolopment
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        {/* Features */}

        <div className="space-y-9 sm:space-y-12 lg:space-y-16 gap-8 sm:gap-12 ">
          {features.map((fe, ind) => {
            return (
              <div
                key={ind}
                className={`flex flex-col gap-8 lg:gap-12${
                  fe.imagePosition === "right"
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="bg-white/5  backdrop-blur-xl rounded sm:rounded-xl p-2 sm:p-3 shadow-2xl border border-white/10">
                    <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div>
                        {/* the three circle and the title  */}
                        <div className="flex  items-center space-x-2  sm:space-x-4 mb-3 sm:bm-5">
                          <div className="flex items-center space-x-1 sm:space-x-2.5">
                            <div className="size-2  sm:size-3 rounded-full bg-red-500" />
                            <div className="size-2  sm:size-3 rounded-full bg-yellow-500" />
                            <div className="size-2  sm:size-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-xs text-gray-300 sm:text-sm">
                            {fe.title}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            fontSize: "12px",
                            height: "100%",
                            lineHeight: "1.4",
                            border: "1px solid #3c3c3c",
                            borderRadius: "5px",
                            padding: ".5rem",
                          }}
                          wrapLines={true}
                        >
                          {fe.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="text-center sm:text-left">
                    <div>
                      <h2 className="font-bold mb-4 lg:mb-5 text-2xl">
                        {fe.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-lg text-gray-300">
                      {fe.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
