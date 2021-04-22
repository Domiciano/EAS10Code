const cedulaET = document.getElementById('cedulaET');
const nombreET = document.getElementById('nombreET');
const regBtn = document.getElementById('regBtn');

const database = firebase.database();


const obtainData = ()=>{
    console.log('ObtainData');

    let nombre = nombreET.value;
    let cedula = cedulaET.value;

    database.ref('users/'+cedula).get().then( 
        (data)=>{
        console.log('Response');
        let user = data.val();
        console.log(user);
        if(user !== null){
            alert('Ese dato ya existe');    

        }else{
            alert('Registrado con exito');    
            let obj = {
                nombre:nombre, 
                cedula:cedula
            };
            database.ref('users/'+cedula).set(obj);

        } 

    });




    


}


const votar = ()=>{

    let nombre = nombreET.value;

    database.ref('users/'+nombre).on('value', (data)=>{

        let num = data.numChildren();    
        console.log(num);
    
        data.forEach(
            (user)=>{
                console.log(user.val());
            }
        );
        num
    });

}



regBtn.addEventListener('click', obtainData);





