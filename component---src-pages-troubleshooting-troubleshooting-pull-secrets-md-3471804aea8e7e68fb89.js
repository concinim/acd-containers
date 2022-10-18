"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[1083],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),l=a(8650),r=a.n(l),i=a(1597),o=a(3383),s=a(2618),c=a(5900),d=a.n(c),u=function(e){var t,a=e.title,l=e.theme,r=e.tabs,i=void 0===r?[]:r;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,l=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||l,o=r.baseUrl,s=r.subDirectory,c=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,l=e.slug,o=l.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),u=l.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),f=h,b=a(7296),v=a(5387),E=a(3732),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,l=e.location,c=e.Title,d=t.frontmatter,g=void 0===d?{}:d,h=t.relativePagePath,E=t.titleType,y=g.tabs,N=g.title,w=g.theme,x=g.description,P=g.keywords,C=g.date,T=(0,v.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,B=D?l.pathname.replace(D,""):l.pathname,Z=y?B.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",L=w||T;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:L,pageTitle:N,pageDescription:x,pageKeywords:P,titleType:E},n.createElement(u,{title:c?n.createElement(c,null):N,label:"label",tabs:y,theme:L}),y&&n.createElement(f,{title:N,slug:B,tabs:y,currentTab:Z}),n.createElement(b.Z,{padded:!0},a,n.createElement(m,{relativePagePath:h}),n.createElement(k,{date:C})),n.createElement(p.Z,{pageContext:t,location:l,slug:B,tabs:y,currentTab:Z}),n.createElement(o.Z,null))}},6110:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return d}});var n=a(3366),l=(a(7294),a(4983)),r=a(3624),i=["components"],o={},s={_frontmatter:o},c=r.Z;function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Troubleshooting pull secrets"),(0,l.kt)("p",null,"If the ACD image registry pull secret is not configured correctly, ACD operand pods may enter a failed state with one of the following status: ImagePullBackOff, CrashLoopBackOff, ErrImagePull. These failed pods may also contain events with text like “401 Unauthorized”. These events can be viewed using the the following ",(0,l.kt)("inlineCode",{parentName:"p"},"oc")," CLI command:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"oc describe pod xxx")),(0,l.kt)("p",null,"or from the OpenShift web console, view the Pod details under Events."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/acd-containers/installing/installing/#verifying-acd-registry-access"},"Verify")," the pull secret can access and is authorized to the ACD image registry.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Reboot and/or replace the cluster’s nodes. Updating the global pull secret should reboot all the cluster’s nodes, however depending on cluster modifications this rebooting may not occur. Manually rebooting or even replacing nodes may be required to pick up the changes. Ensure the changes are rolled out to every node since other policies, such as a PodDisruptionBudget policy, may prevent a complete rollout and necessitate manual updates.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If attempting to use the global pull secret, ensure the distribution supports this. OpenShift extends the Kubernetes support to provide a global pull secret. ",(0,l.kt)("a",{parentName:"p",href:"/acd-containers/installing/installing/#acd-registry-pull-secret"},"Verify")," the global pull secret includes the ",(0,l.kt)("inlineCode",{parentName:"p"},"acdcontaineredition.azurecr.io")," authorization.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If pull secrets are being configured at the service account level, ensure the ACD operand service account “merative-acd-operand” is ",(0,l.kt)("a",{parentName:"p",href:"/acd-containers/installing/installing/#acd-registry-pull-secret"},"patched")," to contain the pull secret. This service account is created as part of each ACD instance and namespace scoped."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-troubleshooting-troubleshooting-pull-secrets-md-3471804aea8e7e68fb89.js.map