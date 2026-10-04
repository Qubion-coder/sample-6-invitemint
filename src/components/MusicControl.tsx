import { Music, Music2 } from 'lucide-react';
import { motion } from 'motion/react';

interface MusicControlProps {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

export function MusicControl({ isMusicPlaying, toggleMusic }: MusicControlProps) {
  return (
    <button
      onClick={toggleMusic}
      className="w-10 h-10 rounded-full bg-[#E8D8BC] border border-[#B79A63]/60 shadow-lg flex items-center justify-center text-[#681F2B] hover:scale-105 transition-transform duration-300 relative"
      aria-label={isMusicPlaying ? "Pause music" : "Play music"}
    >
      <div className="absolute inset-1 border border-[#681F2B]/30 rounded-full pointer-events-none border-dashed" />
      {isMusicPlaying ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Music2 size={16} className="relative z-10" />
        </motion.div>
      ) : (
        <Music size={16} className="relative z-10 opacity-70" />
      )}
    </button>
  );
}
