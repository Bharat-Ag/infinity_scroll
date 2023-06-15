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
let session = document.querySelector(".session")

function formatTime(value) {
    if (value < 10) {
        return "0" + value;
    }
    else {
        return value.toString();
    }
}

function dateTime() {
    // ---time section----
    let currentDate = new Date();
    const time = document.querySelector(".tm");
    let hrs = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    hrs = formatTime(hrs);
    min = formatTime(min);
    sec = formatTime(sec);
    session.textContent = hrs >= 12 ? " PM " : " AM "
    time.textContent = (hrs > 12) ? `0${hrs - 12} : ${min} : ${sec}` : `${hrs} : ${min} : ${sec}`;

    // ---date section----
    let dy = currentDate.getDay();
    let dt = currentDate.getDate();
    let mt = currentDate.getMonth();
    let yr = currentDate.getFullYear();

    daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    day.innerText = daysInWeek[dy];

    date.innerText = dt < 10 ? "0" + dt : dt;

    month.innerText = mt;
    month.innerText = mt < 10 ? "0" + mt : mt

    year.innerText = yr;
}
setInterval(dateTime, 1000);
dateTime()
