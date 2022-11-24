import React from "react";

function UseState({name}) {
    const [error,setError] = React.useState(true);
    const [loading, setloading ]= React.useState(false)
    React.useEffect(()=>{
        console.log("empezando el evento");
        setTimeout(()=>{
                console.log("validando")
                setloading(false)
                console.log("termando la validacion");
        },3000)
        console.log("terminando el efecto");
    },[])

    return(
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor escribe el codigo de seguridad</p>
            {error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}
            <input placeholder="Codigo de Seguridad"/>
            <button
                onClick={()=>setloading(true)}
                >comprobar</button>
        </div>
    );
}

export  {UseState};