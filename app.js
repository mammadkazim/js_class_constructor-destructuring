const submit = document.querySelector('button');
const tbody = document.querySelector('tbody');
const tHeadRow = document.querySelector('thead tr');
const form = document.querySelector('form')

submit.addEventListener('click', () => {
    const newCol = document.createElement('th');
    newCol.innerHTML = 'Remove'
    tHeadRow.append(newCol)
}, {once: true})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let {Name: { value: Name },
    surname: { value: surname },
    age: { value: age },
    city: { value: city },
    address: { value: address },
    education1: { checked: education1 },
    education2: { checked: education2 },
    work: { checked: work },} = form.elements;

    const dataArray = [Name, surname, age, city, address, education1, education2, work];
    const eduInfo = education1 ? 'middle' : education2 ? 'high' : 'no info';
    class User {
        constructor(...dataArray) {
            this.name = Name;
            this.surname = surname;
            this.age = age;
            this.city = city;
            this.address = address;
            this.education = eduInfo;
            this.work = work;
        }
    }
    const newRow = document.createElement('tr');
    tbody.append(newRow);
    const user = new User();
    for (const key in user) {
        const cell = document.createElement('td');
        cell.style.textAlign = 'center';
        newRow.append(cell);
        cell.innerHTML = user[key];
    }
    const deleteBtnCell = document.createElement('td')
    const deleteBtn = document.createElement('button');
    newRow.append(deleteBtnCell);
    deleteBtnCell.append(deleteBtn);
    deleteBtnCell.style.textAlign = 'center'
    deleteBtn.innerText = 'remove';
    
    deleteBtn.addEventListener('click', () => {
        newRow.remove();
    })
    document.querySelector('form').reset()
})