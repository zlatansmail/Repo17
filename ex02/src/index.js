const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2,
};

function main(myCar) {

    const { cylinders, size } = myCar;

    return {
        cylinders,
        size,
    };
}

console.log(main(MY_CAR));
module.exports = main;