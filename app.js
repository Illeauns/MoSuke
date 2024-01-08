const navigation = document.querySelector('.nav-menu')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    navigation.classList.toggle("active")
    hamburger.classList.toggle("active")

    document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navigation.classList.remove("active")
    }))
})