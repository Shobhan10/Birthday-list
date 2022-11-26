const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person" key={id}>
            <img src={image} alt="preson" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );

  /*
   return (
    <>
      {people.map((person) => (
        <div className="person" key={person.id}>
          <img src={person.image} alt="preson" />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age}</p>
          </div>
        </div>
      ))}
    </>
   )
  
   */
};

export default List;
