import Logo from "./Logo";
import BarraPesquisa from "./BarraPesquisa";
import IconesTopo from "./IconesTopo";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />

        <BarraPesquisa />

        <IconesTopo />
        
      </div>
    </div>
  );
}
