import {ServiceType} from './ServiceType';

export interface Service {
  'id'?: number;
  'name'?: string;
  'area'?: string;
  'max'?: number;
  'standard'?: string;
  'description'?: string;
  'floor'?: number;
  'serviceType'?: ServiceType;
}
