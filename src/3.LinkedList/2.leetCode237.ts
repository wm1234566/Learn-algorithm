type ListNode={
    val:string // 存储的值
    next:ListNode// 下一个链表
}


function deleteNode(node: ListNode | null): void { // 参数是需要删除节点的引用，需求是删除当前节点
 
    if(typeof node != null)
    {
        node.val=node.next.val //改变当前节点的值为下一个节点
        node.next=node.next.next // 删除下一个节点
    
    }
    else
    {
        node
    }

};