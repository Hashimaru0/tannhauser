import { useState } from "react";

const Inquiry = () => {
  const [email, setEmail] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="bg-neutral-900">
      <div className="flex flex-col sm:flex-row justify-between max-w-[65rem] px-8 py-[7rem]  mx-auto">
        <div>
          <div className="text-4xl">Like to know more?</div>
          <div className="text-lg mt-[1.5rem] hover:opacity-50 cursor-pointer transition">
            enquiries@tannhauser.com
          </div>
        </div>
        <div className="mt-[5rem] sm:mt-0">
          <div className="text-lg opacity-50">
            Sign up for Tannhäuser updates
          </div>
          <form>
            <label className="relative text-sm opacity-50 mt-[1.5rem] w-full inline-block">
              <input
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full mt-[-0.5rem] border-b border-white/30 py-[0.5rem] focus:outline-none bg-transparent"
                type="text"
              />
              <span
                className={`absolute ${
                  focused || email.length > 0
                    ? "top-[-1.2rem] left-[-0.6rem] scale-75"
                    : "top-[-0rem] left-0 cursor-text"
                } transition-all select-none`}
              >
                YOUR EMAIL
              </span>
            </label>
            <br />
            <button
              onClick={(e) => e.preventDefault()}
              className="mt-[1.5rem] font-semibold opacity-50 hover:opacity-80 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
