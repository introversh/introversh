import React from "react";
import { motion } from "framer-motion";

const bgGrass = Array.from({ length: 100 }).map((_, i) => ({
  h: 60 + Math.abs(Math.sin(i * 1.43) * 50 + Math.cos(i * 2.7) * 40),
  r: Math.cos(i * 2.1) * 25, 
  x: Math.sin(i * 0.7) * 40,
  w: 2 + Math.abs(Math.cos(i)) * 3, 
  delay: Math.abs(Math.sin(i)) * 3, 
}));

const midGrass = Array.from({ length: 120 }).map((_, i) => ({
  h: 40 + Math.abs(Math.cos(i * 1.67) * 45 + Math.sin(i * 3.1) * 30),
  r: Math.sin(i * 1.8) * 35,
  x: Math.cos(i * 1.1) * 55,
  w: 2 + Math.abs(Math.sin(i)) * 2,
  delay: Math.abs(Math.cos(i)) * 3,
}));

const fgGrass = Array.from({ length: 140 }).map((_, i) => ({
  h: 25 + Math.abs(Math.sin(i * 1.89) * 35 + Math.cos(i * 2.4) * 20),
  r: Math.cos(i * 2.5) * 40,
  x: Math.sin(i * 0.9) * 70,
  w: 1.5 + Math.abs(Math.cos(i)) * 2,
  delay: Math.abs(Math.sin(i)) * 3,
}));

