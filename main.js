let select_buttons = document.querySelectorAll(".selection_button");
let clickedItem;
select_buttons.forEach((element) => {
    element.addEventListener("click", function () {
        if (clickedItem && clickedItem !== element) {
            clickedItem.classList.remove("selected");
        }
        element.classList.toggle("selected");
        clickedItem = element;
    });
});

let submit_button = document
    .getElementById("submit_button")
    .addEventListener("click", function () {
        document.getElementById("selection-card").style.display = "none";
        document.getElementById("state-card").style.display = "block";
        document.getElementById("rate").innerHTML = clickedItem.innerHTML;
    });
