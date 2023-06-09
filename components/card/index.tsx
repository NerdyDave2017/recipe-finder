import React from "react";

type props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: props) => {
  return (
    <div
      className={
        "bg-[#f3f3f3] rounded-xl p-5 shadow-md shadow-[#ccc]" + " " + className
      }
    >
      {children}
    </div>
  );
};

export default Card;
