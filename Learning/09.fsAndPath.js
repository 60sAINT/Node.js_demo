// 1.1导入fs模块
const fs = require('fs');
const { join } = require('path');
// 1.2导入path模块
const path = require('path');

// 1.3定义正则表达式，分别匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/  //后面那个style前的前面那条斜线表示转义
const regScript = /<script>[\s\S]*<\/script>/

// 2.1调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, './fsAndPath.html'), 'utf8', function(err, dataStr) {
    if(err) {
        return console.log('读取HTML文件失败！' + err.message);
    }
    // 2.3读取文件成功后，调用对应的三个方法，分别拆解出css，js，HTML文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})

// 3.1定义处理CSS样式的方法
function resolveCSS(htmlStr) {
    // 3.2使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    // 3.3将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // 3.4调用fs.writeFile方法将提取的样式写入到fsAndPath目录中index.css的文件里面
    fs.writeFile(path.join(__dirname, './fsAndPath/index.css'), newCSS, function(err) {
        if(err) {
            return console.log('写入CSS样式失败！' + err.message);
        }
        console.log('写入CSS样式成功！');
    })
}

// 4.1定义处理js脚本的方法
function resolveJS(htmlStr) {
    // 4.2通过正则提取对应的<script></script>标签内容
    const r2 = regScript.exec(htmlStr);
    // 4.3将提取出来的内容，做进一步的处理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    // 4.4将处理的结果，xierudaofsAndPath目录中的index.js文件里面
    fs.writeFile(path.join(__dirname, './fsAndPath/index.js'), newJS, function(err) {
        if(err) {
            return console.log('写入JS脚本失败！' + err.message);
        }
        console.log('写入JS脚本成功！');
    })
}

// 5.1定义处理HTML结构的方法
function resolveHTML(htmlStr) {
    // 5.2将字符串调用replace方法，把内嵌的style和script标签替换为外联的link和script标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    // 5.3写入index.html文件
    fs.writeFile(path.join(__dirname, './fsAndPath/index.html'), newHTML, function(err) {
        if(err) {
            return console.log('写入HTML文件失败！' + err.message);
        }
        console.log('写入HTML页面成功！');
    })
}