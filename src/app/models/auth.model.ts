export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    error: string | null;
  }
  
  export interface User {
    filter: any;
    id: string;
    email: string;
    password :string
    role:string
  }
  