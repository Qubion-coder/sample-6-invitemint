import { motion } from 'motion/react';

export function TheEvening() {
  const schedule = [
    { 
      event: "Ceremony", 
      time: "6:00 PM", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-[#B79A63] fill-none" strokeWidth="1">
          <path d="M12 3 L4 9 L4 21 L20 21 L20 9 Z" />
          <path d="M12 3 L12 10" />
          <path d="M9 14 A 3 3 0 0 1 15 14" />
        </svg>
      )
    },
    { 
      event: "Reception", 
      time: "7:30 PM", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-[#B79A63] fill-none" strokeWidth="1">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7 L12 12 L15 15" />
        </svg>
      )
    },
    { 
      event: "Dress Code", 
      time: "Formal", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-[#B79A63] fill-none" strokeWidth="1">
          <path d="M7 6 L12 10 L17 6 L12 14 Z" />
          <path d="M12 14 L12 21" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#E8D8BC] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 relative overflow-hidden border-t border-[#B79A63]/30">
      <div className="absolute inset-0 bg-texture-paper opacity-50 mix-blend-multiply pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#3C2B25] uppercase tracking-[0.3em]">
            The Celebration
          </h2>
          <div className="w-24 h-[1px] bg-[#B79A63] mx-auto mt-8" />
        </motion.div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-12 md:gap-0">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center w-full md:w-1/3 relative"
            >
              {/* Divider for desktop */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#B79A63]/50 to-transparent"></div>
              )}
              
              {/* Divider for mobile */}
              {index !== 0 && (
                <div className="md:hidden w-32 h-[1px] bg-[#B79A63]/30 mb-12"></div>
              )}

              <div className="mb-6 opacity-80">
                {item.icon}
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-[#681F2B] uppercase tracking-[0.15em] mb-4">
                {item.event}
              </h3>
              
              <p className="font-sans text-sm md:text-base tracking-[0.2em] text-[#3C2B25] uppercase">
                {item.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
