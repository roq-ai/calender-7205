import { MeetingInterface } from 'interfaces/meeting';
import { CalendarInterface } from 'interfaces/calendar';
import { GetQueryInterface } from 'interfaces';

export interface DayInterface {
  id?: string;
  date: any;
  settings?: string;
  calendar_id?: string;
  created_at?: any;
  updated_at?: any;
  meeting?: MeetingInterface[];
  calendar?: CalendarInterface;
  _count?: {
    meeting?: number;
  };
}

export interface DayGetQueryInterface extends GetQueryInterface {
  id?: string;
  settings?: string;
  calendar_id?: string;
}
