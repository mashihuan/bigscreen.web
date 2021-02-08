/**
 * 随机生成一组指定最大、最小、个数的随机数
 * @param {number} min
 * @param {number} max
 * @param {number} count
 */
export const generatorData = (min=0, max=0, count=0) => {
  if(count === 0) return;
  const arr = []
  for(let i=0; i<count; i++) {
    const num = Math.random() * (max - min + 1) + min
    arr.push(Number(num.toFixed(0)))
  }
  return arr
}
