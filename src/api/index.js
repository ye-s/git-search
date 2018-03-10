export const getUserProfile = (userName) => {
    const userProfileUrl = `https://api.github.com/users/${userName}`;
    return fetch(userProfileUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()); 
}

export const getUserRepos = (userName) => {
    const userProfileUrl = `https://api.github.com/users/${userName}/repos`;
    return fetch(userProfileUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(response => response.json()); 
}