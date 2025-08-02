import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface FormProps {
  title: string;
  fields: Array<{
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
  }>;
  buttonText: string;
  onSubmit: (data: Record<string, string>) => void;
  toggleText: string;
  onToggle: () => void;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  title,
  fields,
  buttonText,
  onSubmit,
  toggleText,
  onToggle,
  children
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Animazione staggered per i campi
    const inputs = formRef.current?.querySelectorAll('.form-field');
    if (inputs) {
      gsap.fromTo(
        inputs,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Rimuovi errore quando l'utente inizia a digitare
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione semplice
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.name} è richiesto`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Animazione shake per errori
      const errorInputs = Object.keys(newErrors).map(name => 
        formRef.current?.querySelector(`[name="${name}"]`)
      ).filter(Boolean);
      
      gsap.to(errorInputs, {
        keyframes: {
          x: [-10, 10, -10, 10, 0]
        },
        duration: 0.4,
        ease: "power2.inOut"
      });
      
      return;
    }

    onSubmit(formData);
  };


  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
      </div>

      {fields.map((field) => (
        <div key={field.name} className="form-field space-y-1">
          <div className="relative">
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`w-full px-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border ${
                errors[field.name] ? 'border-red-400' : 'border-white/30'
              } placeholder-gray-500 text-gray-800 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-300`}
              onFocus={(e) => {
                gsap.to(e.target, {
                  scale: 1.02,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
              onBlur={(e) => {
                gsap.to(e.target, {
                  scale: 1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
            />
          </div>
          
          <div className="h-5 flex items-start">
            {errors[field.name] && (
              <p className="text-red-300 text-sm ml-2">{errors[field.name]}</p>
            )}
          </div>
        </div>
      ))}

      {children}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        onMouseEnter={(e) => {
          gsap.to(e.target, {
            y: -2,
            duration: 0.2,
            ease: "power2.out"
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.target, {
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          });
        }}
      >
        {buttonText}
      </button>

      <div className="text-center">
        <button
          type="button"
          onClick={onToggle}
          className="bg-transparent text-white/80 hover:text-white transition-colors underline"
        >
          {toggleText}
        </button>
      </div>
    </form>
  );
};

export default Form;