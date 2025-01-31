import InputForm from "../../componentes/Compartido/InputForm";

function Registro() {
  return (
    <div className="w-lg mx-auto">
      <form className="flex flex-col my-5 items-center justify-center  shadow-2xl rounded">
        <label className="text-lg">Usuario</label>
        <InputForm placeholder="Crea un usuario" />

        <label className="text-lg">Correo</label>
        <InputForm placeholder="Ingresa tu correo" />

        <label className="text-lg">Contraseña</label>
        <InputForm placeholder="Crea Contraseña" />

        <label className="text-lg">Repite</label>
        <InputForm placeholder="Repite Contraseña" />

        <button className="bg-white text-purple-500 my-4 px-4 py-2 rounded shadow-2xl border-2 cursor-pointer hover:bg-purple-600 hover:text-amber-50">
          Registro
        </button>
      </form>
    </div>
  );
}

export default Registro;