const NoticeBoard = () => {
  return (
    <section className="bg-primary flex justify-center items-center min-h-screen relative overflow-hidden z-0">
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap');

          @keyframes gentle-sway {
            0%, 100% { transform: rotate(var(--base-rotation)) translateX(var(--base-x)) skewX(0deg); }
            50% { transform: rotate(calc(var(--base-rotation) + 8deg)) translateX(var(--base-x)) skewX(-5deg); }
          }
          .animate-sway {
            animation: gentle-sway 4s ease-in-out infinite;
            transform-origin: bottom center;
          }

          .font-chalk {
            font-family: 'Gaegu', cursive;
            line-height: 1.4;
          }
        `}
      </style>

     
      <div className="relative w-[1000px] h-[760px] flex flex-col items-center justify-start transform origin-center 
        scale-[0.32] min-[400px]:scale-[0.4] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.9] xl:scale-100">

        <div className="relative z-10 w-[720px] h-[420px] rounded-2xl p-[14px] bg-gradient-to-b from-secondary/30 via-secondary/10 to-secondary/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)]">
          
          <div className="w-full h-full rounded-xl bg-primary relative flex items-center justify-center overflow-hidden shadow-[inset_0_15px_40px_rgba(0,0,0,0.8),inset_0_2px_5px_rgba(0,0,0,0.9)]">
            <motion.div
              animate={{ opacity: [0.05, 0.12, 0.05] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-secondary/20 blur-[50px]"
            />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-[280px] p-6 rounded-md border-t border-t-white/10 border-l border-l-white/5 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-md text-center shadow-[4px_10px_20px_rgba(0,0,0,0.4),0_20px_25px_-5px_rgba(0,0,0,0.5)]"
            >
              <p className="text-2xl text-secondary font-chalk drop-shadow-md">
                This is just the begining of a great adventure. Stick with me to find out more ;)
              </p>
              
              <div className="absolute -top-3 left-1/2 h-[14px] w-[14px] -translate-x-1/2 rounded-full bg-gradient-to-br from-white/80 via-secondary to-black shadow-[0_6px_6px_rgba(0,0,0,0.6),inset_0_2px_2px_rgba(255,255,255,0.5)]">
                 <div className="absolute top-[2px] left-[2px] w-[4px] h-[4px] rounded-full bg-white/60 blur-[1px]" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-[16px] h-[300px] mt-[-15px] -mb-[140px] bg-gradient-to-r from-secondary/10 via-secondary/40 to-black/80 shadow-[5px_0_15px_rgba(0,0,0,0.6),inset_-2px_0_4px_rgba(0,0,0,0.8)] z-0" />

        <div className="relative w-full h-[160px] flex justify-center items-end mt-auto z-20 pointer-events-none">
          
          <div className="absolute bottom-0 w-[950px] h-[35px] rounded-[100%] bg-black blur-[16px] opacity-90" />
          <div className="absolute bottom-1 w-[850px] h-[25px] rounded-[100%] bg-[#1c150c] blur-[4px]" />

          <div className="absolute bottom-6 flex items-end justify-center space-x-[1px] w-[900px] px-24 z-10">
            {bgGrass.map((style, i) => (
              <div
                key={`bg-grass-${i}`}
                className="rounded-tl-full rounded-tr-[1px] bg-gradient-to-t from-[#091507] via-[#213b18] to-[#466d30] animate-sway opacity-90"
                style={{
                  width: `${style.w}px`,
                  height: `${style.h}px`,
                  '--base-rotation': `${style.r}deg`,
                  '--base-x': `${style.x}px`,
                  animationDelay: `${style.delay}s`,
                  transform: `rotate(${style.r}deg) translateX(${style.x}px)`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 z-20">
            <div className="absolute left-[calc(50%-420px)] bottom-4 w-[160px] h-[95px] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-gradient-to-br from-stone-500 via-stone-700 to-stone-900 shadow-[inset_-12px_-15px_25px_rgba(0,0,0,0.9),inset_6px_8px_15px_rgba(255,255,255,0.15),8px_10px_20px_rgba(0,0,0,0.7)] overflow-hidden">
              <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="absolute left-[calc(50%-90px)] bottom-3 w-[180px] h-[75px] rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-gradient-to-br from-gray-500 via-stone-800 to-black shadow-[inset_-15px_-20px_30px_rgba(0,0,0,0.9),inset_5px_8px_15px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="absolute right-[calc(50%-410px)] bottom-6 w-[140px] h-[100px] rounded-[40%_60%_70%_30%/50%_40%_60%_50%] bg-gradient-to-br from-stone-400 via-stone-600 to-stone-900 shadow-[inset_-10px_-15px_25px_rgba(0,0,0,0.8),inset_8px_10px_20px_rgba(255,255,255,0.2),-6px_8px_15px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>
          </div>

          <div className="absolute bottom-3 flex items-end justify-center space-x-[1px] w-[800px] px-20 z-25 pointer-events-none">
            {midGrass.map((style, i) => (
              <div
                key={`mid-grass-${i}`}
                className="rounded-tl-full rounded-tr-[1px] bg-gradient-to-t from-[#0e1c0b] via-[#2c4d1f] to-[#598c3e] animate-sway opacity-95"
                style={{
                  width: `${style.w}px`,
                  height: `${style.h}px`,
                  '--base-rotation': `${style.r}deg`,
                  '--base-x': `${style.x}px`,
                  animationDelay: `${style.delay}s`,
                  transform: `rotate(${style.r}deg) translateX(${style.x}px)`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 z-30">
            <div className="absolute left-[calc(50%-340px)] bottom-1 w-[90px] h-[55px] rounded-[70%_30%_50%_50%/60%_50%_50%_40%] bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800 shadow-[inset_-5px_-8px_15px_rgba(0,0,0,0.9),inset_3px_4px_10px_rgba(255,255,255,0.2),0_5px_10px_rgba(0,0,0,0.5)] overflow-hidden z-30">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>
            
            <div className="absolute right-[calc(50%-310px)] bottom-[2px] w-[70px] h-[45px] rounded-[50%_50%_30%_70%/40%_60%_40%_60%] bg-gradient-to-br from-stone-500 via-stone-700 to-black shadow-[inset_-4px_-6px_12px_rgba(0,0,0,0.9),inset_2px_3px_8px_rgba(255,255,255,0.15)] overflow-hidden z-30">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>
          </div>

          <div className="absolute -bottom-1 flex items-end justify-center space-x-[1px] w-[760px] px-16 z-40 pointer-events-none">
            {fgGrass.map((style, i) => (
              <div
                key={`fg-grass-${i}`}
                className="rounded-tl-full rounded-tr-[1px] bg-gradient-to-t from-[#152910] via-[#3a6328] to-[#71a852] animate-sway"
                style={{
                  width: `${style.w}px`,
                  height: `${style.h}px`,
                  '--base-rotation': `${style.r}deg`,
                  '--base-x': `${style.x}px`,
                  animationDelay: `${style.delay}s`,
                  transform: `rotate(${style.r}deg) translateX(${style.x}px)`,
                }}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default NoticeBoard;