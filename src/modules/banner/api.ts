import { AxiosPromise } from "axios";
import * as Types from "./types";
import http from "@/services/http";

const createFormData = (values: Types.IForm.Values): FormData => {
  const formData = new FormData();
  formData.append("title_ru", values.title_ru);
  formData.append("title_en", values.title_en);
  if (values.img) {
    formData.append("img", values.img);
  }
  
  return formData;
};

export const List = (): AxiosPromise<Types.IApi.List.Response> =>
  http.request.get("/banners");

export const Single = ({
  id,
}: {
  id: string;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/banners/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> => {
  const formData = createFormData(values);

  return http.request.post("/banners/", formData, {
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

  return http.request.put(`/banners/${id}`, formData, {
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
  return http.request.delete(`/banners/${id}/`);
};