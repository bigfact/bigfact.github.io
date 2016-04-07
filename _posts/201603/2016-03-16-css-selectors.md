---
layout: post
title: "css 选择器"
date: 2016-03-16 14:13:00 +0800
category: css
tags: css
---

## 分类
* 通配选择器 - *
{% highlight css %}
    * {}
{% endhighlight %}
* 类型（元素）选择器 - Type
{% highlight css %}
    div {}
{% endhighlight %}
* 类 - Class
{% highlight css %}
    .container {}
{% endhighlight %}
* 唯一标识 - ID
{% highlight css %}
    #form1 {}
{% endhighlight %}
* 属性 - Attribute
{% highlight css %}
    *[key] {}                  /* 包含 key 属性 */
    *[key="value"] {}          /* 包含 key 属性且值等于 value */
    *[key~="value"] {}         /* 包含 key 属性，值为以空格作为分隔符的字符串列表，其中一个字符串等于 key */
    *[key|="value"] {}         /* 包含 key 属性且值等于 value ，或者值以 value- 开头 */
    *[key^="value"] {}         /* 包含 key 属性且值以 value 开头 */
    *[key$="value"] {}         /* 包含 key 属性且值以 value 结尾 */
    *[key*="value"] {}         /* 包含 key 属性且值至少包含一个 value */
    *[key="value" i] {}        /* 添加 i 或者 I 忽略匹配属性值的大小写 */
{% endhighlight %}
* 伪类 - Pseudo-class
{% highlight css %}
    .ex:active {}               /*  */      
    .ex:any {}                  /*  */  
    .ex:checked {}              /*  */      
    .ex:default {}              /*  */      
    .ex:dir() {}                /*  */      
    .ex:disabled {}             /*  */      
    .ex:empty {}                /*  */      
    .ex:enabled {}              /*  */      
    .ex:first {}                /*  */      
    .ex:first-child {}          /*  */          
    .ex:first-of-type {}        /*  */              
    .ex:fullscreen {}           /*  */          
    .ex:focus {}                /*  */      
    .ex:hover {}                /*  */      
    .ex:indeterminate {}        /*  */              
    .ex:in-range {}             /*  */      
    .ex:invalid {}              /*  */      
    .ex:lang() {}               /*  */      
    .ex:last-child {}           /*  */          
    .ex:last-of-type {}         /*  */          
    .ex:left {}                 /*  */  
    .ex:link {}                 /*  */  
    .ex:not() {}                /*  */      
    .ex:nth-child() {}          /*  */          
    .ex:nth-last-child() {}     /*  */              
    .ex:nth-last-of-type() {}   /*  */                  
    .ex:nth-of-type() {}        /*  */              
    .ex:only-child {}           /*  */          
    .ex:only-of-type {}         /*  */          
    .ex:optional {}             /*  */      
    .ex:out-of-range {}         /*  */          
    .ex:read-only {}            /*  */          
    .ex:read-write {}           /*  */          
    .ex:required {}             /*  */      
    .ex:right {}                /*  */      
    .ex:root {}                 /*  */  
    .ex:scope {}                /*  */      
    .ex:target {}               /*  */      
    .ex:valid {}                /*  */      
    .ex:visited {}              /*  */      
{% endhighlight %}
* 伪元素 - Pseudo-element
{% highlight css %}
    ::after (:after)                    /*  */                        
    ::-ms-fill                          /*  */                
    ::-ms-fill-lower                    /*  */                        
    ::-ms-fill-upper                    /*  */                        
    ::-ms-thumb                         /*  */                
    ::-ms-track                         /*  */                
    ::-moz-progress-bar                 /*  */                        
    ::-moz-range-progress               /*  */                            
    ::-moz-range-thumb                  /*  */                        
    ::-moz-range-track                  /*  */                        
    ::-webkit-progress-bar              /*  */                            
    ::-webkit-progress-value            /*  */                                
    ::-webkit-slider-runnable-track     /*  */                                    
    ::-webkit-slider-thumb              /*  */                            
    ::before (:before)                  /*  */                        
    ::first-letter (:first-letter)      /*  */                                    
    ::first-line (:first-line)          /*  */                                
    ::selection                         /*  */                
    ::backdrop                          /*  */                
{% endhighlight %}
* 后代选择器 - Descendant
{% highlight css %}
    div div {}
{% endhighlight %}
* 子元素选择器 - Child
{% highlight css %}
    div > div {}
{% endhighlight %}
* 相邻兄弟元素选择器 - Adjacent-sibling
{% highlight css %}
    div + div {}
{% endhighlight %}

## 参考
* [css 选择器演示](http://www.haorooms.com/tools/css_selecter/)
* [W3School css 基础教程](http://www.w3school.com.cn/css/css_selector_type.asp)
* [MDN CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
* [MDN CSS 伪元素](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)