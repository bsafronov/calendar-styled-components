import { styled } from "styled-components";

export const InitialButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0;
  background-color: transparent;
  transition: background-color 0.2s;
`;

export const CircleButton = styled(InitialButton)`
  border-radius: 50%;
  height: 100%;
  aspect-ratio: 1/1;
  padding: 0.25rem;
`;

export const IconButton = styled(CircleButton)`
  color: ${({ theme }) => theme.colors.red.dark};

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.red.light};
  }
`;
