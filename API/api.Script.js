const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFact = async () => {
    try {
        console.log("Fetching data...");
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        factPara.textContent = data[randomIndex].text;
    } catch (error) {
        console.error("Error fetching data:", error);
        factPara.textContent = "Sorry, couldn't fetch a cat fact. Please try again later!";
    }
};

btn.addEventListener("click", getFact);




// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");




// // let promise = fetch(URL);
// // console.log(promise);

// const getFact = async () => {
//     console.log("getting data....");
//     let response = await fetch (URL);
//     console.log(response);  //JSON format
//     let data = await response.json();
//     console.log(data[1],text);
// };


// btn.addEventListener("click", getFacts);