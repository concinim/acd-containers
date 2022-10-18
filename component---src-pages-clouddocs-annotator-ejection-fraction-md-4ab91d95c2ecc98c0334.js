"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[3793],{3624:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),r=a(8650),i=a.n(r),o=a(1597),l=a(3383),m=a(2618),d=a(5900),c=a.n(d),s=function(e){var t,a=e.title,r=e.theme,i=e.tabs,o=void 0===i?[]:i;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,l=i.baseUrl,m=i.subDirectory,d=l+"/edit/"+i.branch+m+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},f=a(4703),u=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],m=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),m=a===l,d=new RegExp(l+"/?(#.*)?$"),s=r.replace(d,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=m,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+s},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},m))))))},t}(n.Component),N=h,k=a(7296),g=a(5387),b=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,r=e.location,d=e.Title,c=t.frontmatter,u=void 0===c?{}:c,h=t.relativePagePath,b=t.titleType,E=u.tabs,y=u.title,x=u.theme,F=u.description,w=u.keywords,C=u.date,T=(0,g.Z)().interiorTheme,j=(0,o.useStaticQuery)("2456312558").site.pathPrefix,S=j?r.pathname.replace(j,""):r.pathname,P=E?S.split("/").filter(Boolean).slice(-1)[0]||i()(E[0],{lower:!0}):"",L=x||T;return n.createElement(m.Z,{tabs:E,homepage:!1,theme:L,pageTitle:y,pageDescription:F,pageKeywords:w,titleType:b},n.createElement(s,{title:d?n.createElement(d,null):y,label:"label",tabs:E,theme:L}),E&&n.createElement(N,{title:y,slug:S,tabs:E,currentTab:P}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(v,{date:C})),n.createElement(f.Z,{pageContext:t,location:r,slug:S,tabs:E,currentTab:P}),n.createElement(l.Z,null))}},3024:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return c}});var n=a(3366),r=(a(7294),a(4983)),i=a(3624),o=["components"],l={},m={_frontmatter:l},d=i.Z;function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of the Ejection Fraction annotator is to annotate ejection fraction test results. Ejection fraction is a measurement of the percentage of blood leaving your heart each time it contracts. The Ejection Fraction annotation is generally used as input into calculations or models in the cardiac domain."),(0,r.kt)("p",null,"The span of the EjectionFractionInd annotation includes all the associated terms, numeric percent value(s) and the token words between them."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"low EF."),(0,r.kt)("li",{parentName:"ul"},"20% EF."),(0,r.kt)("li",{parentName:"ul"},"EF is low."),(0,r.kt)("li",{parentName:"ul"},"EF is 20%."),(0,r.kt)("li",{parentName:"ul"},"EF is 20-35%."),(0,r.kt)("li",{parentName:"ul"},"LVEF was normal"),(0,r.kt)("li",{parentName:"ul"},"ejection fraction was normal."),(0,r.kt)("li",{parentName:"ul"},"ejection fraction of 20%-25%."),(0,r.kt)("li",{parentName:"ul"},"EF has to be measured at approximately 30%-50%."),(0,r.kt)("li",{parentName:"ul"},"47% EF recent report of echo."),(0,r.kt)("li",{parentName:"ul"},"ef of between 0 and 25% by echocardiogram."),(0,r.kt)("li",{parentName:"ul"},"ejection fraction of 10 - 25 percent by echocardiogram."),(0,r.kt)("li",{parentName:"ul"},"25 percent to 30 percent ejection fraction.")),(0,r.kt)("h2",null,"Configurations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Values"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"library"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"umls.latest"),(0,r.kt)("li",null,"umls.2021AA"),(0,r.kt)("li",null,"umls.2020AA"),(0,r.kt)("li",null,"umls.2019AA ",(0,r.kt)("i",null,"(deprecated - will be removed in 2022)")))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the version of the UMLS library that is used when analyzing unstructured data.")))),(0,r.kt)("p",null,"The value ",(0,r.kt)("inlineCode",{parentName:"p"},"umls.latest")," will reference the latest available version of UMLS within the service. As newer versions of UMLS are made available in the service, ",(0,r.kt)("inlineCode",{parentName:"p"},"umls.latest")," library configurations will automatically leverage the latest available version of UMLS in the service once available. Declaration of a specific version of UMLS is recommended to avoid undesirable changes in output as newer versions of UMLS are made available within the service. Through declaration of a specific version of UMLS, newer versions of UMLS may be evaluated prior to use in production."),(0,r.kt)("h3",null,"Annotation Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aci.EjectionFractionInd")),(0,r.kt)("h4",null,"aci.EjectionFractionInd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The text covered by an annotation as a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"aci.EjectionFractionInd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"firstValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The first value of percentage.  For example, in the text “echocardiogram demonstrated ejection fraction of 30 to 35%”, the firstValue is 30.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secondValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The second value of percentage.  For example, in the text “echocardiogram demonstrated ejection fraction of 30 to 35%”, the secondValue is 35.  If the value is not specified as a range then the value of this feature is not retuned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isRange"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines if the ejection fraction phrase contains a range of values.  For example, in the text “echocardiogram demonstrated ejection fraction of 30 to 35%”, the isRange is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"measurementMethod"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Method by which the Ejection/Fraction percentage or ratio is measured.  The measurementMethod will be ",(0,r.kt)("inlineCode",{parentName:"td"},"echo")," if the method by which the ejection fraction was take was an echocardiogram, otherwise, the measurementMethod  feature will not be present.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"efAlphabeticValueNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Normalized name for the appliied value that is word form.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"efAlphabeticValueSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Covered text that represents applied value in word form.   For example, in the text ",(0,r.kt)("inlineCode",{parentName:"td"},"EF was severely depressed at 28%"),", the efAlphabeticValueSurfaceForm is ",(0,r.kt)("inlineCode",{parentName:"td"},"severely depressed"),".  Examples include:   ",(0,r.kt)("inlineCode",{parentName:"td"},"low"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"normal"),",",(0,r.kt)("inlineCode",{parentName:"td"},"reduced"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"improvement"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"efTermNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Normalized name for ejection fraction.   For example, in the text ",(0,r.kt)("inlineCode",{parentName:"td"},"Echocardiogram at the outside hospital demonstrated EF of approximately 60%"),", the efTermNormalizedName is ",(0,r.kt)("inlineCode",{parentName:"td"},"ejection fraction"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"efTermSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Covered text that represents the ejection fraction.   For example, in the text ",(0,r.kt)("inlineCode",{parentName:"td"},"Echocardiogram at the outside hospital demonstrated EF of approximately 60%"),", the efTermSurfaceForm is ",(0,r.kt)("inlineCode",{parentName:"td"},"EF"),".  Examples include:  ",(0,r.kt)("inlineCode",{parentName:"td"},"EF"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LVEF"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"left ventricular ejection fraction"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"RVEF"),",  and ",(0,r.kt)("inlineCode",{parentName:"td"},"ejection fraction"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"efSuffixSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Covered text that represents the suffix to the measurement.  For example, in the text ",(0,r.kt)("inlineCode",{parentName:"td"},"Echocardiogram demonstrated EF of approximately 60%"),", the efSuffixSurfaceForm is ",(0,r.kt)("inlineCode",{parentName:"td"},"%"),".  Examples include: ",(0,r.kt)("inlineCode",{parentName:"td"},"%"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"percent"),",  and ",(0,r.kt)("inlineCode",{parentName:"td"},"percentile"),",")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"efSuffixNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Normalized name for suffix measurement fraction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"echocardiogramNormalizedName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The normalized name for the echocardiogram.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"echocardiogramSurfaceForm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Covered text that represents the echocardiogram.  Examples include:   ",(0,r.kt)("inlineCode",{parentName:"td"},"echo"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"echocardiogram"),", and  “echocardiographic”.")))),(0,r.kt)("h3",null,"Sample Response"),(0,r.kt)("p",null,"Sample response from the ejection fraction annotator for the text: ",(0,r.kt)("inlineCode",{parentName:"p"},"ejection fraction of 10 - 25 percent by echocardiogram")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"EjectionFractionInd": [\n          {\n            "type": "aci.EjectionFractionInd",\n            "begin": 0,\n            "end": 54,\n            "coveredText": "ejection fraction of 10 - 25 percent by echocardiogram",\n            "hypothetical": false,\n            "firstValue": "10",\n            "secondValue": "25",\n            "efTermSurfaceForm": "ejection fraction",\n            "efSuffixSurfaceForm": "percent",\n            "efSuffixNormalizedName": "percent",\n            "echocardiogramNormalizedName": "echocardiogram",\n            "efTermNormalizedName": "ejection fraction",\n            "echocardiogramSurfaceForm": "echocardiogram",\n            "measurementMethod": "echo",\n            "isRange": "true"\n          }\n        ]\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-annotator-ejection-fraction-md-4ab91d95c2ecc98c0334.js.map