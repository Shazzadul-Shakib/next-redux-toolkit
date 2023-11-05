'use client'
import { useDispatch, useSelector } from "react-redux";
import { login } from '@/redux/login/loginSlice';

export default function Login() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
  }

  return (
    <div className="flex justify-center h-screen">
      <div className="w-1/3 mx-auto mt-10 ">
        <form action="" className="flex-col" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              className=" bg-gray-300 p-4 rounded-md my-2 appearance-none w-full"
              placeholder=" Enter your name"
            />
          </div>
          <div>
            <input
              type="email"
              className=" bg-gray-300 p-4 rounded-md my-2 appearance-none w-full"
              placeholder=" Enter your email"
            />
          </div>
          <div className="">
            <input
              type="submit"
              className=" bg-gray-300 p-4 rounded-md my-2 appearance-none w-full text-lg text-gray-700 font-bold "
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}