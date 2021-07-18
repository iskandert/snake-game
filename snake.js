let width = $(".wrapper").width();
console.log(width);
let setCountCells = prompt("Задайте количество клеток в длину", "10");

$(".wrapper").css({
    "grid-template-columns": "repeat(" + setCountCells + ", [col] 1fr)",
    "grid-template-rows": "repeat(" + setCountCells + ", [row] 1fr)"
});

for (let i = 0; i < setCountCells; i++) {
    for (let l = 0; l < setCountCells; l++) {
        $(".wrapper").append("<div class='cells row" + i + " col" + l + "'></div>");
    }
};

let middleNum = Math.round(setCountCells / 2);
console.log(middleNum);
$(".row" + middleNum + ".col" + middleNum).addClass("snakeCell");
// $(".row5.col5").addClass("snakeCell");
// $(".cells .row" + middleNum + " .col" + middleNum).append("<p>0</p>")
// console.log($(".row" + middleNum + " .col" + middleNum).css("class"));

// if (direction === "right") {
let coord = [$(".snakeCell").attr("class").indexOf("row") + 3, $(".snakeCell").attr("class").indexOf("col") + 3];
$(".snakeCell").removeClass("snakeCell");
console.log(coord);
// let coordRem =
// }
// else if (direction === "down") {
//     newHead = new Block(head.col, head.row + 1);
// } else if (direction === "left") {
//     newHead = new Block(head.col - 1, head.row);
// } else if (direction === "up") {
//     newHead = new Block(head.col, head.row - 1);
// }