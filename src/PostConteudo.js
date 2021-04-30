export default function PostConteudo(post){
    return (
      <div class="conteudo">
        <img src={`assets/img/${post.srcContent}.svg`} />
      </div>
    );
}