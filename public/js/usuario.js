const usuario = {
    email: email,
    };
    
  // Almacena la información del usuario en LocalStorage.
  localStorage.setItem('usuario', JSON.stringify(usuario));

  guardarSesion(usuario, 15);

  window.location.href = '/users/login';
