"use strict";(self.webpackChunkvecticum_docusaurus=self.webpackChunkvecticum_docusaurus||[]).push([[3242],{6535:(e,t,a)=>{a.d(t,{A:()=>f});var s=a(6540),n=a(4164),r=a(781),l=a(4581),i=a(8774),o=a(1312),c=a(6347),m=a(9169);function d(e){const{pathname:t}=(0,c.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=a(4848);function g(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.A)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=a(5600);function j(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,h.jsx)(x.GX,{component:j,props:e})}function b(e){let{sidebar:t}=e;const a=(0,l.l)();return t?.items.length?"mobile"===a?(0,h.jsx)(p,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:a,children:s,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(r.A,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:s}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},4651:(e,t,a)=>{a.d(t,{A:()=>R});a(6540);var s=a(4164),n=a(7131),r=a(4848);function l(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var i=a(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,n.e)(),{permalink:c,title:m}=a,d=l?"h1":"h2";return(0,r.jsx)(d,{className:(0,s.A)(o.title,t),children:l?m:(0,r.jsx)(i.A,{to:c,children:m})})}var m=a(1312),d=a(5846),u=a(6266);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.W)();return t=>{const a=Math.ceil(t);return e(a,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function j(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:a}=(0,n.e)(),{date:l,readingTime:i}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(g,{readingTime:i})]})]});var c}function b(e){return e.href?(0,r.jsx)(i.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function f(e){let{author:t,className:a}=e;const{name:n,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",a),children:[o&&(0,r.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(b,{href:m,children:(0,r.jsx)("span",{children:n})})}),l&&(0,r.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.e)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(f,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(A,{})]})}var _=a(440),k=a(2125);function P(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,n.e)();return(0,r.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(k.A,{children:t})})}var w=a(7559),T=a(4336),I=a(2053);function L(){return(0,r.jsx)("b",{children:(0,r.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function y(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(i.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(L,{})})}function C(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:m}=e,d=!t&&o,u=a.length>0;if(!(u||d||i))return null;if(t){const e=!!(i||m||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(I.A,{tags:a})})}),e&&(0,r.jsx)(T.A,{className:(0,s.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:m,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":d}),children:(0,r.jsx)(I.A,{tags:a})}),d&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(y,{blogPostTitle:l,to:e.permalink})})]})}function R(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,r.jsx)(N,{}),(0,r.jsx)(P,{children:t}),(0,r.jsx)(C,{})]})}},9022:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),n=a(8774),r=a(4848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var s=a(4164),n=a(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(4848);function i(e){let{permalink:t,label:a,count:i}=e;return(0,l.jsxs)(n.A,{href:t,className:(0,s.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},2053:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4164),n=a(1312),r=a(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(4848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.A,{label:t,permalink:a})},a)}))})]})}},7131:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>i});var s=a(6540),n=a(9532),r=a(4848);const l=s.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,s.useContext)(l);if(null===e)throw new n.dV("BlogPostProvider");return e}},5846:(e,t,a)=>{a.d(t,{W:()=>c});var s=a(6540),n=a(4586);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return s[Math.min(r,s.length-1)]}(a,t,e)}}}}]);