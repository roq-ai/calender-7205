import { DayInterface } from 'interfaces/day';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CalendarInterface {
  id?: string;
  year: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  day?: DayInterface[];
  organization?: OrganizationInterface;
  _count?: {
    day?: number;
  };
}

export interface CalendarGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
