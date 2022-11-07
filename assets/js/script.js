function Users (_name, _surname, _birth) {
    this.name = _name;
    this.surname = _surname;
    this.birth = new Date(_birth);

    this.createRows = () => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.innerText = this.name;
        let tdSurn = document.createElement('td');
        tdSurn.innerText = this.surname;
        let tdAge = document.createElement('td');
        tdAge.innerText = this.calcAge();
        
        tr.appendChild(tdName);
        tr.appendChild(tdSurn);
        tr.appendChild(tdAge);

        return tr
    }

    this.calcAge = () => {
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();
        let currentDay = new Date().getDate();

        let birthYear = this.birth.getFullYear();
        let birthMonth = this.birth.getMonth();
        let birthDay = this.birth.getDate();

        let age = currentYear - birthYear;

        if ((currentMonth == birthMonth) && (currentDay < birthDay)){
            age = age - 1;
        }
        return age;
    }
}

// taking input data
btn = document.getElementById('add');
btn.addEventListener('click', function (){
    let newName = document.getElementById('name').value;
    let newSurname = document.getElementById('surname').value;
    let newBirth = document.getElementById('birth').value;

let user = new Users (newName, newSurname, newBirth)

document.getElementById("tbody").append(user.createRows())
})
