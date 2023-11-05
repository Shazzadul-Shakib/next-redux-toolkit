'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/login/loginSlice";

export default function Navbar() {
  const isLoggedIn = useSelector(state => state.isLoggedIn.value);
  const pathname = usePathname();
  const dispatch = useDispatch();
  return (
    <>
      <div className=" bg-gray-500 p-5 flex justify-center items-center gap-5 ">
        <Link href='/' className={`text-md text-white font-bold ${pathname=='/'? 'bg-white text-black p-3 rounded-md ':''}`}>Home</Link>
        <Link href={`${isLoggedIn? '/counter':'/login'}`} className={`text-md text-white font-bold ${pathname=='/counter'? 'bg-white text-black p-3 rounded-md ':''}`}>Counter</Link>
        <Link href='/login' className={`text-md text-white font-bold ${pathname=='/login'? 'bg-white text-black p-3 rounded-md ':''}${isLoggedIn?'hidden':''}`}>Login</Link>
        <button onClick={()=>dispatch(logout())} className={`text-md text-white font-bold ${isLoggedIn?'':'hidden'}`}>Logout</button>
      </div>
    </>
  );
}