let user: {
    name: string,
    age: number,
    isStudent?: boolean,
}

user = {
    name: 'Test',
    age: 19,
}

//console.log(user);

function place(country: string, city: string, street?:string) {
    console.log(country, city, street);
}

place('Brazil', 'Fortaleza');