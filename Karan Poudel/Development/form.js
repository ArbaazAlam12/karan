function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contact = document.getElementById('contact').value;
    if (!name || !email || !message || !contact) {
        alert('Please fill in all fields');
        return false;
    }else {
        emailjs.init("61912LaFBIJyyra8G");
        const params = {
            name: name,
            email: email,
            message: message,
            contact: contact
        };

        const serviceID = "service_b67rxkg";
        const templateID = "template_q8ms53y";

        emailjs.send(serviceID, templateID, params)
            .then((response) => {
                console.log("Email sent successfully:", response);
                alert("Your message was sent successfully.");
                name.value = "";
                email.value = "";
                message.value = "";
                contact.value = "";
            })
            .catch((error) => {
                console.error("Email sending failed:", error);
                alert("An error occurred while sending the email.");
            });
            return false;
    }
}