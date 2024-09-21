"use client";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

function GuestForm() {
  const [country, setCountry] = useState("");
  const [validate, setValidate] = useState(false);
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      className="bg-primary-900 px-10 py-5 mt-10 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="py-3">Full Name</div>
        <input
          className={`w-full text-primary-800  px-4 py-3 ${
            errors["Full name"]
              ? "bg-accent-100 border-l-8 border-accent-400"
              : "bg-primary-200"
          }`}
          placeholder={errors["Full name"] ? "This field is required." : ""}
          type="text"
          {...register("Full name", { required: true, maxLength: 80 })}
        />
      </div>
      <div className="relative">
        <div className="py-3">Email address</div>
        <input
          className={`block w-full text-primary-800  px-4 py-3 ${
            errors["Email"]
              ? "bg-accent-100 border-l-8 border-accent-400"
              : "bg-primary-200"
          }`}
          placeholder={
            errors["Email"]?.type === "required"
              ? "This field is required."
              : ""
          }
          type="text"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors["Email"]?.type === "pattern" && (
          <label className="absolute z-10 top-3 right-2.5 transition duration-300 text-red-400">
            Invalid Email address.
          </label>
        )}
      </div>
      <div>
        <div className="py-3">Where are you from?</div>

        <CountryDropdown
          className={`w-full text-primary-800  px-4 py-3 ${
            country === "" && validate === true
              ? "bg-accent-100 border-l-8 border-accent-400"
              : "bg-primary-200"
          }`}
          value={country}
          onChange={(val) => {
            setCountry(val);
            setValue("Country", val, { shouldValidate: true });
          }}
        />
      </div>
      <div>
        <div className="py-3">National ID number</div>
        <input
          className={`w-full text-primary-800  px-4 py-3 ${
            errors["National ID"]
              ? "bg-accent-100 border-l-8 border-accent-400"
              : "bg-primary-200"
          }`}
          placeholder={errors["National ID"] ? "This field is required." : ""}
          {...register("National ID", { required: true })}
          type="text"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className=" text-primary-800 text-center text-lg font-semibold bg-accent-500 px-6 py-3 mt-5 hover:bg-accent-600 transition-colors "
          onClick={() => {
            setValidate(true);
          }}
        >
          Update profile
        </button>
      </div>
    </form>
  );
}

export default GuestForm;
