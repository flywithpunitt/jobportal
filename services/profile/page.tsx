import { baseApi } from "../base";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProfile: build.mutation<any, any>({
      query: (data) => ({
        method: "POST",
        url: "/profile",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    getProfile: build.query<any, any>({
      query: () => ({
        method: "GET",
        url: "/profile",
      }),
      providesTags: ["profile","notification"],
    }),
  }),
});

export const {useGetProfileQuery, useCreateProfileMutation} = profileApi;
