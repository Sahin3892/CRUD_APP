let names = ["Erica Mustermann", "John Doe"];
let phoneNumbers = ["015712345678", "015798765432"];
load();
//let namesAsText = ["Erica Mustermann", "John Doe"];
//let phoneNumbersAsText = ["015712345678", "015798765432"];

function render() {


  let content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML += `<h1>My Contacts</h1>`;
  content.innerHTML += /*html*/`
  <div>
    <input placeholder="Name" id="name">
    <input placeholder="Telefon" id="phone">
    <button onclick="addContact()">Hinzufügen</button>
  `;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const phoneNumber = phoneNumbers[i];

    content.innerHTML += /*html*/ `
    <div class="card">
      <b>Name: </b> ${name} <br>
      <b>Telefon: </b>  ${phoneNumber} <br>
      <button onclick="deleteContact(${i})">Löschen</button>
      </div>
    `;
  }
}

function addContact() {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");

  names.push(name.value);
  phoneNumbers.push(phone.value);
  console.log('Läuft!');
  render();
  save();
}

function deleteContact(i) {
  names.splice(i, 1);
  phoneNumbers.splice(i, 1);

  render();
  save();
}

function save() {
  let namesAsText = JSON.stringify(names);
  let phoneNumbersAsText = JSON.stringify(phoneNumbers);

  localStorage.setItem("names", namesAsText);
  localStorage.setItem("phone", phoneNumbersAsText);
}

function load() {
  let namesAsText = localStorage.getItem("names");
  let phoneNumbersAsText = localStorage.getItem("phone");

  if (namesAsText && phoneNumbersAsText) {
    names = JSON.parse(namesAsText);
    phoneNumbers = JSON.parse(phoneNumbersAsText);
  } else {
    let names = ["Erica Mustermann", "John Doe"];
    let phoneNumbers = ["015712345678", "015798765432"];
  }
}
