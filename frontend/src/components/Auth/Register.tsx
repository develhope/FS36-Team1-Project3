import React from 'react';
import Form from './Form';
import { useRegistration } from '../../hooks/fetch/useRegistration';
import useToast from '../../hooks/toast/useToast';

interface RegisterFormProps {
  onToggle: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggle }) => {

  const {userRegistration} = useRegistration()
  const {showToast} = useToast()

  const registerFields = [
    {
      name: 'nome',
      type: 'text',
      placeholder: 'Inserisci il tuo nome',
      required: true
    },
    {
      name: 'nickname',
      type: 'text',
      placeholder: 'Inserisci il nickname',
      required: true
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Inserisci l\'email',
      required: true
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Inserisci la password',
      required: true
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Conferma la password',
      required: true
    }
  ];

  const handleRegister = (data: Record<string, string>) => {
    if (data.password !== data.confirmPassword) {
      showToast("Le password non coincidono", "danger")
      return;
    }
    
    userRegistration({
      name: data.nome,
      nickname: data.nickname,
      email: data.email,
      password: data.password
    })
    
  };

  return (
    <Form
      title="Registrati"
      fields={registerFields}
      buttonText="Registrati"
      onSubmit={handleRegister}
      toggleText="Hai già un account? Accedi"
      onToggle={onToggle}
    />
  );
};

export default RegisterForm;