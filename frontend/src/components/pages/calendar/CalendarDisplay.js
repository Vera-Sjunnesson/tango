import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const CalendarDisplay = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        const url = process.env.REACT_APP_EVENTLIST_URL
        console.log('url:', url);
        if (!url) {
          throw new Error('Failed to fetch event list');
        }

        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        // Transforming the 'starts' property to 'start' and adding 'end' property
        const transformedData = data.map((item) => ({
          ...item,
          start: item.starts, // Change 'starts' to 'start'
          end: moment(item.starts).add(3, 'hours').toDate()// Create 'end' 2 hours after 'start'
        }));
        setList((prevList) => [...prevList, ...transformedData]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEventList();
  }, []);

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'practica':
        return '#518a93';
      case 'class':
        return '#edc343';
      case 'milonga':
        return '#e88025';
      case 'festival':
        return '#fef0c8';
      default:
        return '#ffffff';
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

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        events={list}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        style={{ paddingTop: '30px' }} />
    </div>
  )
}