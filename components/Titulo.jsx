export default function Titulo(props){


    if(props.pequeno){
        const {nome,secundario} = props
        return(
            <div>
                <p>{nome}</p>
                <h1>{secundario}</h1>
                <h2>Subtitulo</h2>
            </div>
        )

    }else{
        const {nome,secundario} = props
        return(
            <div>
                <h1>{nome}</h1>
                <h1>{secundario}</h1>
                <h2>Subtitulo</h2>
            </div>
        )
    }
   
}