export function useTime(time: number, formatStr: string) {

  // TODO: 读取时区设置，修改显示
  return useDateFormat(time, formatStr, { locales: 'en-US'})
}