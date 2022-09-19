import {Teacher} from './Teacher';


export interface Student {
  'id'?: number;
  'name'?: string;
  'group'?: string;
  'detai'?: string;
  'email'?: string;
  'phone'?: string;
  'teacher'?: Teacher;
}
