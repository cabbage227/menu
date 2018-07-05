/*文字滚动*/
var demo = document.getElementById("demo");
var demo1 = document.getElementById("demo1");
var demo2 = document.getElementById("demo2");
demo2.innerHTML=document.getElementById("demo1").innerHTML;
function Marquee(){
  if(demo.scrollLeft-demo2.offsetWidth>=0){
    demo.scrollLeft-=demo1.offsetWidth;
  }
  else{
  demo.scrollLeft++;
  }
}
var myvar=setInterval(Marquee,40);
demo.onmouseout=function (){myvar=setInterval(Marquee,40);}
demo.onmouseover=function(){clearInterval(myvar);}

/*头像点击获取图像路径*/
$('#face').find('img').click(function(){
    var imgsrc = $(this).attr('src');
    $('#leftImg').val(imgsrc);
});

/*-------------------------- +
  获取id, class, tagName
 +-------------------------- */
var get = {
    byId: function(id) {
        return typeof id === "string" ? document.getElementById(id) : id
    },
    byClass: function(sClass, oParent) {
        var aClass = [];
        var reClass = new RegExp("(^| )" + sClass + "( |$)");
        var aElem = this.byTagName("*", oParent);
        for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        return aClass
    },
    byTagName: function(elem, obj) {
        return (obj || document).getElementsByTagName(elem)
    }
};
/*-------------------------- +
  事件绑定, 删除
 +-------------------------- */
var EventUtil = {
    addHandler: function (oElement, sEvent, fnHandler) {
        oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : (oElement["_" + sEvent + fnHandler] = fnHandler, oElement[sEvent + fnHandler] = function () {oElement["_" + sEvent + fnHandler]()}, oElement.attachEvent("on" + sEvent, oElement[sEvent + fnHandler]))
    },
    removeHandler: function (oElement, sEvent, fnHandler) {
        oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, oElement[sEvent + fnHandler])
    },
    addLoadHandler: function (fnHandler) {
        this.addHandler(window, "load", fnHandler)
    }
};
/*-------------------------- +
  设置css样式
  读取css样式
 +-------------------------- */
function css(obj, attr, value)
{
    switch (arguments.length)
    {
        case 2:
            if(typeof arguments[1] == "object")
            {   
                for (var i in attr) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i] + ")", obj.style[i] = attr[i] / 100) : obj.style[i] = attr[i];
            }
            else
            {   
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
            }
            break;
        case 3:
            attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[attr] = value / 100) : obj.style[attr] = value;
            break;
    }
};

