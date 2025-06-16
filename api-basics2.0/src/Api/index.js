export const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/',{
         method: "GET" ,
        }
    )
    return response.json();
};

