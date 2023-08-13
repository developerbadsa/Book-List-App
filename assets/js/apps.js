
// select input for submit info
const inputName = document.getElementById('name');
const inputWriter = document.getElementById('writter');
const inputNumber = document.getElementById('number');
const inputSubmit = document.getElementById('text-submit');

// display HTML
const tableParent = document.getElementById('tableRow');
const warningMessage = document.getElementById('warningMessage');

let i = 1;

inputSubmit.addEventListener('click', function () {

    let namValue = inputName.value.trim() !== '';
    let writeValue = inputWriter.value.trim() !== '';
    let numValue = inputNumber.value.trim() !== '';



    if( !namValue || !writeValue || !numValue){
        warningMessage.classList.remove('hidden');
    }else{

        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
                        <th>${i}</th>
                      <td>${inputName.value}</td>
                      <td>${inputWriter.value}</td>
                      <td>${inputNumber.value}</td>
                            `;

        tableParent.appendChild(tableRow);
        warningMessage.classList.add('hidden');

        inputName.value = '';
        inputWriter.value = '';
        inputNumber.value = '';

    }


    i++
})