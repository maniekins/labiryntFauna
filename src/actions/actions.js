export const GENEREATE_NEW = 'GENEREATE_NEW'

export const generateNew = (x, y) => ({
  type: GENEREATE_NEW,
  x,
  y,
  forceRender: true
})

export const doSomething = () => ({
  type: 'some',
  str: 'Hello'
})
