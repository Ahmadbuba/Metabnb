const Card = (props) => {
  return (
    <div className="border-solid border rounded-2xl border-cardBorderGray py-2 font-red-rose text-11xl font-normal">
      <div className="w-11/12 mx-auto">{props.children}</div>
    </div>
  );
};

export default Card;
