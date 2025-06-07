import { baseApi } from "../base";
import { jobCategoryResponse } from "./type";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<jobCategoryResponse, any>({
      query: () => ({
        method: "GET",
        url: "/category",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const {useGetCategoryQuery} = categoryApi;
