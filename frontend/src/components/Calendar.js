import React, {useState} from 'react';
import { useHistory, useLocation , NavLink} from 'react-router-dom';
import { Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';

import Calendar from 'react-awesome-calendar';
const events = [{
    id: 1,
    color: '#fd3153',
    from: '2019-05-02T18:00:00+00:00',
    to: '2019-05-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2019-05-01T13:00:00+00:00',
    to: '2019-05-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2019-05-05T13:00:00+00:00',
    to: '2019-05-05T20:00:00+00:00',
    title: 'This is also another event'
}, {
    id: 4,
    color: '#3694DF',
    from: '2022-05-05T13:00:00+00:00',
    to: '2022-05-05T20:00:00+00:00',
    title: 'This is also another event'
}
];

class MyComponent extends React.Component {
    render() {
        return (
            <div className='cal'>
                <Calendar events={events}/>
            </div>
        );
    }
}


export default Calendar;


