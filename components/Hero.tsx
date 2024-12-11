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
    <div className="flex flex-col items-center justify-center">
    <Image
      src="/hero.png"
      alt="Descriptive alt text"
      className="mx-auto rounded-lg w-full max-w-[600px] mt-4"
      width={600}
      height={400}
    />
      <h2 className="mt-4 bg-custom-gradient bg-clip-text pb-7 pt-2 text-center text-3xl font-semibold leading-[normal] lg:text-[64px]">
        Surf with purpose
      </h2>

      {/* input section */}
      <div className="w-full max-w-[708px] pb-6">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Suggestions section */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-[30px] lg:flex-nowrap lg:justify-normal">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] rounded border border-solid border-[#C1C1C1] bg-[#EDEDEA] px-2.5 py-2"
            onClick={() => handleClickSuggestion(item?.name)}
            key={item.id}
          >
            <Image
              unoptimized
              src={item.icon}
              alt={item.name}
              width={18}
              height={16}
              className="w-[18px]"
            />
            <span className="text-sm font-light leading-[normal] text-[#1B1B16]">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Github link section */}
      <p className="mt-8 text-center text-sm font-light leading-[normal] text-[#1B1B16]">
        Follow us!{" "}
        <span className="text-sm font-medium underline">
          <a
            href="https://github.com/OmniS0FT"
            target="_blank"
            rel="noopener noreferrer"
          >
            On github.
          </a>
        </span>
      </p>

      <a
        className="mt-16 mb-4 inline-flex h-7 shrink-0 items-center gap-[9px] rounded-[50px] border-[0.5px] border-solid border-[#E6E6E6] bg-white px-3 py-4 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)]"
        href="https://www.together.ai/"
        target="_blank"
      >
        <Image
          unoptimized
          src="/img/together-ai.svg"
          alt="hero"
          width={18}
          height={18}
        />
        <span className="text-center text-base font-light leading-[normal] text-[#1B1B16]">
          Credits: Together AI
        </span>
      </a>
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
