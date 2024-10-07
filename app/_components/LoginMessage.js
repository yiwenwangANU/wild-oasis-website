import Link from "next/link";

function LoginMessage() {
  return (
    <div className="flex-1 bg-primary-800 text-center text-xl flex items-center justify-center">
      <div className="w-1/2">
        Please&nbsp;
        <Link href="/login" className="underline text-accent-500 ">
          login
        </Link>
        &nbsp;to reserve this cabin right now
      </div>
    </div>
  );
}

export default LoginMessage;
