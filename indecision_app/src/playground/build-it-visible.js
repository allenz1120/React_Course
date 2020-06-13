class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })

    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                <p>{this.state.visibility && 'This is the message'}</p>
            </div>

        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));








// let visibility = false;

// const changeButton = () => {
//     if (visibility === false) {
//         visibility = true;

//     }
//     else {
//         visibility = false;
//     }
//     render();

// };

// const appRoot = document.getElementById('app');
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeButton}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             <p>{visibility && "This is text"}</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();