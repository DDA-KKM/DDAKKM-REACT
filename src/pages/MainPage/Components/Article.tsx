import * as S from "./Article.style";
import THUMB from "../../../assets/Editor54.png";

function Article() {
  return (
    <S.ArticleContainer>
      <S.ArticleHeader>
        따끔 에디터의 <em>PICK</em>
      </S.ArticleHeader>
      <S.Thumbnail>
        <img src={THUMB} alt="썸네일" />
      </S.Thumbnail>
    </S.ArticleContainer>
  );
}

export default Article;
