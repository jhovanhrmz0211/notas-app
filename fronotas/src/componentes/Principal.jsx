// import Home from "./Inicio";

function Principal() {
    return ( 
        <div className="w-lg mx-auto">
            <form className="flex flex-col my-5 items-center justify-center  shadow-2xl rounded ">
                <label className="text-lg">Usuario</label>
                <input type="text" placeholder="Crea un usuario" className="p-1.5 font-mono text-center" />
                <label className="text-lg">Correo</label>
                <input type="text" placeholder="Ingresa tu correo" className="p-1.5 font-mono text-center" />
                <label className="text-lg">Contraseña</label>
                <input type="text" placeholder="Contraseña" className="p-1.5 font-mono text-center" />
                <label className="text-lg">Repite</label>
                <input type="text" placeholder="Contraseña" className="p-1.5 font-mono text-center" />
                <button className="bg-white text-purple-500 mx-1 px-4 py-2 rounded shadow-2xl border-2 cursor-pointer">Registro</button>
                </form>
            {/* <Home></Home> */}
        </div>
     );
}

export default Principal;