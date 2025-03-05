import { Head } from '@inertiajs/react'
import React from 'react'
import { InferPageProps } from '@adonisjs/inertia/types'
import HomeController from '#controllers/home_controller'

const HomePage: React.FC<InferPageProps<HomeController, 'index'>> = ({
  featuringEvents,
  nextEvents,
}) => {
  console.log('FeaturingEvents', featuringEvents)
  console.log('NextEvents', nextEvents)

  return (
    <>
      <Head title="Acceuil" />
      <div></div>
    </>
  )
}

export default HomePage
