import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

const FormError = ({ message }) => {
  return (
    <div className="mt-3 bg-red-300 p-3 rounded-md flex item-center gap-x-2 text-sm text-red-800">
      <FaTriangleExclamation className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
