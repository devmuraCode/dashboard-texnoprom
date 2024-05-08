import { useQuery } from "react-query";

import * as Api from "../api";
import * as Types from "../types";
import { getData } from "../mappers";
import * as Constants from "../constants";

const useList = () => {
  const initialData = { items: [] } as Types.IQuery.List;

  const { data = initialData, ...args } = useQuery<
    Types.IQuery.List,
    string,
    Types.IQuery.List
  >(
    [Constants.ENTITY, "list"],
    async () => {
      const { data: apiData } = await Api.List();
      console.log(apiData);
      // @ts-ignore
      const items = apiData?.map((item) => getData(item));
      console.log(items);

      return { items };
    },
    { initialData, keepPreviousData: true, retry: false }
  );

  return { ...data, ...args };
};

export default useList;
