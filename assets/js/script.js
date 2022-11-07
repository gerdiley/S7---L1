var btn = document.getElementById("add");
var tbody = document.getElementById("tbody");

function Utente(name, surname, birth) {
  this.name = name;
  this.surname = surname;
  this.birth = birth;

  this.calcolaEta = function () {
    let today = new Date();
    let todayYear = new Date().getFullYear();
    let todayMonth = new Date().getMonth() + 1;
    let todayDay = new Date().getDate();

    let birthDate = new Date(document.getElementById("birth").value);
    let birthYear = new Date(
      document.getElementById("birth").value
    ).getFullYear();
    let birthMonth =
      new Date(document.getElementById("birth").value).getMonth() + 1;
    let birthDay = new Date(document.getElementById("birth").value).getDate();

    if (todayMonth < birthMonth) {
      return todayYear - birthYear - 1;
    } else if ((todayMonth = birthMonth && birthDay > todayDay)) {
      return todayYear - birthYear - 1;
    } else {
      return todayYear - birthYear;
    }
  };
}

btn.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let birth = document.getElementById("birth").value;
  let utente = new Utente(name, surname, birth);

  function calcolaEta() {
    let today = new Date().getFullYear();
    let birthDate = new Date(
      document.getElementById("birth").value
    ).getFullYear();
    let eta = today - birthDate;
    return eta;
  }

  tbody.innerHTML += `<tr>
    <td>${utente.name}</td>
    <td>${utente.surname}</td>
    <td>${utente.calcolaEta()}</td>
    </tr>`;
});
