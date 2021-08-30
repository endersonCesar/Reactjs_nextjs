export default function Titulo(props){
    const {nome} = props
    return(
        <div>
            <h1>{nome}</h1>
            <h2>Subtitulo</h2>
        </div>
    )
}