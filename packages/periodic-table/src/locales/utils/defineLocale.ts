import type { en as localeConfigEn } from "../en"

export const defineLocale = <T extends typeof localeConfigEn>(config: T): T => config
