// id --> remote get user's name -->remote get user"s repos

console.log("before");

const getUser = (id, cbFn) => {
    setTimeout(()=> {
        // remote job: get user's name
        console.log(`Get an user name of id ${id} from db`);
        cbFn({ id: id, name: "David" });
    }, 2000)
};

const getRepos = (userName, cbFn) => {
    setTimeout(() => {
        // remote job: get user's repos by user name
        console.log(`Get repos of user ${userName} from GitHub`);
        cbFn( ["repo1", "repo2", "repo3"] );
        console.log("after");
    },3000);
};

// const cbFn2 = (repos) => {
//     console.log(`user's repos:`, repos);
// };

// const cbFn1 = (user) => {
//     console.log(`user data from remote:id:${user.id}, name:${user.name}`);
//     getRepos(user.name, cbFn2);
// };

getUser(1, (user) => {
    console.log(`user data from remote:id:${user.id}, name:${user.name}`);
    getRepos(user.name, (repos) => {
        console.log(`user's repos:`, repos);
    });     
}); // async:交辦
