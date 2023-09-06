interface ISectionTitle {
  textColor: string;
  title: string;
}

const SectionTitle = (props: ISectionTitle) => {
  const { textColor, title } = props;
  return (
    <p className={`mt-4 text-center font-bold text-sm ${textColor}`}>{title}</p>
  );
};

export default SectionTitle;
