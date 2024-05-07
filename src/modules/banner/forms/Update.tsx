import React from 'react';
import { Form, Formik, FormikProps } from 'formik';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import { useMutation } from '@tanstack/react-query';

type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  id: string;
  values: Types.IForm.Values;
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Update: React.FC<IProps> = ({ id, values, onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation<Types.IEntity.Data, string, IFormValues>(
    async values => {
      const { data } = await Api.Update({ id, values });

      return Mappers.getData(data && data.data);
    },
    {
      onSuccess,
      onError,
      onSettled,
    },
  );

  const handleSubmit = (
    values: IFormValues,
    { isSubmitting, setSubmitting }: FormikProps<IFormValues>,
  ) => {
    if (!isSubmitting) {
      setSubmitting(true);
      mutation.mutate(values, {
        onSettled: () => setSubmitting(false),
      });
    }
  };

  return (
    <Formik<IFormValues>
      onSubmit={handleSubmit}
      initialValues={{
        title_ru: values.title_ru,
        title_en: values.title_en,
        description: values.description,
        img: values.img,
      }}
      enableReinitialize
    >
      {(props: FormikProps<IFormValues>) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Update;
