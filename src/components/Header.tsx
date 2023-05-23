import { styled } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { IconButton } from "./Common";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

export default () => {
  return (
    <Header>
      <Title>Interview Calendar</Title>
      <IconButton>
        <AiOutlinePlus />
      </IconButton>
    </Header>
  );
};
