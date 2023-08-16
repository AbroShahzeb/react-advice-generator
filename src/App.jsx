import { useState } from "react";

function App() {
  const [adviceCount, setAdviceCount] = useState(1);
  const [advice, setAdvice] =
    useState(`It is easy to sit up and take notice, what's difficult is getting up
  and taking action.`);

  async function handleGenerateAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceCount((count) => count + 1);
  }
  return (
    <main className="bg-darkBlue w-full h-[100vh] grid place-content-center font-mainFont">
      <div className="py-10 px-6 rounded-lg bg-darkGrayishBlue w-96 flex flex-col items-center gap-4 relative md:w-[500px]">
        <p className="text-neonGreen uppercase text-xs tracking-widest font-bold">
          Advice #{adviceCount <= 9 ? "0" + adviceCount : adviceCount}
        </p>
        <h2 className="text-[28px] text-center font-bold text-lightCyan leading-9 mb-4">
          &quot;{advice}&quot;
        </h2>
        <svg
          width="295"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-8 md:hidden"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <svg
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block mb-8"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <div
          className="w-16 h-16 flex items-center justify-center bg-neonGreen rounded-full absolute -bottom-8 cursor-pointer hover:shadow-allSides"
          onClick={handleGenerateAdvice}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}

export default App;

// token: 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
