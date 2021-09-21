export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: Roles;
  username: string;
  profilePhotoUrl: string;
  companies?: Companies[];
  gender: Gender;
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

export interface Companies {
  id: number;
  name: string;
  description: string;
  location: Address;
}

export enum Roles {
  staff = 'staff',
  student = 'student',
  manager = 'manager',
  admin = 'admin',
}

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}
