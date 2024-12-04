import api from "./api";

interface Login {
  email: string;
  password: string;
  token: string;
}

interface Register {
  email: string;
  password: string;
  name: string;
  userType: string;
}

export const Login = async (
  email: string,
  password: string,
): Promise<Login> => {
  try {
    const response = await api.post<Login>("/auth/login", { email, password });

    console.log("Resposta do backend:", response.status, response.data);

    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao fazer login!",
      error.response?.data || error.message
    );

    // Lança um erro com mensagem mais amigável
    throw new Error(
      error.response?.data?.message || "Erro ao fazer login. Tente novamente."
    );
  }
};

export const Register = async (
  email: string,
  password: string,
  name: string,
  userType: string
): Promise<Register> => {
  try {
    const response = await api.post<Register>("/auth/register", {
      email,
      password,
      name,
      userType,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao cadastrar novo cliente!",
      error.response?.data || error.message
    );
    throw error;
  }
};
