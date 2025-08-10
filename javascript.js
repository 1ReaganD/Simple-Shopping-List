const ul = document.querySelector("ul");

const input = document.querySelector("input");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let capturedWord = input.value;
  // console.log(capturedWord);
  const li = document.createElement("li");
  const span = document.createElement("span");
  const buttonDelete = document.createElement("button");
  li.appendChild(span);
  li.appendChild(buttonDelete);
  span.textContent = capturedWord;
  buttonDelete.textContent = "Delete";
  input.value = "";
  ul.appendChild(li);
  buttonDelete.addEventListener("click", () => {
    ul.removeChild(li);
  });
});





