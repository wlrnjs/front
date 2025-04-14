export interface SignUpFormData {
  email: string;
  checkedEmailNumber: string;
  password: string;
  checkedPassword: string;
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