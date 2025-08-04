import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CelebrationSVG from './CelebrationSVG';


const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const navigate = useNavigate()


  const handleHomeButton = () => {
    navigate("/homepage")
    onClose()
  }

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const tl = gsap.timeline();

    // Animazione entrata overlay
    tl.fromTo(overlayRef.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });

    // Animazione entrata modale
    tl.fromTo(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 50
    }, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.1");

    // Animazione elementi interni
    tl.fromTo([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2");

    // Animazione pulsanti
    tl.fromTo(buttonsRef.current?.children || [], {
      opacity: 0,
      y: 20,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose
    });

    tl.to([buttonsRef.current?.children, subtitleRef.current, titleRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in"
    });

    tl.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "back.in(1.7)"
    }, "-=0.1");

    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in"
    }, "-=0.1");
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CelebrationSVG />
        
        <h2 
          ref={titleRef}
          className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2"
        >
          CONGRATULAZIONI!
        </h2>
        
        <p 
          ref={subtitleRef}
          className="text-gray-600 mb-8 text-base"
        >
          Hai completato tutti i moduli!
        </p>
        
        <div ref={buttonsRef} className="space-y-4">
          <button
            onClick={handleHomeButton}
            className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Home
          </button>
          
          <button
            className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Modalità wild
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;