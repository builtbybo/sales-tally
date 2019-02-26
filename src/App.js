import React from 'react'
import CourseSales from './CourseSales'

// Parent Component

// Sales component: App.js
 class App extends React.Component {
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
export default App;



