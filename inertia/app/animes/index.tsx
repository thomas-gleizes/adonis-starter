import { InferPageProps } from '@adonisjs/inertia/types'
import AnimesController from '#controllers/animes_controller'
import React from 'react'

type Props = InferPageProps<AnimesController, 'index'>

const AnimesPage: React.FC<Props> = ({ animes }) => {
  console.log('Animes', animes)

  return <div>animes pages</div>
}

export default AnimesPage
