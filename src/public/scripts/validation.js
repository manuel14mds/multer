
/* (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')
    let error = false

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    error = true
                    console.log('algo fallo')
                }
                if(!error){
                    console.log('no hay fallos')
                }
                form.classList.add('was-validated')
            }, false)
        })
})() */

function valuesValidator(form, event){
    let aux = true
    if (!form.checkValidity()) {
        event.stopPropagation()
        aux = false
    }
    form.classList.add('was-validated')
    return aux
}

const form = document.getElementById('productForm')
form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    let result = valuesValidator(form, evt)
    if(result){
        const data = new FormData(form)
        // con esto hacemos la peticion, falta lo del file par la imagen
        fetch('/api/products/',{
            method:'POST',
            body:data,
            
        }).then(()=>window.location.href = "/")

    }
    
    /* const data = new FormData(form)
    const obj = {}
    data.forEach((value,key)=>obj[key]=value)
    fetch('/api/sessions/register',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(()=>window.location.href = "/login") */
})
