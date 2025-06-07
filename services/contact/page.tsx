import { baseApi } from "../base";
import { ContactForm } from "./type";

const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cretaeContact: build.mutation<any, ContactForm>({
      query: (data) => ({
        method: "POST",
        url: "/contact",
        body: data,
      }),
    }),
  }),
});

export const {useCretaeContactMutation} = contactApi;
