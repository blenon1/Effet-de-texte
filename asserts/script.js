const burger = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
const textAnim = document.querySelector('h1');

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
})

burger.addEventListener("click", () => {
    navigation.classList.toggle("active")
})




new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 20
})
.typeString('Moi c\'est William')
.pauseFor(300)
.typeString('<strong>, Dev Full-Stack Junior</strong>')
.pause(1000)
.deleteChars(17)
.typeString('<span style="color:#27ae60"> CSS3</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color:#90DBF4"> React</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color:#8831EE"> PHP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#F09F14"> JavaScrip</span> !')
.start()
