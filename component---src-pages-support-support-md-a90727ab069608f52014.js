"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[9986],{3624:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(8650),l=a.n(r),i=a(1597),o=a(3383),s=a(2618),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,c=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),h=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),u=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=b,f=a(7296),v=a(5387),k=a(3732),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,h=void 0===m?{}:m,b=t.relativePagePath,k=t.titleType,N=h.tabs,w=h.title,P=h.theme,y=h.description,x=h.keywords,T=h.date,S=(0,v.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,H=C?r.pathname.replace(C,""):r.pathname,Z=N?H.split("/").filter(Boolean).slice(-1)[0]||l()(N[0],{lower:!0}):"",D=P||S;return n.createElement(s.Z,{tabs:N,homepage:!1,theme:D,pageTitle:w,pageDescription:y,pageKeywords:x,titleType:k},n.createElement(u,{title:c?n.createElement(c,null):w,label:"label",tabs:N,theme:D}),N&&n.createElement(g,{title:w,slug:H,tabs:N,currentTab:Z}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:b}),n.createElement(E,{date:T})),n.createElement(p.Z,{pageContext:t,location:r,slug:H,tabs:N,currentTab:Z}),n.createElement(o.Z,null))}},3051:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),l=a(3624),i=["components"],o={},s={_frontmatter:o},c=l.Z;function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Documentation Support"),(0,r.kt)("p",null,"To submit feedback or to report an issue with the documentation, open a GitHub issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/merative/acd-containers/issues"},"here"),".  Please provide a clear and concise description containing your feedback or the issue.  If applicable, include screenshots to provide additional context."),(0,r.kt)("h2",null,"Merative Support Team"),(0,r.kt)("p",null,"To contact the  Merative Support team, open a case using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/pages/node/6210395"},"Merative Support portal"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Only ",(0,r.kt)("strong",{parentName:"p"},"Authorized Users")," may submit issues."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All client support issues will be documented within a support case."),(0,r.kt)("li",{parentName:"ul"},"Each case will be assigned a unique number for reference and a severity level that is based on the details within the case description."),(0,r.kt)("li",{parentName:"ul"},"Updates and client responses will be sent by e-mail and recorded in the case comments."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"No Personal Information (PI) including Protected Health Information (PHI) and sensitive personal information (SPI) should be included in any documentation or information when reporting an incident.")))),(0,r.kt)("h2",null,"General Support"),(0,r.kt)("p",null,"For other questions or support, you are welcome to ",(0,r.kt)("a",{parentName:"p",href:"https://www.merative.com/contact"},"Contact Merative"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-support-support-md-a90727ab069608f52014.js.map