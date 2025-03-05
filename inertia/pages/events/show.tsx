import React from 'react'
import { InferPageProps } from '@adonisjs/inertia/types'
import EventsController from '#controllers/events_controller'

const ShowEvent: React.FC<InferPageProps<EventsController, 'show'>> = ({ event }) => {
  return <div>{event.title}</div>
}

export default ShowEvent
