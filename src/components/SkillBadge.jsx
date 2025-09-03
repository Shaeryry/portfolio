import { Wrench } from "lucide-react";

export default function SkillBadge({ skill }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white shadow rounded-full border hover:shadow-md transition">
      {skill.icon ? (
        <img
          src={skill.icon}
          alt={`${skill.name} logo`}
          className="w-5 h-5"
        />
      ) : (
        <Wrench className="w-5 h-5 text-gray-400" />
      )}
      <span className="font-medium">{skill.name}</span>
      <span className="text-sm text-gray-500">({skill.level})</span>
    </div>
  );
}
