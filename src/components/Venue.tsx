import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Venue() {
  return (
    <section className="min-h-screen bg-[#F3E9D5] flex flex-col items-center justify-center relative overflow-hidden py-32 px-6 border-t border-[#B79A63]/30">
      <div className="absolute inset-0 bg-texture-paper opacity-50 mix-blend-multiply pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-5xl flex flex-col items-center relative z-10"
      >
        {/* Irregular Antique Photo Frame */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#FAF4E7] p-4 md:p-6 shadow-2xl border border-[#D5C2A5] rotate-[1deg] flex flex-col items-center justify-center">
          
          <div className="absolute inset-4 md:inset-6 border border-[#B79A63]/60 z-10 pointer-events-none"></div>

          <div className="w-full h-full relative overflow-hidden">
            <img 
              src="/venue-bg.jpg"
              alt="The Grand Manor"
              className="w-full h-full object-cover sepia-[0.4] saturate-[0.7] brightness-[0.9] contrast-[0.95]"
            />
          </div>

          {/* Burgundy Label Overlay */}
          <div className="absolute -bottom-8 md:-bottom-12 right-8 md:right-16 bg-[#681F2B] text-[#FAF4E7] px-8 py-6 md:px-12 md:py-8 shadow-xl flex flex-col items-center text-center rotate-[-2deg] border border-[#7D3942]">
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 opacity-80">
              The Venue
            </p>
            <h2 className="font-serif text-2xl md:text-4xl italic mb-2 drop-shadow-sm">
              The Grand Manor
            </h2>
            <p className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-80">
              Colombo, Sri Lanka
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-[#B79A63] pb-1 text-[#B79A63] font-sans text-xs tracking-[0.2em] uppercase hover:text-[#FAF4E7] transition-colors"
            >
              <span>View Location</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          {/* Pressed Flower Detail Overlapping */}
          <img 
            src="/11.png" 
            alt="" 
            className="absolute -top-12 -left-12 w-32 md:w-48 h-auto rotate-[60deg] opacity-90 drop-shadow-lg pointer-events-none z-20"
          />
        </div>
      </motion.div>
    </section>
  );
}
