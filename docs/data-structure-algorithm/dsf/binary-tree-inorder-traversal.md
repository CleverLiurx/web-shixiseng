# 二叉树的中序遍历

## 题目描述

给定一个二叉树的根节点 `root` ，返回它的 `中序` 遍历 。

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
输出：[1,3,2]
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

首先我们需要了解什么是二叉树的中序遍历：按照访问`左子树——根节点——右子树`的方式遍历这棵树，而在访问左子树或者右子树的时候我们按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，我们可以直接用递归函数来模拟这一过程。

定义 `inorder(root)` 表示当前遍历到 `root` 节点的答案，那么按照定义，我们只要递归调用 `inorder(root.left)` 来遍历 `root` 节点的左子树，然后将 root 节点的值加入答案，再递归调用 `inorder(root.right`) 来遍历 `root` 节点的右子树即可，递归终止的条件为碰到空节点。

```js
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};
```

### 方法二：迭代

方法一的递归函数我们也可以用迭代的方式实现，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其他都相同，具体实现可以看下面的代码。

```js
var inorderTraversal = function (root, res = []) {
  const stack = [];
  let cur = root;
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      // 左
      cur = cur.left;
    } else {
      // --> 弹出 中
      cur = stack.pop();
      res.push(cur.val);
      // 右
      cur = cur.right;
    }
  }
  return res;
};
```

## 题目来源

来源：力扣（LeetCode）  
链接：https://leetcode.cn/problems/binary-tree-inorder-traversal  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
