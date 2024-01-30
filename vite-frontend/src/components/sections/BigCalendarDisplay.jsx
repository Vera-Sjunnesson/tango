import { useState, useEffect } from 'react';
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
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_EVENTLIST_URL;
        if (!url) {
          throw new Error('Failed to fetch event list');
        }
        const response = await fetch(url);
        const data = await response.json();
        // Transforming the 'starts' property to 'start' and adding 'end' property
        const transformedData = data.map((item) => ({
          ...item,
          start: item.starts, // Change 'starts' to 'start'
          end: item.ends // Create 'end' 2 hours after 'start'
        }));
        setList(transformedData); // Set the new list directly
      } catch (error) {
        console.error(error);
      }
    };
    fetchEventList();
  }, []);

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