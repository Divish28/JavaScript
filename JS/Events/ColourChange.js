//Event with Event object.
const ChnageButton = document.querySelector('button');

function ChnageColour(value) {
  return Math.floor(Math.random() * (value));
}

ChnageButton.addEventListener('mouseout', eve => {
  const ColourChange = `rgb(${ChnageColour(255)}, ${ChnageColour(255)}, ${ChnageColour(255)})`;
  eve.currentTarget.style.backgroundColor = ColourChange;
},true);