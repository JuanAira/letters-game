import { generateBoard } from "..";

describe('generateBoard', () => {
  it('should match snapshot - random', () => {
    const container = generateBoard({ defaultNumber: true });
    expect(container).toMatchSnapshot();
  });
});
