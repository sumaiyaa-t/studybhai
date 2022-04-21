const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpLink = document.getElementById("signUpLink");
const signInLink = document.getElementById("signInLink");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signUpLink.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signInLink.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
