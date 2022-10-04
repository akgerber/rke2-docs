"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[971],{3905:function(M,e,t){t.d(e,{Zo:function(){return T},kt:function(){return D}});var N=t(7294);function n(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function r(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);e&&(N=N.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,N)}return t}function i(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function j(M,e){if(null==M)return{};var t,N,n=function(M,e){if(null==M)return{};var t,N,n={},r=Object.keys(M);for(N=0;N<r.length;N++)t=r[N],e.indexOf(t)>=0||(n[t]=M[t]);return n}(M,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(M);for(N=0;N<r.length;N++)t=r[N],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(n[t]=M[t])}return n}var z=N.createContext({}),o=function(M){var e=N.useContext(z),t=e;return M&&(t="function"==typeof M?M(e):i(i({},e),M)),t},T=function(M){var e=o(M.components);return N.createElement(z.Provider,{value:e},M.children)},c={inlineCode:"code",wrapper:function(M){var e=M.children;return N.createElement(N.Fragment,{},e)}},s=N.forwardRef((function(M,e){var t=M.components,n=M.mdxType,r=M.originalType,z=M.parentName,T=j(M,["components","mdxType","originalType","parentName"]),s=o(t),D=n,u=s["".concat(z,".").concat(D)]||s[D]||c[D]||r;return t?N.createElement(u,i(i({ref:e},T),{},{components:t})):N.createElement(u,i({ref:e},T))}));function D(M,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof M||n){var r=t.length,i=new Array(r);i[0]=s;var j={};for(var z in e)hasOwnProperty.call(e,z)&&(j[z]=e[z]);j.originalType=M,j.mdxType="string"==typeof M?M:n,i[1]=j;for(var o=2;o<r;o++)i[o]=t[o];return N.createElement.apply(null,i)}return N.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1269:function(M,e,t){t.r(e),t.d(e,{assets:function(){return T},contentTitle:function(){return z},default:function(){return D},frontMatter:function(){return j},metadata:function(){return o},toc:function(){return c}});var N=t(7462),n=t(3366),r=(t(7294),t(3905)),i=["components"],j={slug:"/",sidebar_position:1,title:"Introduction"},z=void 0,o={unversionedId:"index",id:"index",title:"Introduction",description:"RKE2, also known as RKE Government, is Rancher's next-generation Kubernetes distribution.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/rke2-docs/",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/index.md",tags:[],version:"current",lastUpdatedAt:1664899161,formattedLastUpdatedAt:"10/4/2022",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Introduction"},sidebar:"mySidebar",next:{title:"Quick Start",permalink:"/rke2-docs/install/quickstart"}},T={},c=[{value:"How is this different from RKE or K3s?",id:"how-is-this-different-from-rke-or-k3s",level:2},{value:"Why two names?",id:"why-two-names",level:2},{value:"Security",id:"security",level:2}],s={toc:c};function D(M){var e=M.components,j=(0,n.Z)(M,i);return(0,r.kt)("wrapper",(0,N.Z)({},s,j,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9273).Z,width:"346",height:"111"})),(0,r.kt)("p",null,"RKE2, also known as RKE Government, is Rancher's next-generation Kubernetes distribution."),(0,r.kt)("p",null,"It is a fully ",(0,r.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/selected=rke-government"},"conformant Kubernetes distribution")," that focuses on security and compliance within the U.S. Federal Government sector."),(0,r.kt)("p",null,"To meet these goals, RKE2 does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provides ",(0,r.kt)("a",{parentName:"li",href:"/rke2-docs/security/hardening_guide"},"defaults and configuration options")," that allow clusters to pass the CIS Kubernetes Benchmark ",(0,r.kt)("a",{parentName:"li",href:"/rke2-docs/security/cis_self_assessment15"},"v1.5")," or ",(0,r.kt)("a",{parentName:"li",href:"/rke2-docs/security/cis_self_assessment16"},"v1.6")," with minimal operator intervention"),(0,r.kt)("li",{parentName:"ul"},"Enables ",(0,r.kt)("a",{parentName:"li",href:"/rke2-docs/security/fips_support"},"FIPS 140-2 compliance")),(0,r.kt)("li",{parentName:"ul"},"Regularly scans components for CVEs using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/trivy"},"trivy")," in our build pipeline")),(0,r.kt)("h2",{id:"how-is-this-different-from-rke-or-k3s"},"How is this different from RKE or K3s?"),(0,r.kt)("p",null,"RKE2 combines the best-of-both-worlds from the 1.x version of RKE (hereafter referred to as RKE1) and K3s."),(0,r.kt)("p",null,"From K3s, it inherits the usability, ease-of-operations, and deployment model."),(0,r.kt)("p",null,"From RKE1, it inherits close alignment with upstream Kubernetes. In places K3s has diverged from upstream Kubernetes in order to optimize for edge deployments, but RKE1 and RKE2 can stay closely aligned with upstream."),(0,r.kt)("p",null,"Importantly, RKE2 does not rely on Docker as RKE1 does. RKE1 leveraged Docker for deploying and managing the control plane components as well as the container runtime for Kubernetes. RKE2 launches control plane components as static pods, managed by the kubelet. The embedded container runtime is containerd."),(0,r.kt)("h2",{id:"why-two-names"},"Why two names?"),(0,r.kt)("p",null,"It is known as RKE Government in order to convey the primary use cases and sector it currently targets."),(0,r.kt)("p",null,"It is also known as RKE 2 as it is the next iteration of the Rancher Kubernetes Engine for datacenter use cases. The distribution runs standalone and integration work into Rancher is underway. We intend to make RKE 2 an option in Rancher once it achieves feature parity with RKE. An upgrade path from RKE to RKE2 is also under development for those that want to migrate."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"Rancher Labs supports responsible disclosure and endeavors to resolve security\nissues in a reasonable timeframe. To report a security vulnerability, email\n",(0,r.kt)("a",{parentName:"p",href:"mailto:security@rancher.com"},"security@rancher.com"),"."))}D.isMDXComponent=!0},9273:function(M,e){e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM4NDc0NTt9Cgkuc3Qxe2ZpbGw6IzJFNjhFOTt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjMuODE5ODU0NywzMC4zMTM5MDc2aDIwLjgwMjk0OGM5Ljg3NzczMTMsMCwxNi41Mzc1OTc3LDQuNzg5MDU4NywxNi41Mzc1OTc3LDE0LjA2NzU1ODMKCQkJCWMwLDcuNTU4NzI3My01LjE2Mjk3OTEsMTIuMTIzNjgwMS0xMC4xNzczNjgyLDEzLjY5NDg2MjRjMS40OTY4ODcyLDEuMjcxNTYwNywyLjYxOTg1NzgsMi45OTI1NTM3LDMuNTE3NTAxOCw0Ljc4OTA1ODcKCQkJCWMyLjA5NDkwOTcsNC4yNjUzMzUxLDMuNTE2MjgxMSw4Ljk3ODg4MTgsNy45MzE0MjcsOC45Nzg4ODE4YzEuMTIyOTcwNiwwLDIuMDIwNjE0Ni0wLjM3MzkxNjYsMi4wMjA2MTQ2LTAuMzczOTE2NgoJCQkJbC0wLjk3MzE1OTgsOC45MDQ1NzkyYzAsMC0yLjY5MjkzMjEsMC42NzM1MzgyLTUuMDEzMTY4MywwLjY3MzUzODJjLTUuOTg2MzI4MSwwLTkuNDI4MzE0Mi0yLjMyMDIzNjItMTIuOTQ1ODAwOC0xMC4zMjcxNzEzCgkJCQljLTEuNDk1NjgxOC0zLjU5MDU3NjItMy41OTE3OTY5LTkuODc3NzQyOC02LjM2MDI0NDgtOS44Nzc3NDI4aC0yLjg0Mzk2MzZWODAuODIzMTQzaC0xMi40OTYzODM3VjMwLjMxMzkwNzZ6CgkJCQkgTTE3Ni4zMTYyMzg0LDM5LjM2ODMwMTR2MTIuNDIwODY0MUgxODAuODA2OWMzLjU5MTc4MTYsMCw3Ljc4MTYwMS0xLjEyMTc1MzcsNy43ODE2MDEtNi41MDg4MzQ4CgkJCQljMC00LjQxNTE0NTktMi44NDI3NDI5LTUuOTEyMDI5My02LjI4NTkzNDQtNS45MTIwMjkzSDE3Ni4zMTYyMzg0eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA5LjY5MTA3MDYsMzAuMzEzOTA3NmgxMi40OTYzNjg0djE0LjE0MzA3NGMwLDEuNTcxMTgyMy0wLjIyNDEwNTgsMy44OTAxOTc4LTAuMzczOTE2Niw1LjYxMjQwNzcKCQkJCWgwLjI5OTYyMTZjMC44MjMzNDktMS4yNzE1NjA3LDEuODcwODAzOC0zLjIxNzg3NjQsMy4xNDIzNjQ1LTQuNzE0NzYzNmwxMi4zNDc3OTM2LTE1LjA0MDcxODFoMTMuNDY4MzA3NQoJCQkJbC0xNi40NjIwODE5LDE5LjgyOTc3NjhsMTcuMzYwOTQ2NywzMC42Nzk0NTg2SDIzNy42MDMzMDJsLTExLjY3NDI1NTQtMjEuMTc1NjMyNWwtMy43NDE2MDc3LDQuNTY0OTUyOVY4MC44MjMxNDNoLTEyLjQ5NjM2ODQKCQkJCVYzMC4zMTM5MDc2eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU1LjkzNzQwODQsMzAuMzEzOTI2N2gzMy40NDc5MDY1djkuMjc4NDkyaC0yMC45NTE1MzgxdjEwLjg1MDg5MTFoMTcuNTg1MDUyNXY5LjI3ODQ5MmgtMTcuNTg1MDUyNQoJCQkJVjcxLjU0NDYzMmgyMS43MDA1OTJ2OS4yNzg0OTU4aC0zNC4xOTY5NjA0VjMwLjMxMzkyNjd6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzNC45MDgwNTgyIiBjeT0iNzYuMzk0MjEwOCIgcj0iNyIvPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzEuNDU4NjE4Miw1OC42ODE4MjM3Yy0wLjIwOTE4MjcsMC0wLjQxNjk5MjItMC4wMTA4MTA5LTAuNjIzMDkyNy0wLjAyOTM5NjEKCQkJCWMxLjgwMzQ4OTcsMy44OTkxNzc2LDIuOTU4OTMxLDguMTU2ODk4NSwzLjMwNjE5ODEsMTIuNjM5OTkxOGgxNC45NjU1NzYyCgkJCQljMi4xMzM2NjctMy43NjMwNTM5LDUuNjE4OTcyOC02LjY2MDY4MjcsOS43OTM1MDI4LTguMDI5MDIyMnYtNC41ODMyODI1aC0yNy40MTM0NzUKCQkJCUM3MS40Nzc5MjgyLDU4LjY4MDE1NjcsNzEuNDY4MTg1NCw1OC42ODE4MjM3LDcxLjQ1ODYxODIsNTguNjgxODIzN3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQyLjEwNzE1NDgsMjcuNzQ0MDc5NnY5LjY0NjQwNDNjOC4yNDQzMDg1LDEuMTEyNDIyOSwxNS42MzY4NjM3LDQuOTM4MTEwNCwyMS4yNDkxNjg0LDEwLjU0OTMwNQoJCQkJbC00Ljg4ODAzODYtMjAuMTk1NzA5Mkg0Mi4xMDcxNTQ4eiIvPgoJCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxMDQuMzM4Mjc5NyIgY3k9Ijc5Ljg5NDIxMDgiIHI9IjMuNSIvPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTIxLjU4Njg5MTIsMEgxNC4zOTIzODI2QzYuNDc2NTM4MiwwLDAsNi40NzY2MjM1LDAsMTQuMzkyNDY4NXY4Mi41Nzc0Mzg0CgkJCQljMCw3LjkxNTg0NzgsNi40NzY1MzgyLDE0LjM5MjQ3MTMsMTQuMzkyMzgyNiwxNC4zOTI0NzEzaDEwNy4xOTQ1MTE0YzcuOTE1ODQwMSwwLDE0LjM5MjM4NzQtNi40NzY2MjM1LDE0LjM5MjM4NzQtMTQuMzkyNDcxMwoJCQkJVjE0LjM5MjQ2ODVDMTM1Ljk3OTI3ODYsNi40NzY2MjM1LDEyOS41MDI3MzEzLDAsMTIxLjU4Njg5MTIsMHogTTM0LjkwODA1ODIsOTcuMzk0MjEwOAoJCQkJYy0xMS41NzkzOTUzLDAtMjEuMDAwMDAxOS05LjQyMDU2MjctMjEuMDAwMDAxOS0yMVMyMy4zMjg2NjI5LDU1LjM5NDIwNywzNC45MDgwNTgyLDU1LjM5NDIwN3MyMSw5LjQyMDU2NjYsMjEsMjEuMDAwMDAzOAoJCQkJUzQ2LjQ4NzQ0OTYsOTcuMzk0MjEwOCwzNC45MDgwNTgyLDk3LjM5NDIxMDh6IE0xMDQuMzM4Mjc5Nyw5Ny4zOTQyMTA4CgkJCQljLTcuNzY2MTM2MiwwLTE0LjM2MzE1OTItNS4wODY1Nzg0LTE2LjY0NDE0MjItMTIuMTAxNzkxNGgtMjAuNDM2MjAzYy0zLjg2Mjk4NzUsMC02Ljk5NTIxNjQtMy4xMjkxNTA0LTctNi45OTE3OTg0CgkJCQlsLTAuMDA0NzgzNi00LjEwODA1NTFjMC0xMi43NjUwODcxLTEwLjM3ODMyMjYtMjMuMTQzNDA5Ny0yMy4xMzQ4NjQ4LTIzLjE0MzQwOTdIMjUuNjA4NjE3OGMtMy44NjU3MjI3LDAtNy0zLjEzMzkzNC03LTcKCQkJCXMzLjEzNDI3NzMtNyw3LTdoMi40OTg1MzUydi05LjMwNTA3NjZoLTIuNDk4NTM1MmMtMy44NjU3MjI3LDAtNy0zLjEzMzkzNTktNy03czMuMTM0Mjc3My03LDctN2gzOC4zNjczODU5CgkJCQljMy4yMzEzNDk5LDAsNi4wNDI5NjQ5LDIuMjEyMTA5Niw2LjgwMzgwNjMsNS4zNTMyMjE5bDYuMTkyMzM3LDI1LjU4MjgxMzNoMjYuNDE1MDg0OAoJCQkJYzUuMjQ1OTAzLDAsOS41MTM1NzI3LDQuMjY3Njc3Myw5LjUxMzU3MjcsOS41MTM1NzI3djEwLjQ0Njg5MThjNS4zMjg2MTMzLDMuMDAzMTEyOCw4LjkzNzQ3NzEsOC43MTMzMDI2LDguOTM3NDc3MSwxNS4yNTM2MzE2CgkJCQlDMTIxLjgzODI3OTcsODkuNTQzNzMxNywxMTMuOTg3ODkyMiw5Ny4zOTQyMTA4LDEwNC4zMzgyNzk3LDk3LjM5NDIxMDh6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0NS45OTc2NTAxLDgwLjY0ODgxMTNoLTM3LjMwMDc4MTJ2LTguODU1MjkzM2wxMi41NTA3ODEyLTEyLjI5NTIyMzIKCQkJYzMuNTg1OTM3NS0zLjYzMjk0MjIsNS45Mjk2ODc1LTYuMTEzNTU1OSw3LjAzMTI1LTcuNDQxODQ4OHMxLjg2OTE0MDYtMi40NjkyNjUsMi4zMDI3MzQ0LTMuNDIyOTA4OAoJCQljMC40MzM1OTM4LTAuOTUzNjQ3NiwwLjY1MDM5MDYtMS45NTI3MDU0LDAuNjUwMzkwNi0yLjk5NzE3NzFjMC0xLjI5NDIzMTQtMC40MzM1OTM4LTIuMzE1OTk4MS0xLjMwMDc4MTItMy4wNjUyOTI0CgkJCWMtMC44NjcxODc1LTAuNzQ5MjkwNS0yLjA4NTkzNzUtMS4xMjM5Mzk1LTMuNjU2MjUtMS4xMjM5Mzk1Yy0xLjYxNzE4NzUsMC0zLjI1MTk1MzEsMC40NDg0NDA2LTQuOTA0Mjk2OSwxLjM0NTMyNTUKCQkJYy0xLjY1MjM0MzgsMC44OTY4ODExLTMuNTIxNDg0NCwyLjIxOTQ5NzctNS42MDc0MjE5LDMuOTY3ODQ5N2wtNy42Mjg5MDYyLTguNjUwOTM2MQoJCQljMi42NDg0Mzc1LTIuMjkzMjkzLDQuODc1LTMuOTMzNzkyMSw2LjY3OTY4NzUtNC45MjE0OTczczMuNzY3NTc4MS0xLjc0MjY3NTgsNS44ODg2NzE5LTIuMjY0OTA5NwoJCQljMi4xMjEwOTM4LTAuNTIyMjM1OSw0LjUwNTg1OTQtMC43ODMzNTE5LDcuMTU0Mjk2OS0wLjc4MzM1MTljMy4zMjgxMjUsMCw2LjI5ODgyODEsMC41Njc2NDYsOC45MTIxMDk0LDEuNzAyOTQKCQkJYzIuNjEzMjgxMiwxLjEzNTI5MjEsNC42NDA2MjUsMi43NTMwODYxLDYuMDgyMDMxMiw0Ljg1MzM3ODNzMi4xNjIxMDk0LDQuNDU2MDI4LDIuMTYyMTA5NCw3LjA2NzE5OTcKCQkJYzAsMS45NTI3MDU0LTAuMjUxOTUzMSwzLjc1NzgyMzktMC43NTU4NTk0LDUuNDE1MzUxOXMtMS4yODMyMDMxLDMuMjg2Njc0NS0yLjMzNzg5MDYsNC44ODc0MzU5CgkJCWMtMS4wNTQ2ODc1LDEuNjAwNzY1Mi0yLjQ1NTA3ODEsMy4yODY2NzQ1LTQuMjAxMTcxOSw1LjA1NzczMTZzLTUuNDY2Nzk2OSw1LjEzMTUyNjktMTEuMTYyMTA5NCwxMC4wODE0MDE4djAuMzQwNTkxNGgxOS40NDE0MDYyCgkJCVY4MC42NDg4MTEzeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="}}]);