# DHCP协议是什么，有何作用？

> DHCP协议是在应用层的一个协议

`DHCP`(Dynamic Host Configuration Protocol: 动态主机设置协议)是一个局域网协议，是应用UDP协议的应用层协议。**它主要用于为内部网络或网络服务供应商自动分配IP地址**，其默认监听端口为67。

加入一台电脑A连接wifi后：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3af49220b25b42d6863360722d05d27c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

1. 电脑A使用UDP协议广播DHCP发现报文
2. DHCP服务器发出DHCP提供报文
3. 电脑A向DHCP服务器发出DHCP请求报文
4. DHCP服务器回应并提供IP地址
