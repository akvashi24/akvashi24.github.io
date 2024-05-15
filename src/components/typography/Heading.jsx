const Heading = (props) => {
  return (
    <h1 className="font-bold text-4xl leading-loose text-neutral-100">
      {props.children}
    </h1>
  );
};

export default Heading;
