// Today is May 12th, 2 days to my 3 months of Programming from Feb 14, what have i achieved?1207 hours
// const  APIURL = 'https://api.github.com/users/' ;
//  he wants to get "repos" alongside the github profiles
const  APIURL = "https://api.github.com/users/" ;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);

    getRepos(username);

}

async function getRepos(username) {
    const resp = await fetch(APIURL + username + '/repos');


}


