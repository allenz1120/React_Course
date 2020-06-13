//contains the JSX The app.js in scripts will be auto generated
console.log("app.js is running");

const app =
{
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (eventObject) => {
    eventObject.preventDefault();

    const option = eventObject.target.elements.option.value;

    if (option) {
        app.options.push(option);
        eventObject.target.elements.option.value = '';
        renderApp();
    }

};
const reset = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

//JSX - JavaScript XML (provided to us by React and makes working with apps much easier)
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={reset}>Remove All</button>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();





//Practice 
// const user =
// {
//     name: 'Allen',
//     age: 9,
//     location: 'Staten Island'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// };

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );