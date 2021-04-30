import Icone from "./Icone";
import PostConteudo from "./PostConteudo";
import PostFundo from "./PostFundo";
import PostTopo from "./PostTopo"

export default function Post() {
  const lista = [
    { srcUser: "meowed", srcContent: "gato-telefone", srcLike: "respondeai" },
    { srcUser: "barked", srcContent: "dog", srcLike: "adorable_animals" },
  ];
  return (
    <>
      {lista.map((e) => {
        return (
          <div class="post">
            <PostTopo srcUser={e.srcUser} />

            <PostConteudo srcContent={e.srcContent} />

            
            <PostFundo srcLike={e.srcLike} />
          </div>
        );
      })}
    </>
  );
}
