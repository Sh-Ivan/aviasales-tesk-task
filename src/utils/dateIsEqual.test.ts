import { datesIsEqual } from './datesIsEqual'

test('One date with different time is equal', () => {
  const today = new Date()
  const todayNoon = new Date()
  todayNoon.setHours(12, 0, 0, 0)
  expect(datesIsEqual(today, todayNoon)).toBe(true)
})

test('Different dates should be not equal', () => {
  const today = new Date()
  const anotherDay = new Date(2020, 8, 12)
  expect(datesIsEqual(today, anotherDay)).toBe(false)
})
