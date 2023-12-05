const popupoverlay = document.querySelector(".popup-overlay")
const popupbox = document.querySelector(".popup-box")
const popupbutton = document.getElementById("popup-button")
const cancel = document.getElementById("cancel-book")
const container = document.querySelector(".container")
const addBook = document.getElementById("add-book")
const bookInput = document.getElementById("book-title-input")
const authorInput = document.getElementById("book-author-input")
const desInput = document.getElementById("book-des-input")

popupbutton.addEventListener("click", function(){
  popupoverlay.style.display = "block"
  popupbox.style.display = "block"
})

cancel.addEventListener("click", function(event){
  event.preventDefault()
  popupoverlay.style.display = "none"
  popupbox.style.display = "none"
})

addBook.addEventListener("click", function(event){
  event.preventDefault()
  let div = document.createElement("div")
  div.setAttribute("class", "book-container")
  div.innerHTML = `<h1>${addBook.value}</h1><h2>R${bookInput.value}</h2>
  <h5>${authorInput.value}</h5>
  <p>
    ${desInput.value}
  </p><button onclick="deleteBook(event)">delete</button>
  `
  container.append(div)
  popupoverlay.style.display = "none"
  popupbox.style.display = "none"
})

function deleteBook(event){
  event.target.parentElement.remove()
}

bookInput.value = "";
  authorInput.value = "";
  desInput.value = "";

  popupoverlay.style.display = "none";
  popupbox.style.display = "none";

