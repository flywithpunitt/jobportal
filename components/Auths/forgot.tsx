"use client";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import {
  useGetForgotPasswordChageMutation,
  useGetForgotPasswordMutation,
} from "@/services/page";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [getOtpForgot] = useGetForgotPasswordMutation();
  const [getChangePassword] = useGetForgotPasswordChageMutation();
  const [ui, setUi] = useState(false);
  const [hash, setHash] = useState<string>();
  const [number, setNumber] = useState<any>();
  const router = useRouter();

  const forgetOtpSchema = Yup.object({
    otp: Yup.string().required("Otp is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf(
        [Yup.ref("password")],
        "Confirm Passwords must match with password"
      ),
  });
  const defaultValues = {
    otp: "",
    password: "",
    confirmPassword: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, },
  } = useForm({
    resolver: yupResolver(forgetOtpSchema),
    defaultValues,
  });
  useEffect(() => {
    if (errors?.otp as any) {
      enqueueSnackbar(`${errors?.otp?.message}`, { variant: "error" });
    } else if (errors?.password) {
      enqueueSnackbar(`${errors?.password?.message}`, { variant: "error" });
    } else if (errors?.confirmPassword) {
      enqueueSnackbar(`${errors?.confirmPassword?.message}`, {
        variant: "error",
      });
    }
  }, [errors]);

  const onSubmits = async (data: any) => {
    setIsLoading(true)

    await getChangePassword({
      otp: data?.otp,
      hash: hash,
      password: data?.password,
    })
      .unwrap()
      .then((res: any) => {
    setIsLoading(false)

        if (res?.message) {
          reset();
          enqueueSnackbar(`${res?.message}`, { variant: "success" });
          router.push("/");
        }
      })
      .catch((error: any) => {
    setIsLoading(false)

        console.log(error);
        if (error?.data?.message) {
          enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
        }
      });
  };

  const onSubmit = async (data: any) => {
    await getOtpForgot({
      phone: number,
    })
      .unwrap()
      .then((res: any) => {
        setHash(res?.data?.hash);
        enqueueSnackbar("Otp send successfull !", { variant: "success" });
        setUi(true);
      })
      .catch((error: any) => {
        console.log(error);
        if (error?.status === 500) {
          enqueueSnackbar("Internal servar error !", { variant: "error" });
        } else if (error?.data?.message) {
          enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
        }
      });
  };
  return (
    <>
      {ui ? (
        <>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4} style={{ paddingTop: 250, paddingBottom: 200 }}>
              <div className="text-center mb-4">
                <h5>Change password</h5>
                {/* <p className="-70">Add review</p> */}
              </div>
              <form onSubmit={handleSubmit(onSubmits)} className="auth-form">
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Otp
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otp"
                    placeholder="Enter otp"
                    {...register("otp")}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register("password")}
                    placeholder="Enter new password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    {...register("confirmPassword")}
                    placeholder="Confirm password"
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-hover" disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Sumbit'}
                  </button>
                </div>
              </form>
              <div className="">
                <p className="mt-2">
                  <Link
                    href=""
                    className="fw-medium text-decoration-underline"
                    onClick={onSubmit}
                  >
                    {" "}
                    Resend otp{" "}
                  </Link>
                </p>
              </div>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}>
              <div className="text-center mb-4" style={{ paddingTop: 250 }}>
                <h5>Forgot Password </h5>
                <p className="-70"></p>
              </div>
              {/* <form onSubmit={handleSubmit(onSubmit)} className="auth-form"> */}
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Phone
                </label>
                <input
                  // {...register("phone")}
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone"
                 
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>

              <div className="text-center" style={{ paddingBottom: 220 }}>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-primary btn-hover"
                >
                  Forgot Password
                </button>
              </div>
              {/* </form> */}
            </Col>
            <Col lg={4}></Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
