# DNS域名解析流程是怎样的？

以`www.baidu.com`为例：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9e8ed1fea374b568427aed645a4ea08~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

上图中分8个步骤介绍了域名解析的流程，**但在此之前会先检查本机的缓存配置和hosts解析**， 然后才真正执行上图的流程：

1. 客户端通过浏览器访问域名为 www.baidu.com 的网站，发起查询该域名的 IP 地址的 DNS 请求。该请求发送到了本地 DNS 服务器上。本地 DNS 服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果。如果没有，本地 DNS 服务器还要向 DNS 根服务器进行查询。
2. 本地 DNS 服务器向根服务器发送 DNS 请求，请求域名为 www.baidu.com 的 IP 地址。
3. 根服务器经过查询，没有记录该域名及 IP 地址的对应关系。但是会告诉本地 DNS 服务器，可以到域名服务器上继续查询，并给出域名服务器的地址(.com 服务器)。
4. 本地 DNS 服务器向 .com 服务器发送 DNS 请求，请求域名 www.baidu.com 的 IP 地址。
5. com 服务器收到请求后，不会直接返回域名和 IP 地址的对应关系，而是告诉本地DNS 服务器，该域名可以在 baidu.com 域名服务器上进行解析获取 IP 地址，并告诉 baidu.com 域名服务器的地址。
6. 本地 DNS 服务器向 baidu.com 域名服务器发送 DNS 请求，请求域名 www.baidu.com 的 IP 地址。
7. baidu.com 服务器收到请求后，在自己的缓存表中发现了该域名和 IP 地址的对应关系，并将 IP 地址返回给本地 DNS 服务器。
8. 本地 DNS 服务器将获取到与域名对应的 IP 地址返回给客户端，并且将域名和 IP 地址的对应关系保存在缓存中，以备下次别的用户查询时使用。