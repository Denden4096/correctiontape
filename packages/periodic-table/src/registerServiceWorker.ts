export const registerServiceWorker = async (): Promise<false | ServiceWorkerRegistration> =>
	"serviceWorker" in navigator && (await navigator.serviceWorker.register("sw.js"))
