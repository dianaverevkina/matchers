import sortCharacterHealth from '../characterHealth';

test('compare characters', () => {
  const characters = [
    {
      name: 'мечник',
      health: 10,
    },
    {
      name: 'маг',
      health: 100,
    },
    {
      name: 'лучник',
      health: 80,
    },
  ];

  const result = sortCharacterHealth(characters);
  expect(result).toEqual(characters);
});
