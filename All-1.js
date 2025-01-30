<!-- No. 5 Start  Script NoFollow -->
<script type='text/javascript'>
<![CDATA[
jQuery('a').each(function(){var a=jQuery(this).attr('href');if(typeof a!='undefined'&&a!=""&&(a.indexOf('http://')!=-1||a.indexOf('https://')!=-1)&&a.indexOf(window.location.hostname)==-1){jQuery(this).attr("rel","nofollow")}});
]]>
</script>
<!-- No. 5 End  Script NoFollow -->
<!-- No. 6 Start  ALT Tag Otomatis -->
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
<!-- No. 6 End  ALT Tag Otomatis -->
<!-- No. 7 Start  Speed Up Loading Blog -->

<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js' type='text/javascript'/>
<script src='https://script-lazyload.googlecode.com/svn/trunk/lazyload.js' type='text/javascript'/>
<script type='text/javascript'>
 $(function() {
    $(&#39;img&#39;).lazyload({
      placeholder : &quot;http://2.bp.blogspot.com/-sJ-tZahntLI/T9coeqmdqMI/AAAAAAAADUQ/ztxIT1Fht4g/s1600/grey.png&quot;,
        effect      : &quot;fadeIn&quot;,
        threshold   : 100
     });
 });
</script>

<!-- No. 7 End  Speed Up Loading Blog -->
<!-- No. 8 Open New Tab Otomatis -->

<script type='text/javascript'>

//<![CDATA[

    jQuery('a').each(function(){var href=jQuery(this).attr('href');if (typeof href !='undefined' && href !="" && (href.indexOf('http://') !=-1 || href.indexOf('https://') !=-1) && href.indexOf(window.location.hostname)==-1){jQuery(this).attr("target", "_blank");}});//]]>
</script>

<!-- No. 8 End  Open New Tab Otomatis -->
<!-- No. 9 Start  Alexa Rank -->

<script type='text/javascript'><br/>
var blog = document.location.hostname;<br/>
var slug = document.location.pathname;<br/>
var ctld = blog.substr(blog.lastIndexOf(&quot;.&quot;));<br/>
if (ctld != &quot;.com&quot;) {<br/>
var ncr = &quot;http://&quot; + blog.substr(0, blog.indexOf(&quot;.&quot;));<br/>
ncr += &quot;.blogspot.com/ncr&quot; + slug;<br/>
window.location.replace(ncr);<br/>
}<br/>
</script>

<!-- No. 9 End  Alexa Rank -->
   
<!-- No. 10 Start  JsonLD isPartOf WebPage  -->
<b:if cond='data:view.isMultipleItems'>
<script type='application/ld+json'>
{&quot;@context&quot;:&quot;https://schema.org&quot;,
&quot;@graph&quot;:[
{&quot;@type&quot;:&quot;Organization&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;address&quot;: {&quot;@type&quot;: &quot;PostalAddress&quot;,
&quot;addressLocality&quot;: &quot;Yogyakarta,D.I.Yogyakarta, Indonesia&quot;,
&quot;streetAddress&quot;: &quot;Jalan Panembahan Mangkurat No. 121b, RT 45 RW 12 Panembahan, Kraton KRATON, KOTA YOGYAKARTA, DI YOGYAKARTA, ID, 55131&quot; },
&quot;email&quot;: &quot;kratonrahman2@gmail.com&quot;,
&quot;telephone&quot;: &quot;+628998188966&quot;,
&quot;sameAs&quot;:[&quot;https://www.facebook.com/username&quot;,
&quot;https://www.instagram.com/username&quot;,
&quot;https://www.youtube.com/username&quot;,
&quot;https://pinterest.com/username&quot;,
&quot;https://twitter.com/username&quot;],
&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#logo&quot;,
&quot;url&quot;:&quot;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDzK32Ov4jAL13DvHv2r0gg0AkLkPuwW3omxzbubh69FB8QzYBr5vIdzPn6RvRraQ71TP6QzEIfdbB3DxEmHRA4J0j7BQO_8bB6hCLJA5lRfsON0UuFRMb-6XIWC-gwYG84wncBsonWBVU595T8Ky0dnMQO_iDGdzoPI_TxGvpOUB0pvnBsovkmuVPww/s320/1.png&quot;,
&quot;width&quot;:512,
&quot;height&quot;:512,
&quot;caption&quot;:&quot;<data:blog.title/>&quot;},
&quot;image&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#logo&quot;}},
{&quot;@type&quot;:&quot;WebSite&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#website&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;description&quot;:&quot;<data:blog.metaDescription.escaped/>&quot;,
&quot;publisher&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;},
&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,
&quot;target&quot;:&quot;<data:blog.canonicalHomepageUrl/>search?q={search_term_string}&quot;,
&quot;query-input&quot;:&quot;required name=search_term_string&quot;}},
{&quot;@type&quot;:&quot;WebPage&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#webpage&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;inLanguage&quot;:&quot;id-ID&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;isPartOf&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#website&quot;},
&quot;about&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;},
&quot;description&quot;:&quot;<data:blog.metaDescription.escaped/>&quot;}]}
</script>
</b:if>
<!-- No. 10 End  JsonLD isPartOf WebPage  -->