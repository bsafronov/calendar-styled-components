import { styled } from "styled-components";
import { InitialButton } from "./Common";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-top: 1px solid ${({ theme }) => theme.colors.gray.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.medium};
`;

const Button = styled(InitialButton)`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.red.dark};
  padding: 0.5rem 1rem;
  font-size: 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red.light};
  }
`;

export default () => {
  return (
    <Footer>
      <Button>Today</Button>
      <Button>Delete</Button>
    </Footer>
  );
};
