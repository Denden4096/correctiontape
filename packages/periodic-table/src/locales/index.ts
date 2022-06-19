import { en } from "./en"
import { ja } from "./ja"

export const locales = {
	en,
	ja
} as const

export const getLocale = () => {
	const localesList = Object.keys(locales)

	const langFromQuery = new URLSearchParams(window.location.search).get("lang")

	if (langFromQuery && localesList.includes(langFromQuery)) return langFromQuery

	const userLanguage = navigator.languages.map((lang: string): string =>
		lang.includes("-") ? lang.replace(/-.*$/g, "").toLowerCase() : lang.toLowerCase()
	)

	for (const lang of userLanguage) if (localesList.includes(lang)) return lang

	return "en"
}

export const t = () => locales[getLocale()] as typeof locales[keyof typeof locales]

// Did you mean: isJapanese
export const isCJK = () => getLocale() === "ja"
