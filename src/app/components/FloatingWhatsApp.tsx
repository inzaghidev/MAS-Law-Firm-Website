import { motion } from 'motion/react';
import whatsappIcon from '/whatsapp.png';

export function FloatingWhatsApp() {
  const phoneNumber = "6288295359866";
  const message = encodeURIComponent("Halo MAS Law Firm, saya ingin berkonsultasi mengenai...");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[100] group">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <div className="bg-[#191919] text-[#AE8737] px-4 py-2 rounded-lg shadow-lg text-sm font-semibold border border-[#AE8737]/30 relative">
          Konsultasi Sekarang
          {/* Triangle arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-[#191919] border-t border-r border-[#AE8737]/30 rotate-45 transform" />
        </div>
      </div>

      {/* Button with Float Animation */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="relative rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          <img 
            src={whatsappIcon} 
            alt="WhatsApp MAS Law Firm" 
            className="w-[60px] h-[60px] object-contain drop-shadow-lg"
          />
          
          {/* Pulsing Ring Effect */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#AE8737]/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
        </div>
      </motion.a>
    </div>
  );
}
