import React from 'react'
import ApiCalendar from "react-google-calendar-api";
import { gapi } from 'gapi-script';
import axios from 'axios';
const Vcall = () => {

const handle=async()=>{
    var event = {
        'summary': 'Google I/O 2015',
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'A chance to hear more about Google\'s developer products.',
        'start': {
          'dateTime': '2015-05-28T09:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2015-05-28T17:00:00-07:00',
          'timeZone': 'America/Los_Angeles'
        },
        'recurrence': [
          'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
          {'email': 'skk180509@gmail.com'},
          {'email': 'sbrin@example.com'}
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      };
      
      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
      });
      
      request.execute(function(event) {
        console.log(event.htmlLink);
      });
}

  return (
    <div className='btn' onClick={()=>{handle()}}>Vcall</div>
  )
}

export default Vcall