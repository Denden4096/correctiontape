import { setShowingElem } from "~/signals"

// Declaring a function to be used to cancel the event with removeEventListener.
export const escapeFromDetail = () => setShowingElem(null)
