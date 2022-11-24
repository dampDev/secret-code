import React from "react";

class ClassState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: true,
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
                <input placeholder="Codigo de Seguridad"/>
                <button
                    // onClick={()=> this.setState({error: !this.state.error})}
                    onClick={()=>
                        this.setState(prevState=>({error: !prevState.error}))

                    }
                >comprobar</button>
            </div>
        );
    }
}
export {ClassState}