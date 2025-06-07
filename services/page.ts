export {
  useLazyGetAuthQuery,
  useGetCustomerLoginMutation,
  useGetCustomerRegisterMutation,
  useGetCustomerVerifyMutation,
  useGetResendOtpMutation,
  useGetForgotPasswordMutation,
  useGetForgotPasswordChageMutation
} from "./login/page";

export {
  useGetCustomerSkillsMutation,
  useDeleteSkillsMutation,
  useGetSkillsQuery,
} from "./skills/page";
export {
  useCretaeEducationMutation,
  useGetEducationQuery,
  useDeleteEducationMutation,
} from "./education/page";
export {
  useCretaeExperienceMutation,
  useDeleteExperienceMutation,
  useGetExperienceQuery,
} from "./experience/page";

export {
  useCretaeDocumentsMutation,
  useGetDocumentsQuery,
  useDeleteDocumentMutation
} from "./documents/page";

export { useLazyGetJobQuery, useLazyGetJobByIDQuery } from "./job/page";

export { useGetCategoryQuery } from "./category/page";

export {
  useCretaeApplicationMutation,
  useGetApplicationQuery,
  useDeleteApplicationMutation
} from "./application/page";

export { useGetBlogQuery , useLazyGetBlogBySlugQuery} from "./blog/page";

export { useCretaeContactMutation } from "./contact/page";

export { useGetProfileQuery, useCreateProfileMutation } from "./profile/page";
export {useGetNotificationQuery, useGetReviewQuery, useGetCreateReviewMutation, useGetPartnerQuery  } from "./notification/page";
