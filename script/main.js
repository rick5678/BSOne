var nome = document.querySelector("#name");
var telefone = document.querySelector("#tel");
var email = document.querySelector("#email");
var mensagem = document.querySelector("#msgtxt");

var usuario = nome.value; 
var tel = telefone.value; 
var mail = email.value; 
var msg = mensagem.value; 

Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

//senha
//5BC4CBAA7B0113876B59CDD572ED235CA1EE
/*
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "henriquefranco2212@gmail.com",
        pass: "@Karol1234"
    }
});

transporter.sendMail({
    from: "BS One <henriquefranco2212@gmail.com",
    to: "henriquefranco2212@gmail.com",
    subject: "Email de contato",
    text: "Email enviado por:" (usuario) (tel) (mail) (msg),  
}).then(message => {
    console.log(message);
}).catch(err =>{
    console.log(err);
})
*/
