import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import LoginForm from '../components/Auth/Login';
import RegisterForm from '../components/Auth/Register';
import AuthIllustration from '../components/Auth/Illustration';

const AccessPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animazione iniziale
    const tl = gsap.timeline();
    
    // Anima l'illustrazione solo se esiste (solo nel login)
    if (illustrationRef.current) {
      tl.fromTo(
        illustrationRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );
    }
    
    // Anima sempre il form container
    tl.fromTo(
      containerRef.current?.querySelector('.form-container') as gsap.TweenTarget,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      illustrationRef.current ? "-=0.5" : undefined
    );
  }, []);

  const handleToggle = () => {
    const formContainer = containerRef.current?.querySelector('.form-container') as gsap.TweenTarget;
    
    gsap.to(formContainer, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setIsLogin(!isLogin);
        gsap.to(formContainer, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle,_#A283FF,_#BEA8FF,_#DED2FF)] flex items-center justify-center p-4">
      <div ref={containerRef} className="w-full max-w-md">
        {isLogin && (
          <div ref={illustrationRef} className="mb-8 flex justify-center">
            <AuthIllustration />
          </div>
        )}
        <div className="form-container bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30">
          {isLogin ? (
            <LoginForm onToggle={handleToggle} />
          ) : (
            <RegisterForm onToggle={handleToggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessPage;