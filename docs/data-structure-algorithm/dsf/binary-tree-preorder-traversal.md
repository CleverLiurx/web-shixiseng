# 二叉树的前序遍历

## 题目描述

给定一个二叉树的根节点 `root` ，返回它的 `前序` 遍历 。

示例 1：

![](https://cdn.bayuechuqi.com/blog%2Finorder_1.jpg)

```
输入：root = {
      val: 1,
      left: null,
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: null
      }
    }
输出：[1,2,3]
```

示例 2：

```
输入：root = null
输出：[]
```

示例 3：

```
输入：root = {
      val: 1
    }
输出：[1]
```

提示：

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

## 答案

### 方法一：递归

首先我们需要了解什么是二叉树的前序遍历：按照访问`根节点——左子树——右子树`的方式遍历这棵树，而在访问左子树或者右子树的时候我们按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，我们可以直接用递归函数来模拟这一过程。

定义 `preorder(root)` 表示当前遍历到 `root` 节点的答案，那么按照定义，我们首先要将 `root` 节点的值加入答案，再递归调用 `preorder(root.left)` 来遍历 `root` 节点的左子树，最后递归调用 `preorder(root.right`) 来遍历 `root` 节点的右子树，递归终止的条件为碰到空节点。

```js
var preorderTraversal = function (root) {
  const res = [];
  const preorder = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };
  preorder(root);
  return res;
};
```

**复杂度分析**

- 时间复杂度：`O(n)`，其中 `n` 是二叉搜索树的节点数。每一个节点恰好被遍历一次。

- 空间复杂度：`O(n)`，为递归过程中栈的开销，平均情况下为 `O(log⁡n)`，最坏情况下树呈现链状，为 `O(n)`。

### 方法二：迭代

我们也可以用迭代的方式实现方法一的递归函数，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其余的实现与细节都相同，具体可以参考下面的代码。

```js
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  const stack = [root];
  let cur = null;
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return res;
};
```

**复杂度分析**

- 时间复杂度：`O(n)`，其中 `n` 是二叉搜索树的节点数。每一个节点恰好被遍历一次。

- 空间复杂度：`O(n)`，为迭代过程中显式栈的开销，平均情况下为 `O(log⁡n)`，最坏情况下树呈现链状，为 `O(n)`。

## 题目来源

来源：力扣（LeetCode）  
链接：https://leetcode.cn/problems/binary-tree-preorder-traversal  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
