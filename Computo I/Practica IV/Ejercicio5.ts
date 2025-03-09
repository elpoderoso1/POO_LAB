enum RolUsuario {
    Admin = "Administrador",
    Editor = "Editor",
    UsuarioNormal = "Usuario Normal",
};

type Usuario = {
    id: number,
    nombre: string,
    rol: RolUsuario,
}

function mostrarUsuario(usuario: Usuario): string {
    return `ID: ${usuario.id}\nNombre: ${usuario.nombre}\nRol: ${usuario.rol}`;
}

const usuario01: Usuario = { id: 1, nombre: "Carlos García", rol: RolUsuario.Admin };
const usuario02: Usuario = { id: 2, nombre: "Cecilia Ramos", rol: RolUsuario.UsuarioNormal };

console.log(mostrarUsuario(usuario01));
console.log(mostrarUsuario(usuario02));

function cambiarRol(usuario: Usuario, nuevoRol: RolUsuario): void {
    usuario.rol = nuevoRol;
}

cambiarRol(usuario02, RolUsuario.Editor);
console.log(mostrarUsuario(usuario02));