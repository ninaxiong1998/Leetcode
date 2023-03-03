class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val?: number, next?: ListNode | null){
        this.val = (val===undefined? 0:val);
        this.next = (next===undefined? null:next);
    };
};

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let ans: ListNode | null = new ListNode(0);
    let prev: ListNode | null = ans;
    ans.next = head;
    prev.next = head;
    for (let i=0; i<left-1; i++){
        if (prev.next) {
            prev = prev.next;
        };
    };
    let curr: ListNode | null = prev.next;
    let forw: ListNode | null = null;
    if (curr && curr.next) {
        forw = curr.next;
    };
    for (let i=0; i<right-left; i++){
        if (curr && forw) {
            curr.next = forw.next;
            forw.next = prev.next;
            prev.next = forw;
            if (i === right-left-1) break;
            forw = curr.next;
        }
    }
    return ans.next;
};