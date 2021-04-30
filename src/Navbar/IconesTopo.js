import Icone from "../Icone"

export default function IconesTopo(){
    const lista = ["paper-plane-outline","compass-outline","heart-outline","person-outline"]
    return (
      <>
        <div class="icones">
          {lista.map((e)=> <Icone name={e} />)}
        </div>

        <div class="icones-mobile">
          <Icone name="paper-plane-outline" />
        </div>
      </>
    );
}
