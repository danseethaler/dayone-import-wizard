import filesReducer from './src/reducers/files';

test('adding file to initial state', () => {
  const actual = filesReducer(
    {},
    {
      type: 'ADD_FILES',
      files: [
        '/Users/danseethaler/Developer/electron/dayone-import-wizard/algorithm.txt'
      ]
    }
  );

  expect(actual).toMatchSnapshot();
});
