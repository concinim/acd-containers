(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),j=a("dI71"),O=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===o,l=new RegExp(o+"/?(#.*)?$"),s=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(c.Link,{className:O.link,to:""+s},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},r))))))},t}(o.a.Component),v=a("MjG9"),w=a("CzIb"),y=a("Asxa"),k=a("OIbQ"),N=a.n(k),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:N.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=b.tabs,x=b.title,j=b.theme,O=b.description,y=b.keywords,k=b.date,N=Object(w.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,D=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",A=j||N;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:A,pageTitle:x,pageDescription:O,pageKeywords:y,titleType:u},Object(p.b)(h,{title:o?Object(p.b)(o,null):x,label:"label",tabs:m,theme:A}),m&&Object(p.b)(T,{title:x,slug:I,tabs:m,currentTab:D}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(P,{date:k})),Object(p.b)(g.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:D}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},vb6P:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),l={_frontmatter:c},s=i.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The replica count in the ACD deployment determines the number of replicas for each of the ACD deployments, which determines the peak concurrent capacity of the ACD deployment.  If the capacity is exceeded, the system will start to queue up requests to protect the container processes from overload.  If the queues fill up, the system will return errors to the caller indicating the system is not available.  To adjust the workload capacity, ACD deployment instances can be horizontally scaled by adjusting the replica count in the custom resource definition of the instance.\nIn the namespace of the ACD instance under Installed Operators in the console find the ACD operator.  In the ACD operator details, select the Annotator for Clinical Data tab to show the ACD instance and click the name of the ",Object(r.b)("inlineCode",{parentName:"p"},"acd-instance")," to bring up the Details view of the ACD instance. On the Replicas field, adjust the number up or down as needed."),Object(r.b)("p",null,"Note: Ensure you have enough capacity on the worker nodes in the cluster to support the number of replicas chosen.  Each replica consumes approximately 64 GB of memory across all of the deployment pods and there needs to be room for non-disruptive rolling updates."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-management-scaling-md-3fceb0140fa98b267b37.js.map