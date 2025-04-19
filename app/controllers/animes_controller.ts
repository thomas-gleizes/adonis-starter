import type { HttpContext } from '@adonisjs/core/http'

export default class AnimesController {
  index() {
    return [
      {
        id: 1,
        title: 'Naruto',
        description:
          'A story about a young ninja who seeks recognition from his peers and dreams of becoming the Hokage.',
      },
      {
        id: 2,
        title: 'One Piece',
        description:
          'A story about a group of pirates searching for the ultimate treasure known as One Piece.',
      },
      {
        id: 3,
        title: 'Attack on Titan',
        description:
          'A story about humanity fighting against giant humanoid creatures known as Titans.',
      },
      {
        id: 4,
        title: 'Tokyo Ghoul',
        description:
          'A story about ghouls and humans coexisting in a world where ghouls eat humans.',
      },
    ]
  }

  show({ params }: HttpContext) {
    return {
      id: +params.id,
      title: 'Tokyo Ghoul',
      description: 'A story about ghouls and humans coexisting in a world where ghouls eat humans.',
    }
  }

  create({ request }: HttpContext) {
    console.log('TITLE', request.input('title'))

    return {
      id: Math.random().toString(36).substr(2, 10),
      title: request.input('title'),
      description: request.input('description'),
    }
  }
}
