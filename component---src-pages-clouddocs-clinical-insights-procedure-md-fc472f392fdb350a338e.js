"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[7589],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(8650),i=a.n(r),o=a(1597),l=a(3383),c=a(2618),d=a(5900),s=a.n(d),p=function(e){var t,a=e.title,r=e.theme,i=e.tabs,o=void 0===i?[]:i;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,l=i.baseUrl,c=i.subDirectory,d=l+"/edit/"+i.branch+c+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),c=a===l,d=new RegExp(l+"/?(#.*)?$"),p=r.replace(d,a);return n.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(n.Component),h=f,b=a(7296),k=a(5387),N=a(3732),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,r=e.location,d=e.Title,s=t.frontmatter,g=void 0===s?{}:s,f=t.relativePagePath,N=t.titleType,w=g.tabs,v=g.title,S=g.theme,E=g.description,A=g.keywords,x=g.date,T=(0,k.Z)().interiorTheme,P=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=P?r.pathname.replace(P,""):r.pathname,Z=w?C.split("/").filter(Boolean).slice(-1)[0]||i()(w[0],{lower:!0}):"",B=S||T;return n.createElement(c.Z,{tabs:w,homepage:!1,theme:B,pageTitle:v,pageDescription:E,pageKeywords:A,titleType:N},n.createElement(p,{title:d?n.createElement(d,null):v,label:"label",tabs:w,theme:B}),w&&n.createElement(h,{title:v,slug:C,tabs:w,currentTab:Z}),n.createElement(b.Z,{padded:!0},a,n.createElement(m,{relativePagePath:f}),n.createElement(y,{date:x})),n.createElement(u.Z,{pageContext:t,location:r,slug:C,tabs:w,currentTab:Z}),n.createElement(l.Z,null))}},668:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(3366),r=(a(7294),a(4983)),i=a(3624),o=["components"],l={},c={_frontmatter:l},d=i.Z;function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(d,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The procedure model provides information about how the procedure applies to the the patient and other classification information about the procedure."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABnUlEQVQoz22S62rbQBBG/RyF+irb1V0rW7fVSopkO7bjW0zb0NJCHiBP0Ocpfc5Tdk0Cof0xzOwwnPk+ZntZllEUBbecm5znuemlaUocx4RhiGVZjMdjRqMRk8kEy5oyHX9ktHhicPpD//CbD+Uvep7v43o+dd1QlsoAFouFieVySZokBp4kCUopHg4H8/ZcD9v+hO0K5oHCETWy2dFL0oyq7Wiajko1N1CSICJBUZeUXU0YhIRhRFUVvLx8p6oVYZxg2zbWZMxk1Md1Zlwfz/SWRcnpdGaz2ZDnGZWSyCJnu71HSslgMDB2tU0d2rLv+9RNRZZmRoDjuggRc7lc6MVly8PhSNe1FFKxP31hvTvzeP3MarWi3+8zm82YTqdv4bouURQZsOd5RqmuDVDIhu1uTykLpLqj6vZkZcfXp2+07d0/QK3W8wPCSOB57pt6vcQAI9lwPJ3Z3m9QdUu3u6K6Iz9+PrNadf8FOo6DEAtzwNe+EOIG9OOUqq7NF9E29FAQBKzXa/OFhsPhO7saqNXoI+n5+XxuFupaA/8CQkoCWY3eRjMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/0eda2/procedure.webp 288w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/460e2/procedure.webp 576w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/e0ca3/procedure.webp 1152w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/d02be/procedure.webp 1728w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/c1f4c/procedure.webp 2304w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/cdfd3/procedure.webp 2796w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/7fc1e/procedure.png 288w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/a5df1/procedure.png 576w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/3cbba/procedure.png 1152w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/0b124/procedure.png 1728w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/4ea69/procedure.png 2304w","/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/4ea3c/procedure.png 2796w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acd-containers/static/8eab3c571f30e5deff2769895ef5e0c4/3cbba/procedure.png",alt:"procedure",title:"procedure",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)("p",null,"The demo application above shows an example of how to use the scores from the procedure model to create attributes.  In this example, Chemotherapy has a high ",(0,r.kt)("em",{parentName:"p"},"discussed")," score and is not promoted to an attribute.  Radiotherapy does apply to the patient in this example and is promoted to an attribute."),(0,r.kt)("p",null,"The usage section of the JSON response indicates how a procedure applies to a patient."),(0,r.kt)("h2",null,"usage"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"explicitScore"),(0,r.kt)("td",{parentName:"tr",align:null},"The procedure has been done.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pendingScore"),(0,r.kt)("td",{parentName:"tr",align:null},"The procedure has been scheduled or is highly recommended by a physician.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"discussedScore"),(0,r.kt)("td",{parentName:"tr",align:null},"Other mentions of the procedure that do not directly apply to the patient.")))),(0,r.kt)("h2",null,"task"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"therapeuticScore"),(0,r.kt)("td",{parentName:"tr",align:null},"This procedure is meant to treat a condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"diagnosticScore"),(0,r.kt)("td",{parentName:"tr",align:null},"This procedure is meant to diagnose a condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"surgicalTaskScore"),(0,r.kt)("td",{parentName:"tr",align:null},"This procedure is a subtask of a larger surgical process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clinicalAssessmentScore"),(0,r.kt)("td",{parentName:"tr",align:null},"This procedure is a physician’s evaluation of a patient.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"labTestScore"),(0,r.kt)("td",{parentName:"tr",align:null},"This procedure is a lab test.")))),(0,r.kt)("h2",null,"type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deviceScore"),(0,r.kt)("td",{parentName:"tr",align:null},"The procedure involves an implanted device.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"materialScore"),(0,r.kt)("td",{parentName:"tr",align:null},"The procedure involves grafts or other material implants.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"medicationScore"),(0,r.kt)("td",{parentName:"tr",align:null},"The procedure involves the administration of a medication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"conditionManagementScore"),(0,r.kt)("td",{parentName:"tr",align:null},"An ongoing procedure to manage a long term condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"procedureScore"),(0,r.kt)("td",{parentName:"tr",align:null},"Any other type of procedure.")))),(0,r.kt)("h2",null,"Sample Response"),(0,r.kt)("p",null,"Consider the following sample text."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Chemotherapy with Cisplatin was not an option for his type of cancer.")),(0,r.kt)("p",null,"The clinical insight features for Chemotherapy might look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"insightModelData": {\n    "procedure": {\n        "usage": {\n            "explicitScore": 0.035,\n            "pendingScore": 0.002,\n            "discussedScore": 0.963\n        },\n        "task": {\n            "therapeuticScore": 0.999,\n            "diagnosticScore": 0,\n            "surgicalTaskScore": 0.001,\n            "clinicalAssessmentScore": 0\n        },\n        "type": {\n            "deviceScore": 0,\n            "materialScore": 0,\n            "medicationScore": 0.994,\n            "procedureScore": 0.005,\n            "conditionManagementScore": 0\n        }\n    }\n}\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-clinical-insights-procedure-md-fc472f392fdb350a338e.js.map