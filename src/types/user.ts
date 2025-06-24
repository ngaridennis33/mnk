export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    phoneNumber: string | null;
    role: string;
    bio?: string | null;
    socialLinks?: string | null;
    createdAt: string;
  }
  
  export type UserResponse = {
    status: string;
    data:User;
  };