import { DayInterface } from 'interfaces/day';
import { GetQueryInterface } from 'interfaces';

export interface MeetingInterface {
  id?: string;
  title: string;
  description?: string;
  day_id?: string;
  created_at?: any;
  updated_at?: any;

  day?: DayInterface;
  _count?: {};
}

export interface MeetingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  day_id?: string;
}
