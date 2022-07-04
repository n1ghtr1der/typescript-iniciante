type numberOrString = number | string;

function userData(name: string, age: numberOrString, address: {street: string, number: numberOrString}) {
    console.log(name, age, address);
}

userData('User', 54, {street:'Rua 1', number: 128});