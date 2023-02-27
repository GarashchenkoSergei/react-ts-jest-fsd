import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expectedClasses = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedClasses);
  });

  test('with mods', () => {
    const expectedClasses = 'someClass hovered scrollable';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: true,
      },
    )).toBe(expectedClasses);
  });

  test('with mods false params', () => {
    const expectedClasses = 'someClass';
    expect(classNames(
      'someClass',
      {
        hovered: false,
        scrollable: false,
      },
    )).toBe(expectedClasses);
  });
});
