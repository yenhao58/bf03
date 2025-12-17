console.log("before");
const id =1;

console.log("id:", id);

const fn1 = ()=>{
    console.log("Get user data from db ");
    return { id: id, name: "John Doe" };
};

const gerUser = (id) => {
    const timer1 = setTimeout(fn1, 2000);
};

const user = gerUser(id);
console.log("user:", user);

console.log("after");

