import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

function SignoutButton() {
  return (
    <button className="flex gap-4 hover:bg-primary-900 px-5 py-5 w-full">
      <ArrowLeftStartOnRectangleIcon className="w-5" />
      Sign out
    </button>
  );
}

export default SignoutButton;