EventUtil.addLoadHandler(function ()
{
    var oMsgBox = get.byId("msgBox");
    var oUserName = get.byId("userName");
    var oConBox = get.byId("conBox");
    var oSendBtn = get.byId("sendBtn");
    var oMaxNum = get.byClass("maxNum")[0];
    var oCountTxt = get.byClass("countTxt")[0];
    var oList = get.byClass("list")[0];
    var oUl = get.byTagName("ul", oList)[0];
    var aLi = get.byTagName("li", oList);
    var aFtxt = get.byClass("f-text", oMsgBox);
    var aImg = get.byTagName("img", get.byId("face"));
    var bSend = false;
    var timer = null;
    var oTmp = "";
    var i = 0;
    var maxNum = 140;
    
    //禁止表单提交
    EventUtil.addHandler(get.byTagName("form", oMsgBox)[0], "submit", function () {return false});
    
    //为提交按钮绑定函数提交
    EventUtil.addHandler(oSendBtn, "click", fnSend);
    
    
    //提交时验证输入是否符合要求
    function fnSend ()
    {
        var reg = /^\s*$/g;
        if(reg.test(oUserName.value))
        {
            alert("请填写您的姓名!");
            oUserName.focus()
        }
        else if(!/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(oUserName.value))
        {
            alert("请输入正确的手机号码！！！");
            oUserName.focus()
        }
        else if(reg.test(oConBox.value))
        {
            alert("随便说点什么吧！");
            oConBox.focus()
        }
        else if(!bSend)
        {
            alert("你输入的内容已超出限制，请检查！");
            oConBox.focus()
        }
        else
        {
            for (i = 0; i < aImg.length; i++) aImg[i].className = "";
            aImg[0].className = "current";
            
            //将元素高度保存
            var iHeight = oLi.clientHeight - parseFloat(css(oLi, "paddingTop")) - parseFloat(css(oLi, "paddingBottom"));
            var alpah = count = 0;
            css(oLi, {"opacity" : "0", "height" : "0"});    
            timer = setInterval(function ()
            {
                css(oLi, {"display" : "block", "opacity" : "0", "height" : (count += 8) + "px"});
                if (count > iHeight)
                {
                    clearInterval(timer);
                    css(oLi, "height", iHeight + "px");
                    timer = setInterval(function ()
                    {
                        css(oLi, "opacity", (alpah += 10));
                        alpah > 100 && (clearInterval(timer), css(oLi, "opacity", 100))
                    },30)
                }
            },30);
            //调用鼠标划过/离开样式
            liHover();
            //调用删除函数
            delLi()
        }
    };
    
    //事件绑定, 判断字符输入
    EventUtil.addHandler(oConBox, "keyup", confine);    
    EventUtil.addHandler(oConBox, "focus", confine);
    EventUtil.addHandler(oConBox, "change", confine);
    
    //输入字符限制
    function confine ()
    {
        var iLen = 0;       
        for (i = 0; i < oConBox.value.length; i++) 
            iLen += /[^\x00-\xff]/g.test(oConBox.value.charAt(i)) ? 1 : 0.5;
        oMaxNum.innerHTML = Math.abs(maxNum - Math.floor(iLen));    
        maxNum - Math.floor(iLen) >= 0 ? (css(oMaxNum, "color", ""), oCountTxt.innerHTML = "\u8fd8\u80fd\u8f93\u5165", bSend = true) : (css(oMaxNum, "color", "#f60"), oCountTxt.innerHTML = "\u5df2\u8d85\u51fa", bSend = false)
    }
    //加载即调用
    confine();      
    
   
    
    //li鼠标划过/离开处理函数
    function liHover()
    {
        for (i = 0; i < aLi.length; i++)
        {
            //li鼠标划过样式
            EventUtil.addHandler(aLi[i], "mouseover", function (event)
            {
                this.className = "hover";
                oTmp = get.byClass("times", this)[0];
                var aA = get.byTagName("a", oTmp);
              
            });

            //li鼠标离开样式
            EventUtil.addHandler(aLi[i], "mouseout", function ()
            {
                this.className = ""; 
            })
        }
    }
    liHover();
    
    //删除功能
    function delLi()
    {
        var aA = get.byClass("del", oUl);
        
        for (i = 0; i < aA.length; i++)
        {
            aA[i].onclick = function ()
            {
                var oParent = this.parentNode.parentNode.parentNode;
                var alpha = 100;
                var iHeight = oParent.offsetHeight;
                timer = setInterval(function ()
                {
                    css(oParent, "opacity", (alpha -= 10));
                    if (alpha < 0)
                    {
                        clearInterval(timer);                       
                        timer = setInterval(function ()
                        {
                            iHeight -= 10;
                            iHeight < 0 && (iHeight = 0);
                            css(oParent, "height", iHeight + "px");
                            iHeight == 0 && (clearInterval(timer), oUl.removeChild(oParent))
                        },30)
                    }   
                },30);          
                this.onclick = null 
            }           
        }
    }
    delLi();
    
    //输入框获取焦点时样式
    for (i = 0; i < aFtxt.length; i++)
    {
        EventUtil.addHandler(aFtxt[i], "focus", function () {this.className = "active"});       
        EventUtil.addHandler(aFtxt[i], "blur", function () {this.className = ""})
    }
    
    //格式化时间, 如果为一位数时补0
    function format(str)
    {
        return str.toString().replace(/^(\d)$/,"0$1")
    }
    
    //头像
    for (i = 0; i < aImg.length; i++)
    {
        aImg[i].onmouseover = function ()
        {
            this.className += " hover"
        };
        aImg[i].onmouseout = function ()
        {
            this.className = this.className.replace(/\s?hover/,"")
        };
        aImg[i].onclick = function ()
        {
            for (i = 0; i < aImg.length; i++) aImg[i].className = "";
            this.className = "current"  
        }
    }
});


