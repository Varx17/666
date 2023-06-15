const button = document.querySelector("#btn"); 
const radioButtons = document.querySelectorAll('input[name="fryzura"]'); 

 
 

button.addEventListener("click", () => { 
    let selectedButton; 
    for(const radioB of radioButtons){ 
        if(radioB.checked){ 
            selectedButton = radioB.value; 
            break; 
        } 
    } 
    let result = document.querySelector("#result"); 
    result.innerText = selectedButton ? `Cena strzyżenia: ${selectedButton}` : `Nie wybrałeś strzyżenia`; 
}); 


document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Zapobiegamy domyślnej akcji formularza

    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Tutaj możesz wykonać dodatkową walidację, np. sprawdzić poprawność adresu e-mail

    // Przygotowanie danych do wysłania
    var data = {
      email: email,
      subject: subject,
      message: message
    };

    // Wywołanie funkcji do wysłania maila na serwerze
    sendEmail(data);
  });

  function sendEmail(data) {
    // Tutaj możesz użyć technologii back-end, np. Node.js z biblioteką do wysyłania maili, np. Nodemailer
    // Wysłanie danych na serwer i przetworzenie ich do wysłania maila
    // Przykładowy kod w Node.js z Nodemailer:
    /*
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "YOUR_EMAIL",
        pass: "YOUR_PASSWORD"
      }
    });

    let mailOptions = {
      from: "YOUR_EMAIL",
      to: data.email,
      subject: data.subject,
      text: data.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("E-mail został wysłany: " + info.response);
      }
    });
    */

    // W tym przykładzie tylko symulujemy wysłanie maila, wyświetlając dane w konsoli
    console.log("E-mail został wysłany:");
    console.log("Adres e-mail: " + data.email);
    console.log("Temat: " + data.subject);
    console.log("Wiadomość: " + data.message);

    // Możesz również wyświetlić potwierdzenie na stronie dla użytkownika
    alert("E-mail został wysłany! Sprawdź konsolę, aby zobaczyć szczegóły.");
  }