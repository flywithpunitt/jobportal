import {
  useGetCustomerVerifyMutation,
  useGetResendOtpMutation,
  useLazyGetAuthQuery,
} from "@/services/page";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { updateToken } from "@/redux/slice/user";
import Link from "next/link";

const SignIn = ({ signInModel, funProps, numProps }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [getAuth] = useLazyGetAuthQuery();
  const [getCustomer] = useGetCustomerVerifyMutation();
  const [getOtp] = useGetResendOtpMutation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState<any>();
  const [ui, setUi] = useState(false);
  const [hash, setHash] = useState<string>();
  const [number, setNumber] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [emailOrPhone, setEmailOrPhone] = useState<any>();
  const [showPassword, setShowPassword] = useState(false);

  const SigninSchema = Yup.object({
    phone: Yup.string(),
    email: Yup.string(),
    password: Yup.string().required("Password is  required"),
  });
  const defaultValues = {
    phone: "",
    email:"",
    password: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, },
  } = useForm({
    resolver: yupResolver(SigninSchema),
    defaultValues,
  });
  useEffect(() => {
    if (errors?.phone as any) {
      enqueueSnackbar(`${errors?.phone?.message}`, { variant: "error" });
    }
  }, [errors]);

  const resendOtp = async () => {
    await getOtp({
      phone: number,
    })
      .unwrap()
      .then((res: any) => {
        setHash(res?.data?.hash);
        enqueueSnackbar("Otp send successfull !", { variant: "success" });
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

  function checkEmailOrPhone(input:string) {
    // Regular expression to match email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Regular expression to match phone number
    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
    
    // Check if the input matches email regex
    if (emailRegex.test(input)) {
      setEmail(input);
    } 
    // Check if the input matches phone number regex
    else if (phoneRegex.test(input)) {
      setNumber(input);
    } 
    // If input matches neither email nor phone number
    else {
      return "";
    }
  }

  const onSubmit = async (data: any) => {
    checkEmailOrPhone(emailOrPhone)
    setIsLoading(true)
    await getAuth({
      phone: number,
      email: email,
      password: data?.password,
    })
      .unwrap()
      .then((res: any) => {
         setIsLoading(false)
        if (res?.user?.status == "unverified") {
          enqueueSnackbar("Please verify first!", { variant: "warning" });
          setUi(true);
          resendOtp();
          setEmailOrPhone(emailOrPhone);
        } else if (res?.token) {
          signInModel(false);
          dispatch(
            updateToken({
              token: res?.token,
            })
          );
          enqueueSnackbar("Login successfull !", { variant: "success" });
        }
      })
      .catch((error) => {
           setIsLoading(false)
        console.log(error);
        if (error?.status === 500) {
          enqueueSnackbar("Internal servar error !", { variant: "error" });
        } else if (error?.data?.message) {
          funProps();
          enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
        }
      });
  };
  const onSubmits = async (data: any) => {
    await getCustomer({
      otp: otp,
      hash: hash,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar(" Account verified successfully!", {
          variant: "success",
        });
        setUi(false);
      })
      .catch((error: any) => {
        console.log(error);
        if (error?.data?.message) {
          enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
        }
      });
  };

  return (
    <>
      {ui ? (
        <>
          <div className="text-center mb-4">
            <h5>Verify otp</h5>
            {/* <p className="-70">Add review</p> */}
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Otp
            </label>
            <input
              type="text"
              className="form-control"
              id="otp"
              name="otp"
              placeholder="Enter otp"
              required
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-hover"
              onClick={onSubmits}
            >
              Verify otp
            </button>
          </div>
          <div className="">
            <p className="mt-2">
              <Link
                href=""
                className="fw-medium text-decoration-underline"
                onClick={resendOtp}
              >
                {" "}
                Resend otp{" "}
              </Link>
            </p>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="text-center mb-4">
            <h5>Welcome Back !</h5>
            <p className="-70">Sign in to continue to Wiztrace.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Email or Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="emailOrPhone"
                name="emailOrPhone"
                placeholder="Enter your Email or Phone"
                onChange={(e) => {
                  checkEmailOrPhone(e.target.value);
                }}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Phone
              </label>
              <input
                {...register("phone")}
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
            <div className="text-center">
                OR
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div> */}

            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="">
              <p className="mt-2">
                <Link href="/forgot_password" className="fw-medium text-decoration-underline" onClick={()=>{ signInModel(false);}}>
                  Forgot password
                </Link>
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-hover" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Sign In'}
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default SignIn;
