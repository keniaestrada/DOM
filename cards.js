
/** 
 * Crear tarjeta
 * crear seccion p/tarjeta
 * img
 * Nombre, descripcion, edad, lista de algo
 * insertar en la tarjeta
 * mostrar dentro del div container
   */
//Constantes globajes
const CARDS_CONTAINER = document.querySelector("#card-container");
const USER = {
  id: 1,
  username: "user Name",
  desc: "sobre ti",
  age: 26,
  fav_books: {
    books: ["la mecanica del corazon", "el principito", "Brida"]
  }
}

//Crear tarjeta
const card = document.createElement("div")
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");

// Lista
const bookList = USER.fav_books.books.map((e) => {
  const item = document.createElement("ul");
  item.textContent = e;
  return item;
})
// Crear tarjeta
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList);
card.append(name_section, desc_section, age_section, book_section);

//inyectar tarjeta en el container global
CARDS_CONTAINER.appendChild(card);

