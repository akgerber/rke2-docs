"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[594],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9076:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={title:"FIPS 140-2 Enablement"},s=void 0,p={unversionedId:"security/fips_support",id:"security/fips_support",title:"FIPS 140-2 Enablement",description:"FIPS 140-2 is a U.S. Federal Government security standard used to approve cryptographic modules. This document explains how RKE2 is built with FIPS validated cryptographic libraries.",source:"@site/docs/security/fips_support.md",sourceDirName:"security",slug:"/security/fips_support",permalink:"/rke2-docs/security/fips_support",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/fips_support.md",tags:[],version:"current",lastUpdatedAt:1664899161,formattedLastUpdatedAt:"10/4/2022",frontMatter:{title:"FIPS 140-2 Enablement"},sidebar:"mySidebar",previous:{title:"CIS 1.6 Self-Assessment Guide",permalink:"/rke2-docs/security/cis_self_assessment16"},next:{title:"Default Policy Configuration",permalink:"/rke2-docs/security/policies"}},c={},u=[{value:"Use of FIPS Compatible Go compiler.",id:"use-of-fips-compatible-go-compiler",level:2},{value:"FIPS Support in Cluster Components",id:"fips-support-in-cluster-components",level:3},{value:"Runtime",id:"runtime",level:2},{value:"CNI",id:"cni",level:2},{value:"Ingress",id:"ingress",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FIPS 140-2 is a U.S. Federal Government security standard used to approve cryptographic modules. This document explains how RKE2 is built with FIPS validated cryptographic libraries."),(0,o.kt)("h2",{id:"use-of-fips-compatible-go-compiler"},"Use of FIPS Compatible Go compiler."),(0,o.kt)("p",null,"The Go compiler in use can be found ",(0,o.kt)("a",{parentName:"p",href:"https://go.googlesource.com/go/+/dev.boringcrypto"},"here"),". Each component of the system is built with the version of this compiler that matches the same standard Go compiler version that would be used otherwise."),(0,o.kt)("p",null,"This version of Go replaces the standard Go crypto libraries with the FIPS validated BoringCrypto module. See GoBoring's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/blob/dev.boringcrypto/README.boringcrypto.md"},"readme")," for more details. This module has been revalidated as the ",(0,o.kt)("a",{parentName:"p",href:"https://csrc.nist.gov/projects/cryptographic-module-validation-program/certificate/3836"},"Rancher Kubernetes Cryptographic Library")," in order to ensure support on a wider range of systems."),(0,o.kt)("h3",{id:"fips-support-in-cluster-components"},"FIPS Support in Cluster Components"),(0,o.kt)("p",null,"Most of the components of the RKE2 system are statically compiled with the GoBoring Go compiler implementation. RKE2, from a component perspective, is broken up in a number of sections. The list below contains the sections and associated components."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kubernetes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"API Server"),(0,o.kt)("li",{parentName:"ul"},"Controller Manager"),(0,o.kt)("li",{parentName:"ul"},"Scheduler"),(0,o.kt)("li",{parentName:"ul"},"Kubelet"),(0,o.kt)("li",{parentName:"ul"},"Kube Proxy"),(0,o.kt)("li",{parentName:"ul"},"Metric Server"),(0,o.kt)("li",{parentName:"ul"},"Kubectl"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Helm Charts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Flannel"),(0,o.kt)("li",{parentName:"ul"},"Calico"),(0,o.kt)("li",{parentName:"ul"},"CoreDNS")))),(0,o.kt)("h2",{id:"runtime"},"Runtime"),(0,o.kt)("p",null,"To ensure that all aspects of the system architecture are using FIPS 140-2 compliant algorithm implementations, the RKE2 runtime contains utilities statically compiled with the FIPS enabled Go compiler for FIPS 140-2 compliance. This ensures that all levels of the stack are compliant from Kubernetes daemons to container orchestration mechanics."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"etcd"),(0,o.kt)("li",{parentName:"ul"},"containerd",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"containerd-shim"),(0,o.kt)("li",{parentName:"ul"},"containerd-shim-runc-v1"),(0,o.kt)("li",{parentName:"ul"},"containerd-shim-runc-v2"),(0,o.kt)("li",{parentName:"ul"},"ctr"))),(0,o.kt)("li",{parentName:"ul"},"crictl"),(0,o.kt)("li",{parentName:"ul"},"runc")),(0,o.kt)("h2",{id:"cni"},"CNI"),(0,o.kt)("p",null,"As of v1.21.2, RKE2 supports selecting a different CNI via the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cni")," flag and comes bundled with several CNIs including Canal (default), Calico, Cilium, and Multus. Of these, only Canal (the default) is rebuilt for FIPS compliance."),(0,o.kt)("h2",{id:"ingress"},"Ingress"),(0,o.kt)("p",null,"RKE2 ships with NGNIX as its default ingress provider. As of v1.21+, this component is FIPS compliant. There are two primary sub-components for NGINX ingress:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"controller - responsible for monitoring/updating Kubernetes resources and configuring the server accordingly"),(0,o.kt)("li",{parentName:"ul"},"server - responsible for accepting and routing traffic")),(0,o.kt)("p",null,"The controller is written in Go and as such is compiled using our ",(0,o.kt)("a",{parentName:"p",href:"/rke2-docs/security/fips_support#use-of-fips-compatible-go-compiler"},"FIPS compatible Go compiler"),"."),(0,o.kt)("p",null,"The server is written in C and also requires OpenSSL to function properly. As such, it leverages a FIPS-validated version of OpenSSL to achieve FIPS compliance."))}d.isMDXComponent=!0}}]);