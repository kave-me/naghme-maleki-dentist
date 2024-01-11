interface SectionHeaderProps {
  name: string;
  category: string;
}
// TODO: conditionally handle the dark background section header
export function SectionHeader({ name, category }: SectionHeaderProps) {
  return (
    <>
      <h4 className={"text-primary text-[32px] font-extrabold"}>{name}</h4>
      <h2 className={"font-bold text-secondary text-[48px]"}>{category}</h2>
    </>
  );
}
