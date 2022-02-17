//react
import { Link,useHistory } from "react-router-dom";

//css
import styled from "styled-components"


export default function MainContent() {
  return (
        <Container>
            <p>메인페이지 내용</p>
        </Container>
  );
}

const Container = styled.div`
    width: 100%;
`;