---
{
  "title": "如何理解HTML语义化？",
}
---

`HTML的语义化`指的是合理正确的使用语义化的标签来创建页面结构，通俗来讲就是用**正确的标签做正确的事情**。

```html
<!-- 非语义化的 -->
<div>WEB实习僧</div>
<div>
    <div>HTML面试题</div>
    <div>
        <div>HTML语义化</div>
        <div>行内元素和块元素</div>
    </div>
</div>

<!-- 语义化的 -->
<header>WEB实习僧</header>
<article>
    <p>HTML面试题</p>
    <ul>
        <li>HTML语义化</li>
        <li>行内元素和块元素</li>
    </ul>
</article>
```

语义化标签还有`<header>`(头部)、`<nav>`(导航)、`<main>`(主要区域)、`<article>`(主要内容)、`<section>`(区块)、`<aside>`(侧边栏)和`<footer>`(底部)等。

语义化**优点**：

1. 没CSS样式的情况下，页面整体也会呈现很好的结构效果

2. 让人更容易读懂-增加代码可读性

3. 让搜索引擎更容易读懂-SEO