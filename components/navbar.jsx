'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/login/loginSlice";

export default function Navbar() {
  const isLoggedIn = useSelector(state => state.isLoggedIn.value);
  console.log(isLoggedIn);
  const pathname = usePathname();
  const dispatch = useDispatch();
  return (
    <>
      <div className=" bg-gray-500 p-5 flex justify-center items-center gap-5 ">
        <Link
          href="/"
          className={`text-md  font-bold ${
            pathname == "/"
              ? "bg-white text-gray-500 rounded-md "
              : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/data"
          className={`text-md  font-bold ${
            pathname == "/data"
              ? "bg-white text-gray-500 rounded-md "
              : "text-white"
          }`}
        >
          Data
        </Link>
        <Link
          href={`${isLoggedIn ? "/counter" : "/login"}`}
          className={`text-md  font-bold ${
            pathname == "/counter"
              ? "bg-white text-gray-500 rounded-md "
              : "text-white"
          }`}
        >
          Counter
        </Link>
        <Link
          href="/login"
          className={`text-md text-white  font-bold ${
            pathname == "/login" ? "bg-white text-gray-500 rounded-md " : ""
          }${isLoggedIn ? "hidden" : ""}`}
        >
          Login
        </Link>
        <button
          onClick={() => dispatch(logout())}
          className={`text-md text-white font-bold ${
            isLoggedIn ? "" : "hidden"
          }`}
        >
          Logout
        </button>
      </div>
    </>
  );
}