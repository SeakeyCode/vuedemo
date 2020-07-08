class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LList {
    constructor() {
        this.head = new Node('head')
        this.find = this.find;                   //查找节点
        this.insert = this.insert;              //插入节点
        this.display = this.display;             //显示链表
    }
    find (item) {
        var currNode = this.head
        while(currNode.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }
    insert (newElement, item) {
        var newNode = new Node(newElement)
        var currNode = this.find(item)
        newNode.next = currNode.next
        currNode.next = newNode
    }
    display () {
        var currNode = this.head
        while(currNode.next !== null) {
            currNode = currNode.next
        }
        return this.head
    }
}

export default LList