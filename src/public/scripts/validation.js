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
})
