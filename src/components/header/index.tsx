import * as S from './header.style';
import Logo from '../../assets/header-logo.png';

function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Logo src={Logo} />
        <div></div>
      </S.Container>
    </S.Header>
  );
}

export default Header;
