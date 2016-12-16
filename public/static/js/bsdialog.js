﻿(function(){var $=function(selector,content){return new $.fn.init(selector,content)},readyBound=false,readyList=[],DOMContentLoaded;$.fn=$.prototype={init:function(selector,content){if(!selector)return this;this[0]=typeof selector==="string"?$.selector(selector,content):selector;return typeof selector==="function"?$().ready(selector):this},ready:function(fn){$.bindReady();if($.isReady)fn.call(document,$);else readyList&&readyList.push(fn);return this},hasClass:function(name){var reg=new RegExp("(\\s|^)"+name+"(\\s|$)");return this[0].className.match(reg)?true:false},addClass:function(name){if(!this.hasClass(name))this[0].className+=" "+name;return this},removeClass:function(name){var elem=this[0];if(!name)elem.className="";else if(this.hasClass(name))elem.className=elem.className.replace(name," ");return this},css:function(name,value){var elem=this[0];if(typeof name==="string")if(value===undefined)return elem.currentStyle?elem.currentStyle[name]:document.defaultView.getComputedStyle(elem,false)[name];else elem.style[name]=value;else for(var i in name)elem.style[i]=name[i];return this},append:function(content){var elem=this[0];if(elem.insertAdjacentHTML)elem.insertAdjacentHTML("beforeEnd",content);else{var range=elem.ownerDocument.createRange(),frag;if(elem.lastChild){range.setStartAfter(elem.lastChild);frag=range.createContextualFragment(content);elem.appendChild(frag)}else elem.innerHTML=content}return this},remove:function(){var elem=this[0];$.each(elem.getElementsByTagName("*"),function(i,val){val=null});elem.parentNode.removeChild(elem);elem=null;window.CollectGarbage&&CollectGarbage()},bind:function(type,fn){var elem=this[0];if(elem.addEventListener)elem.addEventListener(type,fn,false);else{elem["$e"+type+fn]=fn;elem[type+fn]=function(){elem["$e"+type+fn](window.event)};elem.attachEvent("on"+type,elem[type+fn])}return this},live:function(type,fn){this.bind(type,function(event){var et=event.target||event.srcElement;fn.call(et,event);return this})},unbind:function(type,fn){var elem=this[0];if(elem.removeEventListener)elem.removeEventListener(type,fn,false);else{elem.detachEvent("on"+type,elem[type+fn]);elem[type+fn]=null}return this},offset:function(){var elem=this[0],box=elem.getBoundingClientRect(),doc=elem.ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=box.top+(self.pageYOffset||docElem.scrollTop)-clientTop,left=box.left+(self.pageXOffset||docElem.scrollLeft)-clientLeft;return{left:left,top:top}}};$.fn.init.prototype=$.fn;$.selector=function(selector,content){content=content||document;return/^#(\w+)$/.test(selector)?content.getElementById(RegExp.$1):/^\w+$/.test(selector)?content.getElementsByTagName(selector)[0]:void 0};$.each=function(obj,fn){var name,i=0,length=obj.length,isObj=length===undefined;if(isObj){for(name in obj)if(fn.call(obj[name],name,obj[name])===false)break}else for(var value=obj[0];i<length&&fn.call(value,i,value)!==false;value=obj[++i]);};$.isReady=false;$.ready=function(){if(!$.isReady){if(!document.body)return setTimeout($.ready,13);$.isReady=true;if(readyList){var fn,i=0;while(fn=readyList[i++])fn.call(document,$);readyList=null}}};$.bindReady=function(){if(readyBound)return;readyBound=true;if(document.readyState==="complete")return $.ready();if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",$.ready,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",$.ready);var toplevel=false;try{toplevel=window.frameElement==null}catch(e){}document.documentElement.doScroll&&toplevel&&doScrollCheck()}};if(document.addEventListener)DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);$.ready()};else if(document.attachEvent)DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);$.ready()}};function doScrollCheck(){if($.isReady)return;try{document.documentElement.doScroll("left")}catch(error){setTimeout(doScrollCheck,1);return}$.ready()}$.isElem=function(obj){return obj&&obj.nodeType===1};$.isArray=function(obj){return Object.prototype.toString.call(obj)==="[object Array]"};$.charset=function(){var d=document;return d.characterSet||d.charset}();$.isIE=/msie/.test(navigator.userAgent.toLowerCase());$.isIE6=$.isIE&&!window.XMLHttpRequest;$.getStyle=function(href,fn,doc){doc=doc||document;var link=document.createElement("link");link.charset=$.charset;link.rel="stylesheet";link.type="text/css";link.href=href;doc.getElementsByTagName("head")[0].appendChild(link);var styles=doc.styleSheets,load=function(){for(var i=0;i<styles.length;i++)if(link===(styles[i].ownerNode||styles[i].owningElement))return fn();setTimeout(arguments.callee,5)};fn&&load()};var _style={};$.addHeadStyle=function(content,doc){doc=doc||document;var style=_style[doc];if(!style){style=_style[doc]=doc.createElement("style");style.setAttribute("type","text/css");$("head")[0].appendChild(style)}style.styleSheet&&(style.styleSheet.cssText+=content)||style.appendChild(doc.createTextNode(content))};$.getScript=function(src,fn,doc){doc=doc||document;var script=doc.createElement("script");script.language="javascript";script.charset=$.charset;script.type="text/javascript";script.onload=script.onreadystatechange=function(){if(!script.readyState||"loaded"===script.readyState||"complete"===script.readyState){fn&&fn();script.onload=script.onreadystatechange=null;script.parentNode.removeChild(script)}};script.src=src;doc.body.appendChild(script)};var _path=document.getElementsByTagName("script");_path=_path[_path.length-1].src.replace(/\\/g,"/");$.getPath=_path.lastIndexOf("/")<0?".":_path.substring(0,_path.lastIndexOf("/"));$.getUrl=_path.split("?")[0];$.getArgs=_path.split("?")[1]||"";$.stopBubble=function(event){event.stopPropagation?event.stopPropagation():(event.cancelBubble=true)};$.stopDefault=function(event){event.preventDefault?event.preventDefault():(event.returnValue=false)};(function(){var dd,db,dom,get=function(win){dd=win?win.document.documentElement:document.documentElement;db=win?win.document.body:document.body;dom=dd||db};$.doc=function(win){get(win);return{width:Math.max(dom.clientWidth,dom.scrollWidth),height:Math.max(dom.clientHeight,dom.scrollHeight),left:Math.max(dd.scrollLeft,db.scrollLeft),top:Math.max(dd.scrollTop,db.scrollTop)}};$.win=function(win){get(win);return{width:dom.clientWidth,height:dom.clientHeight}}})();(function(){var cache={};$.tmpl=function tmpl(str,data){var fn=!/\W/.test(str)?(cache[str]=cache[str]||tmpl(document.getElementById(str).innerHTML)):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return data?fn(data):fn}})();$.effect=function(elem,start,end,change,callback,speed){speed=speed||300;var sTime=+new Date,eTime,val,iTimer=setInterval(function(){eTime=(+new Date-sTime)/speed;if(eTime>=1){change.call(end);callback&&callback.call(elem);return clearInterval(iTimer)}val=start+(end-start)*(-Math.cos(eTime*Math.PI)/2+.5);change.call(val)},1)};if(!window.art)window.art=$})();(function($){$.fn.opacityFlash=function(end,fn,speed){var elem=this[0],start=end===0?1:0,change=elem.filters?function(){elem.filters.alpha.opacity=this*100}:function(){elem.style.opacity=this};$.effect(elem,start,end,change,fn,speed);return this};$.fn.cssFlash=function(name,end,fn,speed){var elem=this[0],start=parseInt(this.css(name)),end=parseInt(end),change=function(){try{elem.style[name]=this+"px"}catch(_){}};$.effect(elem,start,end,change,fn,speed);return this};$.fn.moveFlash=function(name,start,end,fn,speed){var elem=this[0],end=parseInt(end),change=function(){try{elem.style[name]=this+"px"}catch(_){}};$.effect(elem,start,end,change,fn,speed);return this};$.clsSelect=window.getSelection?function(){try{window.getSelection().removeAllRanges()}catch(_){}}:function(){try{document.selection.empty()}catch(_){}};$.fn.limit=function(fixed,width,height){var minX,minY,maxX,maxY,centerX,centerY,win=$.win(),doc=$.doc(),winWidth=win.width,winHeight=win.height,docLeft=doc.left,docTop=doc.top,boxWidth=width||this[0].offsetWidth,boxHeight=height||this[0].offsetHeight;if(fixed){minX=0;maxX=winWidth-boxWidth;centerX=maxX/2;minY=0;maxY=winHeight-boxHeight;var hc=winHeight*.382-boxHeight/2;centerY=boxHeight<4*winHeight/7?hc:maxY/2}else{minX=docLeft;maxX=winWidth+minX-boxWidth;centerX=maxX/2;minY=docTop;maxY=winHeight+minY-boxHeight;var hc=winHeight*.382-boxHeight/2+minY;centerY=boxHeight<4*winHeight/7?hc:(maxY+minY)/2}if(centerX<0)centerX=0;if(centerY<0)centerY=0;return{minX:minX,minY:minY,maxX:maxX,maxY:maxY,centerX:centerX,centerY:centerY}};(function(){var regular,zIndex=0;$.fn.drag=function(options){var data=options,defaults=$.fn.drag.defaults,limit,cache,isTemp,isDown,$move,$elem=this;for(var i in defaults)if(data[i]===undefined)data[i]=defaults[i];var on=data.on||this,down=function(event){isDown=true;data.downFn&&data.downFn();var old=$elem[0].style.zIndex||data.zIndex;zIndex=old>zIndex?old:zIndex;zIndex++;if(data.limit)limit=$elem.limit(data.fixed);cache=function(){var doc=$.doc();return{x:event.clientX,y:event.clientY,left:parseInt($elem[0].style.left),top:parseInt($elem[0].style.top),zIndex:zIndex,width:$elem[0].offsetWidth,height:$elem[0].offsetHeight,docLeft:doc.left,docTop:doc.top}}();if(cache.width*cache.height>=data.showTemp){isTemp=true;data.temp.css({width:cache.width-2+"px",height:cache.height-2+"px",left:cache.left+"px",top:cache.top+"px",zIndex:cache.zIndex,display:"block"})}$.clsSelect();regular=setInterval($.clsSelect,20);document.body.setCapture&&$elem[0].setCapture();$(document).bind("mousemove",move).bind("mouseup",up)};on.bind("mousedown",down);var move=function(event){if(isDown===false)return;$move=isTemp?data.temp:$elem;var doc=$.doc(),x=event.clientX,y=event.clientY,l=cache.left-cache.x+x-cache.docLeft+doc.left,t=cache.top-cache.y+y-cache.docTop+doc.top;if(limit){if(l>limit.maxX)l=limit.maxX;if(l<limit.minX)l=limit.minX;if(t>limit.maxY)t=limit.maxY;if(t<limit.minY)t=limit.minY}$move.css({left:l+"px",top:t+"px"})},up=function(){isDown=false;$(document).unbind("mousemove",move).unbind("mouseup",up);document.body.releaseCapture&&$elem[0].releaseCapture();clearInterval(regular);if(isTemp){$elem.cssFlash("left",data.temp.css("left"),null,150).cssFlash("top",data.temp.css("top"),function(){data.upFn&&data.upFn()},150);data.temp.css("display","none");isTemp=false}else data.upFn&&data.upFn()};return this};$.fn.drag.defaults={on:null,downFn:null,upFn:null,fixed:false,limit:true,zIndex:1,temp:null,showTemp:1e5}})();var position;$(function(){$.isIE6&&$("body").css("backgroundAttachment")!=="fixed"&&$("html").css({backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"});position={fixed:$.isIE6?function(elem){var style=elem.style,doc=$.doc(),de=document.documentElement,de2="(document.documentElement)",left=parseInt(style.left)-de.scrollLeft,top=parseInt(style.top)-de.scrollTop;this.absolute(elem);style.setExpression("left","eval("+de2+".scrollLeft + "+left+') + "px"');style.setExpression("top","eval("+de2+".scrollTop + "+top+') + "px"')}:function(elem){elem.style.position="fixed"},absolute:$.isIE6?function(elem){var style=elem.style;style.position="absolute";style.removeExpression("left");style.removeExpression("top")}:function(elem){elem.style.position="absolute"}}});var publicTemplate='\t<div id="aui_iframe_mask"></div>\t<div id="aui_overlay"><div>\t\t<!--[if IE 6]><iframe src="about:blank"></iframe><![endif]-->\t</div></div>\t<div id="aui_temp_wrap"><div id="aui_temp">\t\t<!--[if IE 6]><iframe src="about:blank"></iframe><![endif]-->\t</div></div>',template='<div id="<%=id%>" class="aui_dialog_wrap <%="aui_" + skin%>">  <% var _css = "aui_dialog art_focus";\tif (!border) _css += " art_no_border";\tif (!title) _css += " art_no_title";  \tif (!drag) _css += " art_no_drag";  %>  <div id="<%=id%>dialog" class="<%=_css%>">  <% if (border) { %>\t<table class="aui_table">\t\t<tr>\t\t  <td class="aui_border aui_left_top"></td>\t\t  <td class="aui_border aui_top"></td>\t\t  <td class="aui_border aui_right_top"></td>\t\t</tr>\t\t<tr>\t\t  <td class="aui_border aui_left"></td>\t\t  <td class="aui_center">\t\t\t<% } %>\t\t\t<table class="aui_table aui_content_table">\t\t\t\t<% if (title) { %>\t\t\t\t<tr>\t\t\t\t  <td <% if (icon) { %>colspan="2"<% } %> class="aui_td_title">\t\t\t\t\t <div class="aui_title_wrap">\t\t\t\t\t\t<div id="<%=id%>title" class="aui_title">\t\t\t\t\t  \t\t<span class="aui_title_icon"></span><%=title%>\t\t\t\t\t\t</div>\t\t\t\t\t  \t<a id="<%=id%>close" class="aui_close" href="#"><%=closeText%></a>\t\t\t\t\t </div>\t\t\t\t  </td>\t\t\t\t</tr>\t\t\t\t  <% } %>\t\t\t\t<tr>\t\t\t\t  <% if (title && icon) { %>\t\t\t\t  <td class="aui_td_icon"><div class="aui_icon art_<%=icon%>"></div></td>\t\t\t\t  <% } %>\t\t\t\t  <td id="<%=id%>td_content" class="aui_td_content" style="width:<%=width%>;height:<%=height%>">\t\t\t\t\t<div class="aui_content_wrap">\t\t\t\t\t\t<div id="<%=id%>content" class="aui_content">\t\t\t\t\t\t\t<% if (content) { %>\t\t\t\t\t\t\t\t<%=content%>\t\t\t\t\t\t\t<% } else { %>\t\t\t\t\t\t\t\t<div class="aui_noContent"></div>\t\t\t\t\t\t\t<% } %>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="aui_content_mask"></div>\t\t\t\t\t\t<div class="aui_loading_tip"><%=loadingTip%></div>\t\t\t\t\t</div>\t\t\t\t  </td>\t\t\t\t</tr>\t\t\t\t<% if (yesFn || noFn) { %>\t\t\t\t<tr>\t\t\t\t  <td <% if (icon) { %>colspan="2"<% } %> class="aui_td_buttons">\t\t\t\t\t  <div class="aui_buttons_wrap">\t\t\t\t\t\t<% if (yesFn) { %><button class="sexybutton sexygreen" id="<%=id%>yes"><span><span><%=yesText%></span></span></button><% } %>\t\t\t\t\t\t<% if (noFn) { %><button class="sexybutton sexygray" id="<%=id%>no"><span><span><%=noText%></span></span></button><% } %>\t\t\t\t\t  </div>\t\t\t\t\t</td>\t\t\t\t</tr>\t\t\t\t<% } %>\t\t\t</table>\t\t\t<% if (border) { %>\t\t  </td>\t\t  <td class="aui_border aui_right"></td>\t\t</tr>\t\t<tr>\t\t  <td class="aui_border aui_left_bottom"></td>\t\t  <td class="aui_border aui_bottom"></td>\t\t  <td class="aui_border aui_right_bottom"></td>\t\t</tr>\t</table>\t<% } %>\t<!--[if IE 6]><iframe id="<%=id%>ie6_select_mask" class="aui_ie6_select_mask" src="about:blank"></iframe><![endif]-->  </div></div>',count=0,loadList=[],lockList=[],dialogList={},$html=$("html"),isFilters="filters"in document.documentElement,lockMouse=["DOMMouseScroll","mousewheel","scroll","contextmenu"],$iframe_mask,$temp_wrap,$temp,$overlay,topBoxApi,lockBoxApi,lockClick,topBox,zIndex,dialogReady,docMouse,docKey,dialog=function(data){data.tmpl&&(data.content=$.tmpl(data.tmpl,data.content));var html=$.tmpl(template,data);$("body").append(html);var id="#"+data.id,ui={wrap:$(id),dialog:$(id+"dialog"),td_content:$(id+"td_content"),title:$(id+"title"),content:$(id+"content"),yesBtn:$(id+"yes"),noBtn:$(id+"no"),closeBtn:$(id+"close"),ie6_select_mask:$(id+"ie6_select_mask")},winWidth,winHeight,docLeft,docTop,boxWidth,boxHeight,boxLeft,boxTop,refreshCache=function(){var win=$.win(),doc=$.doc();winWidth=win.width;winHeight=win.height;docLeft=doc.left;docTop=doc.top;boxWidth=ui.dialog[0].offsetWidth;boxHeight=ui.dialog[0].offsetHeight};refreshCache();var isInstall,timer,ie6SelectMask,$follow=null,lock={on:function(){lockList.push(api);position.fixed(ui.dialog[0]);lock.zIndex();if(!docKey)docKey=function(event){var key=event.keyCode;(key===37||key===39||key===9)&&lockBoxApi.focus();if(event.ctrlKey&&key===82||event.ctrlKey&&key===65||key===116||key===9||key===38||key===40||key===8){docMouse(event);lockBoxApi.position().focus();try{event.keyCode=0}catch(_){}$.stopDefault(event)}};if(!lockClick)lockClick=function(event){data.lockClick?lockBoxApi.close&&lockBoxApi.close():docMouse(event)};if(!docMouse)docMouse=function(event){$.stopBubble(event);$.stopDefault(event)};if(lockList.length===1){$(document).bind("keydown",docKey);$.each(lockMouse,function(i,name){$(document).bind(name,docMouse)});$overlay.bind("click",lockClick);if("ontouchend"in document){var docSize=$.doc();$overlay.css({width:docSize.width+"px",height:docSize.height+"px"})}var noCenter=$("body").css("backgroundPosition");noCenter=noCenter&&noCenter.split(" ")[0];noCenter=noCenter!=="center"&&noCenter!=="50%";noCenter&&$.doc().height>winHeight&&$html.addClass("art_page_full");data.effect&&!isFilters?$overlay.addClass("art_opacity").opacityFlash(1):$overlay.removeClass("art_opacity");$html.addClass("art_page_lock")}ui.dialog.bind("contextmenu",function(event){$.stopBubble(event)});ui.dialog.bind("keydown",function(event){var key=event.keyCode;if(key===116)return;$.stopBubble(event)});lockBoxApi=api},off:function(fn){lockList.splice(lockList.length-1,1);var out=function(){if(lockList.length===0){$html.removeClass("art_page_lock");$html.removeClass("art_page_full");$.each(lockMouse,function(i,name){$(document).unbind(name,docMouse)});$(document).unbind("keydown",docKey);docKey=docMouse=null;lockList=[]}else lockBoxApi=topBoxApi=lockList[lockList.length-1].zIndex();fn&&fn()};data.effect&&lockList.length===0&&!isFilters?$overlay.opacityFlash(0,out):out()},zIndex:function(){$overlay.css("zIndex",zIndex);$iframe_mask.css("zIndex",zIndex)}},api={content:function(content){if(content===undefined)return ui.content[0];else{api.loading.off().zIndex().focus();ui.content[0].innerHTML=content;return api}},size:function(width,height,fn){var td=ui.td_content,ready=function(){ie6SelectMask();fn&&fn.call(api)};data.width=width;data.height=height;if(data.effect)td.cssFlash("width",width).cssFlash("height",height,ready);else{td.css({width:width+"px",height:height+"px"});ready()}return api},position:function(left,top,fixed){fixed=fixed||data.fixed||false;isInstall&&refreshCache();ui.dialog[0].style.position="absolute";var limit=ui.dialog.limit($.isIE6?false:fixed);if(left===undefined||left==="center")boxLeft=limit.centerX;else if(left==="left")boxLeft=limit.minX-data.mOffsetL;else if(left==="right")if(typeof data.maxLeft==="number"&&limit.maxX>=data.maxLeft)boxLeft=limit.maxX-data.mOffsetL;else boxLeft=data.maxLeft-data.mOffsetL;else if(typeof left==="number"){if(data.limit){left=left>limit.maxX?limit.maxX:left;left=left<limit.minX?limit.minX:left}boxLeft=left-data.mOffsetL}if(top===undefined||top==="center")boxTop=limit.centerY;else if(top==="top")boxTop=limit.minY+data.mOffsetT;else if(top==="bottom")boxTop=limit.maxY-data.mOffsetT;else if(typeof top==="number"){if(data.limit){top=top>limit.maxY?limit.maxY:top;top=top<limit.minY?limit.minY:top}boxTop=top}data.left=left;data.top=top;if(typeof data.maxLeft==="number"&&left<=data.maxLeft)boxLeft=data.maxLeft-data.mOffsetL;var evType=data.FPosition.effectVType=="T2B"?boxTop-10:boxTop+10;if(data.effect&&isInstall&&data.FPosition.effect)ui.dialog.moveFlash("left",boxLeft,boxLeft).moveFlash("top",boxTop,evType);else if(data.effect&&isInstall&&!data.FPosition.effect)ui.dialog.cssFlash("left",boxLeft).cssFlash("top",boxTop);else ui.dialog.css({left:boxLeft+"px",top:boxTop+"px"});fixed&&position.fixed(ui.dialog[0]);return api},follow:function(elem,fp){if(!elem)return api;if(typeof elem==="string")elem=$(elem)[0]||$("#"+elem)[0];$follow&&$follow[0].artDialog&&($follow[0].artDialog=null);elem.artDialog=data.id;$follow=$(elem);data.follow=elem;isInstall&&refreshCache();if(data.FPosition.effect)isInstall=true;fp&&jQuery.extend(data.FPosition,fp);var w=(boxWidth-$follow[0].offsetWidth)/2,ww=$follow[0].offsetWidth,h=$follow[0].offsetHeight,p=$follow.offset(),l=p.left,t=p.top;if(w>l)w=0;if(t+h>docTop+winHeight-boxHeight)var maxh=0-boxHeight;maxh=Math.max(0,maxh);var iLeft,iTop;switch(data.FPosition.FVAlign){case"top":iTop=t-boxHeight;break;case"clienttop":iTop=t;break;case"center":iTop=t+(h-boxHeight)/2;break;case"clientbottom":if(h==0)iTop=t+h;else iTop=t+h-boxHeight;break;case"bottom":default:iTop=t+h}switch(data.FPosition.FAlign){case"right":iLeft=l+docLeft+ww;break;case"clientright":iLeft=l-boxWidth+ww;break;case"center":iLeft=(2*l-boxWidth+ww)/2;break;case"left":iLeft=l-boxWidth;break;case"clientleft":iLeft=l}if(typeof data.FPosition.IntLeft==="number")iLeft-=w+data.FPosition.IntLeft;else iLeft+=.01*data.FPosition.PercentLeft*ww;if(typeof data.FPosition.IntTop==="number")iTop+=h+data.FPosition.IntTop;else iTop+=.01*data.FPosition.PercentTop*h;return api.position(iLeft,iTop)},loading:{on:function(){ui.dialog.addClass("art_loading");return api},off:function(){ui.dialog.removeClass("art_loading");return api}},zIndex:function(){zIndex++;ui.dialog.css("zIndex",zIndex);lockList.length===0&&$iframe_mask.css("zIndex",zIndex);ui.wrap.css("zIndex",zIndex);$temp_wrap.css("zIndex",zIndex+1);topBox&&topBox.removeClass("art_focus");topBox=ui.dialog;topBox.addClass("art_focus");topBoxApi=api;return api},focus:function(elem){if(typeof elem==="string")elem=$(elem)[0]||$("#"+elem)[0];elem=$.isElem(elem)&&elem||ui.noBtn[0]||ui.yesBtn[0]||ui.closeBtn[0];setTimeout(function(){try{elem.focus()}catch(_){}},40);return api},show:function(fn){data.effect&&!isFilters?ui.dialog.addClass("art_opacity").opacityFlash(1,fn,150):fn&&fn();ui.wrap.css("visibility","visible");return api},hide:function(fn){var boxLeft=ui.dialog.offset().left,boxTop=ui.dialog.offset().top,f=data.FPosition.effect?null:fn2,moveF=function(){ui.dialog.moveFlash("top",boxTop,boxTop+20,fn2,150)},fn2=function(){var o=ui.dialog[0].style.opacity;if(o)o=null;ui.wrap.css("visibility","hidden");fn&&fn()};if(data.effect&&!isFilters)if(data.FPosition.effect)ui.dialog.moveFlash("top",boxTop,boxTop+20,fn2,150);else ui.dialog.removeClass("art_opacity").opacityFlash(0,fn2,150);else if(data.FPosition.effect)ui.dialog.moveFlash("top",boxTop,boxTop+20,fn2,150);else fn2();return api},close:function(){if(!dialogList[data.id])return null;api.time();dialogList&&dialogList[data.id]&&delete dialogList[data.id];var closeFn=function(){if($follow&&$follow[0])$follow[0].artDialog=null;if(api===topBoxApi)topBoxApi=null;if(topBox===ui.dialog)topBox=null;var remove=function(){data.closeFn&&data.closeFn.call(api,window);ui.wrap.remove();$.each(api,function(name){delete api[name]});api=null};api.hide(remove)};data.lock?lock.off(closeFn):closeFn();return null},time:function(second){timer&&clearTimeout(timer);if(second)timer=setTimeout(function(){api.closeFn();clearTimeout(timer)},1e3*second);return api},yesFn:function(){return typeof data.yesFn!=="function"||data.yesFn.call(api,window)!==false?api.close():api},noFn:function(){return typeof data.noFn!=="function"||data.noFn.call(api,window)!==false?api.close():api},closeFn:function(event){event&&$.stopDefault(event);var fn=data.noFn;return typeof fn!=="function"||fn.call(api,window)!==false?api.close():api},ui:ui,data:data};if(data.lock){data.fixed=false;data.follow=null}if(data.follow||"ontouchend"in document)data.fixed=false;api.zIndex();data.time&&api.time(data.time);data.lock&&lock.on();!data.content&&api.loading.on();data.follow?api.follow(data.follow):api.position(data.left,data.top,data.fixed);ui.dialog.live("click",function(event){var node=this.nodeName.toLowerCase();switch(this){case ui.yesBtn[0]:api.yesFn();break;case ui.noBtn[0]:api.noFn();break;case ui.closeBtn[0]:api.closeFn(event);break;default:if(jQuery.browser.safari)switch(this.parentNode.parentNode){case ui.yesBtn[0]:api.yesFn();break;case ui.noBtn[0]:api.noFn()}node==="td"||node==="div"&&api.zIndex();ie6SelectMask()}});ui.content.bind("keyup",function(event){event.keyCode===27&&$.stopBubble(event);event.ctrlKey&&event.keyCode===13&&api.yesFn()});!data.limit&&ui.dialog.css({width:ui.dialog[0].clientWidth+"px",height:ui.dialog[0].clientHeight+"px"});data.drag&&ui.title[0]&&ui.dialog.drag({on:ui.title,fixed:$.isIE6?false:data.fixed,temp:$temp,showTemp:data.showTemp,zIndex:data.zIndex,limit:data.limit,downFn:function(){data.fixed&&position.fixed($temp[0]);if(data.lock)lockBoxApi=api;api.zIndex().focus();ui.dialog.addClass("art_move");$html.addClass("art_page_move")},upFn:function(){$.isIE6&&data.fixed&&position.fixed(ui.dialog[0]);position.absolute($temp[0]);ui.dialog.removeClass("art_move");$html.removeClass("art_page_move")}});if($.isIE6){var list=ui.wrap[0].getElementsByTagName("*");$.each(list,function(i,elem){var png=$(elem).css("ie6png"),pngPath=$.dialog.defaults.path+png;if(png){elem.style.backgroundImage="none";elem.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+pngPath+"',sizingMethod='crop')"}png=pngPath=null})}data.show&&api.show();ie6SelectMask=function(){ui.ie6_select_mask[0]&&ui.ie6_select_mask.css({width:ui.dialog[0].offsetWidth,height:ui.dialog[0].offsetHeight})};ie6SelectMask();setTimeout(ie6SelectMask,40);data.focus&&api.focus(data.focus);data.initFn&&data.initFn.call(api,window);isInstall=true;$(window).bind("unload",function(){if(!api)return;data.effect=false;api.close});return api};$.fn.dialog=function(options,yesFn,noFn){var win=options.window||$.dialog.defaults.window;if(typeof win==="string"&&win!=="self")win=window[win];if(win&&window!=win&&win.art&&win.art.dialog){options.window=false;return win.art.dialog(options,yesFn,noFn)}var data=options||{},defaults=$.dialog.defaults;if(typeof data==="string")data={content:data,fixed:true};if(typeof data.width==="number")data.width=data.width+"px";if(typeof data.height==="number")data.height=data.height+"px";if(document.compatMode==="BackCompat")return alert(data.content);data.follow=this[0]||data.follow;data.yesFn=data.yesFn||yesFn;data.noFn=data.noFn||noFn;if(!dialogReady)return loadList.push(data);if(dialogList[data.id])return dialogList[data.id].zIndex().show().focus();if(data.follow){var elem=data.follow;if(typeof elem==="string")elem=$("#"+elem)[0];if(elem.artDialog)return dialogList[elem.artDialog].follow(elem).zIndex().show().focus()}count++;data.id=data.id||"artDialog"+count;for(var i in defaults)if(data[i]===undefined)data[i]=defaults[i];zIndex=zIndex||data.zIndex;if($.isArray(data.skin))data.skin=data.skin[0];return dialogList[data.id]=dialog(data)};$.dialog=$().dialog;var defaults={title:"提示",tmpl:null,content:null,yesFn:null,noFn:null,yesText:"确定",noText:"取消",width:"auto",height:"auto",skin:"dgbluelight",icon:null,border:true,loadingTip:"加载中...",closeText:"×",FPosition:{FAlign:"right",FVAlign:"clienttop",IntLeft:0,IntTop:0,PercentLeft:0,PercentTop:0,effectVType:"",effectHType:"",effect:false},fixed:true,focus:true,window:"self",esc:true,effect:true,lock:false,lockClick:false,left:"center",top:"center",mOffsetL:10,mOffsetT:10,maxLeft:null,time:null,initFn:null,closeFn:null,follow:null,drag:true,limit:true,loadBg:true,path:$.getPath,show:true,zIndex:1987,showTemp:1e5};$.fn.dialog.defaults=window.artDialogDefaults||defaults;try{document.execCommand("BackgroundImageCache",false,true)}catch(_){}var _loadSkin={};$.fn.dialog.loadSkin=function(skin,bg){var load=function(name){if(_loadSkin[name])return;bg!==false&&$.dialog({skin:name,time:9,limit:false,focus:false,lock:false,fixed:false,type:false,icon:"alert",left:-9999,yesFn:true,noFn:true});_loadSkin[name]=true};if(typeof skin==="string")load(skin);else $.each(skin,function(i,name){load(name)})};var allReady=function(){if(!dialogReady){dialogReady=true;allReady()}$("body").append(publicTemplate);$iframe_mask=$("#aui_iframe_mask");$overlay=$("#aui_overlay");$temp_wrap=$("#aui_temp_wrap");$temp=$("#aui_temp");var esc=function(event){event.keyCode===27&&topBoxApi&&topBoxApi.data.esc&&topBoxApi.closeFn()};$(document).bind("keyup",esc);if(!("ontouchend"in document)){var delayed,docH=$.doc(),winResize=function(){delayed&&clearTimeout(delayed);var o=docH;docH=$.doc();if($.isIE&&(Math.abs(o.height-docH.height)>0||Math.abs(o.width-docH.width)===17))return clearTimeout(delayed);delayed=setTimeout(function(){$.each(dialogList,function(name,val){val.data.follow?val.follow(val.data.follow):(typeof val.data.left==="string"||typeof val.data.top==="string")&&val.position(val.data.left,val.data.top)});clearTimeout(delayed)},150)};$(window).bind("resize",winResize)}!$("#surveypaperselectchangetable")&&$.dialog.loadSkin($.dialog.defaults.skin,$.dialog.defaults.loadBg);if(loadList!=null)if(loadList.length>0){$.each(loadList,function(i,name){$.dialog(name)});loadList=null}};$(allReady);$.fn.dialog.inner=function(win,fn){try{win.document}catch(_){return}if(win.document.getElementsByTagName("frameset").length!==0)return win.parent.document.getElementsByTagName("frameset").length===0?$.fn.dialog.inner(win.parent,fn):false;$(function(){if(win==window)return;if(win.art)fn&&fn();else{win.artDialogDefaults=$.fn.dialog.defaults;win.artDialogDefaults.loadBg=false;var url=$.getArgs===""?$.getUrl:$.getUrl+"?"+$.getArgs;$.getScript(url,fn,win.document)}})};$.dialog.inner(window.parent);$.fn.dialog.dialogList=dialogList})(art);(function($,jq){var _alert=window.alert,_name="artPlus",_html=jq?function(elem,content){jq(elem).html(content)}:function(elem,content){elem.innerHTML=content},_load=jq?function(url,fn,cache){jq.ajax({url:url,dataType:"html",success:function(data){fn&&fn(data)},cache:cache})}:function(url,fn,cache){var ajax=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");ajax.onreadystatechange=function(){if(ajax.readyState===4&&ajax.status===200)fn&&fn(ajax.responseText);ajax.onreadystatechange=null};ajax.open("GET",url,1);!cache&&ajax.setRequestHeader("If-Modified-Since","0");ajax.send(null)};$.fn.dialog.alert=function(content){return typeof content!=="string"?_alert(content):$.dialog({id:_name+"Alert",icon:"alert",lock:true,window:"top",content:content,yesFn:true})};$.fn.dialog.confirm=function(content,yes,no){return $.dialog({id:_name+"Confirm",icon:"confirm",fixed:true,window:"top",lock:true,content:content,yesFn:function(here){return yes.call(this,here)},noFn:function(here){return no&&no.call(this,here)}})};$.fn.dialog.prompt=function(content,yes,value){value=value||"";var input=_name+"promptInput";return $.dialog({id:_name+"Prompt",icon:"prompt",fixed:true,window:"top",content:"\t\t\t<div>"+content+'</div>\t\t\t<div>\t\t\t  <input id="'+input+'" value="'+value+'" type="txt" style="width:20em;padding:3px" />\t\t\t</div>\t\t',focus:input,yesFn:function(here){return yes&&yes.call(this,here.art("#"+input)[0].value,here)},noFn:true})};$.fn.dialog.tips=function(content,time,follow){return $.dialog({id:_name+"tips",icon:"tips",skin:"dgbluelight",fixed:true,window:"top",title:false,content:content,follow:follow||null,FPosition:{FAlign:"right",FVAlign:"clienttop"},time:time||2})};$.fn.dialog.open=function(url,options){var loadings=false,load,$iframe,iwin,opt=options,id=_name+"Open",data={window:"top",content:{url:url},tmpl:'<iframe class="'+id+'" src="<%=url%>" frameborder="0" allowtransparency="true"></iframe>',initFn:function(here){var api=this;$iframe=$("iframe",api.ui.content[0]);iwin=$iframe[0].contentWindow;if(loadings==false){api.loading.on();$iframe.css("display","none")}load=function(){$.dialog.inner(iwin,function(){iwin.art.fn.dialog.close=function(){api.close()};iwin.art.fn.dialog.parent=window});api.data.effect=false;if(api.data.width==="auto"&&api.data.height==="auto")try{var doc=$.doc(iwin);api.size(doc.width,doc.height)}catch(_){}api.ui.content.addClass("art_full");$iframe.css({width:"100%",height:"100%"});api.data.left==="center"&&api.data.top==="center"&&api.position("center","center");api.loading.off();if(api.loading.off()){loadings=true;loadings==true&&$iframe.css("display","block")}opt.initFn&&opt.initFn.call(api,here)};$iframe.bind("load",load)},closeFn:function(here){$iframe.unbind("load",load);$iframe[0].src="about:blank";opt.closeFn&&opt.closeFn.call(this,here)}};if(opt.yesFn)data.yesFn=function(here){return opt.yesFn.call(this,iwin,here)};if(opt.noFn)data.noFn=function(here){return opt.noFn.call(this,iwin,here)};for(var i in opt)if(data[i]===undefined)data[i]=opt[i];else if(opt[i]=="self")data[i]=opt[i];$.dialog(data);return iwin};$.fn.dialog.close=function(){};$.fn.dialog.parent=window;$.fn.dialog.load=function(url,options,cache){cache=cache||false;var opt=options||{},tmpl=typeof opt==="string"?opt:null,ajaxLoad,data={window:"top",content:"loading..",initFn:function(here){var api=this;api.loading.on();_load(url,function(content){api.data.effect=false;if(tmpl)content=$.tmpl(tmpl,window.JSON&&JSON.parse?JSON.parse(content):eval("("+content+")"));_html(api.ui.content[0],content);api.data.left==="center"&&api.data.top==="center"&&api.position("center","center");api.loading.off();opt.initFn&&opt.initFn.call(api,here)},cache)},closeFn:function(here){opt.closeFn&&opt.closeFn.call(this,here)}};if(opt.tmpl){tmpl=opt.tmpl;opt.tmpl=null}for(var i in opt)if(data[i]===undefined)data[i]=opt[i];var dig=$.dialog(data)};$.fn.dialog.get=function(id,win){win=win||window;return win.art.dialog.dialogList[id]};if($.getArgs==="plus")window.alert=$.fn.dialog.alert;if(jq&&!jq.dialog&&!jq.fn.dialog){jq.extend({dialog:art.dialog});jq.fn.dialog=function(options,yesFn,noFn){return art(this[0]).dialog(options,yesFn,noFn)}}})(art,window.jQuery)
