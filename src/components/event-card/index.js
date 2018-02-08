// @flow
import React from 'react';
import styled from 'react-emotion';
import type { CYFEvent } from '../../types';

const Container = styled('div')({
  backgroundColor: 'white',
  textAlign: 'left',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  padding: '12px',
  '*': {
    margin: '0' /* Overide all global css horribleness from legacy.css */,
  },
  h4: {
    color: '#333333',
    fontSize: '18px',
    paddingBottom: '12px',
  },
  'p,span': {
    color: '#666666',
    lineHeight: '20px',
  },
});

const Location = styled('div')({
  paddingBottom: '12px',
  span: {
    fontSize: '14px',
  },
});

const Topic = styled('p')({
  fontWeight: '700',
  fontSize: '16px',
});

const Attendance = styled('span')({
  float: 'right',
  fontSize: '16px',
});

const EventLink = styled('a')({
  textDecoration: 'underline',
  fontSize: '16px',
});

const EventCard = ({
  city,
  intake,
  eventId,
  topic,
  location,
  mentors,
  moduleLeaders,
  startTime,
  endTime,
}: CYFEvent) => (
  <Container>
    <h4>{intake}</h4>
    <Topic>{topic}</Topic>
    <Location>
      <p>
        <span>{city}</span>
        <span>, </span>
        <span>{location}</span>
      </p>
      <p>
        <span>{startTime}</span>
        <span> -</span>
        <span>{endTime}</span>
      </p>
    </Location>
    <EventLink href={`/events/${eventId}`}>View event</EventLink>
    <Attendance>
      <span>{mentors.length + moduleLeaders.length}</span>
      <span> attending</span>
    </Attendance>
  </Container>
);

export default EventCard;
