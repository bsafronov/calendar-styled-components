import { styled } from "styled-components";

const JournalWrapper = styled.div`
  overflow-y: auto;
  padding: 1rem 0;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  margin-left: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.medium};
  &:first-of-type {
    border-top: 2px solid ${({ theme }) => theme.colors.gray.medium};
  }
`;

const Time = styled.span<{ $align: "top" | "bottom" }>`
  content: "";
  position: absolute;
  left: -0.5rem;
  transform: translateX(-100%);
  color: ${({ theme }) => theme.colors.gray.dark};
  ${({ $align }) => ($align === "top" ? "top: -0.6rem;" : "bottom: -0.6rem;")}
`;

const Cell = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/2;
  padding: 0.1rem;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    right: 0.1rem;
    bottom: 0.1rem;
    background-color: transparent;
    transition: background-color 0.2s;
  }

  &:not(:last-of-type) {
    border-right: 2px solid ${({ theme }) => theme.colors.gray.medium};
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.blue.light};
  }
`;

const days = Array.from(Array(7).keys());
const hours = Array.from(Array(24).keys());

export default () => {
  return (
    <JournalWrapper>
      {hours.map((hour) => (
        <Row key={hour}>
          <Time $align="top">{hour}:00</Time>
          {days.map((day) => (
            <Cell key={day} />
          ))}
          {hour === 23 && <Time $align="bottom">24:00</Time>}
        </Row>
      ))}
    </JournalWrapper>
  );
};
