import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Probando el Custom Hooks useFetchGifs", () => {
  test("debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    // const {images, isLoading}= useFetchGifs();
    const {images}=result.current;
    expect(images.length).toBe(0);
  });

  test("deber retornar un areglo de images y isLoading True", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    await waitFor(
        ()=>expect(result.current.images.length).toBeGreaterThan(0)
    );
    const {images, isLoading}= result.current;
    console.log(result);
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
