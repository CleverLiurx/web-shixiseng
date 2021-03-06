# 常见的状态码有哪些，都什么意思？

![](https://cdn.bayuechuqi.com/blog%2Fstatus_code.png)

## 2XX 成功

- `200`: OK，表示从客户端发来的请求在服务器端被正确处理；
- `204`: No content，表示请求成功，但是没有返回的内容；
  > 对于一些请求，如果不需要多余的数据响应，只要返回是否成功的信息时，可以考虑用204状态码。

  > **如果没有响应体，则在大多数场景下，204与200这两种响应码完全等效，但有一种情况下，HTTP/204响应会让浏览器有不同的表现，这种情况就是当用户在浏览器窗口window或者iframe框架中导航的时候：**
  > 1. 如果导航到的URL返回了一个没有响应体的200响应，则页面将会显示一片白色，页面的URL地址也会变成新指定的URL
  > 2. 如果服务器返回的是一个204响应，当前页面不会有任何变化，就好像根本没有进行导航操作一样，页面的URL地址也保持不变
- `205`: Reset Content，类似于204，除了页面保留在当前文档不变以外，多了一步操作，就是要清空当前文档内所有表单控件的内容
- `206`: Partial Content，客户端进行了范围请求，而服务器端执行了这部分的 GET 请求。响应报文中包含由 Content-Range 指定范围的实体内容
  > 这种情况经常发生在客户端继续请求一个未完成的下载的时候，例如添加请求头`Content-Range: bytes=172032-13325503`，客户端告诉服务器，它需要该请求的视频文件中从172032到13325503字节范围内的数据

## 3XX 重定向

- `301`: Moved Permanently，永久重定向。该状态码表示请求的资源已经被分配了新的 URI，以后应使用资源指定的 URI。新的 URI 会在 HTTP 响应头中的 Location 首部字段指定。若用户已经把原来的URI保存为书签，此时会按照 Location 中新的URI重新保存该书签。同时，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址。
  > 当我们想换个域名，旧的域名不再使用时，用户访问旧域名时用301就重定向到新的域名。其实也是告诉搜索引擎收录的域名需要对新的域名进行收录。

  > 在搜索引擎的搜索结果中出现了不带www的域名，而带www的域名却没有收录，这个时候可以用301重定向来告诉搜索引擎我们目标的域名是哪一个。
- `302`: Found，临时性重定向，表示资源临时被分配了新的 URL，不会像301那样更新书签。
  > 当我们在做活动时，登录到首页自动302重定向到活动页面。

  > 未登陆的用户访问用户中心重定向到登录页面

  > 访问404页面重新定向到首页
- `303`: See Other，建议客户访问其他URL或使用GET方式，会把POST请求变为GET请求进⾏重定向
- `304`: Not Modified，表示客户端已经执行过了该GET请求，文件未变化（告诉客户端有缓存，直接使用缓存中的数据）
- `307`: Temporary Redirect，临时重定向，和303含义类似，但是期望客户端保持请求方法不变(不要从 POST 变成 GET)向新的地址发出请求

> 302是http1.0的协议状态码，在http1.1版本的时候为了细化302状态码⼜出来了两个303和307。 303明确表示客户端应当采⽤GET⽅法获取资源，他会把POST请求变为GET请求进⾏重定向。 307会遵照浏览器标准，不会从POST变为GET。

## 4XX 客户端错误

- `400`: Bad Request，请求报文存在语法错误
- `401`: unauthorized，请求授权失败，例如登录失败、token过期等
- `403`: Forbidden，表示对请求资源的访问被服务器拒绝，例如IP地址被拒绝、要求SSL、读写访问被禁止或用户过多等
- `404`: Not Found，表示在服务器上没有找到请求的资源
- `405`: Method Not Allowed，客户端请求的方法虽然能被服务器识别，但是服务器禁止使用该方法

## 5XX 服务器错误

- `500`: Internal Sever Error，表示服务器端在执行请求时发生了错误
- `501`: Not Implemented，服务器不具备完成请求的功能，例如服务器无法识别请求方法时可能会返回此代码
- `502` Bad Gateway，服务器作为网关或代理，从上游服务器收到无效响应（网关发生错误）
- `503`: service unavailable，表示服务器暂时处于超负载或正在停机维护，无法处理请求
  > 服务器停机维护时，主动用503响应请求

  >  nginx 设置限速，超过限速，会返回503
- `504`: Gateway Timeout，网关或者代理的服务器无法在规定的时间内获得想要的响应（网关超时），例如代码执行时间超时，或者发生了死循环

