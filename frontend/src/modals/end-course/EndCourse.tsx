// import { useEffect, useRef, useState } from 'react';
// import usePrevious from './usePrevious';
// import { useUserContext } from '../../context/user/useUserContext';
// import Modal from './Modal';


// const EndCourse = () => {
//   const [canBeOpen, setCanBeOpen] = useState(false);

//   const isMounted = useRef(false);
  
//   const {user} = useUserContext()
//   const {is_completed} = user
  
//   const prevCondition = usePrevious(is_completed);


//   useEffect(() => {
//     if (is_completed && !isMounted.current) {
//       console.log("Azione A: Il componente è partito con 'isAttivo' già a true.");
//       // Inserisci qui la logica da eseguire se il componente parte con il valore a true
//     }

//     if (is_completed && !prevCondition && isMounted.current) {
//       console.log("Azione B: 'isAttivo' è passato da false a true.");  
//       setCanBeOpen (true)
//     }
        
//     isMounted.current = true;

//   }, [is_completed, prevCondition]); 

//   return (
//     <Modal isOpen={canBeOpen} onClose={() => setCanBeOpen(false)} />
//   );
// };


// export default EndCourse