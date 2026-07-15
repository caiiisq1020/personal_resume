// src/components/ui/SectionTitle.tsx

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="font-display text-offwhite text-2xl md:text-3xl font-bold italic tracking-tight">
        {title}
      </h2>
      <div className="mt-3 h-px w-16 bg-green/40" />
    </div>
  );
}
