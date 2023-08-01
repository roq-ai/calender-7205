import axios from 'axios';
import queryString from 'query-string';
import { DayInterface, DayGetQueryInterface } from 'interfaces/day';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDays = async (query?: DayGetQueryInterface): Promise<PaginatedInterface<DayInterface>> => {
  const response = await axios.get('/api/days', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDay = async (day: DayInterface) => {
  const response = await axios.post('/api/days', day);
  return response.data;
};

export const updateDayById = async (id: string, day: DayInterface) => {
  const response = await axios.put(`/api/days/${id}`, day);
  return response.data;
};

export const getDayById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/days/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDayById = async (id: string) => {
  const response = await axios.delete(`/api/days/${id}`);
  return response.data;
};
