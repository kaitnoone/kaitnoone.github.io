(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(21)},19:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),i=(t(19),t(2)),s=t(3),o=t(5),m=t(4),d=t(6),u=t(9),p=t(1),E=(t(20),t(8)),f=t(13),h=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).onClick=function(){t.props.onClick(t.props.label)},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.onClick,a=this.props,t=a.isOpen,n=a.label;return l.a.createElement("div",{class:"panel panel-default"},l.a.createElement("div",{onClick:e,style:{cursor:"pointer"}},l.a.createElement("div",{class:"panel-heading",role:"tab"},l.a.createElement("h4",{class:"panel-title"},l.a.createElement("a",{className:t?"":"collapsed","aria-expanded":t},n)))),t&&l.a.createElement("div",{class:"panel-collapse collapse in",role:"tabpanel"},l.a.createElement("div",{class:"panel-body"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6"},this.props.children)))))}}]),a}(l.a.Component),v=function(e){function a(e){var t;Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).onClick=function(e){var a=!!Object(E.a)(Object(E.a)(t)).state.openSections[e];t.setState({openSections:Object(f.a)({},e,!a)})};return t.state={openSections:{}},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.onClick,a=this.props.children,t=this.state.openSections;return a.length>1?l.a.createElement("div",{role:"tablist"},a.map(function(a){return l.a.createElement(h,{isOpen:!!t[a.props.label],label:a.props.label,onClick:e},a.props.children)})):l.a.createElement("div",{role:"tablist"},l.a.createElement(h,{isOpen:!!t[a.props.label],label:a.props.label,onClick:e},a.props.children))}}]),a}(l.a.Component),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={visible:!1},t.toggleMenu=t.toggleMenu.bind(Object(E.a)(Object(E.a)(t))),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"toggleMenu",value:function(){this.setState({visible:!this.state.visible}),document.body.classList.contains("offcanvas")?document.body.classList.remove("offcanvas"):document.body.classList.add("offcanvas")}},{key:"render",value:function(){return l.a.createElement("section",{className:"colorlib-education","data-section":"education"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"Education"),l.a.createElement("h2",{className:"colorlib-heading animate-box"},"Degree"))),l.a.createElement("div",{className:"animate-box animated fadeInRight"},l.a.createElement(v,null,l.a.createElement("div",{label:"Multimedia - B.S."},l.a.createElement("p",null,l.a.createElement("strong",null,"University of Nebraska at Kearney"),l.a.createElement("br",null),"2006 - 2009"),l.a.createElement("p",null,"Summa Cum Laude and Honors Program graduate. Multimedia course of study is a hybrid of journalism, graphic design and computer science. Minor in advertising."))))))}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"colorlib-work","data-section":"work"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInUp","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"My Work"),l.a.createElement("h2",{className:"colorlib-heading animate-box"},"Recent Work"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/work/kithcare2.png)"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://kithcare.app"},"Kith Care")),l.a.createElement("span",null,"Angular Application"),l.a.createElement("p",{className:"info"},"I joined Gitwit to help with the rewrite of kith.care, a two-sided app that allows parents to apply for DHS funding to pay their children's caretakers. I came in mid-project to create most of the front end components, including application forms and timesheet render code, and use and tweak the API my colleages were writing, to get the data into and out of the backend."))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInRight","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/work/tulsaremote.png)"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://apply.tulsaremote.com/applicant/application"},"Apply Tulsa Remote")),l.a.createElement("span",null,"Angular Application"),l.a.createElement("p",{className:"info"},"While at Gitwit, I've also enjoyed getting to work on various community initiatives, including rewriting the application for the Tulsa Remote program. My work on this project included revamping the front-end component styling and working on routing the app based on the applicant's answers."))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInLeft","data-animate-effect":"fadeInTop"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/work/cc.png)"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://coppercowcoffee.com/pages/quiz-flow"},"Copper Cow Coffee")),l.a.createElement("span",null,"Shopify site redesign, Vue app, middleware app"),l.a.createElement("p",{className:"info"},"While at The Taproom, I had the opportunity to work on a large-scale project for Copper Cow Coffee. We re-skinned their entire Shopify site, then created a custom Vue app for customers to build a coffee subscription box. I also created a middleware app in Express to push the results to third party services outside of Shopify, like Klaviyo."))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInRight","data-animate-effect":"fadeInBottom"},l.a.createElement("div",{className:"project",style:{backgroundImage:"url(images/work/msurcpd.png)"}},l.a.createElement("div",{className:"desc"},l.a.createElement("div",{className:"con"},l.a.createElement("h3",null,l.a.createElement("a",{href:"work.html"},"MSU Resource Center for Persons with Disabilities")),l.a.createElement("span",null,"Drupal"),l.a.createElement("p",{className:"info"},"While at Gravity Works, I worked on a redesign for Michigan State University's Resource Center for Persons with Disabilitites. I was able to work with a visually impaired user for testing usability, which helped build empathy, and learned a lot regarding the challenges that impaired users face on many sites. Of note on this project is the fully keyboard navigable megamenu with multiple levels."))))))))}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"colorlib-hero",className:"js-fullheight","data-section":"home"},l.a.createElement("div",{className:"hero"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight hero-text animated fadeInUp"},l.a.createElement("div",{className:"hero-text-inner js-fullheight"},l.a.createElement("div",{className:"desc"},l.a.createElement("h1",null,"Hi! ",l.a.createElement("br",null),"I'm Kaitlyn."),l.a.createElement("p",null,l.a.createElement("a",{className:"btn btn-primary btn-learn",target:"_blank",href:"documents/resume.pdf"},"Download Resume ",l.a.createElement("i",{className:"icon-download4"}))))))))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={visible:!1},t.toggleMenu=t.toggleMenu.bind(Object(E.a)(Object(E.a)(t))),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"toggleMenu",value:function(){this.setState({visible:!this.state.visible}),document.body.classList.contains("offcanvas")?document.body.classList.remove("offcanvas"):document.body.classList.add("offcanvas")}},{key:"closeMenu",value:function(){this.setState({visible:!1}),document.body.classList.remove("offcanvas")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"#",onClick:this.toggleMenu,className:"js-colorlib-nav-toggle colorlib-nav-toggle ".concat(this.state.visible?"active":""),"aria-expanded":this.state.visible,"aria-controls":"navbar"},l.a.createElement("i",null)),l.a.createElement("aside",{id:"colorlib-aside",role:"complementary",className:"border js-fullheight"},l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"author-img",style:{backgroundImage:"url(images/kaitlyn-avatar.png)"}}),l.a.createElement("h1",{id:"colorlib-logo"},l.a.createElement("a",{href:"index.html"},"Kaitlyn Noone")),l.a.createElement("span",{className:"position"},"Frontend Software Engineer")),l.a.createElement("nav",{id:"colorlib-main-menu",role:"navigation",className:"navbar"},l.a.createElement("div",{id:"navbar",className:"collapse"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{exact:!0,activeClassName:"active",onClick:this.closeMenu,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",onClick:this.closeMenu,to:"/about-me"},"About")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",onClick:this.closeMenu,to:"/specialties"},"Specialties")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",onClick:this.closeMenu,to:"/education"},"Education")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",onClick:this.closeMenu,to:"/experience"},"Experience")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",onClick:this.closeMenu,to:"/work"},"Work")),l.a.createElement("li",null,l.a.createElement(u.b,{activeClassName:"active",onClick:this.closeMenu,to:"/contact"},"Contact"))))),l.a.createElement("div",{className:"colorlib-footer"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/kaitnoone"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/kait_noone"},l.a.createElement("i",{className:"icon-twitter2"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/kaitlynnoone/"},l.a.createElement("i",{className:"icon-linkedin22"})))))))}}]),a}(n.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"colorlib-skills","data-section":"skills"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInUp","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"My Specialties"),l.a.createElement("h2",{className:"colorlib-heading animate-box"},"Skills"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"HTML5"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-1",role:"progressbar","aria-valuenow":100,"aria-valuemin":0,"aria-valuemax":100,style:{width:"100%"}},l.a.createElement("span",null,"100%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInRight","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"SCSS"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-2",role:"progressbar","aria-valuenow":100,"aria-valuemin":0,"aria-valuemax":100,style:{width:"100%"}},l.a.createElement("span",null,"100%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"JavaScript"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-3",role:"progressbar","aria-valuenow":90,"aria-valuemin":0,"aria-valuemax":100,style:{width:"90%"}},l.a.createElement("span",null,"90%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInRight","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"Angular"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-4",role:"progressbar","aria-valuenow":75,"aria-valuemin":0,"aria-valuemax":100,style:{width:"75%"}},l.a.createElement("span",null,"75%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"React"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-5",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:"60%"}},l.a.createElement("span",null,"60%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInRight","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"Vue"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-6",role:"progressbar","aria-valuenow":60,"aria-valuemin":0,"aria-valuemax":100,style:{width:"60%"}},l.a.createElement("span",null,"60%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInLeft","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"Shopify"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-2",role:"progressbar","aria-valuenow":85,"aria-valuemin":0,"aria-valuemax":100,style:{width:"85%"}},l.a.createElement("span",null,"85%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInRight","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"MongoDB / GraphQL"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-3",role:"progressbar","aria-valuenow":65,"aria-valuemin":0,"aria-valuemax":100,style:{width:"65%"}},l.a.createElement("span",null,"65%"))))),l.a.createElement("div",{className:"col-md-6 animate-box animated fadeInLeft","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"progress-wrap"},l.a.createElement("h3",null,"Node.js"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar color-4",role:"progressbar","aria-valuenow":30,"aria-valuemin":0,"aria-valuemax":100,style:{width:"30%"}},l.a.createElement("span",null,"30%"))))))))}}]),a}(n.Component),k=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"colorlib-about","data-section":"about"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row row-bottom-padded-sm animate-box animated fadeInUp","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"about-desc"},l.a.createElement("span",{className:"heading-meta"},"About Me"),l.a.createElement("h2",{className:"colorlib-heading"},"Who Am I?"),l.a.createElement("p",null,l.a.createElement("strong",null,"Hi, I'm Kaitlyn Noone!")," I'm a front-end web and software engineer."),l.a.createElement("p",null,"I'm currently located in Tulsa, OK and live with my two dogs and one cat. I run with a great group of young professionals brought to the city through the ",l.a.createElement("a",{href:"https://tulsaremote.com/"},"Tulsa Remote")," program. I'm passionate about remote work, health and wellness, and bringing gorgeous designs to life through accessible and clean code.")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 animate-box animated fadeInLeft","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"services color-2"},l.a.createElement("span",{className:"icon2"},l.a.createElement("i",{className:"icon-globe-outline"})),l.a.createElement("h3",null,"Web Development"))),l.a.createElement("div",{className:"col-md-3 animate-box animated fadeInRight","data-animate-effect":"fadeInTop"},l.a.createElement("div",{className:"services color-3"},l.a.createElement("span",{className:"icon2"},l.a.createElement("i",{className:"icon-data"})),l.a.createElement("h3",null,"App Development"))))))))}}]),a}(n.Component),I=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"colorlib-experience","data-section":"experience"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"Experience"),l.a.createElement("h2",{className:"colorlib-heading animate-box"},"Work Experience"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"timeline-centered"},l.a.createElement("article",{className:"timeline-entry animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-1"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label"},l.a.createElement("h2",null,l.a.createElement("a",{href:"http://gitwit.com"},"Software Engineer at Gitwit")," ",l.a.createElement("span",null,"2021 - Present")),l.a.createElement("ul",null,l.a.createElement("li",null,"Developing web apps in the MEAN stack"),l.a.createElement("li",null,"Suggesting changes to streamline the frontend development flow"),l.a.createElement("li",null,"Guiding full-stack engineers to be more aware of front-end principles"))))),l.a.createElement("article",{className:"timeline-entry animate-box animated fadeInRight","data-animate-effect":"fadeInRight"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-2"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label"},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://cadenzo.io"},"Front End Engineer at Cadenzo")," ",l.a.createElement("span",null,"2021 - Present")),l.a.createElement("ul",null,l.a.createElement("li",null,"Helping develop front-end features of React app"),l.a.createElement("li",null,"Acting as a sounding board for first-time founders"))))),l.a.createElement("article",{className:"timeline-entry animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-3"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label"},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://thetaproom.com"},"Front End Developer at The Taproom")," ",l.a.createElement("span",null,"2020 - 2021")),l.a.createElement("ul",null,l.a.createElement("li",null,"Created DTC ecommerce solutions for large brands such as Nestle, Copper Cow Coffee, and InsideTracker"),l.a.createElement("li",null,"Developed custom Vue solution to create subscription boxes for customers"),l.a.createElement("li",null,"Developed custom Shopify themes to match small businesses\u2019 branding"),l.a.createElement("li",null,"Helped write middleware apps to connect Shopify to other third party vendors"))))),l.a.createElement("article",{className:"timeline-entry animate-box animated fadeInTop","data-animate-effect":"fadeInTop"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-4"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label"},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://www.gravityworksdesign.com/"},"Front End Developer at Gravity Works")," ",l.a.createElement("span",null,"2016 - 2018")),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed web sites of all sizes in DNN and Drupal CMS"),l.a.createElement("li",null,"Focused on clean, semantic markup and accessibility meeting WCAG standards"),l.a.createElement("li",null,"Paired with both junior and more senior developers to teach and learn, respectively"),l.a.createElement("li",null,"Trained customers on how to manage their sites effectively"))))),l.a.createElement("article",{className:"timeline-entry animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-5"},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label"},l.a.createElement("h2",null,l.a.createElement("a",{href:"https://intellicominc.com/"},"Front End Developer at Intellicom, Inc")," ",l.a.createElement("span",null,"2016 - 2018")),l.a.createElement("ul",null,l.a.createElement("li",null,"Designed custom skins around client requirements"),l.a.createElement("li",null,"Developed sites in DNN content management system"),l.a.createElement("li",null,"Managed customer email hosting, web hosting, and DNS"))))),l.a.createElement("article",{className:"timeline-entry begin animate-box animated fadeInBottom","data-animate-effect":"fadeInBottom"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-none"})))),l.a.createElement("p",null,l.a.createElement("em",null,"More work history and references available upon request."))))))}}]),a}(n.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"colorlib-contact","data-section":"contact"},l.a.createElement("div",{className:"colorlib-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box animated fadeInLeft","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"Get in Touch"),l.a.createElement("h2",{className:"colorlib-heading"},"Contact"))),l.a.createElement("div",{className:"row animated fadeInRight"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"colorlib-feature colorlib-feature-sm animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"colorlib-icon"},l.a.createElement("i",{className:"icon-globe-outline"})),l.a.createElement("div",{className:"colorlib-text"},l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:kait.noone@gmail.com"},"kait.noone@gmail.com"))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"colorlib-feature colorlib-feature-sm animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"colorlib-icon"},l.a.createElement("i",{className:"icon-phone"})),l.a.createElement("div",{className:"colorlib-text"},l.a.createElement("p",null,l.a.createElement("a",{href:"tel://17855437484"},"785.543.7484"))))))))}}]),a}(n.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"colorlib-page"},l.a.createElement("div",{id:"container-wrap"},l.a.createElement(u.a,null,l.a.createElement(w,null),l.a.createElement("div",{id:"colorlib-main"},l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",element:l.a.createElement(N,null)}),l.a.createElement(p.a,{path:"/about-me",element:l.a.createElement(k,null)}),l.a.createElement(p.a,{path:"/specialties",element:l.a.createElement(y,null)}),l.a.createElement(p.a,{path:"/education",element:l.a.createElement(b,null)}),l.a.createElement(p.a,{path:"/experience",element:l.a.createElement(I,null)}),l.a.createElement(p.a,{path:"/work",element:l.a.createElement(g,null)}),l.a.createElement(p.a,{path:"/contact",element:l.a.createElement(j,null)}))))))}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.a15eb456.chunk.js.map