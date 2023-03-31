/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-29 16:13:39
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-29 17:58:55
 * @FilePath: \JavaScript\Learn-algorithm\src\1.stack\2.leecode20.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
//  

// 如果是 [{]}肯定不对

// 建立3个栈
let stack:Array<string>=[]

function isClose(value:string):boolean
{
    // 优化，如果是奇数个字符，那么一定不可能闭合
    if(value.length%2!=0)
    {
        return false
    }
     for(let i=0;i<value.length;i++)
     {
        if(i===0) // 第一个肯定是入栈
        {
            stack.push(value[i])
        }
        if(i>=1) //第二个开始判断，前一个是不是和现在这个配对，不是入栈，是就出站，栈中出现()[]{}挨着就可以让他们出栈了
                // 注意js的数组会塌陷，如果删除了，i不变，数组会变短，不会访问，之前的，所以，我们那value[i] 与栈中最上面一个元素比较即可
        {
           if((value[i]===")"&&stack[stack.length-1]==="(")||(value[i]==="}"&&stack[stack.length-1]==="{")||(value[i]==="]"&&stack[stack.length-1]==="["))
           {
              stack.pop()  
             
           }else
           
           {
            stack.push(value[i])
           }        
        }
     }
     return stack.length===0;  // 全部入栈出站完以后，如果栈为空则合法，否则不合法
}

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false

let s:string=  "{}[]()"          ///"()[]{}"      //"()"


// 时间复杂度是 O(n)
// 空间复杂度是 O(n)


console.log("结果",isClose(s));

export {}