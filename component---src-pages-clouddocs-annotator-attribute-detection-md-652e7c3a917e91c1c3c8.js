"use strict";(self.webpackChunkacd_containers=self.webpackChunkacd_containers||[]).push([[9087],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),i=a.n(r),l=a(1597),o=a(3383),s=a(2618),d=a(5900),c=a.n(d),u=function(e){var t,a=e.title,r=e.theme,i=e.tabs,l=void 0===i?[]:i;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,r=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,o=i.baseUrl,s=i.subDirectory,d=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=a(4703),h=a(1721),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===o,d=new RegExp(o+"/?(#.*)?$"),u=r.replace(d,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=f,g=a(7296),k=a(5387),N=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,d=e.Title,c=t.frontmatter,h=void 0===c?{}:c,f=t.relativePagePath,N=t.titleType,y=h.tabs,w=h.title,T=h.theme,E=h.description,x=h.keywords,C=h.date,_=(0,k.Z)().interiorTheme,q=(0,l.useStaticQuery)("2456312558").site.pathPrefix,P=q?r.pathname.replace(q,""):r.pathname,D=y?P.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",S=T||_;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:S,pageTitle:w,pageDescription:E,pageKeywords:x,titleType:N},n.createElement(u,{title:d?n.createElement(d,null):w,label:"label",tabs:y,theme:S}),y&&n.createElement(b,{title:w,slug:P,tabs:y,currentTab:D}),n.createElement(g.Z,{padded:!0},a,n.createElement(m,{relativePagePath:f}),n.createElement(v,{date:C})),n.createElement(p.Z,{pageContext:t,location:r,slug:P,tabs:y,currentTab:D}),n.createElement(o.Z,null))}},5938:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n=a(3366),r=(a(7294),a(4983)),i=a(3624),l=["components"],o={},s={_frontmatter:o},d=i.Z;function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The attribute detection annotator provides support for domain specific attributes and associated values to be discovered in unstructured clinical text. Attribute values are identified by promoting relevant concept, concept values, and clinical annotations (e.g. procedures) to generate a higher-level concept in which consumers can define the name, possible values, and value ranges to suit the needs of their solution."),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/clouddocs/annotator_concept_detection/"},"concept detection")," annotator, the attribute detection annotator may attach the medical codes for applicable concepts; e.g. NCI, ICD-9, ICD-10, LOINC, MeSH, RxNorm, SNOMED CT, and CPT codes. Attribute detection can also provide two additional medical codes (CCS code and HCC Code) made available by the ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/clouddocs/annotator_cancer/"},"cancer")," and ",(0,r.kt)("a",{parentName:"p",href:"/acd-containers/clouddocs/annotator_symptom_disease/"},"symptom disease")," annotators. The consumers can elect to have the set of medical codes associated with the attribute by specifying the optional configuration parameter to return the medical codes."),(0,r.kt)("p",null,"The attribute detection annotator also supports identification of qualifiers on the discovered attribute values. A qualifier is typically an adjective that describes the attribute. For example, an attribute that identifies a medical condition may have qualifiers related to whether the condition is active or whether it is part of the patient’s prior history."),(0,r.kt)("p",null,"Annotator for Clinical Data provides several predefined attribute sets that can be used to identify general medical related attributes."),(0,r.kt)("h2",null,"Predefined Attribute Sets"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute Set"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"general_medical_v1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Clinical attributes that represent the patient characteristics commonly used by physicians during a medical examination including demographics, symptoms, diseases, and procedures. Included in the general_medical_v1.0 and default_profile_v1.0 profiles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"general_labs_v1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Clinical attributes that represent the laboratory measurements commonly used by physicians. Included in the general_medical_v1.0 and default_profile_v1.0 profiles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"general_cancer_v1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Clinical Attributes that focus on cancer patient disease characteristics including the cancer type, disease progression, staging, tumor markers, and treatments. Included in the general_cancer_v1.0 profile.")))),(0,r.kt)("p",null,"Table 1. Attribute Sets"),(0,r.kt)("h2",null,"Configurations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"attribute_set"),(0,r.kt)("td",{parentName:"tr",align:"left"},"he name of the desired attribute set to leverage when running the attribute detection annotator. Multiple attribute sets can be designated for a given request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inference_rules"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of a derived attribute rule set that will be used for deriving additional attributes based on the attributes discovered by the ",(0,r.kt)("strong",{parentName:"td"},"attribute_set")," parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"qualifier_set"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the desired attribute qualifier set to leverage when running the attribute detection annotator. Multiple qualifier sets can be designated for a given request. The ",(0,r.kt)("strong",{parentName:"td"},"detect_qualifiers")," parameter must also be set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"detect_qualifiers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"When true, attribute annotations will include qualifiers as defined in the qualifier set identified on the ",(0,r.kt)("strong",{parentName:"td"},"qualifier_set")," parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"include_optional_fields"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify additional fields from the underlying concepts in the attribute values. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"medical_codes")," to return medical code fields in the attribute annotations.")))),(0,r.kt)("p",null,"Table 2. Configurations"),(0,r.kt)("h3",null,"Dependencies"),(0,r.kt)("p",null,"The attribute detection annotator detects attributes from previously detected concepts and concept values. Configurations defined within the attribute sets determine which concepts and concept values to promote to attributes. The concept value annotator is needed as a dependency to associate values from the unstructured text with a detected attribute. The concept value annotator should be designated to run prior to attribute detection in the flow."),(0,r.kt)("p",null,"The attribute detection annotator will propagate contextual information from the underlying concepts and concept values to the discovered attribute, such as whether the concept is negated or what section the attribute appears in. The contextual annotators (negation, hypothetical, disambiguation, or section) should be designated to run prior to attribute detection in the flow."),(0,r.kt)("h4",null,"Annotation Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attribute Value")),(0,r.kt)("h3",null,"Attribute Value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Fields"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The configured name of the detected attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"preferredName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The normalized or preferred name of the underlying medical concept promoted to the attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"values"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any values associated with the detected attribute. Each value can contain the following information: ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"value")," - the value associated with the attribute ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"unit")," - the unit of measure ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"frequency")," - the frequency associated with the value ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"duration")," - the duration associated with the value ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"dimension")," - the dimension associated with the value ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"modality")," - the modality associated with the value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"qualifiers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any qualifiers associated with the detected attribute. Each qualifier can contain the following information: ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"qualifier")," - the name of the qualifier ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"value")," - the value associated with the qualifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The attribute configuration set source from which the attribute was detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sourceVersion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The version of the attribute configuration set source from which the attribute was detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"concept"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reference to the medical concept related to this attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"conceptValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reference to the medical concept value related to this attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The start position of the annotation as a character offset into the text. The smallest possible start position is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The end position of the annotation as character offset into the text. The end position points at the first character after the annotation, such that end-begin equals the length of the coveredText.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coveredText"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The text covered by an annotation as a string.")))),(0,r.kt)("p",null,"Table 3. Fields"),(0,r.kt)("h3",null,"Sample Response"),(0,r.kt)("p",null,"Sample response from the attribute detection annotator for the text: ",(0,r.kt)("inlineCode",{parentName:"p"},"Study participants must not have an active or untreated brain metastases.")),(0,r.kt)("p",null,"This example illustrates contextual information (negated and hypothetical) and includes optional medical codes and qualifiers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "unstructured": [\n    {\n      "text": "Study participants must not have an active or untreated brain metastases.",\n      "data": {\n        "attributeValues": [\n          {\n            "name": "Disease",\n            "preferredName": "Metastatic malignant neoplasm to brain",\n            "values": [\n              {\n                "value": "Disease"\n              }\n            ],\n            "qualifiers": [\n              {\n                "value": "true",\n                "qualifier": "Active",\n                "begin": 36,\n                "end": 42\n              },\n              {\n                "value": "false",\n                "qualifier": "Treated",\n                "begin": 46,\n                "end": 55\n              }\n            ],\n            "source": "General Medical",\n            "sourceVersion": "v1.0",\n            "concept": {\n              "uid": 2\n            },\n            "begin": 56,\n            "end": 72,\n            "coveredText": "brain metastases",\n            "negated": true,\n            "hypothetical": false,\n            "icd10Code": "C79.31",\n            "nciCode": "C3813",\n            "snomedConceptId": "94225005"\n          }\n        ]\n      }\n    }\n  ]\n}\n]\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clouddocs-annotator-attribute-detection-md-652e7c3a917e91c1c3c8.js.map