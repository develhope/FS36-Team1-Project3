import React from 'react';
import Form from './Form';
import { useLoginUser } from '../../hooks/fetch/useLoginUser';

interface LoginFormProps {
  onToggle: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggle }) => {

  const {userLogin} = useLoginUser()

  const loginFields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Inserisci la tua email',
      required: true
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Inserisci la password',
      required: true
    }
  ];

  const handleLogin = (data: Record<string, string>) => {
    userLogin({
      email: data.email,
      password: data.password
    })
  };

  return (
    <Form
      title="Accedi"
      fields={loginFields}
      buttonText="Accedi"
      onSubmit={handleLogin}
      toggleText="Non hai un account? Registrati"
      onToggle={onToggle}
    >
    </Form>
  );
};

export default LoginForm;