---
layout: post
title: "js 正则表达式"
date: 2016-03-22 14:24:00 +0800
category: frontend
tags: js 正则表达式
---

## 特殊符号
* 反斜杠 - \ - 转义字符
* 开始符 - ^
* 结束符 - $
* 星号 - * - 0次或多次 - {0,}
* 加号 - + - 1次或多次 - {1,}
* 问号 - ? - 0次或1次 - {0,1}
* 小数点 - . - 任意单字符，除换行符 \n 外
* 括号 - () - 括号内为一个整体
* 竖线 - \| - 或者
* 大括号 - {} - 次数
* 中括号 - [] - 字符集合

## 转义字符
* \b
* \B
* \cX
* \d
* \D
* \f
* \n
* \r
* \s
* \S
* \t
* \v
* \w
* \W
* \n - n 为正整数
* \0
* \xhh
* \uhhhh

## 标志
* g - 全局
* i - 不区分大小写
* m - 多行
* y - 执行“粘性”搜索，匹配从目标字符串的当前位置开始，可以使用y标志

## 数据表
<table class="fullwidth-table">
 <thead>
  <tr>
   <th scope="col">字符</th>
   <th scope="col">含义</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-backslash" name="special-backslash" id="special-backslash"><code>\</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配将依照下列规则：</span></p>

    <p>反斜杠,对于其后的平常被当作字面量的字符，将其转义为特殊字符。比如，/b/匹配了字符'b'.通过在b的前面放一个反斜杠，即用作/\b/，这个字符变成了一个特殊意义的字符，意思是匹配一个<a href="https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/Regular_Expressions$edit#special-word-boundary" class="new" title="#special-word-boundary">字符边界</a>。</p>

    <p style="list-style-type: none;">反斜杠也可以将其后的特殊字符，转义为字面量。比如，* 是一个代表着前一项0次或多次发生时将会被匹配的特殊字符；比如，/a*/代表会匹配0个或者多个a。为了匹配*符号直接量，在它的前面加一个反斜杠；比如,/a\*/匹配'a*'</p>

    <p style="list-style-type: none;">当使用new RegExp("pattern")方法的时候不要忘记将\它自己进行转义，因为\在字符串里面也是一个转义字符。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-caret" name="special-caret" id="special-caret"><code>^</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配输入的开始。如果多行标示被设置为true,同时匹配换行后紧跟的字符。</span></p>

    <p>比如，/^A/并不会匹配“an A”中的‘A’,但是会匹配“An E”中的‘A’。</p>

    <p>当这个字符出现在一个字符集合模式的第一个字符的时候，它将会有不同的意义。</p>

    <p>比如，/[^a-z\s]/会匹配“my 3 sisters”中的‘3’</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-dollar" name="special-dollar" id="special-dollar"><code>$</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配输入的结束，如果多行标示被设置为true,同时会匹配换行前紧跟的字符。</span></p>

    <p>比如，/t$/并不会匹配“eater”中的‘t’,但是会匹配“eat”中的。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-asterisk" name="special-asterisk" id="special-asterisk"><code>*</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配前一个字符0次或者是多次。</span></p>

    <p>比如，/bo*/会匹配“A ghost boooooed”中的'boooo'和‘A bird warbled’中的‘b’，但是在“A goat grunted”中将不会匹配任何东西。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-plus" name="special-plus" id="special-plus"><code>+</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配前面一个字符1次或者多次，和{1,}有相同的效果。</span></p>

    <p>比如，/a+/匹配了在“candy”中的a，和在"caaaaaaandy"中所有的a。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-questionmark" name="special-questionmark" id="special-questionmark"><code>?</code></a></td>
   <td>
    <p>匹配前面一个字符0次或者1次，和{0,1}有相同的效果。</p>

    <p>比如，/e?le?/匹配“angel”中的‘el’，和"angle"中的‘le’以及“oslo”中的'l'。</p>

    <p>如果'?'紧跟在在任何量词*, + , ?，或者是{}的后面，将会使量词变成非贪婪模式（匹配最少的次数），和默认的贪婪模式（匹配最多的次数）正好相反。比如，使用/\d+/非全局的匹配“123abc”将会返回“123”，如果使用/\d+?/,那么就只会匹配到“1”。</p>

    <p>同时运用在向前断言，在本表的x(?=y)和x(?!y)中有描述。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-dot" name="special-dot" id="special-dot"><code>.</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">（小数点）匹配除了换行符（<code>\n</code>）之外的任何单个字符。如果要匹配包括&nbsp;<code>\n </code>在内的任意字符，可以使用<code>[\s\S]</code>等<code>。</code></span></p>

    <p><span style="line-height: 1.5;">比如，/.n/将会匹配‘nay, an apple is on the tree’中的‘an’和‘on’，但是不会匹配'nay'。</span></p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-capturing-parentheses" name="special-capturing-parentheses" id="special-capturing-parentheses"><code>(x)</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配‘x’并且记住匹配项。这个被叫做捕获括号。</span></p>

    <p>比如，/(foo)/匹配和记住了“foo bar”中的'foo'。匹配到子字符串可以通过结果数组的[1],...,[n]元素进行访问。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-non-capturing-parentheses" name="special-non-capturing-parentheses" id="special-non-capturing-parentheses"><code>(?:x)</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配'x'但是不记住匹配项。这种被叫做非捕获括号。匹配到的子字符串不能通过结果数组的[1],...,[n]进行访问。</span></p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-lookahead" name="special-lookahead" id="special-lookahead"><code>x(?=y)</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配'x'仅仅当'x'后面跟着'y'.这种叫做</span>正向肯定查找<span style="line-height: 1.5;">。</span></p>

    <p>比如，/Jack(?=Sprat)/会匹配到'Jack'仅仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅仅当它后面跟着'Sprat'或者是‘Frost’。但是‘Sprat’和‘Frost’都不是匹配结果的一部分。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-negated-look-ahead" name="special-negated-look-ahead" id="special-negated-look-ahead"><code>x(?!y)</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配'x'仅仅当'x'后面不跟着'y',这个</span>叫做<span style="line-height: 1.5;">正向否定查找。</span></p>

    <p>比如，/\d+(?!\.)/匹配一个数字仅仅当这个数字后面没有跟小数点的时候。正则表达式/\d+(?!\.)/.exec("3.141")匹配‘141’但是不是‘3.141’</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-or" name="special-or" id="special-or"><code>x|y</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配‘x’或者‘y’。</span></p>

    <p>比如，/green|red/匹配“green apple”中的‘green’和“red apple”中的‘red’</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-quantifier" name="special-quantifier" id="special-quantifier"><code>{n}</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">n是一个正整数，匹配了前面一个字符刚好发生了n次。</span></p>

    <p>比如，/a{2}/不会匹配“candy”中的'a',但是会匹配“caandy”中所有的a，以及“caaandy”中的前两个'a'。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-quantifier-range" name="special-quantifier-range" id="special-quantifier-range"><code>{n,m}</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">n 和 m 都是正整数。匹配前面的字符至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略。</span></p>

    <p>例如，/a{1, 3}/ 并不匹配“cndy”中得任意字符，匹配“candy”中得a，匹配“caandy”中得前两个a，也匹配“caaaaaaandy”中得前三个a。注意，当匹配”caaaaaaandy“时，匹配的值是“aaa”，即使原始的字符串中有更多的a。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-character-set" name="special-character-set" id="special-character-set"><code>[xyz]</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">一个字符集合。匹配方括号的中任意字符。你可以使用破折号（-）来指定一个字符范围。对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转意，不过转意也是起作用的。</span></p>

    <p>例如，[abcd] 和[a-d]是一样的。他们都匹配"brisket"中得‘b’,也都匹配“city”中的‘c’。/[a-z.]+/ 和/[\w.]+/都匹配“test.i.ng”中得所有字符。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-negated-character-set" name="special-negated-character-set" id="special-negated-character-set"><code>[^xyz]</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">一个反向字符集。也就是说， 它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。任何普通字符在这里都是起作用的。</span></p>

    <p>例如，[^abc] 和 [^a-c] 是一样的。他们匹配"brisket"中得‘r’，也匹配“chop”中的‘h’。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-backspace" name="special-backspace" id="special-backspace"><code>[\b]</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配一个退格(U+0008)。（不要和\b混淆了。）</span></p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-word-boundary" name="special-word-boundary" id="special-word-boundary"><code>\b</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配一个词的边界。一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。注意，一个匹配的词的边界并不包含在匹配的内容中。换句话说，一个匹配的词的边界的内容的长度是0。（不要和[\b]混淆了）</span></p>

    <p>例子：</p>

    <p>/\bm/匹配“moon”中得‘m’；</p>

    <p>/oo\b/并不匹配"moon"中得'oo'，因为'oo'被一个词汇字符'n'紧跟着。</p>

    <p>/oon\b/匹配"moon"中得'oon'，因为'oon'是这个字符串的结束部分。这样他没有被一个词汇字符紧跟着。</p>

    <p>/\w\b\w/将不能匹配任何字符串，因为一个单词中的字符永远也不可能被一个非词汇字符和一个词汇字符同时紧跟着。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-non-word-boundary" name="special-non-word-boundary" id="special-non-word-boundary"><code>\B</code></a></td>
   <td>
    <p><span style="line-height: 1.5;">匹配一个非单词边界。他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。一个字符串的开始和结尾都被认为是非单词。</span></p>

    <p><span style="line-height: 1.5;">例如，/\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘</span></p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-control" name="special-control" id="special-control"><code>\c<em>X</em></code></a></td>
   <td>
    <p>当X是处于A到Z之间的字符的时候，匹配字符串中的一个控制符。</p>

    <p>当X是处于A到Z之间的字符的时候，匹配字符串中的一个控制符。</p>

    <p>例如，<code>/\cM/</code> 匹配字符串中的 control-M (U+000D)。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-digit" name="special-digit" id="special-digit"><code>\d</code></a></td>
   <td>
    <p>匹配一个数字<code>。</code></p>

    <p><code>等价于[0-9]</code>。</p>

    <p>例如， <code>/\d/</code> 或者 <code>/[0-9]/</code> 匹配"B2 is the suite number."中的'2'。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-non-digit" name="special-non-digit" id="special-non-digit"><code>\D</code></a></td>
   <td>
    <p>匹配一个非数字字符<code>。</code></p>

    <p><code>等价于[^0-9]</code>。</p>

    <p>例如， <code>/\D/</code> 或者 <code>/[^0-9]/</code> 匹配"B2 is the suite number."中的'B' 。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-form-feed" name="special-form-feed" id="special-form-feed"><code>\f</code></a></td>
   <td>匹配一个换页符 (U+000C)。</td>
  </tr>
  <tr>
   <td><a href="#special-line-feed" name="special-line-feed" id="special-line-feed"><code>\n</code></a></td>
   <td>匹配一个换行符 (U+000A)。</td>
  </tr>
  <tr>
   <td><a href="#special-carriage-return" name="special-carriage-return" id="special-carriage-return"><code>\r</code></a></td>
   <td>匹配一个回车符 (U+000D)。</td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-white-space" name="special-white-space" id="special-white-space"><code>\s</code></a></td>
   <td>
    <p>匹配一个空白字符，包括空格、制表符、换页符和换行符。</p>

    <p>等价于<code>[ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f​\u3000]</code>。</p>

    <p>例如, <code>/\s\w*/</code> 匹配"foo bar."中的' bar'。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-non-white-space" name="special-non-white-space" id="special-non-white-space"><code>\S</code></a></td>
   <td>
    <p>匹配一个非空白字符。</p>

    <p>等价于<code>[^ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f​\u3000]</code>。</p>

    <p>例如， <code>/\S\w*/</code> 匹配"foo bar."中的'foo'。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-tab" name="special-tab" id="special-tab"><code>\t</code></a></td>
   <td>匹配一个水平制表符 (U+0009)。</td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-vertical-tab" name="special-vertical-tab" id="special-vertical-tab"><code>\v</code></a></td>
   <td>匹配一个垂直制表符 (U+000B)。</td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-word" name="special-word" id="special-word"><code>\w</code></a></td>
   <td>
    <p>匹配一个单字字符（字母、数字或者下划线）。</p>

    <p>等价于<code>[A-Za-z0-9_]</code>。</p>

    <p>例如, <code>/\w/</code> 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-non-word" name="special-non-word" id="special-non-word"><code>\W</code></a></td>
   <td>
    <p>匹配一个非单字字符。</p>

    <p>等价于<code>[^A-Za-z0-9_]</code>。</p>

    <p>例如, <code>/\W/</code> 或者 <code>/[^A-Za-z0-9_]/</code> 匹配 "50%." 中的 '%'。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-backreference" name="special-backreference" id="special-backreference"><code>\<em>n</em></code></a></td>
   <td>
    <p>当 n 是一个正整数，一个返回引用到最后一个与有n插入的正值表达式<span style="line-height: 1.5;">(counting left parentheses)</span><span style="line-height: 1.5;">匹配的副字符串。</span></p>

    <p>比如&nbsp;<code>/apple(,)\sorange\1/</code> 匹配"apple, orange, cherry, peach."中的'apple, orange,' 。</p>
   </td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-null" name="special-null" id="special-null"><code>\0</code></a></td>
   <td>匹配 NULL (U+0000) 字符， 不要在这后面跟其它小数，因为&nbsp;<code>\0&lt;digits&gt;</code> 是一个八进制转义序列。</td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-hex-escape" name="special-hex-escape" id="special-hex-escape"><code>\xhh</code></a></td>
   <td>匹配带有两位小数代码（hh）的字符</td>
  </tr>
  <tr>
   <td style="vertical-align: middle;"><a href="#special-unicode-escape" name="special-unicode-escape" id="special-unicode-escape"><code>\uhhhh</code></a></td>
   <td>匹配带有四位小数代码（hh）的字符</td>
  </tr>
 </tbody>
</table>

## 参考
* [mozilla RegExp 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
* [mozilla 正则表达式 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)