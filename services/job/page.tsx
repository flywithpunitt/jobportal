import { baseApi } from "../base";
import { getJobDetailResponse, getJobResponse } from "./type";

const jobApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getJob: build.query<getJobResponse, any>({
      query: ({
        location,
        category,
        industry,
        deadline,
        company,
        size,
        website,
        salary,
        limit,
        offset,
        job_type,
        search,
        experience,
        sort,
      }) => {
        return {
          url: `/job?location=${location}&category=${category}&industry=${industry}&deadline=${deadline}&company=${company}&size=${size}&website=${website}&salary=${salary}&limit=${limit}&offset=${offset}&job_type=${job_type}&search=${search}&sort=${sort}&experience=${experience}`,
        };
      },
      providesTags: ["job", "application","notification"],
    }),
    getJobByID: build.query<getJobDetailResponse, any>({
      query: (id) => `/job/${id}`,
    }),
  }),
});

export const { useLazyGetJobQuery, useLazyGetJobByIDQuery } = jobApi;
