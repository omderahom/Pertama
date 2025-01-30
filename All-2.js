<!-- No. 11 - 10 WebPage = 11 Star  Script JSON-LD isPartOf   -->
<b:if cond='data:view.isSingleItem'>
<script type='application/ld+json'>
{&quot;@context&quot;:&quot;https://schema.org&quot;,
&quot;@graph&quot;:[{&quot;@type&quot;:&quot;Organization&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;sameAs&quot;:[ &quot;https://www.facebook.com/username&quot;,
&quot;https://www.youtube.com/username&quot;,
&quot;https://twitter.com/username&quot;,
&quot;https://github.com/username&quot;,
&quot;https://pinterest.com/username/&quot;,
&quot;https://www.instagram.com/username&quot;], &quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#logo&quot;,
&quot;url&quot;:&quot;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDzK32Ov4jAL13DvHv2r0gg0AkLkPuwW3omxzbubh69FB8QzYBr5vIdzPn6RvRraQ71TP6QzEIfdbB3DxEmHRA4J0j7BQO_8bB6hCLJA5lRfsON0UuFRMb-6XIWC-gwYG84wncBsonWBVU595T8Ky0dnMQO_iDGdzoPI_TxGvpOUB0pvnBsovkmuVPww/s320/1.png&quot;,
&quot;width&quot;: 512, &quot;height&quot;: 512,
&quot;caption&quot;:&quot;<data:blog.title/>&quot;},&quot;image&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#logo&quot;},&quot;legalName&quot;:&quot;<data:blog.title/>&quot;},{&quot;@type&quot;:&quot;WebSite&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#website&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;inLanguage&quot;:&quot;id-ID&quot;,
&quot;description&quot;:&quot;<data:this.description/>&quot;,
&quot;publisher&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;},&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,
&quot;target&quot;:&quot;<data:blog.canonicalHomepageUrl/>search?q={search_term_string}&quot;,
&quot;query-input&quot;:&quot;required name=search_term_string&quot;}},{&quot;@type&quot;:&quot;ImageObject&quot;,
&quot;@id&quot;:&quot;<data:post.url.canonical/>#primaryimage&quot;,
&quot;url&quot;:&quot;<b:eval expr='(data:post.featuredImage ? resizeImage(data:post.featuredImage, 700, &quot;700:366&quot;) : &quot;https://lh3.googleusercontent.com/-VyIOQ7y3ra4/XndhmvMmy3I/AAAAAAAAAIs/PrHHjI6cRAYtkEEvCxeXLoLXHpB11GgzQCLcBGAsYHQ/s1600/detro-default-image.png&quot;).jsonEscaped'/>&quot;,
&quot;width&quot;: 700, &quot;height&quot;: 366, &quot;caption&quot;:&quot;<data:post.title/>&quot;},{&quot;@type&quot;:[&quot;WebPage&quot;], &quot;@id&quot;:&quot;<data:post.url.canonical/>#webpage&quot;,
&quot;url&quot;:&quot;<data:post.url.canonical/>&quot;,
&quot;name&quot;:&quot;<data:post.title/> - <data:blog.title/>&quot;,
&quot;isPartOf&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#website&quot;},&quot;inLanguage&quot;:&quot;id-ID&quot;,
&quot;primaryImageOfPage&quot;:{&quot;@id&quot;:&quot;<data:post.url.canonical/>#primaryimage&quot;},&quot;datePublished&quot;:&quot;<data:post.date.iso8601/>&quot;,
&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601/>&quot;,
&quot;description&quot;:&quot;<b:eval expr='data:blog.metaDescription.escaped ? data:blog.metaDescription.escaped : data:this.description'/>&quot;,
&quot;breadcrumb&quot;:{&quot;@id&quot;:&quot;<data:post.url.canonical/>#breadcrumb&quot;}},{&quot;@type&quot;:&quot;BreadcrumbList&quot;,
&quot;@id&quot;:&quot;<data:post.url.canonical/>#breadcrumb&quot;,
&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,
&quot;position&quot;: 1, &quot;item&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;name&quot;:&quot;Home&quot;}},{&quot;@type&quot;:&quot;ListItem&quot;,
&quot;position&quot;: 2, &quot;item&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,
&quot;@id&quot;:&quot;<b:if cond='data:post.labels'><b:loop index='num' values='data:post.labels' var='label'><b:if cond='data:num == (data:post.labels.size - 1)'><data:label.url.canonical/></b:if></b:loop></b:if>&quot;,
&quot;url&quot;:&quot;<b:if cond='data:post.labels'><b:loop index='num' values='data:post.labels' var='label'><b:if cond='data:num == (data:post.labels.size - 1)'><data:label.url.canonical/></b:if></b:loop></b:if>&quot;,
&quot;name&quot;:&quot;<b:if cond='data:post.labels'><b:loop index='num' values='data:post.labels' var='label'><b:if cond='data:num == (data:post.labels.size - 1)'><data:label.Tutorial/></b:if></b:loop></b:if>&quot;}},{&quot;@type&quot;:&quot;ListItem&quot;,
&quot;position&quot;: 3, &quot;item&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,
&quot;@id&quot;:&quot;<data:post.url.canonical/>&quot;,
&quot;url&quot;:&quot;<data:post.url.canonical/>&quot;,
&quot;name&quot;:&quot;<data:post.title/>&quot;}}]},{&quot;@type&quot;:&quot;Article&quot;,
&quot;@id&quot;:&quot;<data:post.url.canonical/>#article&quot;,
&quot;isPartOf&quot;:{&quot;@id&quot;:&quot;<data:post.url.canonical/>#webpage&quot;},&quot;author&quot;:{&quot;@id&quot;:&quot;<data:post.author.profileUrl/>&quot;},&quot;headline&quot;:&quot;<data:post.title/>&quot;,
&quot;datePublished&quot;:&quot;<data:post.date.iso8601/>&quot;,
&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601/>&quot;,
&quot;mainEntityOfPage&quot;:{&quot;@id&quot;:&quot;<data:post.url.canonical/>#webpage&quot;},&quot;publisher&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;},&quot;image&quot;:{&quot;@id&quot;:&quot;<data:post.url.canonical/>#primaryimage&quot;},&quot;keywords&quot;:&quot;<data:post.title/>&quot;,
&quot;articleSection&quot;:&quot;<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'><data:label.Tutorial/>, </b:loop></b:if>&quot;,
&quot;inLanguage&quot;:&quot;id-ID&quot;},{&quot;@type&quot;:[&quot;Person&quot;], &quot;@id&quot;:&quot;<data:post.author.profileUrl/>&quot;,
&quot;name&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;,
&quot;image&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#authorlogo&quot;,
&quot;url&quot;:&quot;<b:with value='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 50, &quot;1:1&quot;) : resizeImage(data:post.featuredImage, 50, &quot;1:1&quot;)' var='image'><data:image/></b:with>&quot;,
&quot;caption&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;},&quot;sameAs&quot;:[ &quot;https://www.facebook.com/username&quot;,
&quot;https://www.youtube.com/username&quot;,
&quot;https://twitter.com/username&quot;,
&quot;https://github.com/username&quot;,
&quot;https://pinterest.com/username/&quot;,
&quot;https://www.instagram.com/username&quot;]}]}</script>
</b:if>
<!-- No. 11 - 10 WebPage = 11 End  Script JSON-LD isPartOf   -->
<!-- No. 12 Start  Script JsonLD BlogPosting  -->
<script type='application/ld+json'>{
  &quot;@context&quot;: &quot;http://schema.org&quot;,
  &quot;@type&quot;: &quot;BlogPosting&quot;,
  &quot;mainEntityOfPage&quot;: {
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;@id&quot;: &quot;<data:post.url.canonical/>&quot;
  },
  &quot;headline&quot;: &quot;<data:post.title/>&quot;,
  &quot;description&quot;: &quot;<b:eval expr='data:blog.metaDescription.escaped ? data:blog.metaDescription.escaped : data:this.description'/>&quot;,
  &quot;datePublished&quot;: &quot;<data:post.date.iso8601/>&quot;,
  &quot;dateModified&quot;: &quot;<data:post.lastUpdated.iso8601/>&quot;,
  &quot;image&quot;: {
    &quot;@type&quot;: &quot;ImageObject&quot;,&quot;url&quot;: &quot;<b:eval expr='(data:post.featuredImage ? resizeImage(data:post.featuredImage, 700, &quot;700:366&quot;) : &quot;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkt3cHgGMcaT6cOjtyCZuixkFDVUIQpKjvkT2cabUDX6sFCkjW5lf-phSRR3iI2PnCtwDgD2Meh8Bf6eRoOs8jn0wsO4m5q9u1zzxikw4En7idiV5TR6FFhsVHyc1XaZKvXv5kNmmgrpXg/s1600/detro-default-image.png&quot;).jsonEscaped'/>&quot;,
    &quot;height&quot;: 366,
    &quot;width&quot;: 700},&quot;publisher&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;<data:blog.title/>&quot;,
    &quot;url&quot;: &quot;<data:blog.canonicalHomepageUrl/>&quot;,
    &quot;logo&quot;: {
      &quot;@type&quot;: &quot;ImageObject&quot;,
      &quot;url&quot;: &quot;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhysTkd_Fuv-cDYh65BazFbPvNi_eOZoxIP83ANVY_CamAHWIDMwRosArCzN0ErdAfBgjFNunAg8rp2aqM6M3rMJH7-d0btkGFJqBXYb_sC7dNRzrwi_eoC8fgsN1lvX8tehdP20p13ARajh30p-dx3S3I5inBS8XprjYhEHg__LqyOrpP6TXvu4DlzEw/s1600/1.png&quot;,
      &quot;width&quot;: 206,
      &quot;height&quot;: 60
    }
  },&quot;author&quot;: {
    &quot;@type&quot;: &quot;Person&quot;,
    &quot;name&quot;: &quot;<data:post.author.name.jsonEscaped/>&quot;,
    &quot;url&quot;: &quot;<data:post.author.authorPhoto.image.jsonEscaped/>&quot;
  }
}</script>
<!-- No. 12 End  Script JsonLD BlogPosting  -->
  <!-- No. 13 Start  Script JSON-LD NewsArticle Blogger  -->
<script type='application/ld+json'>
{&quot;@context&quot;:&quot;https://schema.org&quot;,
&quot;@type&quot;:&quot;NewsArticle&quot;,
&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalUrl/>&quot;},
&quot;headline&quot;:&quot;<data:post.title/>&quot;,
&quot;image&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,
&quot;url&quot;:&quot;<b:eval expr='(data:post.featuredImage ?: &quot;https://lh3.googleusercontent.com/-VyIOQ7y3ra4/XndhmvMmy3I/AAAAAAAAAIs/PrHHjI6cRAYtkEEvCxeXLoLXHpB11GgzQCLcBGAsYHQ/s1600/detro-default-image.png&quot;).jsonEscaped'/>&quot;,
&quot;height&quot;:366,
&quot;width&quot;:700},
&quot;datePublished&quot;:&quot;<data:post.date.iso8601/>&quot;,
&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601/>&quot;,
&quot;author&quot;:{&quot;@type&quot;:&quot;Person&quot;,
&quot;name&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;},
&quot;publisher&quot;:{&quot;@type&quot;:&quot;Organization&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,
&quot;url&quot;:&quot;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHLa7QfFA547H1Z-flt2r_k25CtaEiFbCBID3SPn4bvhQtxua9_qT3c_trokOa1SiBn9e7jEJ9DgFWTOIXEuQ-ijzbfUJWJ0gJE4tiX5vE5O9l1qCvkAbwHBLEAq_Rgd2HohGmBaKRQW3tXxeTFD_OknxuIMwFFl_aQuX3W9KfiscZl3CFB9EuOlu9JA/s1600/Untitled%20(297%20x%2045%20px)%20(512%20x%20512%20px)%20(160%20x%2050%20px)%20(160%20x%2050%20px).png&quot;,
&quot;width&quot;:160,
&quot;height&quot;:50}},
&quot;description&quot;:&quot;<b:eval expr='data:blog.metaDescription.escaped ? data:blog.metaDescription.escaped : data:this.description'/>&quot;}
</script>
<!-- No. 13 End  Script JSON-LD NewsArticle Blogger  --> 