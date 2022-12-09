const ChnageButton = document.querySelector('button');

function ChnageColour(value) {
  return Math.floor(Math.random() * (value));
}

ChnageButton.addEventListener('mouseout', () => {
  const ColourChange = `rgb(${ChnageColour(255)}, ${ChnageColour(255)}, ${ChnageColour(255)})`;
  document.body.style.backgroundColor = ColourChange;
});