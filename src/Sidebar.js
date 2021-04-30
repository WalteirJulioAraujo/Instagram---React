import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"
import Links from "./Links"
import DireitoCopia from "./DireitoCopia"



export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario />

      <Sugestoes />

      <Links />

      <DireitoCopia />
    </div>
  );
}
