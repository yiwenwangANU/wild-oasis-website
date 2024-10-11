"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

function GuestForm({ children, guest }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fullName, email, nationality, nationalID } = guest;
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Profile updated successfully");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <form
      className="bg-primary-900 px-10 py-5 mt-10 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="py-3">Full Name</div>
        <input
          defaultValue={fullName}
          className={`w-full text-primary-800  px-4 py-3 ${
            errors["fullName"]
              ? "bg-accent-100 border-l-8 border-accent-400"
              : "bg-primary-200"
          }`}
          placeholder={errors["fullName"] ? "This field is required." : ""}
          type="text"
          {...register("fullName", { required: true, maxLength: 80 })}
        />
      </div>
      <div className="relative">
        <div className="py-3">Email address</div>
        <input
          defaultValue={email}
          disabled
          className="block w-full text-primary-400  px-4 py-3 bg-primary-600"
          type="text"
        />
      </div>
      <div>
        <div className="py-3">Where are you from?</div>
        <select
          className={`w-full text-primary-800  px-4 py-3 ${
            errors["country"]
              ? "bg-accent-100 border-l-8 border-accent-400"
              : "bg-primary-200"
          }`}
          defaultValue={nationality ? nationality : ""}
          {...register("country", {
            validate: (value) => value !== "",
          })}
        >
          <option value="" disabled>
            Select your country
          </option>
          {children}
        </select>
      </div>
      <div>
        <div className="py-3">National ID number</div>
        <input
          defaultValue={nationalID}
          className={`w-full text-primary-800 px-4 py-3 ${
            errors["nationalID"]
              ? "bg-accent-100 border-l-8 border-accent-400"
              : "bg-primary-200"
          }`}
          placeholder={errors["nationalID"] ? "This field is required." : ""}
          {...register("nationalID", { required: true })}
          type="text"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className=" text-primary-800 text-center text-lg font-semibold bg-accent-500 px-6 py-3 mt-5 hover:bg-accent-600 transition-colors "
        >
          Update profile
        </button>
      </div>
    </form>
  );
}

export default GuestForm;
