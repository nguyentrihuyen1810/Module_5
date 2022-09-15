import {Position} from './Position';

export interface Employee {
  id?: number;
  name?: string;
  birthday?: string;
  phone?: string;
  email?: string;
  address?: string;
  position?: Position;
}
