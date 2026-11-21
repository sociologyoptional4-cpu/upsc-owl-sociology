const DAY = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
const DAY_SHORT = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', timeZone: 'UTC' })
const WEEKDAY = new Intl.DateTimeFormat('en-IN', { weekday: 'long', timeZone: 'UTC' })

/** 'YYYY-MM-DD' is already an IST calendar date; format it in UTC so it never shifts a day. */
const toDate = (isoDay: string): Date => new Date(`${isoDay}T00:00:00Z`)

export const formatDay = (isoDay: string): string => DAY.format(toDate(isoDay))
export const formatDayShort = (isoDay: string): string => DAY_SHORT.format(toDate(isoDay))
export const formatWeekday = (isoDay: string): string => WEEKDAY.format(toDate(isoDay))

export function pluralize(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`
}
