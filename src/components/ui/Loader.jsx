import { useEffect, useState } from "react";

export default function Loader() {
  const text = "Hello";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(typing);
      }
    }, 180);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="loader fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#111827] to-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        .loader{
          animation: exitLoader .9s ease forwards;
          animation-delay:2.8s;
        }

        @keyframes exitLoader{
          to{
            transform:translateY(-100%);
            opacity:0;
          }
        }

        .cursor{
          display:inline-block;
          width:3px;
          height:.9em;
          background:white;
          margin-left:6px;
          animation:blink .8s infinite;
        }

        @keyframes blink{
          50%{
            opacity:0;
          }
        }

        .progress{
          animation:fill 2s ease forwards;
        }

        @keyframes fill{
          from{
            width:0%;
          }
          to{
            width:100%;
          }
        }

        .glow{
          animation:pulse 3s ease-in-out infinite;
        }

        @keyframes pulse{
          0%,100%{
            transform:scale(1);
            opacity:.4;
          }

          50%{
            transform:scale(1.2);
            opacity:.8;
          }
        }
      `}</style>

      {/* Glow */}
      <div className="glow absolute h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative flex flex-col items-center gap-12">
        <h1
          className="text-8xl text-white"
          style={{
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          {displayed}
          <span className="cursor" />
        </h1>

        <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="progress h-full bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
