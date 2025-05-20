interface Props {
  text: string;
  className: string;
  onClick: () => void;
}

const Button = ({ text, className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
