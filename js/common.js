/*
    作者: bigfact<bigfact0@gmail.com>
    日期: 2016.03.22
*/

// 根据 url 获取查询参数 param
function getQueryString(url, param) {
    return decodeURI(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(param).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

// 根据 url 获取 hash 参数 param
function getHashString(url, param) {
    try {
        var ret = {},
            seg = url.split('#')[1].split('&'),
            len = seg.length, i = 0, s;
        for (; i < len; i++) {
            if (!seg[i]) { continue; }
            s = seg[i].split('=');
            if (s[0] == param) {
                return s[1];
            }
        }
    }
    catch (err) {
        return null;
    }
    return null;
}