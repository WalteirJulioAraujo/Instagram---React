import Icone from "./Icone"

export default function PostTopo(post) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${post.srcUser}.svg`} />
        {post.srcUser}
      </div>
      <div class="acoes">
        <Icone name="ellipsis-horizontal" />
      </div>
    </div>
  );
}
