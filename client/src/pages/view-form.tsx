import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import grainTexture from "@assets/generated_images/abstract_holographic_grain_texture.png";
import { Link } from "wouter";

export default function ViewForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What's your name?",
      type: "text",
      placeholder: "Start typing...",
    },
    {
      id: 2,
      question: "Which vibe are you bringing?",
      type: "choice",
      options: ["Chill", "Energetic", "Chaotic", "Professional"],
    },
    {
      id: 3,
      question: "Any dietary restrictions?",
      type: "text",
      placeholder: "Gluten free, vegan, etc...",
    },
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-black font-display p-4 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 md:p-12 rounded-2xl border-4 border-black shadow-hard max-w-md w-full"
        >
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-white w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black uppercase mb-4">You're In!</h1>
          <p className="font-sans text-lg font-medium mb-8">
            Thanks for registering. Your ticket has been sent to your email.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg border-2 border-black border-dashed mb-6">
             <div className="text-xs uppercase font-bold text-gray-500 mb-2">Your Ticket Code</div>
             <div className="text-2xl font-mono tracking-widest">XY-9283-ZZ</div>
          </div>
          <Link href="/results">
            <a className="btn-neo w-full bg-secondary">
              View Dashboard
            </a>
          </Link>
        </motion.div>
      </div>
    );
  }

  const currentQ = questions[step];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans relative overflow-hidden">
       {/* Background Grain */}
       <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url(${grainTexture})`, backgroundSize: 'cover' }}></div>
      
       <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 md:p-8">
         {/* Progress Bar */}
         <div className="w-full max-w-xl mb-12 flex gap-2">
            {questions.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${idx <= step ? 'bg-black' : 'bg-gray-200'}`}
              />
            ))}
         </div>

         <div className="w-full max-w-2xl min-h-[400px] flex flex-col">
           <AnimatePresence mode="wait" custom={direction}>
             <motion.div
               key={step}
               custom={direction}
               variants={variants}
               initial="enter"
               animate="center"
               exit="exit"
               transition={{ duration: 0.3, ease: "circOut" }}
               className="flex-1 flex flex-col justify-center"
             >
               <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
                 <span className="text-primary text-2xl md:text-3xl block mb-2 font-mono">0{step + 1} ➔</span>
                 {currentQ.question}
               </h2>

               {currentQ.type === 'text' && (
                 <input 
                   autoFocus
                   className="w-full bg-transparent border-b-4 border-gray-200 focus:border-black text-2xl md:text-4xl py-4 outline-none font-medium placeholder:text-gray-300 transition-colors"
                   placeholder={currentQ.placeholder}
                   onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                 />
               )}

               {currentQ.type === 'choice' && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {currentQ.options?.map((opt) => (
                     <button 
                       key={opt}
                       onClick={handleNext}
                       className="text-left p-6 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-all font-bold text-xl shadow-hard-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                     >
                       <span className="mr-4 opacity-50 text-sm font-mono">[KEY]</span>
                       {opt}
                     </button>
                   ))}
                 </div>
               )}
             </motion.div>
           </AnimatePresence>

           <div className="mt-12 flex justify-between items-end">
              <button 
                onClick={() => {
                  if(step > 0) {
                    setDirection(-1);
                    setStep(step - 1);
                  }
                }}
                disabled={step === 0}
                className="text-sm font-bold uppercase text-gray-400 hover:text-black disabled:opacity-0 transition-colors"
              >
                Back
              </button>
              
              <button 
                onClick={handleNext}
                className="btn-neo text-xl px-8 py-4 bg-black text-white hover:bg-gray-900 border-none"
              >
                Next <ArrowRight className="ml-2" />
              </button>
           </div>
         </div>
       </div>
    </div>
  );
}