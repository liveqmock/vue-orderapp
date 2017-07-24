# Vue2.0仿饿了么webapp单页应用

<hr>
演示地址：http://vuejssellapp.t.imooc.io/#!/

![演示.png](http://qr.api.cli.im/qr?data=http%253A%252F%252Fvuejssellapp.t.imooc.io%252F%2523%2521%252F&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=ee189439dbd7c10b629629edcc4a0ab9)

<hr>
##依赖工具：
- vue-cli
- express
- vue-resource
- vue-router
- vue-infinite-scroll
- stylus
- webpack

<hr>

##安装：

1、进入代码根目录安装依赖：
> $ npm install --save-dev

2、运行命令：
> $ npm run dev

打开浏览器输入localhost:8080看效果。

3、发布代码：
> $ npm run build



发布完代码后会生成dist目录，保存着项目的所有可运行的代码。
      
注意不能直接打开index.html运行，需要开启http server运行代码。
直接运行我写好的配置文件就可以运行代码：
> $ node prod.server.js

打开浏览器输入localhost:9000看效果。

<hr>
也可以在本地服务器部署你的代码，以nginx为例：

下载地址：http://nginx.org/en/download.html

解压nginx到指定目录：f:/nginx。
在命令行进入f:/nginx目录下运行：
> $ start nginx

开启nginx。

1、默认配置的端口号是80，打开浏览器输入：localhost:80，如果出现welcome to nginx则端口80可以使用。否则需要修改默认端口号。

打开nginx/conf下的nginx.conf配置文件，查看默认监听端口号并修改为：
```
 server {
        listen      8088;
}
```
在浏览器输入localhost:8088即可正常访问。

2、修改默认路径为指定的地址，即可打开我们的页面,将server中的location修改为：
> location / {
            root     F:/Vue/vue-app/dist; //你的dist地址
            index    index.html;
 }

刷新浏览器即可访问vueapp内容。



(完)
