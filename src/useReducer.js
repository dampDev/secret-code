import React from "react";

const SECURITY_CODE = 'paulaydaniel';

function UseReducer({name}) {
    const [state, dispatch]= React.useReducer(reducer, initialState);
    
    const onConfirm = () => dispatch({type: actionTypes.confirm});
    const onError = () => dispatch({type: actionTypes.error});
    const onCheck = () => dispatch({type: actionTypes.check});
    const onDelete = () => dispatch({type: actionTypes.delete});
    const onReset = () => dispatch({type: actionTypes.reset});
    const onWrite =  ({target:{value}}) =>{
        dispatch({type: actionTypes.write, payload: value})};
    


   React.useEffect(()=>{
    console.log("empezando el evento");
    if(!!state.loading){
        setTimeout(()=>{
            console.log("validando")
            if(state.value === SECURITY_CODE){
             onConfirm();
            } else{
                onError();
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
            onChange={onWrite}
            />
            <button
                onClick={onCheck}
                >comprobar</button>
        </div>
    );
   }else if (!!state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
                <p>Confirma eliminar</p>
                <button
                onClick={onDelete}
                >Si, eliminar</button>
                <button
                onClick={()=>{
                // dispatch({type:actionTypes.reset});

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
                onClick={onReset} //para no ser redundante en la llama a las arrowfuntion
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