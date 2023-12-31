let container = document.querySelector(".container")
let loading = document.querySelector(".loading")

let postLimit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}$_page=${pageCount}`)
    const data = await response.json();

    console.log(data);
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
        loading.classList.remove("active")
        getPost();
    }, 400)
}

window.addEventListener("scroll", () => {
    let { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        loading.classList.add("active")
        showData();
    }
})
