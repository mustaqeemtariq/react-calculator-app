import React, { useState } from "react";
import { Screen } from "../screen";
import { calculation } from "../../utils/calculation";
import { toast } from "react-hot-toast";

export const Keypad = () => {
  const [values, setValues] = useState<(number | string)[]>([]);
  console.log(values);

  return (
    <div className="space-y-4">
      <Screen values={values} />
      <div className="flex items-center justify-center space-x-3">
        <div className="grid grid-cols-3 gap-x-3 gap-y-5 w-56">
          {Array.from({ length: 9 }, (_, index) => index + 1).map((item, index) => (
            <div
              key={index}
              onClick={() => values.length < 10 ? setValues((prev) => [...prev, item]) : toast.error('Cannot enter more than 10 values') }
              className="text-center text-white bg-gray-500 hover:bg-gray-600 cursor-pointer"
            >
              {item}
            </div>
          ))}
          <div
            onClick={() => values.length < 10 ? setValues((prev) => [...prev, 0]) : toast.error('Cannot enter more than 10 values')}
            className="text-center text-white bg-gray-500 hover:bg-gray-600 cursor-pointer"
          >
            0
          </div>
          <div
            onClick={() => {
              const updatedValues = [...values]
              updatedValues.pop()
              setValues(updatedValues)
            }}
            className="text-center text-white bg-gray-500 hover:bg-gray-600 cursor-pointer"
          >
            C
          </div>
          <div
            onClick={() => setValues(calculation(values) ?? values)}
            className="text-center text-white bg-gray-500 hover:bg-gray-600 cursor-pointer"
          >
            =
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-5 w-[66.74px]">
          <div
            onClick={() => setValues((prev) => [...prev, "+"])}
            className="text-center text-white bg-red-400 hover:bg-red-500 cursor-pointer"
          >
            +
          </div>
          <div
            onClick={() => setValues((prev) => [...prev, "-"])}
            className="text-center text-white bg-red-400 hover:bg-red-500 cursor-pointer"
          >
            -
          </div>
          <div
            onClick={() => setValues((prev) => [...prev, "*"])}
            className="text-center text-white bg-red-400 hover:bg-red-500 cursor-pointer"
          >
            x
          </div>
          <div
            onClick={() => setValues((prev) => [...prev, "/"])}
            className="text-center text-white bg-red-400 hover:bg-red-500 cursor-pointer"
          >
            /
          </div>
        </div>
      </div>
    </div>
  );
};
