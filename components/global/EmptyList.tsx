import React from "react";

const EmptyList = ({
  heading = "No items found.",
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return <h2 className={cn("text-xl", className)}>EmptyList</h2>;
};

export default EmptyList;
