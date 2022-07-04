function test(a: string, b:boolean): boolean;

function test(name: string, isAdmin: boolean): boolean{
    return isAdmin;
}

console.log(test("Oi", true));