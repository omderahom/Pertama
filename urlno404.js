<script>
//<![CDATA[
// BloggerJS - Modified to avoid 404 page without API v3
// Modified by Your Name

var urlTotal, nextPageToken, postsDatePrefix = false, accessOnly = false, postsOrPages = ["pages", "posts"], jsonIndex = 1, secondRequest = true, feedPriority = 0, amp = "&amp;"[0];

function urlVal() {
    var e = window.location.pathname, t = e.length;
    return ".html" === e.substring(t - 5) ? 0 : t > 1 ? 1 : 2;
}

function urlMod() {
    var e = window.location.pathname;
    if ("p" === e.substring(1, 2)) {
        e = e.substring(e.indexOf("/", 1) + 1);
        e = e.substr(0, e.indexOf(".html"));
        history.replaceState(null, null, "../" + e);
    } else {
        e = postsDatePrefix ? e.substring(1) : e.substring(e.indexOf("/", 7) + 1);
        e = e.substr(0, e.indexOf(".html"));
        history.replaceState(null, null, "../../" + e);
    }
}

function urlSearch(e, t) {
    var n = e + ".html";
    t.forEach(function (e) {
        if (-1 !== e.search(n)) {
            window.location.href = e; // Directly redirect to the correct URL
        }
    });
}

function urlManager() {
    var e = urlVal();
    if (0 === e) {
        if (!accessOnly) urlMod();
    } else if (1 === e) {
        getJSON(postsOrPages[feedPriority], 1);
    } else if (2 === e) {
        if (!accessOnly) history.replaceState(null, null, "/");
    }
}

function getJSON(e, t) {
    var n = document.createElement("script");
    var o = window.location.protocol + "//" + window.location.hostname + "/feeds/" + e + "/default?start-index=" + t + "&max-results=150&orderby=published&alt=json-in-script&callback=bloggerJSON";
    o = o.replace(/#/g, amp);
    n.type = "text/javascript";
    n.src = o;
    document.getElementsByTagName("head")[0].appendChild(n);
}

function bloggerJSON(e) {
    var t = [];
    if (void 0 === urlTotal) {
        urlTotal = parseInt(e.feed.openSearch$totalResults.$t);
    }
    try {
        e.feed.entry.forEach(function (n, o) {
            var r = e.feed.entry[o];
            r.link.forEach(function (e, n) {
                if ("alternate" === r.link[n].rel) t.push(r.link[n].href);
            });
        });
    } catch (e) {}
    urlSearch(window.location.pathname, t);
    if (urlTotal > 150) {
        jsonIndex += 150;
        urlTotal -= 150;
        getJSON(postsOrPages[feedPriority], jsonIndex);
    } else if (secondRequest) {
        secondRequest = false;
        if (0 === feedPriority) {
            feedPriority = 1;
            getJSON("posts", 1);
        } else if (1 === feedPriority) {
            feedPriority = 0;
            getJSON("pages", 1);
        }
    }
}

function bloggerJS(e) {
    if (e) feedPriority = e;
    urlManager();
}

bloggerJS();
//]]>
</script>