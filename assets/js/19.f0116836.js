(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{408:function(t,e,s){"use strict";s.r(e);var a=s(54),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rem-实现移动端自适应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem-实现移动端自适应"}},[t._v("#")]),t._v(" REM 实现移动端自适应")]),t._v(" "),s("p",[t._v("rem 这个单位代表根元素的 font-size 大小（例如 "),s("code",[t._v("<html>")]),t._v("元素的 font-size）。")]),t._v(" "),s("p",[t._v("所以当在根元素的 font-size 设置为 50px 时，1rem = 50px")]),t._v(" "),s("h2",{attrs:{id:"如何设置-font-size-会方便我们计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何设置-font-size-会方便我们计算"}},[t._v("#")]),t._v(" 如何设置 font-size 会方便我们计算")]),t._v(" "),s("p",[t._v("由于我们设计稿是以 "),s("code",[t._v("iPhone6")]),t._v(" 为基准，也就是 "),s("code",[t._v("750\\*1334")])]),t._v(" "),s("p",[t._v("而我们希望我们切图的时候，可以不用计算，按设计稿上的大小来写。")]),t._v(" "),s("p",[t._v("也就是 "),s("code",[t._v("750rem = 设备宽度")])]),t._v(" "),s("p",[t._v("那么，我们要如何设置的根元素的 "),s("code",[t._v("font-size")]),t._v(" 呢？")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注：realWidth: 设备真实宽度，rootFontSize：根元素字体大小")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1rootFontSize = 1rem")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 750rem = realWidth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 得出：rootFontSize = realWidth/750")]),t._v("\n")])])]),s("p",[t._v("实际使用的时候，发现计算出来的 rootFontSize 的值为：")]),t._v(" "),s("ul",[s("li",[t._v("iPhone5：320/750 等于 0.46666px")]),t._v(" "),s("li",[t._v("iPhone6：375/750 等于 0.5px")])]),t._v(" "),s("p",[s("strong",[t._v("然而 ！！！")])]),t._v(" "),s("p",[t._v("当我们放到浏览器测试的时候，却发现并不是我们期望的。因为浏览器支持的最小字体为 12px。")]),t._v(" "),s("p",[t._v("当我们 rootFontSize 设置为小于 12px 的时候，浏览器自动转为 12px。")]),t._v(" "),s("p",[t._v("为了让我们的 rootFontSize 大于 12px，我们将他乘以 100。")]),t._v(" "),s("p",[t._v("故转换的比例变为 ：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 rootFontSize = 1rem")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 7.50rem = realWidth")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rootFontSize = realWidth * 100 /750")]),t._v("\n")])])]),s("p",[t._v("这样我们切图的时候，将设计稿的尺寸/100 , 就可以了")]),t._v(" "),s("blockquote",[s("p",[t._v("另外，当我们屏幕尺寸变化的时候，需要重新设置一下根元素的 font-size。所以要监听下 resize 、 orientationchange 事件")])])])}),[],!1,null,null,null);e.default=n.exports}}]);