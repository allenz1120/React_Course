const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

const user =
{
    name: 'Allen Zou',
    cities: ['new york', 'boston', 'jersey'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 2, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
