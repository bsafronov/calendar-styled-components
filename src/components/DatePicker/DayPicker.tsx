import { css, styled } from "styled-components";
import { CircleButton } from "../Common";
import { useCalendarStore } from "../../store/useCalendarStore";

const DaysWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Day = styled.div<DayProps>`
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  flex: 1;
  transition: flex-grow 0.4s;
  ${({ $active }) => $active && "flex-grow: 2;"};
  gap: 0.25rem;
  & > span {
    font-size: 0.75rem;
  }
  @keyframes slideIn {
    from {
      grid-column: span 1;
    }
    to {
      grid-column: span 2;
    }
  }
`;

interface DayProps {
  $active?: boolean;
}

const Button = styled(CircleButton)<DayProps>`
  color: #000;
  font-size: 1.25rem;
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

export default () => {
  const { dateString, setDay, weekDays } = useCalendarStore((state) => ({
    dateString: state.currentDate,
    setDay: state.setDay,
    weekDays: state.weekDays,
  }));
  const date = new Date(dateString);
  const currentDay = date.getDate();

  return (
    <DaysWrapper>
      {weekDays.map((day) => (
        <Day key={day.number} $active={day.number === currentDay}>
          <span>{day.name}</span>
          <Button
            $active={day.number === currentDay}
            onClick={() => setDay(day.number, day.month)}
          >
            {day.number}
          </Button>
        </Day>
      ))}
    </DaysWrapper>
  );
};
