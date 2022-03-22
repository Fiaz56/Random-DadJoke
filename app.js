const button = document.querySelector("button");
const jokes = document.querySelector("#list");

const getJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement("LI");
    newLi.innerText = jokeText;
    jokes.appendChild(newLi);
};


const getDadJoke = async () => {
    try {
        const config = { headers: { accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }
    catch (e) {
        return `Oh No, Error!!! ${e}`;
    }
};

button.addEventListener("click", getJoke);