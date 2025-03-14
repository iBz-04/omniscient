import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
    <div className="flex flex-col items-center px-4 pt-6 pb-20 md:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[500px] overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Main content container */}
      <div className="w-full max-w-5xl mx-auto relative">
        {/* Floating badges */}
        {/* <div className="absolute -top-4 left-4 md:left-8 animate-float-slow">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-gray-600">AI-Powered Search</span>
          </div>
        </div>
        <div className="absolute -top-4 right-4 md:right-8 animate-float-slow animation-delay-1000">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100">
            <span className="text-sm text-gray-600">Smart Results</span>
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
          </div>
        </div> */}

        {/* Title section */}
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] bg-gradient-to-r from-purple-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent pb-4 leading-tight">
            Surf with purpose
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-xl mx-auto px-4">
            Experience smarter, faster, and more intuitive web searching powered by AI
          </p>
          
          {/* Stats section */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">10x</div>
                <div className="text-sm text-gray-500">Faster Results</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Accurate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search section  */}
        <div className="w-full max-w-xl mx-auto mb-8 md:mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-100/50 via-purple-100/50 to-indigo-100/50 rounded-2xl blur-lg transform -rotate-1"></div>
          <InputArea
            promptValue={promptValue}
            setPromptValue={setPromptValue}
            handleDisplayResult={handleDisplayResult}
          />
          {/* Search features */}
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>AI-Enhanced</span>
            </div>
          </div>
        </div>

        {/* Hero Image  */}
        <div className="relative w-full mb-8 md:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-indigo-100/50 to-blue-100/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/40 backdrop-blur-sm p-3 rounded-2xl md:rounded-3xl border border-gray-100/50">
            <Image
              src="/hero.png"
              alt="AI-powered search visualization"
              className="w-full rounded-xl md:rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
              width={1200}
              height={675}
              priority
            />
          </div>
        </div>

        {/* Suggestions  */}
        <div className="w-full max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap gap-3 justify-center">
            {suggestions.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClickSuggestion(item?.name)}
                className="group relative flex items-center justify-center md:justify-start gap-3 px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-purple-100/20 w-full md:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 group-hover:from-purple-100 group-hover:to-indigo-100 transition-colors duration-300">
                  <Image
                    unoptimized
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="relative z-10 text-[15px] font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {item.name}
                </span>
                <svg
                  className="relative z-10 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-300 ml-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Footer link - Enhanced */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/iBz-04"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              <svg className="w-5 h-5 opacity-75 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">Follow on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "Can plants feel pain?",
    icon: "/img/icon _leaf_.svg",
  },
  {
    id: 2,
    name: "How to lose belly fat?",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "What is a black hole?",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
