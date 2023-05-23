import { css, styled } from "styled-components";
import { CircleButton } from "./Common";

const DaysWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 2rem;
`;
const Day = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  & > span {
    font-size: 14px;
  }
`;

interface ButtonProps {
  $active?: boolean;
}

const Button = styled(CircleButton)<ButtonProps>`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding: 0.5rem;

  ${({ $active, theme }) => {
    if ($active) {
      return css`
        background-color: ${theme.colors.red.dark};
        color: #fff;
      `;
    } else {
      return css`
        &:hover {
          background-color: ${({ theme }) => theme.colors.red.light};
        }
      `;
    }
  }}
`;

const dates = [
  { day: "M", number: 25 },
  { day: "T", number: 26 },
  { day: "W", number: 27 },
  { day: "T", number: 28 },
  { day: "F", number: 29 },
  { day: "S", number: 30 },
  { day: "S", number: 31 },
];

export default () => {
  return (
    <DaysWrapper>
      {dates.map((date) => (
        <Day key={date.number}>
          <span>{date.day}</span>
          <Button>{date.number}</Button>
        </Day>
      ))}
    </DaysWrapper>
  );
};
