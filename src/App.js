import React from 'react'
import ReactDOM from 'react-dom'

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

class Course extends React.Component {

    clicker() {
        var active = !this.state.active;
        this.setState({ active: active });
        this.props.sumPrice(active ? this.props.price : -this.props.price);
    }
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
        this.clicker = this.clicker.bind(this);
    }
    render() {
        return (
            <div>
                <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} <b>£{this.props.price}</b> - <span className="duration">{this.props.duration}</span>
                </p>

            </div>
        );
    }
}
class CourseSales extends React.Component {
    sumPrice(price) {
        this.setState({ total: this.state.total + price });
    }


    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };

        this.sumPrice = this.sumPrice.bind(this);
    }

    render() {
        console.log(this.props.items);

        var courses = this.props.items.map((item, i) => {
            return <Course name={item.name}
                price={item.price}
                duration={item.duration}
                key={i} sumPrice={this.sumPrice} active={item.active} />

        });
        return (
            <div>
                <h2>Click to add to your total</h2>
                <br />
                <div id="courses">
                    {courses}
                    <p id="total">Total: <b>£{this.state.total}</b></p>
                </div>
            </div>
        );
    }
}

{/* <Course /> */}

ReactDOM.render(<App />, document.getElementById('root'));

