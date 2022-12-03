import React from "react";

const SECURITY_CODE = 'paulaydaniel';

function UseReducer({name}) {
    const [state, dispatch]= React.useReducer(reducer, initialState);
    
    // const [value,setValue] = React.useState('');
    // const [error,setError] = React.useState(false);
    // const [loading, setloading ]= React.useState(false)
   React.useEffect(()=>{
    console.log("empezando el evento");
    if(!!state.loading){
        setTimeout(()=>{
            console.log("validando")
            if(state.value === SECURITY_CODE){
             dispatch({type: actionTypes.confirm});
            } else{
                dispatch({type: actionTypes.error});
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
                dispatch({type: actionTypes.write,payload: event.target.value});
                // onWrite(event.target.value);
                // setValue(event.target.value);
            }
                
            }
            />
            <button
                onClick={()=>{
                    dispatch({type: actionTypes.check });
                
                //    onCheck();
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
                dispatch({type: actionTypes.delete });

                    // onDelete();
                    
                }}
                >Si, elinar</button>
                <button
                onClick={()=>{
                dispatch({type:actionTypes.reset});

                    // onReset();
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
                dispatch({type:actionTypes.reset});

                    // onReset();
                }}
                >Reset, volver atras</button>
        </React.Fragment>
    )
   }
}

const initialState = {
    value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
};

// const reducer = (state, actiron)=>{

// }

// const reducer1 = (state, action)=>{
//     if(action.type === 'ERROR'){
//         return{
//             ...state,
//             error:true,
//             loading:true,
//         };
//     }else if(action.type == 'CHECK'){
//         return{
//             ...state,
//             loading:true
//         };
//     }else{
//         return{
//             ...state,
//         }
//     }
    
// }

// const reducerSwitch = (state, action)=>{
//     switch (action.type) {
//         case 'ERROR':
//             return{
//                 ...state,
//                 error:true,
//                 loading:false
//             };
//             case 'CHECK':
//                 return{
//                     ...state,
//                     loading:true,
//                 };        
//         default:
//             return{
//                 ...state
//             }
//     }
// }
const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    write:'WRITE',
    delete: 'DELETE',
    check: 'CHECK',
    reset: 'RESET'
}

const reducerObject = (state, payload)=> ({
    [actionTypes.confirm]:{
        ...state,
        error:false,
        loading: false,
        confirmed:true,
    },

    [actionTypes.error]:{
        ...state,
        error:true,
        loading: false,
    },
     [actionTypes.write]:{
         ...state,
         value: payload,
    },
    [actionTypes.check]:{
        ...state,
        loading: true,
    },
    [actionTypes.delete]:{
        ...state,
        deleted:true,
    },
    [actionTypes.reset]:{
        ...state,
        confirmed:false,
        deleted: false,
        value:'',
        
    }

});

const reducer = (state,action)=>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type];
    }else{
        return state;
    }
}

export {UseReducer};