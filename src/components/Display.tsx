interface Props {
  children: React.ReactNode;
}

const Display = ({ children }: Props) => {
  return <div className="display">{children}</div>;
};

export default Display;
