"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[767],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),l=a.n(r),i=a(1597),s=a(3383),o=a(2618),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,s=l.baseUrl,o=l.subDirectory,c=s+"/edit/"+l.branch+o+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===s,c=new RegExp(s+"/?(#.*)?$"),u=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=o,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component),f=h,b=a(7296),v=a(5387),E=a(3732),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,g=void 0===m?{}:m,h=t.relativePagePath,E=t.titleType,y=g.tabs,N=g.title,P=g.theme,w=g.description,x=g.keywords,T=g.date,C=(0,v.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,Z=D?r.pathname.replace(D,""):r.pathname,A=y?Z.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",B=P||C;return n.createElement(o.Z,{tabs:y,homepage:!1,theme:B,pageTitle:N,pageDescription:w,pageKeywords:x,titleType:E},n.createElement(u,{title:c?n.createElement(c,null):N,label:"label",tabs:y,theme:B}),y&&n.createElement(f,{title:N,slug:Z,tabs:y,currentTab:A}),n.createElement(b.Z,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(k,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:Z,tabs:y,currentTab:A}),n.createElement(s.Z,null))}},290:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),l=a(3624),i=["components"],s={},o={_frontmatter:s},c=l.Z;function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Security of data"),(0,r.kt)("p",null,"It is the responsibility of the user to ensure that the proper security measures are established when using the ACD service."),(0,r.kt)("h3",null,"Data in motion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All transports used to interact with the ACD service must be encrypted. TLS 1.2 is recommended."),(0,r.kt)("li",{parentName:"ul"},"All transport within the ACD service itself are encrypted using FIPS compliant protocols.")),(0,r.kt)("h3",null,"Data at rest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ACD service is a stateless offering in that it doesn’t store any data sent to it for analyzing."),(0,r.kt)("li",{parentName:"ul"},"Configuration data is stored in the ",(0,r.kt)("a",{parentName:"li",href:"/acd-containers/planning/storage/"},"user-provided storage"),"."),(0,r.kt)("li",{parentName:"ul"},"The prerequisite storage used for ACD configuration must have data encryption enabled."),(0,r.kt)("li",{parentName:"ul"},"The user is responsible for ",(0,r.kt)("a",{parentName:"li",href:"/acd-containers/management/backup-and-recovery/"},"Backup and Recovery")," of the configuration storage and must back up solution specific configurations.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-security-data-security-md-010fbf57c039c8c76513.js.map