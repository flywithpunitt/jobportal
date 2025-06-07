import { baseApi } from "../base";
import { notificationResponse } from "./type";

const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query<notificationResponse, any>({
      query: () => ({
        method: "GET",
        url: "/notification",
      }),
     providesTags: ["notification"],
    }),
    getReview: build.query<any, any>({
      query: () => ({
        method: "GET",
        url: "/review",
      }),
      providesTags: ["review"],
    }),
    getCreateReview: build.mutation<any, any>({
      query: (data) => ({
        method: "POST",
        url: "/review",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getPartner: build.query<any, any>({
      query: () => ({
        method: "GET",
        url: "/partner",
      }),
      providesTags: ["partner"],
    }),
  }),
});

export const { useGetNotificationQuery, useGetReviewQuery, useGetCreateReviewMutation, useGetPartnerQuery } = notificationApi;
