function enviar() {
    let pessoa = {
        pname: document.getElementById("pname").value,
        lname: document.getElementById("lname").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        genero: document.querySelector('input[name="gender"]:checked').value,
    }
    
    newPessoas.push(pessoa);
    localpessoas = localStorage.setItem('pessoas', JSON.stringify(newPessoas));

    pessoasTable = JSON.parse(localStorage.getItem('pessoas'))

    let element = pessoasTable[pessoasTable.length - 1];

        let myTable = document.getElementById("myTable");
        let newRow = myTable.insertRow(-1);
        let nameCell = newRow.insertCell(0);
        nameCell.innerHTML = element.pname + ' ' + element.lname;
        
        let ageCell = newRow.insertCell(1);
        ageCell.innerHTML = element.age;

        let emailCell = newRow.insertCell(2);
        emailCell.innerHTML = element.email;

        let generoCell = newRow.insertCell(3);
        if (element.genero == "masc") {
            generoCell.innerHTML = "Masculino"
        } else if (element.genero == "femi") {
            generoCell.innerHTML = "Feminino"
        } else 
            generoCell.innerHTML = "Prefiro não Responder"

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