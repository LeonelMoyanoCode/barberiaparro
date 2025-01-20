document.addEventListener('DOMContentLoaded', function() {
    // Datos de usuarios predefinidos
    const users = {
        'exe': '123',
        'rodri': '456'
    };

    // Referencias a los elementos del DOM
    const loginModal = document.getElementById("loginModal");
    const loginForm = document.getElementById("login-form");
    const closeBtn = document.getElementById("closeBtn");
    const loginBtn = document.getElementById("loginBtn");

    // Función para abrir o cerrar el modal
    function toggleModal(show) {
        loginModal.style.display = show ? 'flex' : 'none';
    }

    // Función para manejar el inicio de sesión
    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('contrasena').value;

        // Validación con los usuarios predefinidos
        if (users[username] && users[username] === password) {
            localStorage.setItem('loggedUser', username);
            alert(`¡Bienvenido ${username}!`);
            window.location.href = 'admin.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }

    // Asignar eventos
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            toggleModal(false); // Cerrar el modal
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            toggleModal(true); // Abrir el modal
        });
    }
});