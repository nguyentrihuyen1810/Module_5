import {CustomerType} from './CustomerType';

export interface Customer {
  customerId?: number;
  customerType?: CustomerType;
  customerName?: string;
  birthday?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
}
