## 安装
```
npm install linnie-tools
```

## 导入
```js
const linnie = require('linnie-tools')
```

## 格式化时间
```js
// 调用dateFormat对时间进行格式化
const dtStr = linnie.dateFormat(new Date())
// 结果 2022-10-24 18:07:13
conosle.log(dtStr)
```

## 转义HTML中的特殊字符
```js
// 待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用htmlEscape方法进行转换
const str = linnie.htmlEscape(htmlStr);
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原HTML中的特殊字符
```js
// 待还原的HTML字符串
const str2 = linnie.htmlUnEscape(str);
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
```

## 开源协议
ISC