import Icone from "../Icone"
import Acoes from "./Acoes"
import Curtidas from "./Curtidas"

export default function PostFundo(props) {
  return (
    <div class="fundo">
      <Acoes />

      <Curtidas srcLike={props.srcLike}/>
    </div>
  );
}
