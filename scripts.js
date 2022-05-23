const audio = document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "a":
      document.getElementById("boom").load();
      document.getElementById("boom").play();
      document.querySelector("#boomTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#boomTransf").classList.remove('playing');
      }, 100);
      break;

    case "s":
      document.getElementById("clap").load();
      document.getElementById("clap").play();
      document.querySelector("#clapTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#clapTransf").classList.remove('playing');
      }, 100);
      break;

    case "d":
      document.getElementById("hihat").load();
      document.getElementById("hihat").play();
      document.querySelector("#hihatTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#hihatTransf").classList.remove('playing');
      }, 100);
      break;

    case "f":
      document.getElementById("kick").load();
      document.getElementById("kick").play();
      document.querySelector("#kickTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#kickTransf").classList.remove('playing');
      }, 100);
      break;

    case "g":
      document.getElementById("openhat").load();
      document.getElementById("openhat").play();
      document.querySelector("#openhatTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#openhatTransf").classList.remove('playing');
      }, 100);
      break;

    case "h":
      document.getElementById("ride").load();
      document.getElementById("ride").play();
      document.querySelector("#rideTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#rideTransf").classList.remove('playing');
      }, 100);
      break;

    case "j":
      document.getElementById("snare").load();
      document.getElementById("snare").play();
      document.querySelector("#snareTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#snareTransf").classList.remove('playing');
      }, 100);
      break;

    case "k":
      document.getElementById("tink").load();
      document.getElementById("tink").play();
      document.querySelector("#tinkTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#tinkTransf").classList.remove('playing');
      }, 100);
      break;

    case "l":
      document.getElementById("tom").load();
      document.getElementById("tom").play();
      document.querySelector("#tomTransf").classList.add('playing');
      setTimeout(() => {
        document.querySelector("#tomTransf").classList.remove('playing');
      }, 100);
      break;
  }
});

