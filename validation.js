const inputs = document.querySelectorAll("input");

const patterns = {
    username:/^[a-z\d]{5,12}$/i,
    email:/^([a-z\d.]+)@([a-z]{5,20}).([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password:/^[a-z\d@!_-]{8,12}$/,
    phone:/^[\d]{11}$/,
    slug:/^[a-z\d-]{8,20}$/
}

const validate = (field, reqexp) => {
    let testResult = reqexp.test(field.value)
    if(testResult){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
} 

inputs.forEach(element => {
    element.addEventListener("keyup", (e) => {
        console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
});
