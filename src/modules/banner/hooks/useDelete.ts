import { useMutation } from "react-query";
import * as Api from "../api";
import * as Types from "../types";
import * as Mappers from "../mappers";

const useDelete = () => {
  return useMutation<Types.IEntity.Data, Error, Types.IQuery.Delete>(
    async ({ id }) => {
      const { data } = await Api.Delete({ id });
      
      if (!data) {
        throw new Error("Не удалось удалить сущность");
      }

      return Mappers.getData(data.items);
    },
    {
      onError: (error) => {
        console.error("Ошибка при удалении:", error.message);
      },
    }
  );
};

export default useDelete;
