import * as S from './header.style';
import Logo from '../../assets/header-logo.png';
import useMatchScreenSize from 'hooks/useMatchScreenSize';

function Header() {
  const { isLarge } = useMatchScreenSize();

  return (
    <>
      {isLarge ? (
        <>
          <S.DesktopHeader>
            <S.Header>
              <S.Container>
                <S.Logo src={Logo} />
                <div></div>
              </S.Container>
            </S.Header>
          </S.DesktopHeader>
        </>
      ) : (
        <>
          <S.Header>
            <S.Container>
              <S.Logo src={Logo} />
              <div></div>
            </S.Container>
          </S.Header>
        </>
      )}
    </>
  );
}

export default Header;
