/* eslint-disable react/prop-types */
function InputForm({placeholder}) {
    return ( 
        <>
            <input type="text" placeholder={placeholder} className='m-1.5 p-1.5 font-mono text-center focus:outline-2 focus:outline-offset-2 focus:outline-purple-200 focus:rounded' required/>
        </>
     );
}

export default InputForm;