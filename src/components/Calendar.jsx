import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ spots }) => {
  const CustomDateCellWrapper = ({ value }) => {
    const date = moment.utc(value).format('YYYY-MM-DD');
	const week = moment(date).week();
    const spotsAvailable = spots[date] || 0;

	let spotsClass = '';
	if (spotsAvailable > 5) {
		spotsClass = 'high-spots';
	} else if (spotsAvailable > 0) {
		spotsClass = 'low-spots';
	} else {
		spotsClass = 'no-spots';
	}
	console.log(date, spotsAvailable, spotsClass);

    return (
      <div className="rbc-day-bg">
        <div className={`spots ${spotsClass}`}>{spotsAvailable} spots available</div>
      </div>
    );
  };

  return (
    <div className='calendar' style={{height: 800}}>
		<Calendar
			localizer={localizer}
			events={[]}
			startAccessor="start"
			endAccessor="end"
			defaultView="month"
			views={['month']}
			style={{ height: 800 }}
			components={{
				dateCellWrapper: CustomDateCellWrapper
			}}
      />
    </div>
  );
};

export default MyCalendar;
