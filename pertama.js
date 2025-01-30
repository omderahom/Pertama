<!-- No berapa Start LazyLoad YouTube modiv -->
<script>
//<![CDATA[
/*! lazyload-youtube.js */
!function(){"use strict";for(var t=document.querySelectorAll(".youtube-lazyload"),e=0;e<t.length;e++){var i=document.createElement("div");i.className="play-button",t[e].appendChild(i);var l=document.createElement("img");l.src="https://img.youtube.com/vi/"+t[e].dataset.id+"/hqdefault.jpg",t[e].appendChild(l),t[e].addEventListener("click",function(){var t=document.createElement("iframe");for(t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.id+"?rel=0&showinfo=0&autoplay=1"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)})}}();
//]]>
</script>
<!-- No berapa End LazyLoad YouTube modiv -->
<!-- No berapa Start  Script Auto Lazyload Gambar -->
<b:if cond='data:view.isPost'>
<script>//<![CDATA[
var psBody = document.querySelector('.postBody');
var lzImgT = psBody.getElementsByTagName('img');
var imgBs = 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
for(var i = 0; i < lzImgT.length; i++) {
	var currentSrc = lzImgT[i].getAttribute('src');
	if(currentSrc != imgBs){
		lzImgT[i].setAttribute('src',imgBs);
		lzImgT[i].setAttribute('data-src',currentSrc);
        lzImgT[i].className += ' lazy';}}
//]]>
</script>
</b:if>
<!-- No berapa End  Script Auto Lazyload Gambar -->      
<!-- No. berapa Start SEO Smart Link -->
<script type='text/javascript'>
function smartLink(){
    this.keywdHref = new Object();
    this.add = function(keyword, href){
        if(keyword.substr(0,1) != &quot; &quot;){keyword = &quot; &quot; + keyword;}
        this.keywdHref[keyword] =  href;
    }
    this.createAnchor = function(){
        var objs = document.getElementsByTagName(&quot;div&quot;);
        for(var i=0; i&lt;objs.length; i++){
            var obj = objs[i];
            if(obj.className.indexOf(&quot;post-body&quot;)&gt;-1){
                var content = obj.innerHTML;
                for(var keyword in this.keywdHref){
                    var href = this.keywdHref[keyword];
                    var newstr = content.replace(keyword, &quot;&lt;a href=&#39;&quot;+href+&quot;&#39;&gt;&quot;+keyword+&quot;&lt;/a&gt;&quot;, &quot;gi&quot;);
                    obj.innerHTML = newstr;
                    content = newstr;
                }
            }
        }
    }
    this.startScript = function(){
        var onLoad = window.onload;
        window.onload = function(){
            if(onLoad){onLoad();}
            setTimeout(&quot;f.createAnchor()&quot;, 100);
        }
    }
}
</script>
<script type='text/javascript'>
var f = new smartLink();
f.add(quot;Tutorialquot;, quot;https://www.videopulse.my.id/quot;);
f.add(quot;AIquot;, quot;https://www.videopulse.my.id/quot;);
f.add(quot;Wordpressquot;, quot;https://www.videopulse.my.id/quot;);
f.startScript();
</script>
<!-- No. berapa End  SEO Smart Link  -->    
<!-- No. berapa Start Seo Image Otomatis   -->
<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
  $('img').each(function(){
        var $img = $(this);
        var filename = $img.attr('src')
        $img.attr('alt', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
  });
});
//]]>
</script>

<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
  $('img').each(function(){
        var $img = $(this);
        var filename = $img.attr('src')
        $img.attr('title', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
  });
});
//]]>
</script>
<script>
document.querySelectorAll(&#39;img[data-src]&#39;).forEach(img =&gt; {
    img.setAttribute(&#39;src&#39;, img.getAttribute(&#39;data-src&#39;));
});
</script>
<script type='text/javascript'>
//<![CDATA[
$(window).load(function(){
document.getElementById('imageDiv')
.innerHTML = '<img alt='ALT IMAGE' height='TINGGI IMAGE' src='URL IMAGE' title='TITLE IMAGE' width='LEBAR IMAGE'/>';
});//]]>
  </script>
<!-- No. berapa End  Seo Image Otomatis  -->    
<!-- Ping Google -->
<!-- No. berapa Start  Kode Ping Google  -->    
<img src='http://www.google.com/webmasters/tools/ping?sitemap=https://collectuber.blogspot.com/sitemap.xml' style='display:none;'/>
<!-- No. berapa End   Kode Ping Google  --> 