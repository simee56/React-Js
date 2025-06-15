export const getUsers = async () => {
    const response = fetch('https://randomuser.me/api/',
        { method: "GET" }
    )
    return response.json()
};

