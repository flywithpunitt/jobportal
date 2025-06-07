import { baseApi } from "../base";
import { createEducationRequest, getEducationResponse } from "./type";


const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
cretaeEducation:build.mutation<any, createEducationRequest>({
    query: (data) => ({
      method: "POST",
      url: "/education",
      body: data,
    }),
    invalidatesTags: ["education"],
  }),
  getEducation: build.query<getEducationResponse, any>({
    query: () => ({
      method: "GET",
      url: "/education",
    }),
    providesTags: ["education"],
  }),
  deleteEducation: build.mutation<any, any>({
    query: (id) => ({
      url: `/education/${id}`,
      method: 'DELETE',
    }),
    invalidatesTags: ['education'],
  }),
  }),
});

export const { useCretaeEducationMutation, useGetEducationQuery, useDeleteEducationMutation } = authApi;