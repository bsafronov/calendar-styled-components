import { styled } from "styled-components";
import Event from "./Event";
import { useCalendarStore } from "../../store/useCalendarStore";

const JournalWrapper = styled.div`
  overflow-y: auto;
  padding: 1rem 0;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  margin-left: 3.5rem;
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

const hours = Array.from(Array(24).keys());

export default () => {
  const { currentDateString, days } = useCalendarStore((state) => ({
    days: state.weekDays,
    currentDateString: state.currentDate,
  }));
  const currentDate = new Date(currentDateString);
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  return (
    <JournalWrapper>
      {hours.map((hour) => (
        <Row key={hour}>
          <Time $align="top">{hour}:00</Time>
          {days.map((day) => (
            <Event
              id={`${day.number}-${hour}-${day.month}-${currentYear}`}
              key={day.number}
              day={day.number}
              hour={hour}
              month={day.month}
              year={currentYear}
              currentDay={currentDay}
            />
          ))}
          {hour === 23 && <Time $align="bottom">24:00</Time>}
        </Row>
      ))}
    </JournalWrapper>
  );
};
