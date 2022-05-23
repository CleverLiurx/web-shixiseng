# HTTP请求报文的是什么样的？

请求报⽂有4部分组成：

- `请求⾏`：包含请求方法、URL、协议。
- `请求头部`：以键值对形式携带请求头。
- `空⾏`：请求头部的最后会有一个空行，表示请求头部结束，接下来为内容实体。
- `内容实体`：请求携带的数据。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ace62132a4474daea657fd4563ae3da8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

例如通过抓包工具`fiddler`抓出来的一段HTTP请求报文:

```
POST /system/dwr/call/plaincall/PageCounterDWR.getVisittime.dwr HTTP/1.1
Host: www.cumtb.edu.cn
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:100.0) Gecko/20100101 Firefox/100.0
Accept: */*
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate, br
Content-Type: text/plain
Content-Length: 279
Origin: https://www.cumtb.edu.cn
Connection: keep-alive
Referer: https://www.cumtb.edu.cn/
Cookie: JSESSIONID=EC67E766740C7291C5CB8ED3653BEF21
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Pragma: no-cache
Cache-Control: no-cache

callCount=1&batchId=0&page=/
```