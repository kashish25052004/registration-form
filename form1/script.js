document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
const form = document.querySelector('#myForm');
const nameInput = form.queryselector('input[name="Name"]');
const collegeInput = form.queryselector('input[name="College"]');
const emailInput = form.queryselector('input[name="Email"]');
const contactInput = form.queryselector('input[name="Contact"]');
const submitButton = form.queryselector('.btn');

function validateEmail(email){
    const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression
    return re.test(email);
}

function validatecontact(contact){
    const re =/^\d{10}$/;
    return re.test(contact);
}

form.addEventListener('submit',function(event){
    event.preventDefault();

    const name =nameInput.value.trim();
    const college =collegeInput.value.trim();
    const email =emailInput.value.trim();
    const contact =contactInput.value.trim();

    if(name=== '' || college === '' || email === '' || contact === ''){
        alert('please fill in all fields.');
        return;
    }

    if(!validateEmail(email)){
        alert('please enter a valid email address.');
        return;
    }

    if(!validatecontact(contact)){
        alert('please enter a valid 10-digit contact number.');
        return;
    }

    alert('Form submitted successfully!');

});



