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
        {/* Vintage Image */}
        <div className="relative w-full max-w-4xl flex justify-center">
          <img 
            src="/vintage.jpg" 
            alt="The Grand Manor" 
            className="w-full h-auto drop-shadow-[0_15px_35px_rgba(60,43,37,0.15)]"
          />

          {/* Burgundy Label Overlay */}
          <div className="absolute -bottom-4 md:-bottom-8 right-4 md:right-8 bg-[#681F2B] text-[#FAF4E7] px-8 py-6 md:px-12 md:py-8 shadow-xl flex flex-col items-center text-center border border-[#7D3942]">
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
        </div>
      </motion.div>
    </section>
  );
}
