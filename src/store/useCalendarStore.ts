import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getWeekDays } from "../helpers/getWeekDays";

export interface EventStateProps {
  id: string;
  day: number;
  hour: number;
  month: number;
  year: number;
}

interface CalendarState {
  events: EventStateProps[];
  weekDays: { name: string; number: number; month: number }[];
  currentDate: string;
  setWeek: (type: "prev" | "next") => void;
  setToday: () => void;
  setDay: (day: number, month: number) => void;
  activeEvent: null | EventStateProps;
  addEventTime: (data: EventStateProps) => void;
  deleteEventTime: () => void;
  setActiveEvent: (data: EventStateProps) => void;
  deleteActiveEvent: () => void;
}

export const useCalendarStore = create<CalendarState>()(
  devtools(
    persist(
      (set, get) => ({
        events: [],
        currentDate: new Date().toISOString(),
        weekDays: getWeekDays(new Date()),
        setWeek: (type) => {
          const date = new Date(get().currentDate);
          if (type === "next") {
            date.setDate(date.getDate() + 7);
          }
          if (type === "prev") {
            date.setDate(date.getDate() - 7);
          }
          set({
            currentDate: date.toISOString(),
            weekDays: getWeekDays(date),
            activeEvent: null,
          });
        },
        setDay: (day, month) => {
          const date = new Date(get().currentDate);
          // date.setDate(day);
          date.setMonth(month, day);
          set({ currentDate: date.toISOString() });
        },
        setToday: () => {
          const date = new Date();
          set({
            currentDate: date.toISOString(),
            weekDays: getWeekDays(date),
            activeEvent: null,
          });
        },
        activeEvent: null,
        addEventTime: (data) =>
          set((state) => ({ events: [...state.events, data] })),
        deleteEventTime: () => {
          const activeEvent = get().activeEvent as EventStateProps;
          const filteredEvents = get().events.filter(
            (e) => e.id !== activeEvent.id
          );

          set({ events: filteredEvents, activeEvent: null });
        },
        setActiveEvent: (data) => set((state) => ({ activeEvent: data })),
        deleteActiveEvent: () => set(() => ({ activeEvent: null })),
      }),
      {
        name: "calendar-storage",
      }
    )
  )
);
