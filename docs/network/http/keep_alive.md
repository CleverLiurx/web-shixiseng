# 谈谈你对keep-alive的理解？

## 长连接与短连接

HTTP1.0 中默认是在每次请求/应答，客户端和服务器都要新建一个连接，完成之后立即断开连接，这就是`短连接`。

当使用Keep-Alive模式时，Keep-Alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接，这就是`长连接`。

## 使用方法如

HTTP1.0版本是默认没有Keep-alive的（也就是默认会发送keep-alive），所以要想连接得到保持，必须手动配置请求头`Connection: keep-alive`字段。若想断开keep-alive连接，需发送`Connection:close`字段；
HTTP1.1规定了默认保持长连接，数据传输完成了保持TCP连接不断开，等待在同域名下继续用这个通道传输数据。如果需要关闭，需要客户端发送`Connection：close`首部字段。

## Keep-Alive的建立过程：

1. 客户端向服务器在发送请求报文同时在首部添加发送Connection字段
2. 服务器收到请求并处理Connection字段
3. 服务器回送`Connection:Keep-Alive`响应头给客户端
4. 客户端接收到Connection字段，Keep-Alive连接建立成功


## 服务端自动断开过程：

1. 客户端向服务器只是发送内容报文（不包含Connection字段）
2. 服务器收到请求并处理
3. 服务器返回客户端请求的资源并关闭连接
4. 客户端接收资源，发现没有Connection字段，断开连接

## 客户端请求断开连接过程：

1. 客户端向服务器发送`Connection:close`请求头
2. 服务器收到请求并处理Connection字段
3. 服务器回送响应资源并断开连接
4. 客户端接收资源并断开连接

## Keep-Alive的优点：

1. 较少的CPU和内存的使⽤（由于同时打开的连接的减少了）；
2. 允许请求和应答的HTTP管线化；
3. 降低了拥塞 （TCP连接减少了）；
4. 减少了后续请求的延迟（⽆需再进⾏握⼿）；
5. 报告错误⽆需关闭TCP连；

## Keep-Alive的缺点：

1. 长时间的Tcp连接容易导致系统资源无效占用，浪费系统资源。

## 注意

务端还会设置一个参数叫最大请求数，比如当`最大请求数是300`时，只要请求次数超过300次，即使还没到超时时间，服务端也会主动关闭连接。

不同 `ID` 代表不同的 `TCP` 连接。不同域名需要分别创建 TCP连接。TCP 请求的连接有先后顺序，无法并发执行。浏览器允许并发创建 TCP，如Chrome 允许最多`6`个并发。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40f2c832a44c49f49b3ffc8f35b4e63b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)