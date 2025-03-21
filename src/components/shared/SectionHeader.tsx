

type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description}) => {
  return (
    <div className="text-center mx-auto w-[50%]">
      <h2 className="text-2xl  md:text-4xl font-bold">{title}</h2>
      <p className="text-[var(--color-light-slate)] mt-2">{description}</p>
    </div>
  );
};

export default SectionHeader;
