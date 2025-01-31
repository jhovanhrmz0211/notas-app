import InputForm from "../../componentes/Compartido/InputForm";

function IniciarSesion() {
    return ( 
        <div className="w-lg mx-auto">
            <form className="flex flex-col my-5 items-center justify-center  shadow-2xl rounded">
                <label>Correo</label>
                <InputForm placeholder='Correo' />
                
                <label>Contraseña</label>
                <InputForm placeholder='Contraseña' />
                <button className="bg-white text-purple-500 my-4 px-4 py-2 rounded shadow-2xl border-2 cursor-pointer hover:bg-purple-600 hover:text-amber-50">
                    Sesión
                </button>
            </form>
        </div>
     );
}

export default IniciarSesion;