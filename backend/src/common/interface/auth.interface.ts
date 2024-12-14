export interface RegisterDto {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userAgent?: string;
}

export interface LoginrDto {
  name: string;
  password: string;
  userAgent?: string;
}
