# 反转字符串

## 题目描述

编写一个函数，其作用是将输入的`字符串反转`过来。输入字符串以`字符数组s`的形式给出。

不要给另外的数组分配额外的空间，你必须`原地修改输入数组`、使用 `O(1)` 的额外空间解决这一问题。

示例 1：

```js
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

示例 2：

```js
输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

提示：

- `1 <= s.length <= 105`
- `s[i]` 都是 `ASCII` 码表中的可打印字符

## 答案

对于长度为 `N` 的待被反转的字符数组，我们可以观察反转前后下标的变化，假设反转前字符数组为 `s[0] s[1] s[2] ... s[N - 1]`，那么反转后字符数组为 `s[N - 1] s[N - 2] ... s[0]`。比较反转前后下标变化很容易得出 `s[i]` 的字符与 `s[N - 1 - i]` 的字符发生了交换的规律，因此我们可以得出如下双指针的解法：

- 将 left 指向字符数组首元素，right 指向字符数组尾元素。
- 当 left < right：
  - 交换 `s[left]` 和 `s[right]`；
  - left 指针右移一位，即 `left = left + 1`；
  - right 指针左移一位，即 `right = right - 1`。
- 当 left >= right，反转结束，返回字符数组即可。

![](https://cdn.bayuechuqi.com/blog%2F344_fig1.png)

```js
var reverseString = function (s) {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};
```

## 题目来源

来源：力扣（LeetCode）  
链接：https://leetcode.cn/problems/reverse-string  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
