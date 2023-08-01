import * as yup from 'yup';

export const dayValidationSchema = yup.object().shape({
  date: yup.date().required(),
  settings: yup.string().nullable(),
  calendar_id: yup.string().nullable(),
});
