import { styled } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { IconButton } from "../Common";
import {
  EventStateProps,
  useCalendarStore,
} from "../../store/useCalendarStore";

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
  const addEventTime = useCalendarStore((state) => state.addEventTime);
  const handleAddEventTime = () => {
    const timeString = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");
    if (timeString) {
      const date = new Date(timeString);
      const day = date.getDate();
      const hour = date.getHours();
      const month = date.getMonth();
      const year = date.getFullYear();

      const timeData: EventStateProps = {
        day,
        hour,
        month,
        year,
        id: `${day}-${hour}-${month}-${year}`,
      };
      addEventTime(timeData);
    }
  };

  return (
    <Header>
      <Title>Interview Calendar</Title>
      <IconButton onClick={handleAddEventTime}>
        <AiOutlinePlus />
      </IconButton>
    </Header>
  );
};
