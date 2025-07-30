import { useState } from "react";

interface SignupUser{
  name: string;
  email: string;
  token: string;
}

export function useSignupUser(){
    const [user, setUser] = useState<SignupUser | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    //   const signup = async (email: string, password: string) => {
}
