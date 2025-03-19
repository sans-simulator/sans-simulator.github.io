if (window.location.hostname !== "sans-simulator.github.io") {
  localStorage.setItem("gameData", "corrupt");
  sessionStorage.setItem("authKey", "invalid");
  document.body.innerHTML = "<h1>This site is a copy and won't work!</h1>";
  throw new Error("Unauthorized site detected.");
}
