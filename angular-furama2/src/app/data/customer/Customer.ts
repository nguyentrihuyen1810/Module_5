import {CustomerType} from './CustomerType';

export interface Customer {
  id?: number;
  name?: string;
  birthday?: string;
  gender?: string;
  phone?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
