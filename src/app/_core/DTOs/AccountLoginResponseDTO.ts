export type AccountLoginResponseDTO = {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isEmailConfirmed: boolean;
  };
};
