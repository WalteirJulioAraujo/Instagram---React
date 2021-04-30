import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"
import Links from "./Links"
import DireitoCopia from "./DireitoCopia"



export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario name="catanacomics" subname="Catana"/>

      <Sugestoes />

      <Links />

      <DireitoCopia />
    </div>
  );
}
