import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type BeforeAfterSliderProps = {
  title: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({ title, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Before and after images should be replaced with your actual images
  const beforeImage = "https://placehold.co/800x600/e6e6e6/939393?text=Before";
  const afterImage = "https://placehold.co/800x600/ffe484/ffc425?text=After";

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const positionX = clientX - containerRect.left;
    
    // Calculate percentage position
    let newPosition = (positionX / containerWidth) * 100;
    
    // Clamp values between 0 and 100
    newPosition = Math.max(0, Math.min(100, newPosition));
    
    setSliderPosition(newPosition);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">{title}</h3>
      
      <div
        ref={containerRef}
        className="relative h-[400px] overflow-hidden rounded-xl shadow-xl cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Before image (full width) */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white text-xl font-bold px-4 py-2 bg-black/50 rounded-md">{beforeAlt}</span>
          </div>
        </div>
        
        {/* After image (variable width based on slider) */}
        <div 
          className="absolute top-0 left-0 h-full bg-cover bg-center"
          style={{ 
            width: `${sliderPosition}%`, 
            backgroundImage: `url(${afterImage})`,
            clipPath: `inset(0 0 0 0)` 
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black text-xl font-bold px-4 py-2 bg-white/70 rounded-md">{afterAlt}</span>
          </div>
        </div>
        
        {/* Slider control */}
        <div 
          className="absolute top-0 h-full z-10"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Vertical divider line */}
          <div className="w-1 h-full bg-white shadow-md"></div>
          
          {/* Drag handle */}
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-neutral-800 rounded-full flex items-center justify-center shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8L8 16M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="text-center mt-4 text-neutral-500 text-sm">
        Drag the slider to see the difference
      </div>
    </motion.div>
  );
}