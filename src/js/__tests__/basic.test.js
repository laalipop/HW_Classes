import Character from '../basic';

test('name not string', () => {
  const t = () => {
    throw new Character(12, 'Bowerman');
  };
  expect(t).toThrow(Error);
});

test('name short', () => {
  try {
    const q = new Character('a', 'Bowerman');
  } catch (e) {
    expect(e.message).toBe('Ошибка в количестве символов');
  }
});

test('name long', () => {
  try {
    const q = new Character('adddsfasdfadsfadf', 'Bowerman');
  } catch (e) {
    expect(e.message).toBe('Ошибка в количестве символов');
  }
});

test('name correct', () => {
  try {
    const q = new Character('ddddd', 'Bowerman');
  } catch (e) {
    expect(e.message).toBe('Ошибка в количестве символов');
  }
});

test('get name', () => {
  const q = new Character('Boma', 'Bowerman');
  expect(q.name).toBe('Boma');
});

test('type not string', () => {
  const t = () => {
    throw new Character('Kolo', 45632);
  };
  expect(t).toThrow(Error);
});

test('type exist', () => {
  try {
    const q = new Character('Mona', 'owerman');
  } catch (e) {
    expect(e.message).toBe('Тип отсутствует');
  }
});

test('type exist', () => {
  try {
    const q = new Character('Mona', 'Bowerman');
  } catch (e) {
    expect(e.message).toBe('Тип отсутствует');
  }
});

test('get type', () => {
  const a = new Character('Boma', 'Swordsman');
  expect(a.type).toBe('Swordsman');
});
