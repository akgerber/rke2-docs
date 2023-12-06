"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[9185],{7228:(M,N,I)=>{I.r(N),I.d(N,{assets:()=>L,contentTitle:()=>D,default:()=>i,frontMatter:()=>z,metadata:()=>T,toc:()=>C});var g=I(5893),j=I(1151);const z={slug:"/",sidebar_position:1,title:"\u4ecb\u7ecd"},D=void 0,T={id:"introduction",title:"\u4ecb\u7ecd",description:"RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f Rancher \u7684\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1701884279,formattedLastUpdatedAt:"2023\u5e7412\u67086\u65e5",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"\u4ecb\u7ecd"},sidebar:"mySidebar",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/install/quickstart"}},L={},C=[{value:"\u4e0e RKE \u6216 K3s \u7684\u5dee\u522b\uff1f",id:"\u4e0e-rke-\u6216-k3s-\u7684\u5dee\u522b",level:2},{value:"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57\uff1f",id:"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57",level:2},{value:"\u5b89\u5168",id:"\u5b89\u5168",level:2}];function A(M){const N={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,j.a)(),...M.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(N.p,{children:[(0,g.jsx)(N.img,{src:I(9273).Z+"#gh-light-mode-only",width:"346",height:"111"}),(0,g.jsx)(N.img,{src:I(1103).Z+"#gh-dark-mode-only",width:"346",height:"111"})]}),"\n",(0,g.jsx)(N.p,{children:"RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f Rancher \u7684\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u3002"}),"\n",(0,g.jsxs)(N.p,{children:["\u5b83\u662f\u4e00\u4e2a",(0,g.jsx)(N.a,{href:"https://landscape.cncf.io/card-mode?selected=rke-government",children:"\u5b8c\u5168\u5408\u89c4\u7684 Kubernetes \u53d1\u884c\u7248"}),"\uff0c\u4e13\u6ce8\u4e8e\u5b89\u5168\u548c\u5408\u89c4\u6027\u3002"]}),"\n",(0,g.jsx)(N.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e9b\u76ee\u6807\uff0cRKE2 \u4f1a\uff1a"}),"\n",(0,g.jsxs)(N.ul,{children:["\n",(0,g.jsxs)(N.li,{children:["\u63d0\u4f9b",(0,g.jsx)(N.a,{href:"/zh/security/hardening_guide",children:"\u9ed8\u8ba4\u503c\u548c\u914d\u7f6e\u9009\u9879"}),"\uff0c\u8ba9\u96c6\u7fa4\u80fd\u4f7f\u7528\u6700\u5c11\u7684\u4eba\u5458\u5e72\u9884\u901a\u8fc7 CIS Kubernetes Benchmark ",(0,g.jsx)(N.a,{href:"/zh/security/cis_self_assessment16",children:"v1.6"})," \u6216 ",(0,g.jsx)(N.a,{href:"/zh/security/cis_self_assessment123",children:"v1.23"})]}),"\n",(0,g.jsxs)(N.li,{children:["\u542f\u7528 ",(0,g.jsx)(N.a,{href:"/zh/security/fips_support",children:"FIPS 140-2 \u5408\u89c4"})]}),"\n",(0,g.jsxs)(N.li,{children:["\u5728\u6211\u4eec\u7684\u6784\u5efa\u6d41\u6c34\u7ebf\u4e2d\u4f7f\u7528 ",(0,g.jsx)(N.a,{href:"https://github.com/aquasecurity/trivy",children:"trivy"})," \u5b9a\u671f\u626b\u63cf\u7ec4\u4ef6\u4ee5\u67e5\u627e CVE"]}),"\n"]}),"\n",(0,g.jsx)(N.h2,{id:"\u4e0e-rke-\u6216-k3s-\u7684\u5dee\u522b",children:"\u4e0e RKE \u6216 K3s \u7684\u5dee\u522b\uff1f"}),"\n",(0,g.jsx)(N.p,{children:"RKE2 \u5b8c\u7f8e\u7ed3\u5408\u4e86 1.x \u7248\u672c\u7684 RKE\uff08\u4ee5\u4e0b\u7b80\u79f0 RKE1\uff09\u548c K3s\u3002"}),"\n",(0,g.jsx)(N.p,{children:"\u5b83\u7ee7\u627f\u4e86 K3s \u7684\u53ef\u7528\u6027\u3001\u6613\u64cd\u4f5c\u6027\u548c\u90e8\u7f72\u6a21\u578b\u3002"}),"\n",(0,g.jsx)(N.p,{children:"\u5b83\u8fd8\u7ee7\u627f\u4e86 RKE1 \u4e0e\u4e0a\u6e38 Kubernetes \u7684\u7d27\u5bc6\u7ed3\u5408\u5173\u7cfb\u3002\u4e3a\u4e86\u4f18\u5316\u8fb9\u7f18\u90e8\u7f72\uff0cK3s \u5728\u67d0\u4e9b\u5730\u65b9\u4e0e\u4e0a\u6e38 Kubernetes \u6709\u6240\u4e0d\u540c\uff0c\u4f46 RKE1 \u548c RKE2 \u53ef\u4ee5\u4e0e\u4e0a\u6e38\u4fdd\u6301\u7d27\u5bc6\u4e00\u81f4\u3002"}),"\n",(0,g.jsx)(N.p,{children:"\u91cd\u8981\u7684\u662f\uff0cRKE2 \u4e0d\u50cf RKE1 \u4e00\u6837\u4f9d\u8d56 Docker\u3002RKE1 \u4f7f\u7528 Docker \u6765\u90e8\u7f72\u548c\u7ba1\u7406 control plane \u7ec4\u4ef6\u4ee5\u53ca Kubernetes \u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u3002RKE2 \u5c06 control plane \u7ec4\u4ef6\u4f5c\u4e3a\u7531 kubelet \u7ba1\u7406\u7684\u9759\u6001 pod \u542f\u52a8\u3002\u5d4c\u5165\u5f0f\u5bb9\u5668\u8fd0\u884c\u65f6\u662f containerd\u3002"}),"\n",(0,g.jsx)(N.h2,{id:"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57",children:"\u4e3a\u4ec0\u4e48\u6709\u4e24\u4e2a\u540d\u5b57\uff1f"}),"\n",(0,g.jsx)(N.p,{children:"\u5b83\u88ab\u79f0\u4e3a RKE Government\uff0c\u76ee\u7684\u662f\u4f20\u8fbe\u5176\u5f53\u524d\u9488\u5bf9\u7684\u4e3b\u8981\u7528\u4f8b\u548c\u90e8\u95e8\u3002"}),"\n",(0,g.jsx)(N.p,{children:"\u5b83\u4e5f\u88ab\u79f0\u4e3a RKE2\uff0c\u56e0\u4e3a\u5b83\u662f Rancher Kubernetes Engine \u9488\u5bf9\u6570\u636e\u4e2d\u5fc3\u7528\u4f8b\u7684\u4e0b\u4e00\u6b21\u8fed\u4ee3\u3002\u8be5\u53d1\u884c\u7248\u72ec\u7acb\u8fd0\u884c\uff0c\u6211\u4eec\u6b63\u5728\u8fdb\u884c\u5b83\u4e0e Rancher \u7684\u96c6\u6210\u5de5\u4f5c\u3002RKE2 \u4e0e RKE \u7684\u529f\u80fd\u5bf9\u7b49\u540e\uff0c\u6211\u4eec\u4f1a\u8ba9 RKE2 \u6210\u4e3a Rancher \u4e2d\u7684\u4e00\u4e2a\u9009\u9879\u3002\u6211\u4eec\u4e5f\u5728\u5f00\u53d1\u4ece RKE \u8fc1\u79fb\u5230 RKE2 \u7684\u5347\u7ea7\u8def\u5f84\u3002"}),"\n",(0,g.jsx)(N.h2,{id:"\u5b89\u5168",children:"\u5b89\u5168"}),"\n",(0,g.jsxs)(N.p,{children:["Rancher Labs \u4f1a\u8d1f\u8d23\u4efb\u5730\u62ab\u9732\u95ee\u9898\uff0c\u5e76\u81f4\u529b\u4e8e\u5728\u5408\u7406\u7684\u65f6\u95f4\u5185\u89e3\u51b3\u6240\u6709\u95ee\u9898\u3002\u8981\u62a5\u544a\u5b89\u5168\u6f0f\u6d1e\uff0c\u8bf7\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u5230 ",(0,g.jsx)(N.a,{href:"mailto:security@rancher.com",children:"security@rancher.com"}),"\u3002"]})]})}function i(M={}){const{wrapper:N}={...(0,j.a)(),...M.components};return N?(0,g.jsx)(N,{...M,children:(0,g.jsx)(A,{...M})}):A(M)}},1103:(M,N,I)=>{I.d(N,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxOyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibG9nby1ob3Jpem9udGFsLXJrZTItZGFyay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yICg3MzJhMDFkYTYzLCAyMDIyLTEyLTA5LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzNDA4Ij4KCQkKCTwvZGVmcz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXc0MDYiCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgIGJvcmRlcm9wYWNpdHk9IjAuMjUiCiAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMy44MzgxNzY0IgogICBpbmtzY2FwZTpjeD0iMTcyLjk5ODgzIgogICBpbmtzY2FwZTpjeT0iNTUuODg1OTE2IgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjMzNzQiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEzNzYiCiAgIGlua3NjYXBlOndpbmRvdy14PSI2NiIKICAgaW5rc2NhcGU6d2luZG93LXk9IjI3IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMzgzIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTM3NSI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzJFNjhFOTt9Cjwvc3R5bGU+CjxnCiAgIGlkPSJnNDAzIj4KCTxnCiAgIGlkPSJnMzk3IgogICBzdHlsZT0iZGlzcGxheTppbmxpbmUiPgoJCTxnCiAgIGlkPSJnMzgzIj4KCQkJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAxNjMuODE5ODUsMzAuMzEzOTA4IGggMjAuODAyOTUgYyA5Ljg3NzczLDAgMTYuNTM3Niw0Ljc4OTA1OCAxNi41Mzc2LDE0LjA2NzU1OCAwLDcuNTU4NzI3IC01LjE2Mjk4LDEyLjEyMzY4IC0xMC4xNzczNywxMy42OTQ4NjIgMS40OTY4OSwxLjI3MTU2MSAyLjYxOTg2LDIuOTkyNTU0IDMuNTE3NSw0Ljc4OTA1OSAyLjA5NDkxLDQuMjY1MzM1IDMuNTE2MjksOC45Nzg4ODIgNy45MzE0Myw4Ljk3ODg4MiAxLjEyMjk3LDAgMi4wMjA2MiwtMC4zNzM5MTcgMi4wMjA2MiwtMC4zNzM5MTcgbCAtMC45NzMxNiw4LjkwNDU3OSBjIDAsMCAtMi42OTI5NCwwLjY3MzUzOSAtNS4wMTMxNywwLjY3MzUzOSAtNS45ODYzMywwIC05LjQyODMyLC0yLjMyMDIzNyAtMTIuOTQ1OCwtMTAuMzI3MTcyIC0xLjQ5NTY5LC0zLjU5MDU3NiAtMy41OTE4LC05Ljg3Nzc0MyAtNi4zNjAyNSwtOS44Nzc3NDMgaCAtMi44NDM5NiB2IDE5Ljk3OTU4OCBoIC0xMi40OTYzOSB6IG0gMTIuNDk2MzksOS4wNTQzOTMgdiAxMi40MjA4NjQgaCA0LjQ5MDY2IGMgMy41OTE3OCwwIDcuNzgxNiwtMS4xMjE3NTMgNy43ODE2LC02LjUwODgzNCAwLC00LjQxNTE0NiAtMi44NDI3NCwtNS45MTIwMyAtNi4yODU5MywtNS45MTIwMyB6IgogICBpZD0icGF0aDM3NyIgLz4KCQkJPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0ibSAyMDkuNjkxMDcsMzAuMzEzOTA4IGggMTIuNDk2MzcgdiAxNC4xNDMwNzQgYyAwLDEuNTcxMTgyIC0wLjIyNDExLDMuODkwMTk3IC0wLjM3MzkyLDUuNjEyNDA3IGggMC4yOTk2MiBjIDAuODIzMzUsLTEuMjcxNTYgMS44NzA4MSwtMy4yMTc4NzYgMy4xNDIzNywtNC43MTQ3NjMgTCAyMzcuNjAzMywzMC4zMTM5MDggaCAxMy40NjgzMSBsIC0xNi40NjIwOCwxOS44Mjk3NzYgMTcuMzYwOTQsMzAuNjc5NDU5IEggMjM3LjYwMzMgbCAtMTEuNjc0MjUsLTIxLjE3NTYzMiAtMy43NDE2MSw0LjU2NDk1MiB2IDE2LjYxMDY4IGggLTEyLjQ5NjM3IHoiCiAgIGlkPSJwYXRoMzc5IiAvPgoJCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDI1NS45Mzc0MSwzMC4zMTM5MjcgaCAzMy40NDc5IHYgOS4yNzg0OTIgSCAyNjguNDMzNzggViA1MC40NDMzMSBoIDE3LjU4NTA1IHYgOS4yNzg0OTIgaCAtMTcuNTg1MDUgdiAxMS44MjI4MyBoIDIxLjcwMDU5IHYgOS4yNzg0OTYgaCAtMzQuMTk2OTYgeiIKICAgaWQ9InBhdGgzODEiCiAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSIgLz4KCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDMzMy45OTc2NSw4MC42NDg4MTEgaCAtMzcuMzAwNzggdiAtOC44NTUyOTMgbCAxMi41NTA3OCwtMTIuMjk1MjIzIGMgMy41ODU5NCwtMy42MzI5NDIgNS45Mjk2OSwtNi4xMTM1NTYgNy4wMzEyNSwtNy40NDE4NDkgMS4xMDE1NiwtMS4zMjgyOTMgMS44NjkxNCwtMi40NjkyNjUgMi4zMDI3MywtMy40MjI5MDkgMC40MzM2LC0wLjk1MzY0NyAwLjY1MDQsLTEuOTUyNzA1IDAuNjUwNCwtMi45OTcxNzcgMCwtMS4yOTQyMzEgLTAuNDMzNiwtMi4zMTU5OTggLTEuMzAwNzksLTMuMDY1MjkyIC0wLjg2NzE4LC0wLjc0OTI5MSAtMi4wODU5MywtMS4xMjM5NCAtMy42NTYyNSwtMS4xMjM5NCAtMS42MTcxOCwwIC0zLjI1MTk1LDAuNDQ4NDQxIC00LjkwNDI5LDEuMzQ1MzI2IC0xLjY1MjM1LDAuODk2ODgxIC0zLjUyMTQ5LDIuMjE5NDk3IC01LjYwNzQyLDMuOTY3ODQ5IGwgLTcuNjI4OTEsLTguNjUwOTM2IGMgMi42NDg0NCwtMi4yOTMyOTMgNC44NzUsLTMuOTMzNzkyIDYuNjc5NjksLTQuOTIxNDk3IDEuODA0NjgsLTAuOTg3NzA1IDMuNzY3NTcsLTEuNzQyNjc2IDUuODg4NjcsLTIuMjY0OTEgMi4xMjEwOSwtMC41MjIyMzYgNC41MDU4NiwtMC43ODMzNTIgNy4xNTQzLC0wLjc4MzM1MiAzLjMyODEyLDAgNi4yOTg4MiwwLjU2NzY0NiA4LjkxMjEsMS43MDI5NCAyLjYxMzI5LDEuMTM1MjkzIDQuNjQwNjMsMi43NTMwODcgNi4wODIwNCw0Ljg1MzM3OSAxLjQ0MTQsMi4xMDAyOTIgMi4xNjIxMSw0LjQ1NjAyOCAyLjE2MjExLDcuMDY3MTk5IDAsMS45NTI3MDYgLTAuMjUxOTYsMy43NTc4MjQgLTAuNzU1ODYsNS40MTUzNTIgLTAuNTAzOTEsMS42NTc1MjggLTEuMjgzMjEsMy4yODY2NzUgLTIuMzM3ODksNC44ODc0MzYgLTEuMDU0NjksMS42MDA3NjUgLTIuNDU1MDgsMy4yODY2NzUgLTQuMjAxMTgsNS4wNTc3MzIgLTEuNzQ2MDksMS43NzEwNTcgLTUuNDY2NzksNS4xMzE1MjcgLTExLjE2MjExLDEwLjA4MTQwMiB2IDAuMzQwNTkxIGggMTkuNDQxNDEgeiIKICAgaWQ9InBhdGgzOTkiIC8+PC9nPgoJCTxnCiAgIGlkPSJnMzk1IgogICBzdHlsZT0iZGlzcGxheTppbmxpbmUiPgoJCQk8Y2lyY2xlCiAgIGNsYXNzPSJzdDEiCiAgIGN4PSIzNC45MDgwNTgiCiAgIGN5PSI3Ni4zOTQyMTEiCiAgIHI9IjciCiAgIGlkPSJjaXJjbGUzODUiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Im0gNzEuNDU4NjE4LDU4LjY4MTgyNCBjIC0wLjIwOTE4MiwwIC0wLjQxNjk5MiwtMC4wMTA4MSAtMC42MjMwOTIsLTAuMDI5NCAxLjgwMzQ4OSwzLjg5OTE3NyAyLjk1ODkzMSw4LjE1Njg5OCAzLjMwNjE5OCwxMi42Mzk5OTEgSCA4OS4xMDczIGMgMi4xMzM2NjcsLTMuNzYzMDU0IDUuNjE4OTczLC02LjY2MDY4MiA5Ljc5MzUwMywtOC4wMjkwMjIgViA1OC42ODAxMTUgSCA3MS40ODczMjggYyAtMC4wMDk0LDQuMmUtNSAtMC4wMTkxNCwwLjAwMTcgLTAuMDI4NzEsMC4wMDE3IHoiCiAgIGlkPSJwYXRoMzg3IiAvPgoJCQk8cGF0aAogICBjbGFzcz0ic3QxIgogICBkPSJtIDQyLjEwNzE1NSwyNy43NDQwOCB2IDkuNjQ2NDA0IGMgOC4yNDQzMDgsMS4xMTI0MjMgMTUuNjM2ODY0LDQuOTM4MTEgMjEuMjQ5MTY4LDEwLjU0OTMwNSBMIDU4LjQ2ODI4NSwyNy43NDQwOCBaIgogICBpZD0icGF0aDM4OSIgLz4KCQkJPGNpcmNsZQogICBjbGFzcz0ic3QxIgogICBjeD0iMTA0LjMzODI4IgogICBjeT0iNzkuODk0MjExIgogICByPSIzLjUiCiAgIGlkPSJjaXJjbGUzOTEiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Ik0gMTIxLjU4Njg5LDAgSCAxNC4zOTIzODMgQyA2LjQ3NjUzODIsMCAwLDYuNDc2NjIzNSAwLDE0LjM5MjQ2OSB2IDgyLjU3NzQzOCBjIDAsNy45MTU4NDMgNi40NzY1MzgyLDE0LjM5MjQ3MyAxNC4zOTIzODMsMTQuMzkyNDczIEggMTIxLjU4Njg5IGMgNy45MTU4NCwwIDE0LjM5MjM5LC02LjQ3NjYzIDE0LjM5MjM5LC0xNC4zOTI0NzMgViAxNC4zOTI0NjkgQyAxMzUuOTc5MjgsNi40NzY2MjM1IDEyOS41MDI3MywwIDEyMS41ODY4OSwwIFogTSAzNC45MDgwNTgsOTcuMzk0MjExIGMgLTExLjU3OTM5NSwwIC0yMS4wMDAwMDIsLTkuNDIwNTYzIC0yMS4wMDAwMDIsLTIxIDAsLTExLjU3OTQzOCA5LjQyMDYwNywtMjEuMDAwMDA0IDIxLjAwMDAwMiwtMjEuMDAwMDA0IDExLjU3OTM5NSwwIDIxLDkuNDIwNTY3IDIxLDIxLjAwMDAwNCAwLDExLjU3OTQzNyAtOS40MjA2MDgsMjEgLTIxLDIxIHogbSA2OS40MzAyMjIsMCBjIC03Ljc2NjEzNywwIC0xNC4zNjMxNTksLTUuMDg2NTc5IC0xNi42NDQxNDMsLTEyLjEwMTc5MiBIIDY3LjI1NzkzNSBjIC0zLjg2Mjk4OCwwIC02Ljk5NTIxNywtMy4xMjkxNSAtNywtNi45OTE3OTggbCAtMC4wMDQ4LC00LjEwODA1NSBjIDAsLTEyLjc2NTA4NyAtMTAuMzc4MzIzLC0yMy4xNDM0MSAtMjMuMTM0ODY1LC0yMy4xNDM0MSBIIDI1LjYwODYxOCBjIC0zLjg2NTcyMywwIC03LC0zLjEzMzkzNCAtNywtNyAwLC0zLjg2NjA2NiAzLjEzNDI3NywtNyA3LC03IGggMi40OTg1MzUgViAyNy43NDQwOCBoIC0yLjQ5ODUzNSBjIC0zLjg2NTcyMywwIC03LC0zLjEzMzkzNiAtNywtNyAwLC0zLjg2NjA2NCAzLjEzNDI3NywtNyA3LC03IGggMzguMzY3Mzg2IGMgMy4yMzEzNSwwIDYuMDQyOTY1LDIuMjEyMTA5IDYuODAzODA2LDUuMzUzMjIyIGwgNi4xOTIzMzcsMjUuNTgyODEzIGggMjYuNDE1MDgzIGMgNS4yNDU5LDAgOS41MTM1Nyw0LjI2NzY3NyA5LjUxMzU3LDkuNTEzNTczIHYgMTAuNDQ2ODkxIGMgNS4zMjg2MiwzLjAwMzExMyA4LjkzNzQ4LDguNzEzMzAzIDguOTM3NDgsMTUuMjUzNjMyIDAsOS42NDk1MjEgLTcuODUwMzksMTcuNSAtMTcuNSwxNy41IHoiCiAgIGlkPSJwYXRoMzkzIiAvPgoJCTwvZz4KCTwvZz4KCQo8L2c+Cjwvc3ZnPgo="},9273:(M,N,I)=>{I.d(N,{Z:()=>g});const g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDUuOTk3NjUwMSAxMTEuMzYyMzgxOyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczE4MSI+CgkKCQo8L2RlZnM+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMTQ4Ij4KCS5zdDB7ZmlsbDojMzg0NzQ1O30KCS5zdDF7ZmlsbDojMkU2OEU5O30KPC9zdHlsZT4KPGcKICAgaWQ9ImcxNTYiPgoJCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDE2My44MTk4NSwzMC4zMTM5MDggaCAyMC44MDI5NSBjIDkuODc3NzMsMCAxNi41Mzc2LDQuNzg5MDU4IDE2LjUzNzYsMTQuMDY3NTU4IDAsNy41NTg3MjcgLTUuMTYyOTgsMTIuMTIzNjggLTEwLjE3NzM3LDEzLjY5NDg2MiAxLjQ5Njg5LDEuMjcxNTYxIDIuNjE5ODYsMi45OTI1NTQgMy41MTc1LDQuNzg5MDU5IDIuMDk0OTEsNC4yNjUzMzUgMy41MTYyOSw4Ljk3ODg4MiA3LjkzMTQzLDguOTc4ODgyIDEuMTIyOTcsMCAyLjAyMDYyLC0wLjM3MzkxNyAyLjAyMDYyLC0wLjM3MzkxNyBsIC0wLjk3MzE2LDguOTA0NTc5IGMgMCwwIC0yLjY5Mjk0LDAuNjczNTM5IC01LjAxMzE3LDAuNjczNTM5IC01Ljk4NjMzLDAgLTkuNDI4MzIsLTIuMzIwMjM3IC0xMi45NDU4LC0xMC4zMjcxNzIgLTEuNDk1NjksLTMuNTkwNTc2IC0zLjU5MTgsLTkuODc3NzQzIC02LjM2MDI1LC05Ljg3Nzc0MyBoIC0yLjg0Mzk2IHYgMTkuOTc5NTg4IGggLTEyLjQ5NjM5IHogbSAxMi40OTYzOSw5LjA1NDM5MyB2IDEyLjQyMDg2NCBoIDQuNDkwNjYgYyAzLjU5MTc4LDAgNy43ODE2LC0xLjEyMTc1MyA3Ljc4MTYsLTYuNTA4ODM0IDAsLTQuNDE1MTQ2IC0yLjg0Mjc0LC01LjkxMjAzIC02LjI4NTkzLC01LjkxMjAzIHoiCiAgIGlkPSJwYXRoMTUwIiAvPgoJCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDIwOS42OTEwNywzMC4zMTM5MDggaCAxMi40OTYzNyB2IDE0LjE0MzA3NCBjIDAsMS41NzExODIgLTAuMjI0MTEsMy44OTAxOTcgLTAuMzczOTIsNS42MTI0MDcgaCAwLjI5OTYyIGMgMC44MjMzNSwtMS4yNzE1NiAxLjg3MDgxLC0zLjIxNzg3NiAzLjE0MjM3LC00LjcxNDc2MyBMIDIzNy42MDMzLDMwLjMxMzkwOCBoIDEzLjQ2ODMxIGwgLTE2LjQ2MjA4LDE5LjgyOTc3NiAxNy4zNjA5NCwzMC42Nzk0NTkgSCAyMzcuNjAzMyBsIC0xMS42NzQyNSwtMjEuMTc1NjMyIC0zLjc0MTYxLDQuNTY0OTUyIHYgMTYuNjEwNjggaCAtMTIuNDk2MzcgeiIKICAgaWQ9InBhdGgxNTIiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gMjU1LjkzNzQxLDMwLjMxMzkyNyBoIDMzLjQ0NzkgdiA5LjI3ODQ5MiBIIDI2OC40MzM3OCBWIDUwLjQ0MzMxIGggMTcuNTg1MDUgdiA5LjI3ODQ5MiBoIC0xNy41ODUwNSB2IDExLjgyMjgzIGggMjEuNzAwNTkgdiA5LjI3ODQ5NiBoIC0zNC4xOTY5NiB6IgogICBpZD0icGF0aDE1NCIgLz4KCQk8cGF0aAogICBjbGFzcz0ic3QwIgogICBkPSJtIDMzMS45OTc2NSw4MC42NDg4MTEgaCAtMzcuMzAwNzggdiAtOC44NTUyOTMgbCAxMi41NTA3OCwtMTIuMjk1MjIzIGMgMy41ODU5NCwtMy42MzI5NDIgNS45Mjk2OSwtNi4xMTM1NTYgNy4wMzEyNSwtNy40NDE4NDkgMS4xMDE1NiwtMS4zMjgyOTMgMS44NjkxNCwtMi40NjkyNjUgMi4zMDI3MywtMy40MjI5MDkgMC40MzM2LC0wLjk1MzY0NyAwLjY1MDQsLTEuOTUyNzA1IDAuNjUwNCwtMi45OTcxNzcgMCwtMS4yOTQyMzEgLTAuNDMzNiwtMi4zMTU5OTggLTEuMzAwNzksLTMuMDY1MjkyIC0wLjg2NzE4LC0wLjc0OTI5MSAtMi4wODU5MywtMS4xMjM5NCAtMy42NTYyNSwtMS4xMjM5NCAtMS42MTcxOCwwIC0zLjI1MTk1LDAuNDQ4NDQxIC00LjkwNDI5LDEuMzQ1MzI2IC0xLjY1MjM1LDAuODk2ODgxIC0zLjUyMTQ5LDIuMjE5NDk3IC01LjYwNzQyLDMuOTY3ODQ5IGwgLTcuNjI4OTEsLTguNjUwOTM2IGMgMi42NDg0NCwtMi4yOTMyOTMgNC44NzUsLTMuOTMzNzkyIDYuNjc5NjksLTQuOTIxNDk3IDEuODA0NjgsLTAuOTg3NzA1IDMuNzY3NTcsLTEuNzQyNjc2IDUuODg4NjcsLTIuMjY0OTEgMi4xMjEwOSwtMC41MjIyMzYgNC41MDU4NiwtMC43ODMzNTIgNy4xNTQzLC0wLjc4MzM1MiAzLjMyODEyLDAgNi4yOTg4MiwwLjU2NzY0NiA4LjkxMjEsMS43MDI5NCAyLjYxMzI5LDEuMTM1MjkzIDQuNjQwNjMsMi43NTMwODcgNi4wODIwNCw0Ljg1MzM3OSAxLjQ0MTQsMi4xMDAyOTIgMi4xNjIxMSw0LjQ1NjAyOCAyLjE2MjExLDcuMDY3MTk5IDAsMS45NTI3MDYgLTAuMjUxOTYsMy43NTc4MjQgLTAuNzU1ODYsNS40MTUzNTIgLTAuNTAzOTEsMS42NTc1MjggLTEuMjgzMjEsMy4yODY2NzUgLTIuMzM3ODksNC44ODc0MzYgLTEuMDU0NjksMS42MDA3NjUgLTIuNDU1MDgsMy4yODY2NzUgLTQuMjAxMTgsNS4wNTc3MzIgLTEuNzQ2MDksMS43NzEwNTcgLTUuNDY2NzksNS4xMzE1MjcgLTExLjE2MjExLDEwLjA4MTQwMiB2IDAuMzQwNTkxIGggMTkuNDQxNDEgeiIKICAgaWQ9InBhdGgxNzIiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIpIiAvPjwvZz48ZwogICBpZD0iZzE2OCI+CgkJCTxjaXJjbGUKICAgY2xhc3M9InN0MSIKICAgY3g9IjM0LjkwODA1OCIKICAgY3k9Ijc2LjM5NDIxMSIKICAgcj0iNyIKICAgaWQ9ImNpcmNsZTE1OCIgLz4KCQkJPHBhdGgKICAgY2xhc3M9InN0MSIKICAgZD0ibSA3MS40NTg2MTgsNTguNjgxODI0IGMgLTAuMjA5MTgyLDAgLTAuNDE2OTkyLC0wLjAxMDgxIC0wLjYyMzA5MiwtMC4wMjk0IDEuODAzNDg5LDMuODk5MTc3IDIuOTU4OTMxLDguMTU2ODk4IDMuMzA2MTk4LDEyLjYzOTk5MSBIIDg5LjEwNzMgYyAyLjEzMzY2NywtMy43NjMwNTQgNS42MTg5NzMsLTYuNjYwNjgyIDkuNzkzNTAzLC04LjAyOTAyMiBWIDU4LjY4MDExNSBIIDcxLjQ4NzMyOCBjIC0wLjAwOTQsNC4yZS01IC0wLjAxOTE0LDAuMDAxNyAtMC4wMjg3MSwwLjAwMTcgeiIKICAgaWQ9InBhdGgxNjAiIC8+CgkJCTxwYXRoCiAgIGNsYXNzPSJzdDEiCiAgIGQ9Im0gNDIuMTA3MTU1LDI3Ljc0NDA4IHYgOS42NDY0MDQgYyA4LjI0NDMwOCwxLjExMjQyMyAxNS42MzY4NjQsNC45MzgxMSAyMS4yNDkxNjgsMTAuNTQ5MzA1IEwgNTguNDY4Mjg1LDI3Ljc0NDA4IFoiCiAgIGlkPSJwYXRoMTYyIiAvPgoJCQk8Y2lyY2xlCiAgIGNsYXNzPSJzdDEiCiAgIGN4PSIxMDQuMzM4MjgiCiAgIGN5PSI3OS44OTQyMTEiCiAgIHI9IjMuNSIKICAgaWQ9ImNpcmNsZTE2NCIgLz4KCQkJPHBhdGgKICAgY2xhc3M9InN0MSIKICAgZD0iTSAxMjEuNTg2ODksMCBIIDE0LjM5MjM4MyBDIDYuNDc2NTM4MiwwIDAsNi40NzY2MjM1IDAsMTQuMzkyNDY5IHYgODIuNTc3NDM4IGMgMCw3LjkxNTg0MyA2LjQ3NjUzODIsMTQuMzkyNDczIDE0LjM5MjM4MywxNC4zOTI0NzMgSCAxMjEuNTg2ODkgYyA3LjkxNTg0LDAgMTQuMzkyMzksLTYuNDc2NjMgMTQuMzkyMzksLTE0LjM5MjQ3MyBWIDE0LjM5MjQ2OSBDIDEzNS45NzkyOCw2LjQ3NjYyMzUgMTI5LjUwMjczLDAgMTIxLjU4Njg5LDAgWiBNIDM0LjkwODA1OCw5Ny4zOTQyMTEgYyAtMTEuNTc5Mzk1LDAgLTIxLjAwMDAwMiwtOS40MjA1NjMgLTIxLjAwMDAwMiwtMjEgMCwtMTEuNTc5NDM4IDkuNDIwNjA3LC0yMS4wMDAwMDQgMjEuMDAwMDAyLC0yMS4wMDAwMDQgMTEuNTc5Mzk1LDAgMjEsOS40MjA1NjcgMjEsMjEuMDAwMDA0IDAsMTEuNTc5NDM3IC05LjQyMDYwOCwyMSAtMjEsMjEgeiBtIDY5LjQzMDIyMiwwIGMgLTcuNzY2MTM3LDAgLTE0LjM2MzE1OSwtNS4wODY1NzkgLTE2LjY0NDE0MywtMTIuMTAxNzkyIEggNjcuMjU3OTM1IGMgLTMuODYyOTg4LDAgLTYuOTk1MjE3LC0zLjEyOTE1IC03LC02Ljk5MTc5OCBsIC0wLjAwNDgsLTQuMTA4MDU1IGMgMCwtMTIuNzY1MDg3IC0xMC4zNzgzMjMsLTIzLjE0MzQxIC0yMy4xMzQ4NjUsLTIzLjE0MzQxIEggMjUuNjA4NjE4IGMgLTMuODY1NzIzLDAgLTcsLTMuMTMzOTM0IC03LC03IDAsLTMuODY2MDY2IDMuMTM0Mjc3LC03IDcsLTcgaCAyLjQ5ODUzNSBWIDI3Ljc0NDA4IGggLTIuNDk4NTM1IGMgLTMuODY1NzIzLDAgLTcsLTMuMTMzOTM2IC03LC03IDAsLTMuODY2MDY0IDMuMTM0Mjc3LC03IDcsLTcgaCAzOC4zNjczODYgYyAzLjIzMTM1LDAgNi4wNDI5NjUsMi4yMTIxMDkgNi44MDM4MDYsNS4zNTMyMjIgbCA2LjE5MjMzNywyNS41ODI4MTMgaCAyNi40MTUwODMgYyA1LjI0NTksMCA5LjUxMzU3LDQuMjY3Njc3IDkuNTEzNTcsOS41MTM1NzMgdiAxMC40NDY4OTEgYyA1LjMyODYyLDMuMDAzMTEzIDguOTM3NDgsOC43MTMzMDMgOC45Mzc0OCwxNS4yNTM2MzIgMCw5LjY0OTUyMSAtNy44NTAzOSwxNy41IC0xNy41LDE3LjUgeiIKICAgaWQ9InBhdGgxNjYiIC8+CgkJPC9nPgo8L3N2Zz4K"},1151:(M,N,I)=>{I.d(N,{Z:()=>T,a:()=>D});var g=I(7294);const j={},z=g.createContext(j);function D(M){const N=g.useContext(z);return g.useMemo((function(){return"function"==typeof M?M(N):{...N,...M}}),[N,M])}function T(M){let N;return N=M.disableParentContext?"function"==typeof M.components?M.components(j):M.components||j:D(M.components),g.createElement(z.Provider,{value:N},M.children)}}}]);