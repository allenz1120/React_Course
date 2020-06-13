class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const storedCount = JSON.parse(stringCount);

            if (!isNaN(storedCount)) {
                this.setState(() => ({ count: storedCount }));
            }

        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))





// //contains the JSX The app.js in scripts will be auto generated
// console.log("app.js is running");

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const handleMinusOneOne = () => {
//     count--;
//     renderCounterApp();
// };

// const handleReset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo =
//         (
//             <div>
//                 <h1>Count: {count}</h1>
//                 <button onClick={addOne}>+1</button>
//                 <button onClick={handleMinusOneOne}>-1</button>
//                 <button onClick={handleReset}>handleReset</button>
//             </div>
//         );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


