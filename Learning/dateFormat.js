// 1.定义格式化时间的方法
function dataFormat(dtStr) {
    const dt = new Date(dtStr);

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)// getMonth()方法得到的是0-11
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 2.定义补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

module.exports = {
    dateFormat
}