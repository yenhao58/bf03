// id --> remote get user's name -->remote get user"s repos


/*
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


getUser(1, (user) => {
    console.log(`user data from remote:id:${user.id}, name:${user.name}`);
    getRepos(user.name, (repos) => {
        console.log(`user's repos:`, repos);
    });     
}); // async:交辦
*/
console.log("before");

const getComments = (repo) => {
    return new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log(`Get comments of repo ${repo}`);
        resolve( ["comment1", "comment2"] );
        },2000);
    });
};

const getRepos = (userName) => {
    return new Promise( (resolve, reject) => {
    setTimeout(() => {
        // remote job: get user's repos by user name
        console.log(`Get repos of user ${userName} from GitHub`);
        resolve( ["repo1", "repo2", "repo3"] );
    },3000);
    });
};

const getUser = (id) => {
    return new Promise( (resolve, reject) => {
    setTimeout(()=> {
        // remote job: get user's name
        console.log(`Get an user name  of id ${id} from db`);
        resolve({ id: id, name: "David" });
    }, 2000)
    });
};

/*
getUser(1)
.then((user) => {
    console.log(user);
    return getRepos(user.name);
})
.then((repos) => {
    console.log(`user's repos:`, repos);
    return getComments(repos[0]);
})
.then((comments) => {
    console.log(comments);
    console.log("after");
})
.catch((err) => {
    console.error(err);
});
*/

// async/await

const showComments = async () => {
    const user =  await getUser(1);
    console.log(user);
    const repos = await getRepos(user.name);
    console.log(`user's repos:`, repos);
    const comments = await getComments(repos[0]);
    console.log(comments);
    console.log("after");
}

showComments();