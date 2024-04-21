import Validator from '../validator';

test('Валидация проходит успешно', () => {
  const nick = new Validator('betiwe-_225');
  expect(nick.validateUsername()).toEqual(true);
})

test('Валидация проходит успешно 2', () => {
  const nick = new Validator('betiwe-_225a');
  expect(nick.validateUsername()).toEqual(false);
})

test('Валидация проходит успешно 3', () => {
  const nick = new Validator('BETIWE225');
  expect(nick.validateUsername()).toEqual(true);
})

test('Валидация проходит успешно 4', () => {
  const nick = new Validator('BETIWE225543534a');
  expect(nick.validateUsername()).toEqual(false);
})