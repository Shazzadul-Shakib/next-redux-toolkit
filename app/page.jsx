'use client'
import { increment, decrement, addby } from '@/redux/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="bg-gray-500 h-96 w-96 text-center flex justify-center items-center rounded-lg">
        <div>
          <div>
            <h1 className="my-5 text-6xl text-white">{count}</h1>
          </div>
          <div>
            <button
              onClick={() => dispatch(increment())}
              className=" p-4 rounded-md bg-amber-200 mx-2"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className={`p-4 rounded-md  mx-2 ${
                count === 0 ? "pointer-events-none bg-gray-500" : "bg-amber-200"
              }`}
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(addby(10))}
              className=" p-4 rounded-md bg-amber-200 mx-2"
            >
              Addby 10
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
