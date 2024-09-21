"use client";
import { useForm } from "react-hook-form";

function GuestForm() {
  const {
    register,
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
          className="w-full text-primary-800 bg-primary-200 px-4 py-3"
          type="text"
          {...register("Full name", { required: true, maxLength: 80 })}
        />
      </div>
      <div>
        <div className="py-3">Email address</div>
        <input
          className="w-full text-primary-800 bg-primary-200 px-4 py-3"
          type="text"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div>
        <div className="py-3">Where are you from?</div>
        <select
          className="w-full text-primary-800 bg-primary-200 px-4 py-3"
          placeholder="Email"
          {...register("Country", { required: true })}
        >
          <option value="Country1">Country1</option>
          <option value="Country2">Country2</option>
          <option value="Country3">Country3</option>
        </select>
      </div>
      <div>
        <div className="py-3">National ID number</div>
        <input
          className="w-full text-primary-800 bg-primary-200 px-4 py-3"
          {...register("Developer", { required: true })}
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
