import { baseApi } from "../base";
import { blogResponse } from "./type";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBlog: build.query<blogResponse, any>({
      query: () => ({
        method: "GET",
        url: "/blog",
      }),
    
    }),
    getBlogBySlug: build.query<any, any>({
      query: (slug) => `/blog/${slug}`,
    }),
  }),
});

export const { useGetBlogQuery, useLazyGetBlogBySlugQuery } = blogApi;
