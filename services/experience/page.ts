import { baseApi } from "../base";
import { createExpRequest, getExpResponse } from "./type";

const expApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cretaeExperience: build.mutation<any, createExpRequest>({
      query: (data) => ({
        method: "POST",
        url: "/experience",
        body: data,
      }),
      invalidatesTags: ["experience"],
    }),
    getExperience: build.query<getExpResponse, any>({
      query: () => ({
        method: "GET",
        url: "/experience",
      }),
      providesTags: ["experience"],
    }),
    deleteExperience: build.mutation<any, any>({
      query: (id) => ({
        url: `experience/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["experience"],
    }),
  }),
});

export const {
  useCretaeExperienceMutation,
  useGetExperienceQuery,
  useDeleteExperienceMutation,
} = expApi;
