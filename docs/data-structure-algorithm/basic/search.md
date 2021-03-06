# 说说常见的查找算法有哪些？区别？

## 一、有哪些

顺序查找
二分查找
二叉排序树查找
哈希查找
分块查找


### 顺序查找

顺序查找也称为线形查找，属于无序查找算法。

从数据结构线形表的一端开始，顺序扫描，依次将扫描到的结点关键字与给定值k相比较，若相等则表示查找成功。

若扫描结束仍没有找到关键字等于k的结点，表示查找失败。

### 二分查找

也称为是折半查找，属于有序查找算法。

用给定值k先与中间结点的关键字比较，中间结点把线形表分成两个子表，若相等则查找成功。

若不相等，再根据k与该中间结点关键字的比较结果确定下一步查找哪个子表，这样递归进行，直到查找到或查找结束发现表中没有这样的结点。

![](https://pic2.zhimg.com/v2-43339b963db63b33107b56503ad6b1b5_b.gif)

### 二叉排序树查找

二叉查找树是先对待查找的数据进行生成树，确保树的左分支的值小于右分支的值，然后在就行和每个节点的父节点比较大小，查找最适合的范围。 这个算法的查找效率很高，但是如果使用这种查找方法要首先创建树。

二叉查找树（BinarySearch Tree，也叫二叉搜索树，或称二叉排序树Binary Sort Tree）或者是一棵空树，或者是具有下列性质的二叉树：

- 若任意节点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
- 若任意节点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
- 任意节点的左、右子树也分别为二叉查找树。

二叉查找树性质：对二叉查找树进行中序遍历，即可得到有序的数列。


## 三、区别

`顺序查找`、`二分查找`和`二叉排序树查找`是初中级前端面试中比较常考的，此外还有哈希查找、分块查找可看参考文献。

区别如下图所示：

![](https://cdn.bayuechuqi.com/blog%2F123.png)

## 参考文献

- https://www.cnblogs.com/maybe2030/p/4715035.html#_label6