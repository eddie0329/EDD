const add = (n1, n2) => n1 + n2;

describe("add test", () => {
  it("test1", () => {
    expect(add(1, 2))
      .toBe(3)
      .toBeTyped("number");
  });
});
