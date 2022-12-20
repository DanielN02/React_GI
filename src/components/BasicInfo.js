// Medium
const BasicInfo = ({ person }) => {
  return (
    // VERY EASY: CREATE BASIC INFORMATION
    <div className="App">
      <h2>{person.name}</h2>
      <p>Number: {person.number}</p>
      <p>D.O.B: {person.dob}</p>
      <p>Age: {person.age}</p>
      <h3> ------------------- </h3>
    </div>
  );
};

export default BasicInfo;
