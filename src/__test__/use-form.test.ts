import { renderHook } from "@testing-library/react-hooks";
import { useForm } from "../hooks";

describe("test useForm", () => {
  test("should returns fromData", () => {
    const initialState = { username: "", password: "" };
    const { formData } = renderHook(() => useForm(initialState));
  });
});
