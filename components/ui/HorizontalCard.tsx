import React from "react";
import { CheckCircle, Video, Shield, Clock } from "lucide-react";

function HorizontalCard({
  border,
  textColor,
  icon,
  title,
  desc,
}: {
  border: string;
  textColor: string;
  icon: number;
  title: string;
  desc: string;
}) {
  const icons = [CheckCircle, Clock, Shield, Video];
  const IconComponent = icons[icon] || CheckCircle;

  return (
    <div
      className={`w-full h-full border-l-4 p-4 flex items-start gap-4 rounded-xl bg-gray/10 ${border}`}
    >
      <IconComponent className={`h-6 w-6 mt-1 flex-shrink-0 ${textColor}`} />
      <div className="w-full">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-sm text-gray-600 break-words">{desc}</p>
      </div>
    </div>
  );
}

export default HorizontalCard;
