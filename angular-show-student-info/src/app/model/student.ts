export class Student {
  name?: string;
  birthday?: string;
  gender?: string;
  mask?: number;
  avatar?: string;


  constructor(name?: string, birthday?: string, gender?: string, mask?: number, avatar?: string) {
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.mask = mask;
    this.avatar = avatar;
  };
}
