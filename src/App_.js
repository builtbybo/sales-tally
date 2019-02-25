// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react'
import ReactDOM from 'react-dom'
import CourseSales from './CourseSales'

class LessonDetails extends React.Component {
  //App
  render() {
    var courses = [
      { name: 'Swimming', price: 99, duration: "One day a week for 1 month" },
      { name: 'Scuba Diving', price: 205, duration: "5 consecutive days" },
      { name: 'Surfing', price: 30, duration: "Daily drop-in sessions" },
      { name: 'Snorkelling', price: 150, duration: "Twice a week" }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Swim and Surf Shack</h2>
          <p>See our available courses below </p>
        </div>
        <CourseSales items={courses} />
      </div>
    );
  }
}

ReactDOM.render(<LessonDetails />, document.getElementById('root'));

export default LessonDetails