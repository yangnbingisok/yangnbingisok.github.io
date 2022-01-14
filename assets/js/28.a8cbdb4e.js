(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{418:function(t,a,s){"use strict";s.r(a);var n=s(54),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"客户端检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端检测"}},[t._v("#")]),t._v(" 客户端检测")]),t._v(" "),s("p",[t._v("在现实当中，浏览器之间的差异以及不同浏览器的怪癖，多得不胜枚举。因此，客户端检测除了是一种补救措施之外，更是一种行之有效的开发策略")]),t._v(" "),s("blockquote",[s("p",[t._v("检测 web 客户端的手段有很多，而且各有利弊。但最重要的是要知道，不到万不得已，就不要使用客户端检测！如果能找到更通用的方法，应优先采用更通用的方法。既是，先设计通用的方案，在针对差异增强该方案")])]),t._v(" "),s("h2",{attrs:{id:"能力检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#能力检测"}},[t._v("#")]),t._v(" 能力检测")]),t._v(" "),s("p",[t._v("能力检测的目标不是识别特定浏览器，而是识别浏览器的能力。只要确定浏览器的能力，就可以给出特定解决方案")]),t._v(" "),s("ul",[s("li",[t._v("检测的时候应该尽可能精确，例如，你想检测 sort，不应该只检测是否存在 sort 属性，而应该更深一步检测 sort 是否是 function 类型的。而且需要注意 typeof 在各个浏览器之间的差异")]),t._v(" "),s("li",[t._v("能力检测并非浏览器检测，并不能识别出特定的浏览器，因为其他浏览器新版本可能会改变，导致你的检测逻辑不严谨")]),t._v(" "),s("li",[t._v("检测完，应该把检测结果保存起来，这样就不需要每次都进行")])]),t._v(" "),s("p",[t._v("例如：早期针对 IE 的检测：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getElementById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getElementById不可用'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"怪癖检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怪癖检测"}},[t._v("#")]),t._v(" 怪癖检测")]),t._v(" "),s("p",[t._v("识别浏览器的特殊行为，检测该浏览器存在什么缺陷")]),t._v(" "),s("ul",[s("li",[t._v("一般来说，怪癖都是个别浏览器独有的，故归为 bug。")]),t._v(" "),s("li",[t._v("由于检测怪癖需要运行代码，用来检验缺陷。故建议仅检测有直接影响到，并且最好在一开始便执行- 检测")])]),t._v(" "),s("p",[t._v("例如 ： IE8 及更早版本，有个 bug，新增属性如果与某个 Enumerable 标为 false 的原型属性同名，for in 循环无法遍历出它。")]),t._v(" "),s("h2",{attrs:{id:"用户代理检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户代理检测"}},[t._v("#")]),t._v(" 用户代理检测")]),t._v(" "),s("p",[t._v("用户代理通过检测用户代理字符串来确定实际使用的浏览器。在服务器端，这是一种常用且广为接受的做法，而在客户端，则被当做万不得已才用的做法，优先级在能力检测和怪癖检测之后。")]),t._v(" "),s("h4",{attrs:{id:"识别呈现引擎-ie、-gecko、webkit、khtml、opera"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别呈现引擎-ie、-gecko、webkit、khtml、opera"}},[t._v("#")]),t._v(" 识别呈现引擎：IE、 Gecko、Webkit、KHTML、Opera")]),t._v(" "),s("p",[t._v("由于历史原因，有些引擎返回的 ua 中存在诸多不一致的地方。所以在检测的时候，检测的顺序很重要\nOpera --\x3e Webkit --\x3e KHTML --\x3e Gecko --\x3e IE.")]),t._v(" "),s("h4",{attrs:{id:"识别浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别浏览器"}},[t._v("#")]),t._v(" 识别浏览器")]),t._v(" "),s("p",[t._v("大多数情况下，识别呈现引擎足以让我们才去正确的操作。但是，只有呈现引擎还不能说明存在所需的 js 功能。例如，safari 和 chrome 的呈现引擎都是 webkit，但他们的 js 引擎却不一样。\n浏览器：IE , Firefox，safari，konq，opera，chrome")]),t._v(" "),s("h4",{attrs:{id:"识别平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别平台"}},[t._v("#")]),t._v(" 识别平台")]),t._v(" "),s("p",[t._v('通过 navigator.platform 来检测不同的平台。\nnavigator.platform 属性可能的值包括：" Win32 " , " Win64 " , " MacPPC " , " MacIntel " , " X11 " , " Linux i686 ".')]),t._v(" "),s("h4",{attrs:{id:"识别-windows-操作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别-windows-操作系统"}},[t._v("#")]),t._v(" 识别 windows 操作系统")]),t._v(" "),s("p",[t._v("通过检测 userAgent 中的字符串，用正则识别不同的 windows 版本\nwin2000 之后，大部分浏览器表示操作系统的字符串大部分相同，只有版本号有变化。")]),t._v(" "),s("h4",{attrs:{id:"识别移动设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别移动设备"}},[t._v("#")]),t._v(" 识别移动设备")]),t._v(" "),s("ul",[s("li",[t._v("ios 设备: 检查是不是 Mac OS ，字符串中是否包含“Mobile”，然后再使用正则确定是否存在 IOS 版本号。")]),t._v(" "),s("li",[t._v("android： 搜索字符串“Android”，并取得紧随其后的版本号")])]),t._v(" "),s("h4",{attrs:{id:"识别游戏系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#识别游戏系统"}},[t._v("#")]),t._v(" 识别游戏系统")]),t._v(" "),s("p",[t._v("Wii 或 playstation")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[s("strong",[t._v("用户代理检测是客户端检测的最后一个选择。只要可能应该优先采用能力检测，怪癖检测次之")])]),t._v(" "),s("p",[t._v("用户代理检测一般适用于下列情况：")]),t._v(" "),s("ul",[s("li",[t._v("不能直接准确的使用能力检测和怪癖检测。")]),t._v(" "),s("li",[t._v("同一款浏览器在不同的平台上具备不同的能力，这时候就需要确定浏览器位于哪个平台。")]),t._v(" "),s("li",[t._v("为了跟踪分析等目的需要知道确切的浏览器")])])])}),[],!1,null,null,null);a.default=e.exports}}]);