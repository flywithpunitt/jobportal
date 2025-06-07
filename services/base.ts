import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../redux/store";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    //STAGING URL
    // baseUrl: "https://job.sbsinternal.com/api/v1",

    //LIVE URL
    baseUrl: 'https://apis.wiztrace.com/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "skills",
    "education",
    "experience",
    "document",
    "job",
    "category",
    "application",
    "profile",
    "notification",
    "review",
    "partner"
  ],
});
