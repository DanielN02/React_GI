import React from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";

// Very Easy
// function App() {
//   return (
//     <div>
//      <h2>name: Daniel Ndri</h2>
//       <p>number: 704-552-7732</p>
//       <p>dob: 02-10-2002</p>
//      <p> age: 20</p>
//     </div>
//   );
// }

//Easy
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Daniel Ndri",
          number: "704-670-7752",
          dob: "02-10-2002",
          age: 20,
        },
        {
          name: "Kouame Ndri",
          number: "704-218-5223",
          dob: "01-14-2000",
          age: 22,
        },
        {
          name: "Nick Ndri",
          number: "803-998-4458",
          dob: "09-13-2004",
          age: 18,
        },
        {
          name: "Jeremiah Ndri",
          number: "980-771-8892",
          dob: "03-20-2009",
          age: 13,
        },
      ],
    };
  }

  //Hard
  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
