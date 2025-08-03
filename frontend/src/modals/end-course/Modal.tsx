import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Overlay from '../Overlay';

const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const navigate = useNavigate()
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);


  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 300);
  };

  const handleHomeButton = () => {
    navigate("/homepage")
    onClose()
  }

  const userData = {
    avatar: "https://github.com/silvia.png",
    modulesCompleted: 10,
    modulesTotal: 8
  } 

  //con questo approccio la modale smette di esistere del tutto nel DOM
  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <Overlay onClose={handleClose} />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        <div 
          className={`bg-white w-full max-w-sm rounded-3xl shadow-lg relative p-6 text-center transition-all duration-300 ease-out pointer-events-auto ${
            isAnimating ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >

          <div className="flex flex-col items-center -mt-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
              <img src={userData.avatar} alt="user_avatar" className="w-full h-full rounded-full" />
            </div>
            <h2 className="text-2xl font-bold">prova</h2>
          </div>
          
          <div className="bg-purple-100 rounded-2xl p-4 my-6">
            <p className="text-3xl font-bold">prova</p>
            <p className="text-gray-500">Points</p>
          </div>
          
          <div className="bg-purple-100 rounded-2xl p-4 mb-6 flex items-center justify-center">
            <p className="mr-2">Moduli completati</p>
            <p className="ml-auto text-lg font-semibold">prova</p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <button className="bg-my-dark-yellow-200 text-black font-semibold py-3 rounded-2xl" onClick={handleHomeButton}>
              Home
            </button>
            <button className="bg-my-dark-yellow-200 text-black font-semibold py-3 rounded-2xl">
              Modalità wild
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Modal;