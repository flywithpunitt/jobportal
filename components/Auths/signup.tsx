"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import {  useForm } from "react-hook-form";
import { Card, } from "reactstrap";
import { enqueueSnackbar } from "notistack";
import * as Yup from "yup";
import {  useGetCustomerRegisterMutation, useGetCustomerVerifyMutation, useGetResendOtpMutation } from "@/services/page";
import Link from "next/link";

const SignUp = ({ signupModel, customerNum }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState<any>();
  const [otp, setOtp] = useState<any>();
  const [hash, setHash] = useState<string>();
  const [registerCustomer] = useGetCustomerRegisterMutation();
  const [getCustomer] = useGetCustomerVerifyMutation();
  const [getOtp] = useGetResendOtpMutation();
  const [uichange, setUiChange]= useState(false)

  useEffect(() => {
    setNumber(customerNum)
  }
  , [customerNum,]);
  const SignupSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]*$/, "Must be number formate")
      .min(10)
      .max(10)
      .required("Phone number required"),
    name: Yup.string().required(" Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required").min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Confirm Passwords must match with password'),
  });

  const defaultValues = {
    name: "",
    phone: "",
    email: "",
    password: '',
    confirmPassword:''
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues,
  });

  useEffect(() => {
    setValue("phone", number);
  }, [number]);

  useEffect(() => {
    if (errors?.name as any) {
      enqueueSnackbar(`${errors?.name?.message}`, { variant: "error" });
    } else if (errors?.email) {
      enqueueSnackbar(`${errors?.email?.message}`, { variant: "error" });
    } else if (errors?.phone) {
      enqueueSnackbar(`${errors?.phone?.message}`, { variant: "error" });
    }else if (errors?.password) {
      enqueueSnackbar(`${errors?.password?.message}`, { variant: "error" });
    }else if (errors?.confirmPassword) {
      enqueueSnackbar(`${errors?.confirmPassword?.message}`, { variant: "error" });
    }
  }, [errors]);
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await registerCustomer({
      name: data?.name,
      phone: number.toString(),
      email: data?.email,
      password: data?.password
    })
      .unwrap()
      .then((res: any) => {
        setIsLoading(false);
        if (res?.message) {
          reset();
          setHash(res?.data?.hash)
          enqueueSnackbar(`${res?.message}`, { variant: "success" });
          enqueueSnackbar('Otp send successfully !', { variant: "success" });
          setUiChange(true)
          // signupModel();
         
        }
      })
      .catch((error: any) => {
        setIsLoading(false);
        console.log(error);
        if (error?.data?.phone) {
          enqueueSnackbar("Phone no is alredy registered.", {
            variant: "error",
          });
        }
      });
  };

  const onSubmits = async (data:any)=>{
    await getCustomer({
      otp: otp,
      hash: hash,
    }).unwrap()
      .then((res: any) => {
          signupModel();
          enqueueSnackbar(" Account verified successfully!", { variant: "success" });
   
      })
      .catch((error:any) => {
        console.log(error);
        if (error?.data?.message) {
          enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
        }
      });

  }

  const resendOtp = async () => {
    await getOtp({
      phone: number.toString(),
    })
      .unwrap()
      .then((res: any) => {
        setHash(res?.data?.hash);
        enqueueSnackbar("Otp send successfull !", { variant: "success" });
   
      })
      .catch((error:any) => {
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
    {
      uichange ? <>  <div className="text-center mb-4" >
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
          placeholder="Enter your otp"
          required
          onChange={(e)=>{setOtp(e.target.value)}}
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary btn-hover" onClick={onSubmits}>
        Submit
        </button>
      </div>
      
      <div className="text-center">
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
          </div></> : <>
      <Card style={{ border: "none", padding: 15 }}>
        <div className="text-center">
          <h5>Let's Get Started</h5>
          <p className="70">
            Sign Up and get access to all the features of Wiztrace
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              // required
              id="name"
              placeholder="Enter your name"
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              // required
              id="email"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Phone
            </label>

            <input
              type="text"
              className="form-control"
              id="phone"
              value={number}
              {...register("phone")}
              placeholder="Enter your phone number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password")}
              placeholder="Enter your password"
             
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
            Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              {...register("confirmPassword")}
              placeholder="Confirm password"
             
            />
          </div>
          <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  required
                />
                <label
                  //   className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                  I agree to the{" "}
                  <Link target="_blank" href="/terms" className=" text-decoration-underline">
                    Terms and conditions
                  </Link>.
                </label>
              </div>
            </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-hover" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </Card></>
    }
    

    </>
  );
};
export default SignUp;


