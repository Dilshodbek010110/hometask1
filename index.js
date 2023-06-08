let name = prompt("Введите ваше имя:").toLowerCase().trim()



if (name.startsWith('a') || name.startsWith('A')) {
    alert("welcome")
  let age = prompt("Введите ваш возраст:")
  alert("welcome")
  
  if (age > 20 && age <= 40) {
    let money = prompt("Введите количество денег в кармане:")
    
    if (money > 100) {
      alert("welcome");
    } else {
      alert("goodbye");
    }
  } else {
    alert("goodbye");
  }
} else {
  alert("goodbye");
}