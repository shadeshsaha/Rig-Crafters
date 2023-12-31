import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Rig Crafters</title>
      </Head>
      <div className=" px-6 py-12 lg:px-8 border ">
        <div className="lg:border max-w-[600px] py-12 mx-auto lg:rounded-md lg:shadow-md">
          <div className="sm:mx-auto  sm:w-full sm:max-w-sm flex flex-col justify-start items-center ">
            <Link href="/">
              <div className={""}>
                <Image src="/logo.jpg" alt="Logo" height={40} width={180} />
              </div>
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign In
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <button
              onClick={() =>
                signIn("google", {
                  // callbackUrl: "http://localhost:3000",
                  callbackUrl: process.env.NEXT_PUBLIC_NEXT_APP_URL,
                })
              }
              className="flex w-full justify-center items-center rounded-md bg-red-500 p-3 my-2 text-sm  leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-bold"
            >
              <BsGoogle />
              <span className="ml-2">Sign in with Google</span>
            </button>

            <button
              onClick={() =>
                signIn("github", {
                  // callbackUrl: "http://localhost:3000",
                  callbackUrl: process.env.NEXT_PUBLIC_NEXT_APP_URL,
                })
              }
              className="flex w-full justify-center items-center rounded-md bg-black p-3 my-2 text-sm  leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-bold"
            >
              <BsGithub />
              <span className="ml-2">Sign in with Github</span>
            </button>

            <p className="mt-10 text-center text-sm text-gray-500">
              <Link
                href="/"
                className="font-semibold leading-6"
                style={{ color: "#081621" }}
              >
                Build Your Beast PC
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
