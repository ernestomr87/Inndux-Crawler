var Crawler = require("crawler");
const htmlToText = require('html-to-text');
var parse = require('url-parse')
var map = require('async/map');
var sites = require("./sites");


class ArticlesClass {
    constructor(json) {
        this.json = json;
        this.articles = [];
    }

    // Método
    webScrapingFirstLvl(cb) {
        const _this = this;
        const c = new Crawler({
            maxConnections: 10,
            // This will be called for each crawled page
            callback: (error, res, done) => {
                if (error) {
                    cb(error, null);
                } else {
                    var $ = res.$;

                    const articles = [];
                    if (res.options.article.root) {
                        let rootSelector = res.options.article.root.number ?
                            $(`${res.options.article.root.base}`).eq(res.options.article.root.number) :
                            $(`${res.options.article.root.base}`);


                        rootSelector.each(function (i, elem) {
                            let url = res.options.article.url.number ?
                                $(this).find(`${res.options.article.url.base}`).eq(res.options.article.url.number).attr('href') :
                                $(this).find(`${res.options.article.url.base}`).attr('href');

                            let image = res.options.article.image.number ?
                                $(this).find(`${res.options.article.image.base}`).eq(res.options.article.image.number).attr('src') :
                                $(this).find(`${res.options.article.image.base}`).attr('src');
                            if (!image) {
                                image = res.options.article.image.number ?
                                    $(this).find(`${res.options.article.image.base}`).eq(res.options.article.image.number).attr('data-src') :
                                    $(this).find(`${res.options.article.image.base}`).attr('data-src');
                            }



                            let title = res.options.article.title.number ?
                                $(this).find(`${res.options.article.title.base}`).eq(res.options.article.title.number).text() :
                                $(this).find(`${res.options.article.title.base}`).text();
                            title = htmlToText.fromString(title);

                            let summary = res.options.article.summary.number ?
                                $(this).find(`${res.options.article.summary.base}`).eq(res.options.article.summary.number).text() :
                                $(this).find(`${res.options.article.summary.base}`).text();
                            summary = htmlToText.fromString(summary);


                            let aux = {
                                title,
                                url: parse(res.options.base && !url.includes("http") ? res.options.base + "" + url : url).href,
                                image: parse(image && res.options.base && !image.includes("http") ? res.options.base + "" + image : image).href,
                                summary,
                            }
                            if (aux.title && aux.url) {
                                articles.push(aux);
                            }
                        });
                    }
                    _this.articles = articles;

                    cb(null, true);
                }
                done();
            }
        });
        c.queue({
            uri: this.json.url,
            article: this.json.article,
            base: this.json.base || null,
        })

    }

    webScrapingSecondLvl(url, selector, cb) {
        const c = new Crawler({
            maxConnections: 10,
            callback: (error, res, done) => {
                if (error) {
                    cb(error, null)
                } else {
                    var $ = res.$;
                    let html = res.options.number ?
                        $(`${res.options.base}`).eq(res.options.number).html() :
                        $(`${res.options.base}`).html();
                    let text = res.options.number ?
                        $(`${res.options.base}`).eq(res.options.number).text() :
                        $(`${res.options.base}`).text();
                    text = htmlToText.fromString(text);

                    cb(null, { html, text });
                }
                done();
            }
        });
        c.queue({
            uri: url,
            base: selector.base,
            number: selector.number,
        })
    }

    exec(cb) {
        this.webScrapingFirstLvl((err, result) => {
            if (err && result) {
                cb(err, null);
            } else {
                map(this.articles, (article, cbm) => {
                    this.webScrapingSecondLvl(encodeURI(article.url), this.json.article.body, (err, result) => {
                        if (err) {
                            cbm(err, null);
                        } else {
                            if (result.html) {
                                article = Object.assign(article, result);
                            }
                            cbm(null, article);
                        }
                    });
                }, (err, result) => {
                    if (err) {
                        cb(err, null);
                    }
                    else {
                        const array = result.filter((item) => {
                            return item.html;
                        })
                        cb(err, array);
                    }

                })
            }
        })
    }

}


let ko = 0;

map(sites, (site, cbm) => {
    const articles = new ArticlesClass(site);
    articles.exec((err, result) => {
        if (err) {
            ko++;
            cbm(null, site);
        } else {
            site.data = result;
            cbm(null, site);
        }
    });
}, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        result.map((source) => {
            console.log("*******************************************");
            console.log("*******************************************");

            source.data.map((article) => {
                console.log("-------- Title --------");
                console.log(article.title);
                console.log("-------- URL --------");
                console.log(article.url);
                console.log("-------- TEXT --------");
                console.log(article.text);
            })
            console.log("*******************************************");
            console.log("*******************************************");
        })

        console.log(result.length);
    }
});

