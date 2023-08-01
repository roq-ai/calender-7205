import * as yup from 'yup';

export const meetingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  day_id: yup.string().nullable(),
});
