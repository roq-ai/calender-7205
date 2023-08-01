import * as yup from 'yup';

export const calendarValidationSchema = yup.object().shape({
  year: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
