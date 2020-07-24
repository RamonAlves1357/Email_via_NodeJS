const app = require("express")();
const bodyParser = require("body-parser");

const mailer = require("nodemailer");

const config = {
    host: "smtp.mailtrap.io",
    port: 25,
    auth: {
        user: "879cbcc900e682",
        pass: "48e726117b8ca8",
    }
};

const transporter = mailer.createTransport(config);

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {

    const message = {
        from: "ramon.alves@academico.ifpb.edu.br",
        to: "ramon.alves@academico.ifpb.edu.br",
        subject: "Teste de email",
        text: "Este email está sendo enviado por uma APi NodeJS. 😁",
    }

    transporter.sendMail(message, (err, info) => {
        if (err) {
            return res.status(400).send("Falhou! 😯🤦‍♂️")
        }
        return res.status(200).send("Enviou! 😁");
    })

});

app.listen(3000, () => {
    console.log('Serve iniciado!')
});