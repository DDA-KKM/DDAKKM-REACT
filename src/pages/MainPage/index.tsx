import Article from "./Components/Article";
import Banner from "./Components/Banner";
import Chat from "./Components/Chat";
import NewRN from "./Components/NewRN";
import Search from "./Components/Search";
import TopicList from "./Components/TopicList";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
`;

function MainPage() {
  return (
    <Container>
      <Search />
      <Banner />
      <Chat />
      <Article />
      <TopicList />
      <NewRN />
    </Container>
  );
}

export default MainPage;
