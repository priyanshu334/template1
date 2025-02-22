import React from "react";

interface ProgressProps {
  value: number;
  max?: number;
  color?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100, color = "bg-purple-600" }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};

export default Progress;
