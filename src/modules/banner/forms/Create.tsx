import React from "react";
import { Form, Formik, FormikProps } from "formik";

import * as Api from "../api";
import * as Types from "../types";
import * as Mappers from "../mappers";
import { useMutation } from "react-query";

export type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): React.ReactNode;
}

const Create: React.FC<IProps> = ({
  onSuccess,
  onError,
  onSettled,
  children,
}) => {
  const mutation = useMutation<Types.IEntity.Data, string, IFormValues, any>(
    async (values) => {
      const { data } = await Api.Create({ values });

      return Mappers.getData(data && data.data);
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  const handleSubmit = (
    values: IFormValues,
    { isSubmitting, setSubmitting }: FormikProps<IFormValues>
  ) => {
    if (!isSubmitting) {
      setSubmitting(true);
      mutation.mutate(values, {
        onError: () => setSubmitting(false),
      });
    }
  };

  return (
    <Formik<IFormValues>
      onSubmit={handleSubmit}
      initialValues={{
        title_ru: "",
        title_en: "",
        description: "",
        img: "",
      }}
      enableReinitialize
    >
      {(props: FormikProps<IFormValues>) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Create;
