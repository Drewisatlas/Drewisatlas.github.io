(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(142),A=a(154),o=a(152);t.default=function(){return i.a.createElement(A.a,null,i.a.createElement(o.a,{title:"Page two"}),i.a.createElement("h1",null,"Hi from the second page"),i.a.createElement("p",null,"Welcome to page 2"),i.a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return g});var n=a(0),i=a.n(n),r=a(4),A=a.n(r),o=a(141),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(143),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var s=a(32);a.d(t,"parsePath",function(){return s.a});var u=i.a.createContext({}),g=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},144:function(e){e.exports={data:{site:{siteMetadata:{title:"andrew rivera"}}}}},145:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),A=a.n(r),o=a(52),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,a){e.exports={header:"header-module--header--2Q3RK",title:"header-module--title--2iLmX",socialContainer:"header-module--socialContainer--8W49t",socialIcon:"header-module--socialIcon--9sTUX",div:"header-module--div--13CvA"}},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3klEQVRYhd2XzWoUQRSFv9sEGYKEIEOQIEGC7yBGcek7OG5cKYJkKy4kC8GND2B2ujD6CuIyiD+40YWLCLpxiDguxh8IEsb5XPQ0tG13nKg1Ax4o6Kp7+9ah6p66VQGgHgHWgBWgBcyMWlZpBcrfZQwr39W2C3wDNoG1iOiFugQ8ARYbgqbCW+BEqBtAZ8KTF1gP9SPQnhKB1xn5Xk8Lrb0m3wbukhPsAIcTEJhB7fsr3qkLhZe6qL6v8ftbfGiS052I6BWdiNgG7iVYgWwcPRfYnSSBjjpXdNR50kg1a0rCY8Bz9Rb5qXcJWEpAgFD7wHyK4GPgU9MK9ID1ythl4BB5ftzg5zy5ABwAbgIPgB3gIHAauMJeEm6Q4csav62R7buaVWz3zQtaXfwF9VWDDPtNSbhfXIyIbp1hJOdz1CursazuCxHx5Tf2F8DjZATUlnpb/ay+Uc/UuD1NRgC4BpwH5oBlYEOdrfh8TUlgpdJvA0crY4OUBFpjxE6XhA1xxoqdkkDaH/9V7GlvwfC/2YI/XYFBUzVsq6uVsXLJXlXLsqq71p9Vy+fDyRqf4bTvA92MhgNiQtjJgIdTJPAo1GXgGZN/nnWB4wEwInEdOAXMku65NiC/rm0CVyOi+wOjPUMEPtvE0QAAAABJRU5ErkJggg=="},148:function(e,t){e.exports="data:image/png;base64,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"},149:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="},150:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAQAAADDT1LxAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAPHSURBVEjHpZR7bFN1FMe/d2tnW7JNJ0Mds+jYlMQ5pY3RCA6NEoOKj39QHokJwQTi8JHgIxNjNOo/hIeP6D8Y49yKUSIhisFABhG6zm3C2m2sXUvpurV71K63j9vb+zz+YTClu33h98/fOedznvcyKFv7wTJr2wzVqzZzTPLbOtnpYpSny8fk6gsQxjZGXalJQYoFMuF4j8M4+P+xW0HwPsoHiIjSidipmddGlyvoLhw0huMrBltt+rMFfCYw3JQaIiIiSsaTQ+x309vsSwkvFAInMb6FC7O2qed6byK8reFhw05d9EuVsiVL8T8mHruT+SE/eBLuB4Qokcwn7eEOh1nP7MrxiMLbLvxNi5QJjW8Ccygf+CS6DAtH/q1HUTh35IMLLRuY/f/Zf8GhqoVu0hQ/c2UD4V1tsA5TGGrjXFedVTXtn/1opAl4BwAQge9hMUp5xDkvrpzIV/M3YOG1xh2KmgX3hN+03xzG1wAT+VzNxyWV5j4m9GiDp+FunN89ezydyQ5R5Pgpp2UBw028jwqId18wu/Ktz/OQENMKSl261B7eoSiFwLI0uTkDgABsZJhs8FkkTO09tc9rJRX9Mm+6BwUVO+zoJLWluro1XH2N4XawcFmTTpWuTzKXHudGhFDCNbo+J+dTILhWxb7ig4Xbzj8OMRTv9qwmVF4L9sKM96PrWWZF1R06PcoUIeGNdqV+ruInli8yBjGwJh26zlkQkaJI6aRrbJcuF5yAHJD8xoZyqwUANSUGlDmhP3H09OK7WwPCcOvCbxJf/grZrt6lNsMjeFk7rxnT+LU28OTse5GRcuCyHNpGuKtwU9+DMPeGxJVTL+/+K+vLq9AGG3C4yvSEzlTORSSPWoIjxdz2gnB5a2ZeJbXEaXDjzmZvNqLNdAA7NNBd2FfpsU5+kmZLwUoZ/yuET7PiK7ZbVt+/jvlRA71HkYQbLYaaEs4MbNdA9xl0Zj8eq/XundpzruHq7xwAHgcwUD/TwftKmYNK8d/tDaM5yRgf+FtuPWi8VzyROCdeiSR4alxiNBvXLnnGcF+Frni1hFifb3uN5zR255oC+HMZa5NVWRDn0pc5nxiW06Xer6KwJ/rvJjRr5XwJfThZN3+wvKslIhLikX399VNYmb+h8zh2Q3AL5yz1uIhkOdnnffaA/qdis9oJwkVz+EPOXxwuC6nBQMeZZYQXiy8BADphYQaaZ95KnpdYbbwsZgKJI9Ob+usJrxZkMbkPr+Mz9NY1WmvWmR7Ut6Beb6xkCKKImBQUXBl7xBHy3yZaixb5DwDZ9flgdOgCAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTAyVDAyOjEyOjEwLTA1OjAwrwyXmgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0wMlQwMjoxMjoxMC0wNTowMN5RLyYAAAAASUVORK5CYII="},151:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(153),i=a(0),r=a.n(i),A=a(4),o=a.n(A),c=a(155),l=a.n(c),d=a(142);function s(e){var t=e.description,a=e.lang,i=e.meta,A=e.keywords,o=e.title;return r.a.createElement(d.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(i)})},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=s;var u="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"andrew rivera",description:"Living life on my own terms",author:"@drewisatlas"}}}}},154:function(e,t,a){"use strict";var n=a(144),i=a(0),r=a.n(i),A=a(4),o=a.n(A),c=a(142),l=a(146),d=a.n(l),s=a(147),u=a.n(s),g=a(148),p=a.n(g),m=a(149),w=a.n(m),h=a(150),y=a.n(h),b=function(e){var t=e.siteTitle;return r.a.createElement("header",{className:d.a.header},r.a.createElement("div",{className:d.a.title},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),r.a.createElement("div",{className:d.a.socialContainer},r.a.createElement("img",{src:y.a,alt:"twitter link",className:d.a.socialIcon}),r.a.createElement("img",{src:p.a,alt:"instagram link",className:d.a.socialIcon}),r.a.createElement("img",{src:w.a,alt:"github link",className:d.a.socialIcon}),r.a.createElement("img",{src:u.a,alt:"linkedin link",className:d.a.socialIcon})))};b.propTypes={siteTitle:o.a.string},b.defaultProps={siteTitle:"Andrew Rivera"};var E=b,I=(a(151),function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});I.propTypes={children:o.a.node.isRequired};t.a=I}}]);
//# sourceMappingURL=component---src-pages-page-2-js-59c7aa3fbce2ddf033c9.js.map