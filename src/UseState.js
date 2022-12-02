import React from "react";

const SECURITY_CODE = 'paulaydaniel';

function UseState({name}) {
    const [state, setState]= React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });
    // const [value,setValue] = React.useState('');
    // const [error,setError] = React.useState(false);
    // const [loading, setloading ]= React.useState(false)

   const onConfirm=()=>{
    setState({
        ...state,
        error:false,
        loading: false,
        confirmed:true,
    });
   };

   const onError = ()=>{
    setState({
        ...state,
        error:true,
        loading: false,
    });
   }

   const onWrite =(newValue)=>{
    setState({
        ...state,
        value: newValue,
    });
   }

   const onCheck=()=>{
    setState({
        ...state,
        loading: true,
    });
   }

   const onDelete= ()=>{
    setState({
        ...state,
        deleted:true,


    });
   }

   const onReset = () => {
    setState({
        ...state,
        confirmed:false,
        deleted: false,
        value:'',
        

    });
   }

    React.useEffect(()=>{
        console.log("empezando el evento");
        if(!!state.loading){
            setTimeout(()=>{
                console.log("validando")
                if(state.value === SECURITY_CODE){
                  onConfirm();
                    // setloading(false)
                    // setError(false)
                } else{
                    onError();
                // setloading(false);
                // setError(true);
                
                }


                console.log("termando la validacion");
        },3000)
        }
        console.log("terminando el efecto");
    },[state.loading]);

   if (!state.deleted && !state.confirmed) {
    return(
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor escribe el codigo de seguridad</p>
            {(state.error && !state.loading) && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {state.loading && (
                <p>Cargando...</p>
            )}
            <input 
            placeholder="Codigo de Seguridad"
            value={state.value}
            onChange={(event)=>{
                onWrite(event.target.value);
                // setValue(event.target.value);
            }
                
            }
            />
            <button
                onClick={()=>{
                   onCheck();
                    // setloading(true);
                    // setError(false)
                }}
                >comprobar</button>
        </div>
    );
   }else if (!!state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
                <p>Confirma elimnar</p>
                <button
                onClick={()=>{
                    onDelete();
                    
                }}
                >Si, elinar</button>
                <button
                onClick={()=>{
                    onReset();
                }}
                >No, Cancelar</button>
            </React.Fragment>
        )
   }else{
    return(
        <React.Fragment>
            <p>Eliminado con exito</p>
            <button
                onClick={()=>{
                    onReset();
                }}
                >Reset, volver atras</button>
        </React.Fragment>
    )
   }
}

export  {UseState};