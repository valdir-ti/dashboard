export const getLiteralObjectValue = (
  obj: { [key: string]: string },
  key?: string,
) => {
  if (key !== undefined) {
    return obj[key]
  }
  return undefined
}
