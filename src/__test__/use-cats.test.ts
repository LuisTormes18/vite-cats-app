import { renderHook } from "@testing-library/react-hooks";
import { useGetCats } from "../hooks";

describe("test useGetCats", () => {
  test("should returns cats", () => {
    const { loading } = renderHook(() => useGetCats());
  });
});
