import { useMutation, useQueryClient } from "react-query";

import * as Api from "../api";
import * as Types from "../types";
import * as Mappers from "../mappers";
import * as Constants from "../constants";

const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation<Types.IEntity.Data, string, Types.IQuery.Delete, any>(
    async ({ id }) => {
      try {
        const { data } = await Api.Delete({ id });

        if (!data) {
          throw new Error("Не удалось удалить сущность");
        }

        return Mappers.getData(data.item);
      } catch (error) {
        throw new Error("Не удалось выполнить удаление: " + error.message);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          predicate: (query) =>
            query.queryKey[0] === Constants.ENTITY &&
            query.queryKey[1] === "list",
        });
      },
    }
  );
};

export default useDelete;
