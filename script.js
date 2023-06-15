let container = document.querySelector(".container")
let postLimit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${postLimit}$_page=${pageCount}`)
    const data = await response.json();

    data.map(item => {
        const htmlData = `
        <div class="posts">
            <p class="post_id">${postCount++}</p>
            <h2 class="title">${item.title}</h2>
            <p class="details">${item.body}</p>
        </div>`

        container.insertAdjacentHTML('beforeend', htmlData)
    })
}
getPost();

const showData = () => {
    setTimeout(() => {
        postCount++;
        getPost();
    }, 200)
}

window.addEventListener("scroll", () => {
    let { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        console.log("bottom");
        showData();
    }
})


let timeContainer = document.getElementsByClassName("timeContainer");

let day = document.querySelector(".Day")
let date = document.querySelector(".date")
let month = document.querySelector(".month")
let year = document.querySelector(".year")

function dateTime() {

    // ---time section----
    let currentDate = new Date();
    const time = document.querySelector(".tm");
    let hrs = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    time.textContent = `${hrs} : ${min} : ${sec}`;

    if (hrs < 10) {
        time.textContent = `0${hrs} : ${min} : 0${sec}`;
    }
    if (min < 10) {
        time.textContent = `${hrs} : 0${min} : 0${sec}`;
    }
    if (sec < 10) {
        time.textContent = `${hrs} : ${min} : 0${sec}`;
    }

    // ---date section----
    let dy = currentDate.getDay();
    let dt = currentDate.getDate();
    let mt = currentDate.getMonth();
    let yr = currentDate.getFullYear();

    // days----------
    daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    day.innerText = daysInWeek[dy];

    // date----------

    date.innerText = dt < 10 ? "0" + dt : dt;

    // month----------

    month.innerText = mt;
    month.innerText = mt < 10 ? "0" + mt : mt

    year.innerText = yr;
}
setInterval(dateTime, 100);
dateTime() 
