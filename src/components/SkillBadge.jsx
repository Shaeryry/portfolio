import { Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillBadge({ skill, size = "lg" }) {
  const sizeMap = {
    sm: { icon: "w-6 h-6", pad: "px-3 py-2", name: "text-sm", level: "text-xs", barH: "h-1" },
    md: { icon: "w-10 h-10", pad: "px-4 py-3", name: "text-base", level: "text-sm", barH: "h-1.5" },
    lg: { icon: "w-14 h-14", pad: "px-5 py-4", name: "text-lg", level: "text-sm", barH: "h-1.5" }
  };
  const S = sizeMap[size] || sizeMap.lg;

  const levelClass =
    skill.level === "Advanced"
      ? "bg-green-500 w-11/12"
      : skill.level === "Intermediate"
      ? "bg-yellow-500 w-8/12"
      : "bg-red-400 w-4/12";

  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: 1.5 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12 }}
      className={`shrink-0 flex flex-col items-center text-center ${S.pad} bg-gradient-to-br from-blue-50 to-blue-100 shadow-md rounded-2xl border hover:shadow-xl`}
    >
      {skill.icon ? (
        <img src={skill.icon} alt={`${skill.name} logo`} className={`${S.icon} mb-3`} />
      ) : (
        <Wrench className={`${S.icon} mb-3 text-gray-400`} />
      )}

      <span className={`font-semibold text-black ${S.name}`}>{skill.name}</span>

      <span className={`text-gray-600 mt-1 ${S.level}`}>{skill.level}</span>
    </motion.div>
  );
}
