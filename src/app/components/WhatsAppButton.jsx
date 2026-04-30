import { useState, useEffect } from 'react';
import whatsappIcon from '/whatsapp.png';

export function WhatsAppButton() {
  const [isPulsing, setIsPulsing] = useState(false);

  // Pulse animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = 'https://wa.me/6289530407021?text=Halo%20M.A.S%20Law%20Firm,%20saya%20ingin%20konsultasi%20gratis';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
      aria-label="Konsultasi via WhatsApp"
    >
      {/* Hidden Label that appears on hover - only show on larger screens */}
      <div className="hidden md:block absolute right-16 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none">
        <div className="bg-white text-[#191919] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium border border-gray-200">
          Konsultasi Gratis Sekarang
          {/* Arrow pointing to the button */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div
        className={`
          w-14 h-14 rounded-full 
          flex items-center justify-center 
          shadow-lg hover:shadow-xl
          transition-all duration-300
          hover:scale-110
          overflow-hidden
          ${isPulsing ? 'animate-pulse-subtle' : ''}
        `}
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
}
