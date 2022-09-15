import {Service} from './Service';

export interface Contract {
  id?: number;
  name?: string;
  start?: string;
  end?: string;
  desposit?: number;
  service?: Service;
}
