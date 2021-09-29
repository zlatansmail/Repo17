let foo = 12,
    boo = 45;

function main(foo, boo) {

    [foo, boo] = [boo, foo];

    return { foo, boo };
}

console.log(main(foo, boo));
module.exports = main;