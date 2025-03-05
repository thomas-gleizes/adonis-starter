import React from 'react'
import { InferPageProps } from '@adonisjs/inertia/types'
import EventsController from '#controllers/events_controller'
import { Head } from '@inertiajs/react'

const Events: React.FunctionComponent<InferPageProps<EventsController, 'index'>> = ({ events }) => {
  console.log('Events', events)

  return (
    <>
      <Head title="événement a venir" />
      <div className="p-10">
        <h1>Events pages</h1>
        <ul className="list-disc">
          {events.data.map((event) => (
            <li>{event.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Events
