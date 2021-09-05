import Titulo  from "../../components/Titulo"

export default function usandoTitulo(){
    return(
        <div>
             <Titulo nome='OLAAAAAAAA' secundario='Ola2'></Titulo>
             <Titulo nome='OLAAAAAAAA' secundario='Ola2' pequeno={true}></Titulo>
        </div>
    )
}