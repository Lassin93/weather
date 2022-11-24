type HeadingTextProps = {
  text: string;
};

const HeadingText = ({ text }: HeadingTextProps) => {
  return (
    <div className="mb-2 border-b-2 border-black">
      <p className="font-bold text-2xl">{text}</p>
    </div>
  );
};

export default HeadingText;
