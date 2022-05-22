# 如何实现顺序查找？

## 思想

顺序查找最为简单，按顺序比较每个元素，直到找到关键字为止。

## 解法

```js
    function SequentialSearch(arr, value) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
        return -1;
    }
```

## 复杂度

时间复杂度：`O(n)`
