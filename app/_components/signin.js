import { signIn } from "@/app/_libs/auth";

export default function SignIn() {
  return (
    <>
      <h1 className="text-3xl text-center text-primary-100 ">
        Login in or Sign up to continue
      </h1>
      <div className="flex flex-col items-center p-10 max-w-fit mx-auto">
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/account" });
          }}
        >
          <button
            className="text-primary-200 py-2 px-12 rounded-md  border shadow-primary-200 relative"
            type="submit"
          >
            <img
              className="absolute left-4"
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google logo"
              height="20"
              width="20"
            />
            <div className="translate-x-3">Sign in with Google</div>
          </button>
        </form>
      </div>
    </>
  );
}
