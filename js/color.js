const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const bodyColor = document.querySelector("body button");

function getColor () {

    const randomone = colors[Math.floor(Math.random() * colors.length)];
    const randomtwo = colors[Math.floor(Math.random() * colors.length)];
   
    if ( randomone === randomtwo) {
      return getColor();
    }
  
    document.querySelector(".bgcolor").style.background = `linear-gradient(90deg, ${randomone}, ${randomtwo})`;
    //"linear-gradient(90deg, randomone, randomtwo)";
};


getColor();

//addEventListener("click", getColor);