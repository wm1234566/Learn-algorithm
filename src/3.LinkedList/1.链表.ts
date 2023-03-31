/*
 * @Author: wumeng 2100172067@qq.com
 * @Date: 2023-03-30 21:35:29
 * @LastEditors: wumeng 2100172067@qq.com
 * @LastEditTime: 2023-03-30 22:00:36
 * @FilePath: \JavaScript\Learn-algorithm\src\3.LinkedList\1.链表.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */





type LinkedList={
    value:string // 存储的值
    next:LinkedList|null // 下一个链表
}



let  d:LinkedList = {
    value: "d",
    next: null
};

let c:LinkedList = {
    value: 'c',
    next: d
};

let b:LinkedList = {
    value: "b",
    next: c
};

let a:LinkedList = {
    value: "a",
    next: b
};

// 1. 遍历链表
let p:LinkedList|null=a
// while(p)
// {
//     console.log(p.value);
//     p=p.next
// }



// 2.链表插入值
//abcde => abFcde


let p1:LinkedList|null=a
let F:LinkedList={value:"F",next:null}
//abcde 
while(p1)
{
    if(p1.value==="b")
    {
        F.next=p1.next
        p1.next=F
        break;
    }
    p1=p1.next
}


while(p)
{
    console.log(p.value);
    p=p.next
}