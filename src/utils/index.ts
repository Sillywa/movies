export function debounce(fn: Function, delay: number): Function {
  type myType = number | null
  let timer:myType = null;
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
    return timer
  }
}