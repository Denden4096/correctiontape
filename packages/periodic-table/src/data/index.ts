import { details as detailJSON } from "./details"

export const details = detailJSON
export type DetailTypes = typeof detailJSON[number]

export { sets } from "./sets"
export { subcategories } from "./subcategories"

export const getSignificantDigit = (val: number) => Math.ceil(val.toString().split(".")[1]!.length)
