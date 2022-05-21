/*! For license information please see blog-ded2f363deb425b73a50.js.LICENSE.txt */
(()=>{var t,i={349:function(t,i,e){var a,n,o;n=[e(193)],void 0===(o="function"==typeof(a=function(t){function i(i){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=t.extend({},this.constructor.defaults),this.option(i)}return i.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},i.prototype.option=function(i){t.extend(this.options,i)},i.prototype.imageCountLabel=function(t,i){return this.options.albumLabel.replace(/%1/g,t).replace(/%2/g,i)},i.prototype.init=function(){var i=this;t(document).ready((function(){i.enable(),i.build()}))},i.prototype.enable=function(){var i=this;t("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",(function(e){return i.start(t(e.currentTarget)),!1}))},i.prototype.build=function(){if(!(t("#lightbox").length>0)){var i=this;t('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(t("body")),this.$lightbox=t("#lightbox"),this.$overlay=t("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",(function(){return i.end(),!1})),this.$lightbox.hide().on("click",(function(e){"lightbox"===t(e.target).attr("id")&&i.end()})),this.$outerContainer.on("click",(function(e){return"lightbox"===t(e.target).attr("id")&&i.end(),!1})),this.$lightbox.find(".lb-prev").on("click",(function(){return 0===i.currentImageIndex?i.changeImage(i.album.length-1):i.changeImage(i.currentImageIndex-1),!1})),this.$lightbox.find(".lb-next").on("click",(function(){return i.currentImageIndex===i.album.length-1?i.changeImage(0):i.changeImage(i.currentImageIndex+1),!1})),this.$nav.on("mousedown",(function(t){3===t.which&&(i.$nav.css("pointer-events","none"),i.$lightbox.one("contextmenu",(function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(i),0)})))})),this.$lightbox.find(".lb-loader, .lb-close").on("click",(function(){return i.end(),!1}))}},i.prototype.start=function(i){var e=this,a=t(window);a.on("resize",t.proxy(this.sizeOverlay,this)),this.sizeOverlay(),this.album=[];var n=0;function o(t){e.album.push({alt:t.attr("data-alt"),link:t.attr("href"),title:t.attr("data-title")||t.attr("title")})}var r,s=i.attr("data-lightbox");if(s){r=t(i.prop("tagName")+'[data-lightbox="'+s+'"]');for(var h=0;h<r.length;h=++h)o(t(r[h])),r[h]===i[0]&&(n=h)}else if("lightbox"===i.attr("rel"))o(i);else{r=t(i.prop("tagName")+'[rel="'+i.attr("rel")+'"]');for(var l=0;l<r.length;l=++l)o(t(r[l])),r[l]===i[0]&&(n=l)}var d=a.scrollTop()+this.options.positionFromTop,c=a.scrollLeft();this.$lightbox.css({top:d+"px",left:c+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&t("body").addClass("lb-disable-scrolling"),this.changeImage(n)},i.prototype.changeImage=function(i){var e=this,a=this.album[i].link,n=a.split(".").slice(-1)[0],o=this.$lightbox.find(".lb-image");this.disableKeyboardNav(),this.$overlay.fadeIn(this.options.fadeDuration),t(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var r=new Image;r.onload=function(){var s,h,l,d,c,g;o.attr({alt:e.album[i].alt,src:a}),t(r),o.width(r.width),o.height(r.height),g=t(window).width(),c=t(window).height(),d=g-e.containerPadding.left-e.containerPadding.right-e.imageBorderWidth.left-e.imageBorderWidth.right-20,l=c-e.containerPadding.top-e.containerPadding.bottom-e.imageBorderWidth.top-e.imageBorderWidth.bottom-e.options.positionFromTop-70,"svg"===n&&(o.width(d),o.height(l)),e.options.fitImagesInViewport?(e.options.maxWidth&&e.options.maxWidth<d&&(d=e.options.maxWidth),e.options.maxHeight&&e.options.maxHeight<l&&(l=e.options.maxHeight)):(d=e.options.maxWidth||r.width||d,l=e.options.maxHeight||r.height||l),(r.width>d||r.height>l)&&(r.width/d>r.height/l?(h=d,s=parseInt(r.height/(r.width/h),10),o.width(h),o.height(s)):(s=l,h=parseInt(r.width/(r.height/s),10),o.width(h),o.height(s))),e.sizeContainer(o.width(),o.height())},r.src=this.album[i].link,this.currentImageIndex=i},i.prototype.sizeOverlay=function(){var i=this;setTimeout((function(){i.$overlay.width(t(document).width()).height(t(document).height())}),0)},i.prototype.sizeContainer=function(t,i){var e=this,a=this.$outerContainer.outerWidth(),n=this.$outerContainer.outerHeight(),o=t+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,r=i+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;function s(){e.$lightbox.find(".lb-dataContainer").width(o),e.$lightbox.find(".lb-prevLink").height(r),e.$lightbox.find(".lb-nextLink").height(r),e.$overlay.focus(),e.showImage()}a!==o||n!==r?this.$outerContainer.animate({width:o,height:r},this.options.resizeDuration,"swing",(function(){s()})):s()},i.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},i.prototype.updateNav=function(){var t=!1;try{document.createEvent("TouchEvent"),t=!!this.options.alwaysShowNavOnTouchDevices}catch(t){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(t&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),t&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),t&&this.$lightbox.find(".lb-next").css("opacity","1"))))},i.prototype.updateDetails=function(){var t=this;if(void 0!==this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var i=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?i.text(this.album[this.currentImageIndex].title):i.html(this.album[this.currentImageIndex].title),i.fadeIn("fast")}if(this.album.length>1&&this.options.showImageNumberLabel){var e=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(e).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,(function(){return t.sizeOverlay()}))},i.prototype.preloadNeighboringImages=function(){this.album.length>this.currentImageIndex+1&&((new Image).src=this.album[this.currentImageIndex+1].link),this.currentImageIndex>0&&((new Image).src=this.album[this.currentImageIndex-1].link)},i.prototype.enableKeyboardNav=function(){this.$lightbox.on("keyup.keyboard",t.proxy(this.keyboardAction,this)),this.$overlay.on("keyup.keyboard",t.proxy(this.keyboardAction,this))},i.prototype.disableKeyboardNav=function(){this.$lightbox.off(".keyboard"),this.$overlay.off(".keyboard")},i.prototype.keyboardAction=function(t){var i=t.keyCode;27===i?(t.stopPropagation(),this.end()):37===i?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):39===i&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},i.prototype.end=function(){this.disableKeyboardNav(),t(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),this.options.disableScrolling&&t("body").removeClass("lb-disable-scrolling")},new i})?a.apply(i,n):a)||(t.exports=o)},792:(t,i,e)=>{"use strict";e(349);var a=e(193),n=e.n(a);(function(){const t=n()(document.body);t.on("click",(function(){n()(".article-share-box.on").removeClass("on")})).on("click",".article-share-link",(function(i){i.stopPropagation();const e=n()(i.currentTarget),a=`article-share-box-${e.attr("data-id")}`;let o=n()(`#${a}`);if(o.hasClass("on"))return void o.removeClass("on");o.length||(o=function(i,e){const a=encodeURIComponent(e),o=`\n    <div id="${i}" class="article-share-box">\n      <input class="article-share-box-input" value="${e}">\n      <div class="article-share-links">\n        <a href="https://twitter.com/intent/tweet?url=${a}" class="article-share-twitter" target="_blank" title="Twitter"></a>\n        <a href="https://www.facebook.com/sharer.php?u=${a}" class="article-share-facebook" target="_blank" title="Facebook"></a>\n        <a href="http://pinterest.com/pin/create/button/?url=${a}" class="article-share-pinterest" target="_blank" title="Pinterest"></a>\n        <a href="https://plus.google.com/share?url=${a}" class="article-share-google" target="_blank" title="Google+"></a>\n      </div>\n    </div>\n    `,r=n()(o);return t.append(r),r}(a,e.attr("data-url"))),n()(".article-share-box.on").hide();const r=e.offset();o.css({top:r.top+25,left:r.left}).addClass("on")})).on("click",".article-share-box",(function(t){t.stopPropagation()})).on("click",".article-share-box-input",(function(t){n()(t.currentTarget).trigger("select")})).on("click",".article-share-box-link",(function(t){t.preventDefault(),t.stopPropagation();const i=t.currentTarget;window.open(i.href,`article-share-box-window-${Date.now()}`,"width=500,height=450")}))})(),n()(".article-entry").each(((t,i)=>{n()("img",i).each((function(i,e){const a=n()(e);if(a.parent().hasClass("fancybox"))return;const{src:o="",alt:r=""}=e;a.wrap(`<a href="${o}" title="${r}" data-lightbox="image-${t}-${i}" />`)})),n()("a[data-lightbox]",i).each((function(t,i){i.rel=`article${t}`}))}))}},e={};function a(t){var n=e[t];if(void 0!==n)return n.exports;var o=e[t]={exports:{}};return i[t].call(o.exports,o,o.exports,a),o.exports}a.m=i,t=[],a.O=(i,e,n,o)=>{if(!e){var r=1/0;for(d=0;d<t.length;d++){for(var[e,n,o]=t[d],s=!0,h=0;h<e.length;h++)(!1&o||r>=o)&&Object.keys(a.O).every((t=>a.O[t](e[h])))?e.splice(h--,1):(s=!1,o<r&&(r=o));if(s){t.splice(d--,1);var l=n();void 0!==l&&(i=l)}}return i}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[e,n,o]},a.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return a.d(i,{a:i}),i},a.d=(t,i)=>{for(var e in i)a.o(i,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:i[e]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{var t={239:0};a.O.j=i=>0===t[i];var i=(i,e)=>{var n,o,[r,s,h]=e,l=0;if(r.some((i=>0!==t[i]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(h)var d=h(a)}for(i&&i(e);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},e=self.webpackChunkhexo_theme_materialize=self.webpackChunkhexo_theme_materialize||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))})();var n=a.O(void 0,[193],(()=>a(792)));n=a.O(n)})();
//# sourceMappingURL=blog-ded2f363deb425b73a50.js.map