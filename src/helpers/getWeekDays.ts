const daysNames = ["S", "M", "T", "W", "T", "F", "S"];

export const getWeekDays = (date: Date) => {
  const dates: { name: string; number: number; month: number }[] = [];
  const currentDay = date.getDay();

  const getWeekDay = (i: number, isMinus?: boolean) => {
    const weekDate = new Date(date.toISOString());
    const dateAction = isMinus
      ? weekDate.getDate() - i
      : weekDate.getDate() + i;
    weekDate.setDate(dateAction);
    const weekDay = {
      name: daysNames[weekDate.getDay()],
      number: weekDate.getDate(),
      month: weekDate.getMonth(),
    };
    dates.push(weekDay);
  };

  if (currentDay === 0) {
    for (let i = 6; i >= 0; i--) {
      getWeekDay(i, true);
    }
    return dates;
  }

  for (let i = currentDay - 1; i >= 0; i--) {
    getWeekDay(i, true);
  }

  for (let i = 1; i <= 7 - currentDay; i++) {
    getWeekDay(i);
  }

  return dates;
};
