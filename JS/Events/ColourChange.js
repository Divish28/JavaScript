//Event with Event object.
const ChnageButton = document.querySelector('button');

function ChnageColour(value) {
  return Math.floor(Math.random() * (value));
}

ChnageButton.addEventListener('mouseout', (e) => {
  const ColourChange = `rgb(${ChnageColour(255)}, ${ChnageColour(255)}, ${ChnageColour(255)})`;
  e.currentTarget.style.backgroundColor = ColourChange;
},true);