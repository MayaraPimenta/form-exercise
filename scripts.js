function enviar() {
    let pessoa = {
        id: newPessoas.length + 1,
        pname: document.getElementById("pname").value,
        lname: document.getElementById("lname").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        genero: document.querySelector('input[name="gender"]:checked').value,
    }
    
    newPessoas.push(pessoa);
    localpessoas = localStorage.setItem('pessoas', JSON.stringify(newPessoas));

    pessoasTable = JSON.parse(localStorage.getItem('pessoas'))

    element = pessoasTable[pessoasTable.length - 1];

        let myTable = document.getElementById("myTable");
        let newRow = myTable.insertRow(-1);

        let id = newRow.insertCell(0);
        id.innerHTML = element.id

        let nameCell = newRow.insertCell(1);
        nameCell.innerHTML = element.pname + ' ' + element.lname;
        
        let ageCell = newRow.insertCell(2);
        ageCell.innerHTML = element.age;

        let emailCell = newRow.insertCell(3);
        emailCell.innerHTML = element.email;

        let generoCell = newRow.insertCell(4);
        if (element.genero == "masc") {
            generoCell.innerHTML = "Masculino"
        } else if (element.genero == "femi") {
            generoCell.innerHTML = "Feminino"
        } else 
            generoCell.innerHTML = "Prefiro não Responder"

        let remove = newRow.insertCell (5);
        var trash = "<i class='bi bi-trash' onClick='remove()'></i>"
        remove.innerHTML = trash

    limpaCampo()
}

newPessoas = []

function limpaCampo() {
    document.getElementById("pname").value = ''
    document.getElementById("lname").value = ''
    document.getElementById("age").value = ''
    document.getElementById("email").value = ''
    document.querySelector('input[name="gender"]:checked').checked = false
}

function remove() {
    element.addEventListener("click", teste())
    function teste () {
        console.log("funcionou")
    }
}