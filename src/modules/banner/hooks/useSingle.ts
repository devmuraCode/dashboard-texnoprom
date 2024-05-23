import { useQuery } from "react-query";

import * as Api from "../api";
import * as Types from "../types";
import * as Mappers from "../mappers";
import * as Constants from "../constants";

interface IUseSingleProps {
  id: string;
}
const useSingle = ({ id }: IUseSingleProps) => {
  const { data: initialData, ...queryArgs } = useQuery<
    Types.IQuery.Single,
    string
  >(
    [Constants.ENTITY, "single", id],
    async () => {
      try {
        const { data } = await Api.Single({ id });
        return {
          item: Mappers.getData(data.items),
        };
      } catch (error) {
        throw new Error(
          "Не удалось получить данные сущности: " + error.message
        );
      }
    },
    {
      initialData: { item: { id: "", title_en: "", title_ru: "", img: null } },
      enabled: !!id,
      retry: false,
    }
  );

  return { ...queryArgs, ...initialData };
};

export default useSingle;
