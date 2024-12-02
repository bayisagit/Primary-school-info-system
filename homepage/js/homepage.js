function toggleMenu() {
    const heroNav = document.querySelector('.hero_nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (heroNav.style.display === 'none' || heroNav.style.display === '') {
        heroNav.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        heroNav.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}
function authorize() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "Admin@123" && password === "gg2016") {

        window.location.href = "../Dashboard/dashboard.html";
    } else {
        alert("Invalid Email or Password");
    }
}