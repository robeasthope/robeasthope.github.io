/******/!function(e){function t(a){if(o[a])return o[a].exports;var i=o[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=o(1),l=a(i),n=o(2),r=a(n),s=o(3),f=a(s),c=o(4),d=a(c),h=o(5),u=a(h);angular.module("lazarus",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"]).config(l["default"]).config(r["default"]).service("PortfolioIndex",u["default"]).run(f["default"]).controller("HomeController",d["default"])},function(e,t){"use strict";function o(e){"ngInject";e.debugEnabled(!0)}Object.defineProperty(t,"__esModule",{value:!0}),o.$inject=["$logProvider"],t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function o(e,t){"ngInject";e.state("holding-page",{url:"/",views:{content:{templateUrl:"app/holding-page/holding-page.html"}}}).state("home",{url:"/home",views:{content:{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}}}).state("ambr",{url:"/ambr",views:{content:{templateUrl:"app/projects/ambr/ambr.html"}}}),t.otherwise("/")}Object.defineProperty(t,"__esModule",{value:!0}),o.$inject=["$stateProvider","$urlRouterProvider"],t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function o(e){"ngInject";e.debug("runBlock end")}Object.defineProperty(t,"__esModule",{value:!0}),o.$inject=["$log"],t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),i=function(){function e(t){"ngInject";o(this,e),this.indexContents=[],this.activate(t)}return e.$inject=["PortfolioIndex"],a(e,[{key:"activate",value:function(e){this.getPortfolioIndex(e)}},{key:"getPortfolioIndex",value:function(e){this.indexContents=e.getPortfolioIndexContent()}}]),e}();t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),i=function(){function e(){"ngInject";o(this,e),this.data=[{title:"Sony Wheel",image:"http://placehold.it/400x400/39CCCC/ffffff/39CCCC/ffffff",state:"sony-wheel"},{title:"Digital Room",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"haygarth-digital-room"},{title:"Think Differently",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"think-differently"},{title:"YSL Rock Chick",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"ysl-rock-chick"},{title:"Gulp emails",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"gulp-emails"},{title:"Haygarth",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"haygarth"},{title:"Sony Demo Bay",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"sony-demo-bay"},{title:"Giles Deacon",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"giles-deacon"},{title:"Toni & Guy",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"toni-and-guy"},{title:"Louise & Daniel",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"louise-and-daniel"},{title:"Dumfries House",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"dumfries-house"},{title:"Lambeth Advice Network",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"lambeth-advice-centre"},{title:"AMBR Media",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"ambr"},{title:"Layla Moran",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"layla-moran"},{title:"Lancastrians",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"lancastrians"},{title:"EUFN",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"eufn"},{title:"Waterleaf",image:"http://placehold.it/400x400/39CCCC/ffffff",state:"waterleaf"}]}return a(e,[{key:"getPortfolioIndexContent",value:function(){return this.data}}]),e}();t["default"]=i,e.exports=t["default"]}]),angular.module("lazarus").run(["$templateCache",function(e){e.put("app/holding-page/holding-page.html",'<section class="opener"><div class="opener-content"><img class="saladin-logo" ng-src="assets/images/saladin-logo-dark-with-diamond.svg" alt="Portfolio logo"><h1 class="name">Rob Easthope</h1><h3 class="title">Front end developer</h3><div class="contact-details"><a class="email" href="mailto:hello@robeasthope.com">hello@robeasthope.com</a><br><a class="twitter" href="http://twitter.com/robeasthope.com">@robeasthope</a></div></div></section>'),e.put("app/home/home.html",'<section class="opener"><div class="opener-content"><img class="saladin-logo" ng-src="assets/images/saladin-logo-dark-with-diamond.svg" alt="Portfolio logo"><h1 class="name">Rob Easthope</h1><h3 class="title">Front end developer</h3></div></section><section class="portfolio"><h2 class="section-title">Portfolio</h2><ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4"><li class="project-card" ng-repeat="portfolioContent in home.indexContents"><a ui-sref="{{ portfolioContent.state }}"><img class="portfolio-thumbnail" ng-src="{{ portfolioContent.image }}" alt=""><h3 class="project-title">{{ portfolioContent.title }}</h3></a></li></ul></section><section class="contact"><h2 class="section-title">Say hello</h2><div class="contact-details"><a class="email" href="mailto:hello@robeasthope.com">hello@robeasthope.com</a><br><a class="twitter" href="http://twitter.com/robeasthope.com">@robeasthope</a></div></section>'),e.put("app/projects/ambr/ambr.html",'<header class=""><h1>Ambr</h1><span>Ambr Media</span><div><a href="">Link to website</a></div></header><section><p>Ambr media was a short lived media company specialising in websites, PR and graphic design. Ambr was seeded with money from The Prince\'s Trust and clients included charities and finance companies.</p></section><section><h2>Project details</h2><p>Logo mock ups exploring different options</p></section>')}]);