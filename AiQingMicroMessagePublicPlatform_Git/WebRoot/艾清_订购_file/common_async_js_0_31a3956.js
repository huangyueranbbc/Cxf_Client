define("common:widget/new_header/bar/dropdown.js",function(n,o,t){function i(n){this.options=$.extend({},r,n),this.init()}var r={container:"#header-bar",containerClass:"j-bar-dropdown"};i.prototype={constructor:i,init:function(){this.container=$(this.options.container),this.dropdownContainer=this.container.find("."+this.options.containerClass),this.bindEvent()},bindEvent:function(){this.dropdownContainer.on("mouseenter",$.proxy(this.onShowDropdown,this)),this.dropdownContainer.on("mouseleave",$.proxy(this.onHideDropdown,this))},onShowDropdown:function(n){$(n.currentTarget).addClass("hover")},onHideDropdown:function(n){$(n.currentTarget).removeClass("hover")}},t.exports=i});
;define("common:widget/new_header/nav/nav.js",function(t,n,i){function e(t){this.options=$.extend({},o,t),this.init()}var s=t("common:widget/new_header/nav/triangle.js"),o={triggerType:"mousemove",triggerDelay:300,navContainerClass:"j-catg",navClass:"j-catg-row",currentNav:-1,panelClass:"second-level",triangleContainer:"#j-catg-list",forceSelect:!1};e.prototype={constructor:e,init:function(){this.container=$(this.options.container),this.navContainer=this.container.find("."+this.options.navContainerClass),this.navs=this.navContainer.find("."+this.options.navClass),this.forceSelect=this.options.forceSelect,this.minNavIdx=this.options.forceSelect?0:-1,this.currentNav=this.options.currentNav>=this.minNavIdx&&this.options.currentNav<this.navs.length?this.options.currentNav:this.minNavIdx,this.triangleContainer=$(this.options.triangleContainer),this._initStatus(),this._bindEvent()},_initStatus:function(){this.navs.removeClass(this.options.selectedClass),s.init(this.triangleContainer,this.navs)},_bindEvent:function(){var t=this;this._bindShowHide(),this.navs.on("mousemove",function(n){var i=$(this).data("index");"mousemove"===n.type?-1!==t.currentNav&&s.isInTriangle(n)||(console.info("switchTo"),t.switchTo(i)):("click"===n.type||"tap"===n.type)&&t.switchTo(i)}),~t.options.triggerType.indexOf("mousemove")&&(this.navs.on("mouseenter",function(){var n=$(this).data("index"),i=setTimeout(function(){t.switchTo(n)},t.options.triggerDelay);t.navs.data("delayTimer",i)}),this.navs.on("mouseleave",function(){var n=t.navs.data("delayTimer");n&&clearTimeout(n)})),this.forceSelect||t.container.on("mouseleave",function(){t.switchTo(-1)})},_bindShowHide:function(){F.context("isIndex")||(this.navContainer.on("mouseenter",$.proxy(this.onShowNav,this)),this.navContainer.on("mouseleave",$.proxy(this.onHideNav,this)))},onShowNav:function(){this.navContainer.addClass("active")},onHideNav:function(){this.navContainer.removeClass("active")},switchTo:function(t){var n=this;t<n.minNavIdx&&t>=n.navs.length||t===n.currentNav||n._switchTo(t)},_switchTo:function(t){var n=this;n.navs.eq(n.currentNav).parent().removeClass(n.options.selectedClass),t>=0&&n.navs.eq(t).parent().addClass(n.options.selectedClass),n.currentNav=t}},i.exports=e});
;define("common:widget/ui/items_post/items_post.js",function(t,n,e){function o(t,n){for(var e=t.attr("href"),o="_blank"==t.attr("target"),i=o?'target="_blank"':"",a=$('<form action="'+e+'" method="post" '+i+"></form>"),r=[],u={},f='<input type="hidden" name="{name}" value="{value}" />',s=0,c=n.length;c>s;s++)u={name:n[s].split("=")[0],value:n[s].split("=")[1]||""},r.push(f.replace(/\{(\w+)\}/g,function(t,n){return n in u?u[n]:t}));a.html(r.join("")).appendTo(document.body).submit().remove()}function i(t,n){var e="_blank"==t.attr("target"),o=t.attr("href");o+=o.indexOf("?")<0?"?":"&",o+=n.join("&"),e?window.open(o):window.location=o}function a(){r()}function r(){$(document.body).on("click","a[data-item-st]",function(t){var n=$(this),e=u(n);e&&e.length>0&&(t.preventDefault(),f?o(n,e):i(n,e))})}function u(t){var n=t.data("item-st"),e=[];if(n)if("string"==typeof n)e.push("s="+(f?n:encodeURIComponent(n)));else if($.isPlainObject(n))for(var o in n)""!=n[o]&&e.push([o,f?n[o]:encodeURIComponent(n[o])].join("="));return e}var f=!1;e.exports={init:a}});
;define("common:widget/ui/lazyload/lazyload.js",function(i,t,n){var a={container:window,lazy:$("img"),direction:"vertical",delay:100,expect:0,placeholder:"http://newpc1.nuomi.bdimg.com/static/common/img/lazy-loading_2689268.png",effect:"fadeIn",effectTime:400,original:"data-original",callback:function(){}},e=function(){this.initialize.apply(this,arguments)};$.extend(e.prototype,{initialize:function(i){if($.extend(this,a,i),this.lazy&&!(this.lazy.size()<=0)){var t=this;this.$container=$(void 0===this.container||this.container===window?window:this.container),this.lazy.each(function(){var i=this,n=$(this);(void 0===n.attr("src")||n.attr("src")===!1||""==n.attr("src"))&&n.is("img")&&n.attr("src",t.placeholder),n.one("appear",function(){this.loaded||$("<img />").bind("load",function(){var a=n.attr(t.original);if(a){n.hide(),n.is("img")?n.attr("src",a):n.css("background-image","url('"+a+"')"),n[t.effect](t.effectTime),i.loaded=!0;var e=$.grep(t.lazy,function(i){return!i.loaded});t.lazy=$(e)}}).attr("src",n.attr(t.original))})}),this.callback.call(this),this.bindEvent()}},run:function(){var i=this;setTimeout(function(){}),i.lazy.each(function(){i[i.direction](this)&&$(this).trigger("appear")})},vertical:function(i){return $(i).offset().top<$(document).scrollTop()+this.$container.height()+this.expect},horizontal:function(){},bindEvent:function(){var i=this;$(document).ready(function(){i.run()}),$(window).bind("resize",function(){i.run()}),this.$container.bind("scroll",function(){return i.run()})}}),n.exports=e});
;define("common:widget/ui/sidlog/pclog.js",function(i,n,t){"use strict";var e=i("common:widget/ui/sidlog/log.js"),c={init:function(){e.init({$:$}),e.set({client:"pc",action_type:"click"})},sendPv:function(i){e.send(i,{action_type:"pv"})},sendClick:function(i){e.send(i)},getUUID:function(){return e.getLastUUID()}};c.init(),t.exports=c});
;define("common:widget/ui/usertrack/usertrack.js",function(e,t,n){function o(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+="&"+n+"="+e[n]);return 0==t.indexOf("&")&&(t=t.slice(1)),t}function r(e){var t=$(e.target),n=[],o="";do{var r=t.attr("mon");r&&n.push(r),t.is("a")&&(n.push("href="+encodeURIComponent(t.attr("href"))),o="undefined"!=typeof t.attr("redirect-url")?t.attr("redirect-url"):""),t=t.parent()}while(!t.is("html"));n=n.join("&").split("&");for(var a={},c=0,l=n.length;l>c;c++){var d=n[c].split("=");a[d[0]]=d[1]}var p=a.page;if(""!=o){var u=o.split("activity/common/short_url/");u.length>1&&(p="topic_"+u[1].split(/[?|&|#]/)[0])}var m="",f=F.context("label_sort_js");"1"==f?m="FL1":"2"==f&&(m="FL2"),a.da_src=encodeURIComponent($.stringify({page:p,area:a.area,element:a.element,position:a.position,exp_id:m})),i.sendClick({page:p,area:a.area,element:a.element}),delete a.page,delete a.area,delete a.element,delete a.position,delete a.redirect_url,s(a)}var a=e("common:widget/ui/cookie/cookie.js"),i=e("common:widget/ui/sidlog/pclog.js"),c={channel:"",channel_content:""},l=F.context("nuomi_base")+"/s.gif",s=function(e){var t=$.param(c,!0);e&&(t+="&"+o(e)),(new Image).src=l+"?"+t+"&_uuid="+i.getUUID()+"&_="+(new Date).valueOf()},d=function(e){$("body").on("mousedown",e,r)},p=a.get("SID"),u=F.context("sample_hit");p&&u&&(p+="|"+u);var m=function(){$.extend(c,{channel:a.get("channel"),channel_content:a.get("channel_content"),target_city:a.get("areaCode"),client_type:"PC_WEB",real_refer:document.referrer,xll:F.context("xll"),sid:p})},f=function(){m(),d("a[mon], input[mon], span[mon]")};n.exports={init:f,send:s}});