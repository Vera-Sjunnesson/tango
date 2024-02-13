import { useState, useEffect } from 'react';
import useEventStore from '../../stores/EventStore';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const CalendarNavLink = styled(NavLink)`
  color: var(--secondary-color); 
  width: 100%;
  display: block;
  font-weight: 500;
  line-height: 22px;
`

export const BigCalendarDisplay = () => {
  const { getEvents, eventList } = useEventStore();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchEventList = async () => {
      await getEvents();
    };
    fetchEventList();
  }, [getEvents]);

  useEffect(() => {
    if (eventList) {
      // Ensure eventList is not null or undefined
      const transformedData = eventList.map((item) => ({
        ...item,
        start: item.starts, // Change 'starts' to 'start'
        end: item.ends // Change 'ends' to 'end'
      }));
      setList(transformedData);
    }
  }, [eventList]);

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'milonga':
        return '#ef9d4d';
      case 'practica':
        return '#edc343';
      case 'class':
        return '#80b3bb';
      case 'festival':
        return '#eea484';
      default:
        return '#fef0c8';
    }
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = getBackgroundColor(event.type);
    return {
      style: {
        backgroundColor
      }
    };
  };

  const calendarItem = ({ event }) => {
    return (
      <CalendarNavLink to={`/kalendarium/${event.id}`}>
        {event.title}
      </CalendarNavLink>
    );
  };

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        events={list}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        style={{ paddingTop: '30px' }}
        components={{
          event: calendarItem
        }} />
    </div>
  )
}