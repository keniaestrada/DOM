/** 
 * Crear tarjeta
 * crear seccion p/tarjeta
 * img
 * Nombre, descripcion, edad, lista de algo
 * insertar en la tarjeta
 * mostrar dentro del div container
 * Crear funciones item
 * Funsiones para inyectar texto a los Items
 * Renderizar
 * multiples usuarios
   */
//Constantes globajes

const CARDS_CONTAINER = document.querySelector("#card-container");
const USER = [
  {
    id: 1,
    username: "booklover123",
    description: "Avid reader and coffee enthusiast.",
    age: 29,
    fav_books: {
      books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
    },
  },
  {
    id: 2,
    username:"literature_junkie",
    description: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
      books: ["The Great Gatsby", "Invisible Man", "Beloved"],
    },
  },
];

//Crear tarjeta
function createElement(){
  const cardObj = {
    name_section: document.createElement("h3"),
    desc_section: document.createElement("p"),
    age_section: document.createElement("p"),
    book_section: document.createElement("div"),
  };
  return cardObj;
}

// Lista

// Crear tarjeta
//inyectar info
function injectData(obj, user){
    const bookList = user.fav_books.books.map((e) => {
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
      })
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
}
function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.book_section,
    );
    card.className="div-creado"
    CARDS_CONTAINER.appendChild(card);
}
USER.forEach(user => {
    const carData = createElement();
    injectData(carData, user);
});
