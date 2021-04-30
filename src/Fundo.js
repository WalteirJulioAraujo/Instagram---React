import Icone from "./Icone"

export default function Fundo(){
    const lista = ["home","search-outline","add-circle-outline","heart-outline","person-outline"]
    return (
        <div class="fundo-mobile">
            {lista.map((e)=><Icone name={e} />)}
        </div>
    );
}