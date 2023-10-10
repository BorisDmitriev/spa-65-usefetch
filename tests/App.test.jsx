import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../src/hooks/useFetch";

describe("useFetch", () => {
    it("should return characters and isLoading", () => {
        const url = "https://swapi.dev/api/people/";
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        setTimeout(async () => {
            await waitForNextUpdate();
            expect(result.current[0]).not.toHaveLength(0);
            expect(result.current[1]).toBe(false);
        }, 2000);
    });
});
