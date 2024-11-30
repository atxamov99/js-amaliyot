let userColor = prompt("Enter body backroundColor");
    if (userColor) {
      document.body.style.backgroundColor = userColor;
    } else {
      alert("Hech qanday rang kiritilmadi!");
    }
    let textColor = prompt("Enter text color");
    const textElement = document.getElementById("text");
    if (textColor) {
      textElement.style.color = textColor;
    } else {
      alert("Hech qanday rang kiritilmadi!");
    }
