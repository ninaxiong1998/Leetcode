class TreeNode {
    val: number
    left: TreeNode|null
    right: TreeNode|null

    constructor(val?: number, left?: TreeNode|null, right?: TreeNode|null) {
        this.val = (val===undefined? 0:val);
        this.left = (left===undefined? null:left);
        this.right = (right===undefined? null:right);
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let df = function(r: TreeNode | null, s: TreeNode | null): boolean{
        if (!r && !s) return true;
        if (!r || !s) return false;
        if (r.val === s.val) return (df(r.right, s.right) && df(r.left, s.left));
        return false;
    };
    return df(p, q);
};