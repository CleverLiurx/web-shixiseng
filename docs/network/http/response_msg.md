# HTTP相应报文的是什么样的？

相应报⽂有4部分组成：

- `响应⾏`：包含协议、状态吗、状态码的原因短语。
- `响应头`：以键值对形式携带响应头。
- `空⾏`：响应头部的最后会有一个空行，表示响应头部结束，接下来为响应数据。与请求报文一致。
- `响应体`：用于存放需要返回给客户端的数据信息。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c021a7384d7e48569e3c2da0c7df1e0a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

例如通过抓包工具`fiddler`抓出来的一段HTTP相应报文:

```
HTTP/1.1 200 OK
Date: Mon, 23 May 2022 02:30:59 GMT
Server: VAppServer/6.0.0
X-Frame-Options: SAMEORIGIN
Content-Type: text/javascript;charset=utf-8
Content-Length: 123
Keep-Alive: timeout=5, max=79
Connection: Keep-Alive
Content-Language: zh-CN

<html>
  ...
```