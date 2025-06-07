import { baseApi } from "../base";
import { getDocResponse } from "./type";

const docApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    cretaeDocuments: build.mutation<any, any>({
      query: (data) => ({
        method: "POST",
        url: "/document",
        body: data,
      }),
      invalidatesTags: ["document"],
    }),
    getDocuments: build.query<getDocResponse, any>({
      query: () => ({
        method: "GET",
        url: "/document",
      }),
      providesTags: ["document"],
    }),
    deleteDocument: build.mutation<any, any>({
      query: (id) => ({
        url: `/document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["document"],
    }),
  }),
});

export const {
  useCretaeDocumentsMutation,
  useGetDocumentsQuery,
  useDeleteDocumentMutation,
} = docApi;
