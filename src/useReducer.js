import React from "react";

const SECURITY_CODE = 'paulaydaniel';

function UseReducer({name}) {
    const [state, setState]= React.useReducer(reducer, initialState);
    
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

const initialState = {
    value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
};

// const reducer = (state, actiron)=>{

// }

const reducer1 = (state, action)=>{
    if(action.type === 'ERROR'){
        return{
            ...state,
            error:true,
            loading:true,
        };
    }else if(action.type == 'CHECK'){
        return{
            ...state,
            loading:true
        };
    }else{
        return{
            ...state,
        }
    }
    
}

const reducerSwitch = (state, action)=>{
    switch (action.type) {
        case 'ERROR':
            return{
                ...state,
                error:true,
                loading:false
            };
            case 'CHECK':
                return{
                    ...state,
                    loading:true,
                };        
        default:
            return{
                ...state
            }
    }
}

const reducerObject = (state, action)=> ({
    'ERROR':{
        ...state,
                error:true,
                loading:false
    },
    'CHECK':{
        ...state,
                loading:true,
    },

});

const reducer = (state,action)=>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type];
    }else{
        return state;
    }
}

export {UseReducer};