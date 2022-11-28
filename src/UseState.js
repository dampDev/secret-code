import React from "react";

const SECURITY_CODE = 'paulaydaniel';

function UseState({name}) {
    const [value,setValue] = React.useState('');
    const [error,setError] = React.useState(false);
    const [loading, setloading ]= React.useState(false)

    console.log(value);

    React.useEffect(()=>{
        console.log("empezando el evento");
        if(!!loading){
            setTimeout(()=>{
                console.log("validando")
                if(value === SECURITY_CODE){
                    setloading(false)
                    setError(false)
                } else{
                setloading(false);
                setError(true);
                
                }


                console.log("termando la validacion");
        },3000)
        }
        console.log("terminando el efecto");
    },[loading]);

    return(
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor escribe el codigo de seguridad</p>
            {(error && !loading) && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}
            <input 
            placeholder="Codigo de Seguridad"
            value={value}
            onChange={(event)=>{
                setValue(event.target.value);
            }
                
            }
            />
            <button
                onClick={()=>{setloading(true);
                    // setError(false)
                }}
                >comprobar</button>
        </div>
    );
}

export  {UseState};