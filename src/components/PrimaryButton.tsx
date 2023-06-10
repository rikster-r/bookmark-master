type Props = {
  text: string;
  color: string;
  uppercase: boolean;
};

const PrimaryButton = ({ text, color, uppercase }: Props) => {
  return (
    <button
      className={`btn-primary ${uppercase ? "btn-uppercase" : ""} btn-${color}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
