class Typing {
    constructor(text) {
        this.text = document.querySelector(text);
        this.fullText = this.text.innerHTML;
        this.text.innerHTML = "";
        setTimeout(() => this.typeText(), 500);
    }
    typeText(x = 0) {
        this.text.innerHTML += this.fullText[x];
        x++;
        if (x <= this.fullText.length) {
            setTimeout(() => this.typeText(x), 300);
        } else {
            x = 0;
            this.text.innerHTML = "";
            setTimeout(() => this.typeText(x), 300);
        }
    }
}

const typingElement = new Typing(".header__nav-logo_desc");

class Typing2 {
    constructor(text) {
        this.text = document.querySelector(text);
        this.fullText = this.text.innerHTML;
        this.text.innerHTML = "";
        setTimeout(() => this.typeText2(), 500);
    }
    typeText2(x = 0) {
        this.text.innerHTML += this.fullText[x];
        x++;
        if (x <= this.fullText.length) {
            setTimeout(() => this.typeText2(x), 300);
        } else {
            x = 0;
            this.text.innerHTML = "";
            setTimeout(() => this.typeText2(x), 300);
        }
    }
}

const typingElement2 = new Typing2(".aboutUs__h1");

class Typing3 {
    constructor(text) {
        this.text = document.querySelector(text);
        this.fullText = this.text.innerHTML;
        this.text.innerHTML = "";
        setTimeout(() => this.typeText3(), 500);
    }
    typeText3(x = 0) {
        this.text.innerHTML += this.fullText[x];
        x++;
        if (x <= this.fullText.length) {
            setTimeout(() => this.typeText3(x), 300);
        } else {
            x = 0;
            this.text.innerHTML = "";
            setTimeout(() => this.typeText3(x), 300);
        }
    }
}

const typingElement3 = new Typing3(".contacts__title");

let captainNumber = document.querySelector(".captain__number");
captainNumber.addEventListener("click", () => {
    alert("Мы не принемаем звонки. Контактируйте нас по телеграму, пожалуйста!")
});

let otherMembersNumber = document.querySelector(".otherMembers__number");
otherMembersNumber.addEventListener("click", () => {
    alert("Мы не принемаем звонки. Контактируйте нас по телеграму, пожалуйста!")
});

let button = document.querySelector(".footer__button-button");
let review = document.querySelector(".footer__review");

button.addEventListener("click", () => {
    let typingSpace = prompt("Оставьте пожалуйста комментарий");
    if (typingSpace != null) {
        review.innerHTML = "Ваш комментарий " + typingSpace + "." + " Если хотите поменять ваш комментарий, перезагрузите страницу.";
    }
});