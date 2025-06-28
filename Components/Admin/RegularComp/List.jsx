import React from "react";

const List = ({ name, value }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-border-secondary last:border-b-0">
      <span className="text-secondary text-sm">{name}:</span>
      <span className="text-primary font-medium font-mono text-sm">{value}</span>
    </div>
  );
};

export default List;