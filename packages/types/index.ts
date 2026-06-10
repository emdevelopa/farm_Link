export interface User {
  id: string;
  name: string;
  email: string;
  role: 'FARMER' | 'BUYER' | 'TRANSPORTER' | 'ADMIN';
}
