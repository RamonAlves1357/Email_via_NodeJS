const app = require("express")();
const bodyParser = require("body-parser");

const mailer = require("nodemailer");

// Config do protocolo SMPT para envios de emails
const config_Mailtrap = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "User",
        pass: "Pass"
    }
};

const config_Gmail = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "User",
        pass: "Pass"
    },
    tls: {
        rejectUnawthorized: false
    },
}

const transporter = mailer.createTransport(config_Gmail);

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {

    const message = {
        from: "Nome <Email>",
        to: ["EmailDestino"],
        subject: "Teste de email",
        text: "Este email está sendo enviado por uma APi NodeJS. 😁",
    }

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err)
            return res.status(400).send("Falhou! 😯🤦‍♂️")
        }
        return res.status(200).send("Enviou! 😁");
    })

});

app.listen(3000, () => {
    console.log('Serve iniciado!')
});