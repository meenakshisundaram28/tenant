export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    error: string | null;
  }
  
  export interface User {
    email: string;
    password :string
  }
  