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
    const respData = await resp.json();

    addReposToCard(respData);
}

getUser("florinpop17")

function createUserCard(user) {
    // const card = document.createElement('div');
    // card.classList.add('card'); ------ we replaced this with "cardHTML"

    const cardHTML = `
    <div class="card">
        <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul class"info">
        <li>${user.following}<b>Following</b></li>
        <li>${user.followers}<b>Followers</b></li>
        <li>${user.public_repos}<b>Repositories</b></li>
        </ul>

        <h4>Repositories:</h4>
        <div class="repos" id="repos"></div>
        </div>
        </div>
    `;
    main.innerHTML = cardHTML;
};

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");
    // console.log(repos)

    repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 12).forEach(repo => {
        const repoEL = document.createElement('a');
        repoEL.classList.add('repo');

        repoEL.href = repo.html_url;
        repoEL.target = "_blank";
        repoEL.innerText = repo.name;

        reposEl.appendChild(repoEL);
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) { // if theres is a user , then get the user
        getUser(user); // he forgot to pass the thing we are looking for "user"

        search.value = "";
    }
});

