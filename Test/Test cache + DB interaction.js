test('returns cached data if available', async () => {
  const mockCache = {
    get: jest.fn().mockResolvedValue(JSON.stringify({ id: 1 })),
    set: jest.fn()
  };

  const mockDb = {
    findUser: jest.fn()
  };

  const user = await getUser(1, mockCache, mockDb);

  expect(mockDb.findUser).not.toHaveBeenCalled();
  expect(user.id).toBe(1);
});


