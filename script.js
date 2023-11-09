console.log("Sanity check");

const numberOfPeopleInSpace = document.querySelector(
  '[data-js="people-in-space"]'
);
const peopleList = document.querySelector('[data-js="people-list"]');
const issButton = document.querySelector("[data-js='iss-button']");
const tiangongButton = document.querySelector("[data-js='tiangong-button']");
const allButton = document.querySelector("[data-js='all-button']");

let peopleInSpace = [];

async function getPeopleInSpace() {
  const response = await fetch("https://jubilant-fiesta-gr6qwvrqxv29qxg-3000.app.github.dev/astros");
  const data = await response.json();

  peopleInSpace = data.people;
  numberOfPeopleInSpace.textContent = data.number;

  renderPeopleInSpace(data.people);
}

getPeopleInSpace();

function renderPeopleInSpace(people) {
  peopleList.innerHTML = "";

  people.forEach((person) => {
    const card = PersonCard(person);
    peopleList.append(card);
  });
}

function PersonCard(person) {
  const listItem = document.createElement("li");
  listItem.textContent = person.name;

  return listItem;
}

function Button(name, onClick) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = name;
  button.addEventListener("click", onClick);

  return button;
}

allButton.addEventListener("click", () => {
  renderPeopleInSpace(peopleInSpace);
});

issButton.addEventListener("click", () => {
  const issPeople = peopleInSpace.filter((person) => person.craft === "ISS");
  renderPeopleInSpace(issPeople);
});

tiangongButton.addEventListener("click", () => {
  const tiangongPeople = peopleInSpace.filter(
    (person) => person.craft === "Tiangong"
  );
  renderPeopleInSpace(tiangongPeople);
});
