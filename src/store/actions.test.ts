import { setId } from "./actions";

test("setId creates action correctly", () => {
    const id = 2;
    const result = setId(id);
    expect(result.payload).toBe(id);
});