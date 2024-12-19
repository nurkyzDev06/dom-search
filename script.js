let row = document.querySelector(".row");
let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");

btn.addEventListener("click", () => {
    fetch (`https://dog.ceo/api/breed/${input.value.toLowerCase()}/images`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        row.innerHTML = ``
        data.message.length ? data.message.slice(0,15).map(el => {
            row.innerHTML += `
            <div class="col-4 my-4">
            <img src="${el}" alt="img" class="img">
            </div>
            `
        }): error.innerHTML += `error`
    })
})