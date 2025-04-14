export interface SignUpFormData {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
  phoneNum: {
    first: number;
    middle: number;
    last: number;
  };
  birth: {
    year: string;
    month: string;
    day: string;
  };
  favoriteGame: string;
}