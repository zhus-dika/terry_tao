//Существует много способов выбрать DOM узел; здесь мы получаем форму и электронную почту
//поле ввода, а также элемент span, в который мы поместим сообщение об ошибке.
var form  = document.getElementById('form');
var email = document.getElementById('email');
var name = document.getElementById('name');
var message= document.getElementById('message');
var errorName = document.querySelector('.errorName');
var errorEmail = document.querySelector('.errorEmail');
var errorMessage = document.querySelector('.errorMessage');
var userIcon = document.querySelector('.icon__img-username')
var emailIcon = document.querySelector('.icon__img-email')
var messageIcon = document.querySelector('.icon__img-message')

email.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
  // является ли корректным поле электронной почты.
  if (email.validity.valid) {
    // В случае появления сообщения об ошибке, если поле
    // является корректным, мы удаляем сообщение об ошибке.
    errorEmail.innerHTML = ""; // Сбросить содержимое сообщения
    emailIcon.style.fill = "white"
    errorEmail.className = "errorEmail"; // Сбросить визуальное состояние сообщения
  }
}, false);
name.addEventListener("input", function (event) {
     if (name.validity.valid) {
       // В случае появления сообщения об ошибке, если поле
       // является корректным, мы удаляем сообщение об ошибке.
       userIcon.style.fill = "white"
       errorName.innerHTML = ""; // Сбросить содержимое сообщения
       errorName.className = "errorName"; // Сбросить визуальное состояние сообщения
     }
 }, false);
message.addEventListener("input", function (event) {
    if (message.validity.valid) {
      // В случае появления сообщения об ошибке, если поле
      // является корректным, мы удаляем сообщение об ошибке.
      messageIcon.style.fill = "white"
      errorMessage.innerHTML = ""; // Сбросить содержимое сообщения
      errorMessage.className = "errorMessage"; // Сбросить визуальное состояние сообщения
    }
}, false);
form.addEventListener("submit", function (event) {
  // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
   // валидность поля электронной почты.
  if (!email.validity.valid) {
      emailIcon.style.fill = "red"
      if(!email.value) {
        errorEmail.innerHTML = "Email is required!";
      } else {
        errorEmail.innerHTML = "Email is incorrect!";
      }
    errorEmail.className = "errorEmail active";
    event.preventDefault();
  }
  if (!name.validity.valid) {
    userIcon.style.fill = "red"
    if(!name.value) {
        errorName.innerHTML = "Name is required!";
      } else if (name.value.length < 4 || name.value.length > 20){
        userIcon.style.fill = "red"
        console.log(userIcon)
        errorName.innerHTML = "Name is incorrect! Please enter name with length in range (4, 20)!";
      }
    errorName.className = "errorName active";
    event.preventDefault();
  }
  if (!message.validity.valid) {
    messageIcon.style.fill = "red"
    if(!message.value) {
        errorMessage.innerHTML = "Message is required!";
      } else if (message.value.length < 20){
        errorMessage.innerHTML = "Message is too short! Please enter message with length in range (20, 100)!";
      }
    errorMessage.className = "errorMessage active";
    event.preventDefault();
  }
}, false);