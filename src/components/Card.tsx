const Card = ({
  children,
  backgroundClass,
}: Readonly<{ children: any; backgroundClass: `bg-${string}` }>) => {
  return <div className={`${backgroundClass} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
