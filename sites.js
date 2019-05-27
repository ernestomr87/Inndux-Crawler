const sites = [
    {
        "url": "https://www.festo.com/group/es/cms/11757.htm",
        "base": "https://www.festo.com/group/es/cms",
        "article": {
            "root": {
                "base": "section.teaser",
                "number": 0
            },
            "title": {
                "base": "h2 a",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": "p",
                "number": 0
            },
            "body": {
                "base": "div.box",
                "number": 2
            },
        }
    },
    {
        "url": "http://blog.stratasys.com",
        "article": {
            "root": {
                "base": "article",
                "number": 0
            },
            "title": {
                "base": ".entry-title.h3",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": ".entry-contentp",
                "number": 0
            },
            "body": {
                "base": ".entry-content",
                "number": 0
            },
        }
    },
    {
        "url": "https://www.salesforce.com/company/news-press/press-releases",
        "article": {
            "root": {
                "base": "div.cardComponent",
                "number": 0
            },
            "title": {
                "base": "span.header-text",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": ".entry-contentp",
                "number": 0
            },
            "body": {
                "base": ".bodyCopyComponent",
                "number": 0
            }
        }
    },
    {
        "url": "https://www.genewsroom.com",
        "base": "https://www.genewsroom.com",
        "article": {
            "root": {
                "base": ".geui-card-inner",
                "number": 0
            },
            "title": {
                "base": "p",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": "a",
                "number": 0
            },
            "body": {
                "base": "div.content",
                "number": 0
            },
        }
    },
    {
        "url": "https://www.salesforce.com/blog",
        "base": "https://www.salesforce.com",
        "article": {
            "root": {
                "base": "article.article-listing",
                "number": 0
            },
            "title": {
                "base": "p",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": "p.article-listing_excerpt",
                "number": 0
            },
            "body": {
                "base": "div.padding-50-right-lg.line-height-17",
                "number": 0
            },
        }
    },
    {
        "url": "https://blogs.microsoft.com/",
        "base": "https://www.salesforce.com",
        "article": {
            "root": {
                "base": "section article",
                "number": 0
            },
            "title": {
                "base": "h3",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": null,
                "number": 0
            },
            "body": {
                "base": ".entry-content",
                "number": 0
            },
        }
    },
    {
        "url": "https://www.bosch-presse.de/pressportal/de/en/news",
        "article": {
            "root": {
                "base": "div.theme-wrapper",
                "number": 0
            },
            "title": {
                "base": "h3.theme-title",
                "number": 0
            },
            "url": {
                "base": "a.theme-container",
                "number": 0
            },
            "image": {
                "base": "img.theme-image",
                "number": 0
            },
            "summary": {
                "base": null,
                "number": 0
            },
            "body": {
                "base": "article.article-content",
                "number": 0
            },
        }
    },
    {
        "url": "https://www.festo.com/net/en_corp/SupportPortal/press.aspx?tab=10&s=t",
        "base": "https://www.festo.com",
        "article": {
            "root": {
                "base": "table.ResultTable tbody tr",
                "number": 0
            },
            "title": {
                "base": "span.headline",
                "number": 0
            },
            "url": {
                "base": "a.link",
                "number": 0
            },
            "image": {
                "base": "img.itemImage",
                "number": 0
            },
            "summary": {
                "base": "div.expander",
                "number": 0
            },
            "body": {
                "base": "#ctl00_a_cphMain_a_divDescription",
                "number": 0
            },
        }
    },
    {
        "url": "https://news.microsoft.com/",
        "article": {
            "root": {
                "base": "div.theme-dark",
                "number": 0
            },
            "title": {
                "base": "h2",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": null,
                "number": 0
            },
            "body": {
                "base": "section",
                "number": 0
            },
        }
    },
    {
        "url": "https://www.blog.kuka.com/?lang=en",
        "article": {
            "root": {
                "base": ".grid-sidebar .box",
                "number": 0
            },
            "title": {
                "base": "h3 a",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": "p",
                "number": 0
            },
            "body": {
                "base": ".post_content",
                "number": 0
            },
        }
    },
    {
        "url": "https://www.medtronic.com/us-en/about/news.html",
        "base": "https://www.medtronic.com",
        "article": {
            "root": {
                "base": ".textclearfloat",
                "number": 0
            },
            "title": {
                "base": "h3",
                "number": 0
            },
            "url": {
                "base": "a",
                "number": 0
            },
            "image": {
                "base": "img",
                "number": 0
            },
            "summary": {
                "base": "p",
                "number": 0
            },
            "body": {
                "base": "section",
                "number": 0
            },
        }
    },
]

module.exports = sites;

