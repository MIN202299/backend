export type TimeFmt = 'yyyy-mm-dd' | 'yyyy-mm-dd HH:MM:SS' | 'yyyy/mm/dd' | 'yyyy/mm/dd HH:MM:SS'

export type numeric = number | string

export function parseTime(time: numeric | null = null , fmt: TimeFmt = 'yyyy-mm-dd'): string {
  let date = new Date()
  let ret = fmt as string
  if (typeof time === 'string') {
    try {
      date = new Date(time)
    } catch (e) {
      throw new Error('日期不合法')
    }
  } else if ((time + '').length === 10) {
    date = new Date(time*1000)
  } else if ((time + '').length === 13) {
    date = new Date(time)
  } else {
    // throw new Error('时间戳不合法')
  }

  const yyyy = date.getFullYear()
  const mm   = date.getMonth() + 1
  const dd   = date.getDate()
  const HH   = date.getHours()
  const MM   = date.getMinutes()
  const SS   = date.getSeconds()

  ret = ret.replace(/y+/, yyyy.toString())
  ret = ret.replace(/m+/, mm.toString().padStart(2, '0'))
  ret = ret.replace(/d+/, dd.toString().padStart(2, '0'))
  ret = ret.replace(/H+/, HH.toString().padStart(2, '0'))
  ret = ret.replace(/M+/, MM.toString().padStart(2, '0'))
  ret = ret.replace(/S+/, SS.toString().padStart(2, '0'))

  return ret
}