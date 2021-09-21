const $board = document.getElementById("board");
const SQUARES_NUMBER = 800;
const colors = ["blue", "brown", "aqua", "yellow", "orange"];

const BG_SQUARE = getComputedStyle(document.documentElement).getPropertyValue("--bg-square");
const BOX_SHADOW_SQUARE = getComputedStyle(document.documentElement).getPropertyValue("--box-shadow-square");

const removeColor = node => {
  node.style.background = BG_SQUARE;
  node.style.boxShadow = BOX_SHADOW_SQUARE;
};
const fragment = document.createDocumentFragment();
Array.from({ length: SQUARES_NUMBER }, _ => {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseleave", () => removeColor(square));

  fragment.append(square);
});
$board.append(fragment);

const getRandomColor = () => Math.floor(Math.random() * colors.length);
const setSquareColor = e => {
  const { target } = e;
  const color = colors[getRandomColor()];
  if (target.closest(".square")) {
    target.style.background = color;
    target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }
};

document.addEventListener("mouseover", setSquareColor);
