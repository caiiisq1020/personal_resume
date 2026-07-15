// src/components/ui/TechTag.tsx

interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block font-mono text-xs text-green bg-green/10 px-3 py-1 rounded-full transition-colors duration-200 hover:text-offwhite hover:bg-green/20">
      {label}
    </span>
  );
}
