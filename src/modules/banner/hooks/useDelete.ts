import { useMutation, useQueryClient } from "react-query";

import * as Api from "../api";
import * as Types from "../types";
import * as Mappers from "../mappers";
import * as Constants from "../constants";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation<Types.IEntity.Data, string, Types.IQuery.Delete, any>(async ({ id }) => {
    try {
      const { data } = await Api.Delete({ id });
      
      if (!data) {
        throw new Error("Не удалось удалить сущность");
      }

      return Mappers.getData(data.items);
    } catch (error) {
      throw new Error("Не удалось выполнить удаление: " + error.message);
    }
  })};

export default useDelete;
