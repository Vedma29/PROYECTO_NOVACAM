const API_URL = "http://localhost:3001/usuarios";

/**
 * Registrar usuario
 */
export const registrarUsuario = async (usuario) => {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return await respuesta.json();
};

/**
 * Iniciar sesión
 */
export const iniciarSesion = async (correo, password) => {
  // Obtiene todos los usuarios
  const respuesta = await fetch(API_URL);
  const usuarios = await respuesta.json();

  // Busca si existe un usuario con ese correo y contraseña
  const usuario = usuarios.find(
    (u) =>
      u.correo.trim().toLowerCase() === correo.trim().toLowerCase() &&
      u.contrasena === password
  );

  return usuario || null;
};

/**
 * Obtener todos los usuarios
 */
export const obtenerUsuarios = async () => {
  const respuesta = await fetch(API_URL);
  return await respuesta.json();
};