let trash;
let pessoa;

function enviar() {
    pessoa = {
        id: newPessoas.length + 1,
        pname: document.getElementById("pname").value,
        lname: document.getElementById("lname").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        genero: document.querySelector('input[name="gender"]:checked').value,
    }
    
    newPessoas.push(pessoa);
    localpessoas = localStorage.setItem('pessoas', JSON.stringify(newPessoas));
    criaTabela()
    limpaCampo()
}

function criaTabela() {
    pessoasTable = JSON.parse(localStorage.getItem('pessoas'))

    element = pessoasTable[pessoasTable.length - 1];

        let myTable = document.getElementById("myBody");
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
        let trash = "<i class='bi bi-trash'></i>"
        remove.innerHTML = trash;
        remove.addEventListener ("click", function() {
            removeThis(this.parentNode);
        })
}

newPessoas = []

function limpaCampo() {
    document.getElementById("pname").value = ''
    document.getElementById("lname").value = ''
    document.getElementById("age").value = ''
    document.getElementById("email").value = ''
    document.querySelector('input[name="gender"]:checked').checked = false
}

function removeThis(clicked_id) {

    let index = pessoasTable.findIndex(pessoa => pessoa.id == clicked_id.firstChild.innerHTML);
    pessoasTable.splice(index, 1)
    localStorage.setItem('pessoas', JSON.stringify(pessoasTable));
    
    //apagar a linha html
    console.log(clicked_id.rowIndex - 1);
    document.getElementById("myBody").deleteRow(clicked_id.rowIndex - 1);
}