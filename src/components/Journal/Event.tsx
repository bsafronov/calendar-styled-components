import { css, styled } from "styled-components";
import { useCalendarStore } from "../../store/useCalendarStore";
import { EventStateProps } from "../../store/useCalendarStore";
interface CellProps {
  $isActive?: boolean;
  $isExist?: boolean;
  $isCurrentDay?: boolean;
}

const Cell = styled.div<CellProps>`
  position: relative;
  flex-grow: 1;
  padding: 0.1rem;
  cursor: pointer;
  transition: flex-grow 0.4s;
  ${({ $isCurrentDay }) => !$isCurrentDay && "aspect-ratio: 4/3;"}
  ${({ $isCurrentDay }) => $isCurrentDay && "flex-grow: 2;"}


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

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.blue.light};
  }

  ${({ $isExist, theme }) => {
    if ($isExist) {
      return css`
        &::after {
          background-color: ${theme.colors.blue.light};
        }
        &:hover::after {
          background-color: ${theme.colors.blue.dark};
        }
      `;
    }
  }}

  ${({ $isActive, theme }) => {
    if ($isActive) {
      return css`
        &:hover::after {
          background-color: ${theme.colors.blue.dark};
        }
        &::after {
          background-color: ${theme.colors.blue.dark};
        }
      `;
    }
  }}

  &:not(:last-of-type) {
    border-right: 2px solid ${({ theme }) => theme.colors.gray.medium};
  }
`;

interface EventProps extends EventStateProps {
  currentDay: number;
}

export default ({ day, hour, month, year, id, currentDay }: EventProps) => {
  const { activeEvent, setActiveEvent, events, addEventTime } =
    useCalendarStore((state) => ({
      activeEvent: state.activeEvent,
      events: state.events,
      setActiveEvent: state.setActiveEvent,
      addEventTime: state.addEventTime,
    }));
  const isActive =
    activeEvent && activeEvent.day === day && activeEvent.hour === hour;

  const handleFindIfExist = () => {
    const event = events.find((e) => e.id === id);

    return event;
  };
  const isExist = handleFindIfExist();

  const handleSetActiveEvent = () => {
    const data: EventStateProps = {
      id,
      day,
      hour,
      month,
      year,
    };
    const isExist = handleFindIfExist();
    if (!isExist) {
      addEventTime(data);
    }

    setActiveEvent(data);
  };

  return (
    <Cell
      $isActive={!!isActive}
      $isExist={!!isExist}
      $isCurrentDay={currentDay === day}
      onClick={handleSetActiveEvent}
    ></Cell>
  );
};
