const cedulaET = document.getElementById('cedulaET');
const nombreET = document.getElementById('nombreET');
const regBtn = document.getElementById('regBtn');

const database = firebase.database();


const registrar = ()=>{
    let nombre = nombreET.value;
    let cedula = cedulaET.value;

    let obj = {
        nombre:nombre, 
        cedula:cedula
    };
    database.ref('users/'+cedula).set(obj);
}

regBtn.addEventListener('click', registrar);



database.ref('users').on('value',  (data)=>{
    data.forEach(user => {
        console.log(user.val());
    });
});


