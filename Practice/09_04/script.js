/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

/**
* Add a red outline to grid when mouse enters it
*/
gridContainer.addEventListener(
    "mouseenter",
    () => {
        gridContainer.classList.add("redOutline");
    }
);

/**
* Removes the red outline from grid when mouse leaves it
*/
gridContainer.addEventListener(
    "mouseleave",
    () => {
        gridContainer.classList.remove("redOutline");
    }
);

const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
};

const gridCells = document.querySelectorAll(".cell");

gridCells.forEach((cell) => {
    // Color outline when cell is hovered
    cell.addEventListener(
        "mouseenter",
        () => {
            cell.style.outline= `5px solid #${randColor()}`;
        }
    )
    // Remove outline when cell is exited
    cell.addEventListener(
        "mouseleave",
        () => {
            cell.style.outline= "";
        }
    )

    cell.addEventListener(
        "click",
        () => {
            if (cell.style.backgroundColor) {
                cell.style.backgroundColor = "";
            } else {
                cell.style.backgroundColor = `#${randColor()}`;
            }
        }
    )
});

const body = document.body;
body.addEventListener(
    "keydown",
    (event) => {
        console.log(event.code);

    if (event.code === "KeyD") {
        body.style.backgroundColor = `#${randColor()}`;
    }
    });