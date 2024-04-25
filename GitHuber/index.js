const API = "https://api.github.com/users/";
const main = document.querySelector("#main");

const getUser = async (username) => {
    try {
        // Fetch user data
        const response = await fetch(`${API}${username}`);

        // Check if user is not found
        if (response.status === 404) {
            main.innerHTML = `No user found named : ${username}`;
            return;
        }

        const userData = await response.json();
        console.log(userData);
        const location = "null";
        if (location === userData.location ){
            userData.location = "";
        }
        // Create user card HTML
        const card = `
            <div class="card">
                <div>
                    <img src="${userData.avatar_url}" class="avatar" alt="Photo of Github Users">
                </div>
                <div class="user-info">
                    <h3 class="username"> GitHub Name : <a href="${userData.html_url}" target="_blank"> ${userData.name} </a> </h3>
                    <h3 class="username"> Username :  ${userData.login}</h3>
                    <p> Bio : ${userData.bio}</p>
                    <p>Location: ${userData.location}</p>
                    <ul class="info">
                        <li>${userData.followers}<strong> Followers</strong></li>
                        <li>${userData.following}<strong> Following</strong></li>
                        <li>${userData.public_repos}<strong> Repositories</strong></li>
                    </ul>
                    <h3 style="text-align: center;">List of Repositories</h3>
                    <div id="repos">
                    </div>
                </div>
            </div>
        `;

        // Render user card
        main.innerHTML = card;
        getRepos(username);
    } catch (error) {
        main.innerHTML = "An error occurred. Please try again later.";
        console.log("Error:", error);
    }
};

const getRepos = async (username) => {
    const repos = document.querySelector("#repos");

    // Clear previously displayed repositories
    repos.innerHTML = "";

    try {
        const response = await fetch(`${API}${username}/repos`);
        const data = await response.json();
        console.log("Fetching Repositories ");
        console.log(data); // Log the data variable to inspect its structure
        data.forEach((item) => {
            const elem = document.createElement("a");
            elem.classList.add('repo');
            elem.setAttribute('href', item.html_url);
            elem.setAttribute('target', '_blank');
            elem.textContent = item.name;
            repos.appendChild(elem);

            // Add a line break after each repository link
        });
    } catch (error) {
        console.log("Error fetching repositories:", error);
    }
};

// Search for a Github User
const searchForm = document.querySelector("#searchForm");
const searchBox = document.querySelector("#searchBox");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (!searchInput) return;
    searchBox.value = "";
    getUser(searchInput);
});
