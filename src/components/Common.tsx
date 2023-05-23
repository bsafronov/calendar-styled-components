import { styled } from "styled-components";

export const InitialButton = styled.button`
  cursor: pointer;
  display: flex;
  outline: none;
  border: 0;
  background-color: transparent;
  transition: background-color 0.2s;
`;

export const CircleButton = styled(InitialButton)`
  border-radius: 50%;
  padding: 0.25rem;
`;

export const IconButton = styled(CircleButton)`
  color: ${({ theme }) => theme.colors.red.dark};

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.red.light};
  }
`;
