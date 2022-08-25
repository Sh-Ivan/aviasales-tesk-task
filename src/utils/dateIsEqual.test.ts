import { datesIsEqual } from './datesIsEqual'

test('One date with different time is equal', () => {
  const today = new Date()
  const todayNoon = new Date()
  todayNoon.setHours(12, 0, 0, 0)
  expect(datesIsEqual(today, todayNoon)).toBe(true)
})
