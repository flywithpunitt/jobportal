import { baseApi } from "../base";
import { createSkillrequest, getSkillsResponse } from "./type";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerSkills: build.mutation<any, createSkillrequest>({
      query: (data) => ({
        method: "POST",
        url: "/skill",
        body: data,
      }),
      invalidatesTags: ["skills"],
    }),
    getSkills: build.query<getSkillsResponse, any>({
        query: () => ({
          method: "GET",
          url: "/skill",
        }),
        providesTags: ["skills"],
      }),
      deleteSkills: build.mutation<any, any>({
        query: (id) => ({
          url: `skill/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['skills'],
      }),
  }),
});

export const { useGetCustomerSkillsMutation , useGetSkillsQuery, useDeleteSkillsMutation} = authApi;
