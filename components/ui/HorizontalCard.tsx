import React from "react";
import {
  CheckCircle,
  Clock,
  Shield,
  Video,
  Users,
  Lightbulb,
  Wrench,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

const TIP_ICONS = [CheckCircle, Clock, Shield, Video]; // used by Tips section
const BENEFIT_ICONS = [Users, Lightbulb, Wrench, MessageCircle, TrendingUp]; // used by Benefits

type Kind = "tip" | "benefit";

interface Props {
  border: string;
  textColor: string;
  icon: number;
  kind?: Kind;
  title: string;
  desc?: string;
}

function HorizontalCard({
  border,
  textColor,
  icon,
  kind = "tip",
  title,
  desc,
}: Props) {
  const set = kind === "benefit" ? BENEFIT_ICONS : TIP_ICONS;
  const IconComponent = set[icon] ?? CheckCircle;

  return (
    <div
      className={`w-full h-full border-l-4 p-4 flex items-start gap-4 rounded-xl bg-gray/10 ${border}`}
    >
      <IconComponent className={`h-6 w-6 mt-1 flex-shrink-0 ${textColor}`} />
      <div className="w-full">
        <h5 className={` font-semibold ${!desc ? "!text-2xl font-bold" : ""} `}>
          {title}
        </h5>
        {desc && <p className="text-sm text-gray-600 break-words">{desc}</p>}
      </div>
    </div>
  );
}

export default HorizontalCard;
