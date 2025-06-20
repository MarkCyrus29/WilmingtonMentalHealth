"use client";
import React from "react";

function Button({
  title,
  className,
  type,
}: {
  title: string;
  className: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      className={
        `hover:cursor-pointer bg-primary py-3 px-6 rounded-xl text-xl text-white shadow-lg transition-opacity hover:opacity-80  ` +
        className
      }
    >
      {title}
    </button>
  );
}

export default Button;
