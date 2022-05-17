function showData(e) {
    e.preventDefault();
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phoneNumber').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    console.log ('name');
    console.log ('email');
    console.log ('phoneNumber');
    console.log ('subject');
    console.log ('message');

    
    let emailReceiver = 'sherly.pisperi1604@gmail.com'
    let bodyEmail = `Hy, my name is ${name}. i am so excited with your portofolio.${subject}, ${message}`
    
    if (name == '') {
        return alert("Name (required)")
    } else if (email == '') {
        return alert("Email (required)")
    } else if (phone == '') {
        return alert("Phone Number (required)")
    } else if (subject == '') {
        return alert("subject (required)")
    } else if (message == '') {
        return alert("Message (required)")
    } else{
        window.open(`mailto:${emailReceiver}?subject=${subject}&body=${bodyEmail}`);
    }
    
}



