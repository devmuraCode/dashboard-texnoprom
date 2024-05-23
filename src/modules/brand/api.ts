import { AxiosPromise } from "axios";
import * as Types from "./types";
import http from "@/services/http";

const createFormData = (values: Types.IForm.Values): FormData => {
  const formData = new FormData();
  formData.append("title", values.title);
  formData.append("category_id", values.category_id);
  if (values.logo) {
    formData.append("logo", values.logo);
  }

  return formData;
};

export const List = (): AxiosPromise<Types.IApi.List.Response> =>
  http.request.get("/brands/");

export const Single = ({
  id,
}: {
  id: string;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/brands/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> => {
  const formData = createFormData(values);

  return http.request.post("/brands/", formData, {
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

  return http.request.put(`/brands/${id}`, formData, {
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
  return http.request.delete(`/brands/${id}/`);
};
