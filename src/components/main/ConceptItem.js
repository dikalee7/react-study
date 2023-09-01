const ConceptItem = ({ concepts }) => {
  return (
    <>
      {concepts.map((ct) => (
        <li className="concept">
          <img src={ct.image} alt={ct.title} />
          <h2>{ct.title}</h2>
          <p>{ct.description}</p>
        </li>
      ))}
    </>
  );
};

export default ConceptItem;
