import { AxiosPromise } from "axios";
import * as Types from "./types";
import http from "@/services/http";

const createFormData = (values: Types.IForm.Values): FormData => {
  const formData = new FormData();
  formData.append("title", values.title);
  formData.append("collection", values.collection);
  formData.append("description", values.description);

  return formData;
};

export const List = (): AxiosPromise<Types.IApi.List.Response> =>
  http.request.get("/categories/");

export const Single = ({
  id,
}: {
  id: string;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/categories/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> => {
  const formData = createFormData(values);

  return http.request.post("/categories/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const Update = ({
  id,
  values,
}: {
  id: string;
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> => {
  const formData = createFormData(values);

  return http.request.put(`/categories/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const Delete = ({
  id,
}: {
  id: string;
}): AxiosPromise<Types.IApi.Single.Response> => {
  return http.request.delete(`/categories/${id}/`);
};
