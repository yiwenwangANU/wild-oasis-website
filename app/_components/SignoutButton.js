import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

function SignoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex gap-4 hover:bg-primary-900 px-5 py-5 w-full"
    >
      <ArrowLeftStartOnRectangleIcon className="w-5 text-primary-700" />
      Sign out
    </button>
  );
}

export default SignoutButton;
