import { baseApi } from "../base";
import { authCustomerReq, } from "./type";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAuth: build.query<any, any>({
      query: (data) => ({
        method: "POST",
        url: `/login`,
        body: data,
      })
      
    }),

    getCustomerLogin: build.mutation<any, any>({
      query: (data: any) => ({
        method: "POST",
        url: "/login",
        body: data,
      }),
      invalidatesTags: ["profile", "notification", "application"],
    }),
    getCustomerRegister: build.mutation<authCustomerReq, any>({
      query: (data: any) => ({
        method: "POST",
        url: "/signup",
        body: data,
      }),
    }),
    getResendOtp: build.mutation<any, any>({
      query: (data: any) => ({
        method: "POST",
        url: "/resend_otp",
        body: data,
      }),
    }),
    getForgotPassword: build.mutation<any, any>({
      query: (data: any) => ({
        method: "POST",
        url: "/forget",
        body: data,
      }),
    }),
    getForgotPasswordChage: build.mutation<any, any>({
      query: (data: any) => ({
        method: "PATCH",
        url: "/forget",
        body: data,
      }),
    }),


    getCustomerVerify: build.mutation<any, any>({
      query: (data: any) => ({
        method: "PATCH",
        url: "/signup",
        body: data,
      }),
    }),
  }),
});

export const { useLazyGetAuthQuery, useGetCustomerLoginMutation, useGetCustomerRegisterMutation, useGetCustomerVerifyMutation, useGetResendOtpMutation, useGetForgotPasswordMutation, useGetForgotPasswordChageMutation } = authApi;
