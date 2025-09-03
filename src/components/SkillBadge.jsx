export default function SkillBadge({ skill }) {
  return (
    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
      {skill.name} — {skill.level}
    </span>
  );
}