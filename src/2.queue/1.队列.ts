/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-30 19:46:56
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-30 19:50:05
 * @FilePath: \JavaScript\Learn-algorithm\src\2.queue\1.队列.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 先进先出

const queue:number[]=[]

//入队
queue.push(1)
queue.push(2)

//出队 从开头删除一个


console.log("长度",queue.shift());
