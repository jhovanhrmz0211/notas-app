// eslint-disable-next-line no-unused-vars
import React from 'react';
function Navbar() {
  return (
    <nav className="bg-gray-700 p-2 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Notas App</h1>
        <div>
        <button className="bg-white text-purple-500 mx-1 px-4 py-2 rounded">
          Iniciar sesión
        </button>
        <button className="bg-white text-purple-500 px-4 py-2 rounded">
          Registrar
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
