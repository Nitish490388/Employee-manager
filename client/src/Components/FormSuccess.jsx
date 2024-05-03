import React from "react";
import { RxCheckCircled } from "react-icons/rx";

const FormSuccess = ({ message }) => {
  return (
    <div className="mt-3 bg-green-200 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <RxCheckCircled className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
