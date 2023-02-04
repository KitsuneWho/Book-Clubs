let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let searchValue = form.elements.search.value;
    window.location.href = `https://www.google.com/search?q=${searchValue}`;
});
