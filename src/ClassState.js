import React from "react";
import { Loading } from "./Loading";
const SECURITY_CODE = 'paulaydaniel';


class ClassState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
            loading: false,
        }
    }

//     UNSAFE_componentWillMount(){
//     console.log("componentWillMount");
//    }
    
    // componentDidMount(){
    //     console.log("componentDidMount");
    // }
componentDidUpdate(){
    console.log("Actualizacion");
    if(!!this.state.loading){
        setTimeout(()=>{
            console.log("validando")

            if(SECURITY_CODE === this.state.value){
                this.setState({loading: false})
            }
            console.log("termando la validacion");
    },3000);
    }
}

    render (){
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor escribe el codigo de seguridad</p>
                {this.state.error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {this.state.loading && (
                <Loading/>
            )}
                <input 
                placeholder="Codigo de Seguridad"
                value={this.state.value}
                onChange={(event)=>{
                    this.setState({value: event.target.value});
                }

                }
                
                />
                <button
                    // onClick={()=> this.setState({error: !this.state.error})}
                    onClick={()=>
                        this.setState({loading:true})
                    }
                >comprobar</button>
            </div>
        );
    }
}
export {ClassState}