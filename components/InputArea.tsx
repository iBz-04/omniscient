import Image from "next/image";
import { FC } from "react";
import TypeAnimation from "./TypeAnimation";

type TInputAreaProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
  disabled?: boolean;
  reset?: () => void;
};

const InputArea: FC<TInputAreaProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
  disabled,
  reset,
}) => {
  return (
    <form
      className="relative group w-full"
      onSubmit={(e) => {
        e.preventDefault();
        if (reset) reset();
        handleDisplayResult();
      }}
    >
      <div className="relative flex h-[60px] md:h-16 w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm px-5 transition-all duration-300 focus-within:border-purple-300 hover:border-gray-300 focus-within:bg-white focus-within:shadow-[0_0_0_1px_rgba(167,139,250,0.1)] focus-within:shadow-purple-200/20">
        {/* Search Icon */}
        <div className="flex items-center justify-center w-5 h-5 transition-colors group-hover:text-gray-600 text-gray-400">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-focus-within:scale-105"
          >
            <path
              d="M9.25 16.5C13.2541 16.5 16.5 13.2541 16.5 9.25C16.5 5.24594 13.2541 2 9.25 2C5.24594 2 2 5.24594 2 9.25C2 13.2541 5.24594 16.5 9.25 16.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 14.5L18 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        <input
          type="text"
          placeholder="Ask anything..."
          className="flex-1 bg-transparent text-[15px] md:text-base font-medium text-gray-800 outline-none placeholder:text-gray-400 placeholder:font-normal transition-colors min-w-0"
          disabled={disabled}
          value={promptValue}
          required
          onChange={(e) => setPromptValue(e.target.value)}
        />
        
        <button
          disabled={disabled}
          type="submit"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white disabled:pointer-events-none disabled:opacity-75 transition-all duration-300 hover:opacity-90 hover:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        >
          {disabled ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <TypeAnimation />
            </div>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M3.75 10H16.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 5L16.25 10L11.25 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Keyboard shortcut hint */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 pointer-events-none select-none">
          <kbd className="hidden md:inline-flex h-6 items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 text-xs text-gray-400 transition-colors group-hover:border-gray-300">
            ⌘
          </kbd>
          <kbd className="hidden md:inline-flex h-6 items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 text-xs text-gray-400 transition-colors group-hover:border-gray-300">
            K
          </kbd>
        </div>
      </div>
    </form>
  );
};

export default InputArea;
