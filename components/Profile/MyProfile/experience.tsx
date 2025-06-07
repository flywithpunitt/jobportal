"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "reactstrap";
import * as Yup from "yup";
import { useCretaeExperienceMutation } from "@/services/page";

const Experience = ({ expModal }: any) => {
  const [createExperience] = useCretaeExperienceMutation();
  const [checked, setChecked] = useState(false);


  const defaultValues = {
    company: "",
    position: "",
    startDate: new Date(),
    endDate: new Date(),
    responsibility: "",
  };
  const CreatexpSchema = Yup.object().shape({
    company: Yup.string().required("Company is required"),
    position: Yup.string().required("Position is required"),
    startDate: Yup.date()
      .required("Start Date is required.")
      .max(new Date(), "Start Date cannot be in the future.")
      .test(
        "start-date-check",
        "Start Date must be before End Date.",
        function (value) {
          const endDate = this.parent.endDate;
          if (!endDate) return true;
          return new Date(value) <= new Date(endDate);
        }
      ),
    endDate: Yup.date().max(new Date(), "End Date cannot be in the future."),
    responsibility: Yup.string().required("Responsibility is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreatexpSchema),
    defaultValues,
  });

  useEffect(() => {
    if (errors?.company as any) {
      enqueueSnackbar(`${errors?.company?.message}`, { variant: "error" });
    } else if (errors?.position) {
      enqueueSnackbar(`${errors?.position?.message}`, { variant: "error" });
    } else if (errors?.startDate) {
      enqueueSnackbar(`${errors?.startDate?.message}`, { variant: "error" });
    } else if (errors?.responsibility) {
      enqueueSnackbar(`${errors?.responsibility?.message}`, {
        variant: "error",
      });
    } else if (errors?.endDate) {
      enqueueSnackbar(`${errors?.endDate?.message}`, { variant: "error" });
    }
  }, [errors]);

  const onSubmitEducation = async (data: any) => {
    const startDate = new Intl.DateTimeFormat(["ban", "id"]).format(
      data?.startDate
    );
    const endDate = new Intl.DateTimeFormat(["ban", "id"]).format(
      data?.endDate
    );
    await createExperience({
      company_name: data.company,
      position: data.position,
      duration: startDate + "- " + endDate,
      job_responsibility: data.responsibility,
    })
      .unwrap()
      .then((res) => {
        reset();
        expModal();
        enqueueSnackbar(`${res.message}`, { variant: "success" });
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(`${err.data.message}`, { variant: "error" });
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      });
  };
  return (
    <>
      <Card style={{ border: "none", padding: 15 }}>
        <div className="text-center">
          <h5>Add Experience Details</h5>
        </div>
        <form onSubmit={handleSubmit(onSubmitEducation)} className="auth-form">
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="school"
              placeholder="Company"
              {...register("company")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Position
            </label>
            <input
              type="text"
              className="form-control"
              id="position"
              placeholder="Position"
              {...register("position")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Start Date
            </label>

            <input
              type="date"
              className="form-control"
              id="startDate"
              {...register("startDate")}
              placeholder="Start date"
            />
          </div>

          <div className="mb-3">
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
            <label
              htmlFor="usernameInput"
              className="form-label"
              style={{ marginLeft: 15 }}
            >
              Currently working
            </label>
          </div>
          {checked ? (
            <></>
          ) : (
            <>
              <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">
                  End Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  {...register("endDate")}
                  placeholder="End date "
                />
              </div>
            </>
          )}

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Responsibility
            </label>

            <textarea
              rows={3}
              className="form-control"
              id="description"
              {...register("responsibility")}
              placeholder="Description"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-hover">
              Add Experience
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Experience;
