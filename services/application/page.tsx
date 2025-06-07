import { baseApi } from "../base";
import { applicationResponse, createAppRequest } from "./type";

const applicationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cretaeApplication: build.mutation<any, createAppRequest>({
      query: (data) => ({
        method: "POST",
        url: "/application",
        body: data,
      }),
      invalidatesTags: ["application"],
    }),
    deleteApplication: build.mutation<any, any>({
      query: (id) => ({
        url: `application/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['application'],
    }),
      getApplication: build.query<applicationResponse, any>({
        query: () => ({
          method: "GET",
          url: "/application",
        }),
        providesTags: ["application", "notification"],
      }),
  }),
});

export const { useCretaeApplicationMutation, useGetApplicationQuery, useDeleteApplicationMutation } = applicationApi;
