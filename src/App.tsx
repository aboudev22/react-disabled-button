import { useState } from "react";
import DisabledButton from "./components/DisabledButton";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIstyping] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0 && value.trim() != "") {
      setIstyping(true);
    }
    if (value.length == 0) {
      setIstyping(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-neutral-600">
      <div className="bg-neutral-900 p-4 w-sm rounded-2xl flex flex-col gap-4 relative">
        <section className="flex gap-2">
          <img
            src="user1.png"
            className="w-12 h-12 rounded-full border-2 border-slate-500"
            alt=""
          />

          <div>
            <p className="text-white text-xl">John Doe</p>
            <p className="text-white/80 text-xs">@johndoe</p>
          </div>
          <img
            src="close.png"
            alt="close"
            className="w-12 h-12 absolute right-4 top-2 cursor-pointer"
          />
        </section>
        <section className="flex flex-col gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleChangeInput}
            placeholder="Tell others about yourself..."
            className="bg-neutral-900 text-white w-full pb-2 border-b-2 border-b-neutral-700 placeholder:text-white/50 placeholder:text-xs focus:outline-0"
          />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="relative group inline-block">
                <img
                  src="mic.png"
                  className="w-6 h-6 cursor-pointer"
                  alt="mic"
                />
                <p className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  mic
                </p>
              </div>
              <div className="relative group inline-block">
                <img
                  src="camera.png"
                  className="w-6 h-6 cursor-pointer"
                  alt="camera"
                />
                <p className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  camera
                </p>
              </div>
              <div className="relative group inline-block">
                <img
                  src="paper_clip.png"
                  className="w-6 h-6 cursor-pointer"
                  alt="paper clip"
                />
                <p className="absolute whitespace-nowrap bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  paper clip
                </p>
              </div>
            </div>
            <DisabledButton disabled={!isTyping} description="publish" />
          </div>
        </section>
      </div>
    </div>
  );
}
