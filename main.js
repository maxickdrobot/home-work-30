console.log('#11. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

console.log("Task 1: ");
document.write("<h2>Task 1: </h2>")


function isValidEmail(email) {
  const pattern = /^[a-z0-9_.-]+@[a-z0-9.-]+\.[a-z]{2,6}$/gi
  return pattern.test(email);
}

console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false
document.write(`<p>example@example.com - ${isValidEmail("example@example.com")}</p>`);
document.write(`<p>invalid-email - ${isValidEmail("invalid-email")}</p>`);

console.log("");

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

console.log("Task 2: ");
document.write(`<h2>Task 2: </h2>`)

function isValidUrl(url) {
  const pattern = /https?:\/\/www\.[a-z0-9-]+\.[a-z]{2,6}/gi;
  return pattern.test(url);
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false
document.write(`<p>https://www.example.com - ${isValidUrl("https://www.example.com")}</p>`);
document.write(`<p>invalid-url - ${isValidUrl("invalid-url")}</p>`);
