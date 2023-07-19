export default defineEventHandler(() => {
  return {
    length: 5,
    matches: [
      { name: '英超', id: 1 },
      { name: '西甲', id: 2 },
      { name: '意甲', id: 3 },
      { name: '德甲', id: 4 },
      { name: '法甲', id: 5 },
    ]
  }
})