interface SectionHeaderProps {
  name: string;
  category: string;
  darkmode?: boolean;
}

// TODO: conditionally handle the dark background section header
export function SectionHeader({
  name,
  category,
  darkmode,
}: SectionHeaderProps) {
  return (
    <>
      <h4 className={"text-primary text-[32px] font-extrabold "}>{name}</h4>
      <h2
        className={`font-bold  text-[48px] ${
          darkmode ? "text-[#F6F9FD]" : "text-secondary"
        } `}
      >
        {category}
      </h2>
    </>
  );
}
