"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[486],{156:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var i=s(5893),r=s(1151);const c={sidebar_label:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236",title:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236"},l=void 0,t={id:"known_issues",title:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 RKE2 \u5f53\u524d\u5df2\u77e5\u7684\u95ee\u9898\u548c\u9650\u5236\u3002\u5982\u679c\u4f60\u9047\u5230\u672c\u6587\u672a\u8bb0\u5f55\u7684 RKE2 \u95ee\u9898\uff0c\u8bf7\u63d0\u4ea4\u4e00\u4e2a\u65b0 issue\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/known_issues.md",sourceDirName:".",slug:"/known_issues",permalink:"/zh/known_issues",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/known_issues.md",tags:[],version:"current",lastUpdatedAt:1701884279,formattedLastUpdatedAt:"2023\u5e7412\u67086\u65e5",frontMatter:{sidebar_label:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236",title:"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236"},sidebar:"mySidebar",previous:{title:"v1.28.X",permalink:"/zh/release-notes/v1.28.X"}},o={},a=[{value:"firewalld \u4e0e\u9ed8\u8ba4\u7f51\u7edc\u51b2\u7a81",id:"firewalld-\u4e0e\u9ed8\u8ba4\u7f51\u7edc\u51b2\u7a81",level:2},{value:"NetworkManager",id:"networkmanager",level:2},{value:"Selinux \u6267\u884c\u7cfb\u7edf\u4e2d\u7684 Istio \u9ed8\u8ba4\u5931\u8d25",id:"selinux-\u6267\u884c\u7cfb\u7edf\u4e2d\u7684-istio-\u9ed8\u8ba4\u5931\u8d25",level:2},{value:"Control Groups V2",id:"control-groups-v2",level:2},{value:"Calico \u4e0e vxlan \u5c01\u88c5",id:"calico-\u4e0e-vxlan-\u5c01\u88c5",level:2},{value:"Wicked",id:"wicked",level:2},{value:"Canal \u548c IP \u5730\u5740\u67af\u7aed",id:"canal-\u548c-ip-\u5730\u5740\u67af\u7aed",level:2},{value:"CIS \u6a21\u5f0f\u4e0b\u7684 Ingress",id:"cis-\u6a21\u5f0f\u4e0b\u7684-ingress",level:2},{value:"\u5c06\u5f3a\u5316\u96c6\u7fa4\u4ece v1.24.x \u5347\u7ea7\u5230 v1.25.x",id:"hardened-125",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u672c\u6587\u4ecb\u7ecd\u4e86 RKE2 \u5f53\u524d\u5df2\u77e5\u7684\u95ee\u9898\u548c\u9650\u5236\u3002\u5982\u679c\u4f60\u9047\u5230\u672c\u6587\u672a\u8bb0\u5f55\u7684 RKE2 \u95ee\u9898\uff0c\u8bf7",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues",children:"\u63d0\u4ea4\u4e00\u4e2a\u65b0 issue"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"firewalld-\u4e0e\u9ed8\u8ba4\u7f51\u7edc\u51b2\u7a81",children:"firewalld \u4e0e\u9ed8\u8ba4\u7f51\u7edc\u51b2\u7a81"}),"\n",(0,i.jsx)(n.p,{children:"Firewalld \u4e0e RKE2 \u7684\u9ed8\u8ba4 Canal\uff08Calico + Flannel\uff09\u7f51\u7edc\u5806\u6808\u51b2\u7a81\u3002\u4e3a\u907f\u514d\u610f\u5916\uff0c\u8bf7\u5728\u8fd0\u884c RKE2 \u7684\u7cfb\u7edf\u4e0a\u7981\u7528 firewalld\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"networkmanager",children:"NetworkManager"}),"\n",(0,i.jsxs)(n.p,{children:["NetworkManager \u4f1a\u63a7\u5236\u9ed8\u8ba4\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u4e2d\u63a5\u53e3\u7684\u8def\u7531\u8868\uff0c\u5176\u4e2d\u8bb8\u591a CNI\uff08\u5305\u62ec RKE2 \u7684\u9ed8\u8ba4 CNI\uff09\u4f1a\u4e3a\u8fde\u63a5\u5230\u5bb9\u5668\u800c\u521b\u5efa veth \u5bf9\u3002\u8fd9\u4f1a\u5e72\u6270 CNI \u8fdb\u884c\u6b63\u786e\u8def\u7531\u3002\u56e0\u6b64\uff0c\u5982\u679c\u5728\u542f\u7528 NetworkManager \u7684\u7cfb\u7edf\u4e0a\u5b89\u88c5 RKE2\uff0c\u5f3a\u70c8\u5efa\u8bae\u4f60\u5c06 NetworkManager \u914d\u7f6e\u4e3a\u5ffd\u7565 calico/flannel \u76f8\u5173\u7684\u7f51\u7edc\u63a5\u53e3\u3002\u4e3a\u6b64\uff0c\u5728 ",(0,i.jsx)(n.code,{children:"/etc/NetworkManager/conf.d"})," \u4e2d\u521b\u5efa\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"rke2-canal.conf"})," \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[keyfile]\nunmanaged-devices=interface-name:cali*;interface-name:flannel*\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 RKE2\uff0c\u4f7f\u7528\u7b80\u5355\u7684 ",(0,i.jsx)(n.code,{children:"systemctl reload NetworkManager"})," \u5c31\u8db3\u4ee5\u5b89\u88c5\u914d\u7f6e\u3002\u5982\u679c\u5728\u5df2\u5b89\u88c5 RKE2 \u7684\u7cfb\u7edf\u4e0a\u6267\u884c\u6b64\u914d\u7f6e\u66f4\u6539\uff0c\u5219\u9700\u8981\u91cd\u542f\u8282\u70b9\u624d\u80fd\u5e94\u7528\u66f4\u6539\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u67d0\u4e9b\u64cd\u4f5c\u7cfb\u7edf\uff08\u5982 RHEL 8.4\uff09\u4e2d\uff0cNetworkManager \u5305\u542b\u4e24\u4e2a\u989d\u5916\u7684\u670d\u52a1\uff0c\u5206\u522b\u79f0\u4e3a ",(0,i.jsx)(n.code,{children:"nm-cloud-setup.service"})," \u548c ",(0,i.jsx)(n.code,{children:"nm-cloud-setup.timer"}),"\u3002\u8fd9\u4e9b\u670d\u52a1\u589e\u52a0\u4e86\u4e00\u4e2a\u8def\u7531\u8868\uff0c\u5e72\u6270\u4e86 CNI \u63d2\u4ef6\u7684\u914d\u7f6e\u3002\u4f46\u662f\uff0c\u73b0\u5728\u6ca1\u6709\u53ef\u4ee5\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\u7684\u4efb\u4f55\u914d\u7f6e\uff0c\u5982",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues",children:"\u95ee\u9898"}),"\u4e2d\u6240\u8ff0\u3002\u56e0\u6b64\uff0c\u5982\u679c\u5b58\u5728\u8fd9\u4e9b\u670d\u52a1\uff0c\u5219\u5e94\u5c06\u5176\u7981\u7528\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u5728 NetworkManager-1.30.0-11.el8_4 \u4e4b\u524d\uff0c\u8282\u70b9\u4e5f\u5fc5\u987b\u5728\u7981\u7528\u989d\u5916\u670d\u52a1\u540e\u91cd\u542f\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"selinux-\u6267\u884c\u7cfb\u7edf\u4e2d\u7684-istio-\u9ed8\u8ba4\u5931\u8d25",children:"Selinux \u6267\u884c\u7cfb\u7edf\u4e2d\u7684 Istio \u9ed8\u8ba4\u5931\u8d25"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u662f\u7531 RKE2 \u7684\u5b9e\u65f6\u5185\u6838\u6a21\u5757\u52a0\u8f7d\u5bfc\u81f4\u7684\uff0c\u9664\u975e\u5bb9\u5668\u5177\u6709\u7279\u6743\uff0c\u5426\u5219\u5728 Selinux \u4e0b\u4e0d\u5141\u8bb8\u8fd9\u6837\u505a\u3002\n\u8981\u8ba9 Istio \u5728\u8fd9\u4e9b\u6761\u4ef6\u4e0b\u8fd0\u884c\uff0c\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://istio.io/latest/docs/setup/additional-setup/cni/",children:"\u542f\u7528 CNI"})," \u4f5c\u4e3a Istio \u5b89\u88c5\u7684\u4e00\u90e8\u5206\u3002\u8bf7\u6ce8\u610f\uff0c\u6b64",(0,i.jsx)(n.a,{href:"https://istio.io/latest/about/feature-stages/",children:"\u529f\u80fd"}),"\u5728\u64b0\u5199\u672c\u6587\u65f6\u4ecd\u5904\u4e8e Alpha \u72b6\u6001\u3002\n\u786e\u4fdd ",(0,i.jsx)(n.code,{children:"values.cni.cniBinDir=/opt/cni/bin"})," \u548c ",(0,i.jsx)(n.code,{children:"values.cni.cniConfDir=/etc/cni/net.d"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\uff0cCrashLoopBackoff \u4e2d\u5e94\u8be5\u6709 ",(0,i.jsx)(n.code,{children:"cni-node"})," pod\u3002\u624b\u52a8\u7f16\u8f91\u4ed6\u4eec\u7684\u5b88\u62a4\u8fdb\u7a0b\u4ee5\u5728 ",(0,i.jsx)(n.code,{children:"install-cni"})," \u5bb9\u5668\u4e2d\u5305\u542b ",(0,i.jsx)(n.code,{children:"securityContext.privileged: true"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u8986\u76d6\u6765\u6267\u884c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n      k8s:\n        overlays:\n        - apiVersion: "apps/v1"\n          kind: "DaemonSet"\n          name: "istio-cni-node"\n          patches:\n          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged\n            value: true\n  values:\n    cni:\n      image: rancher/mirrored-istio-install-cni:1.9.3\n      excludeNamespaces:\n      - istio-system\n      - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u5173\u4e0d\u9075\u5faa\u8fd9\u4e9b\u6b65\u9aa4\u65f6\u6545\u969c\u7684\u8be6\u7ec6\u65e5\u5fd7\uff0c\u8bf7\u53c2\u9605 ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues",children:"issue 504"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"control-groups-v2",children:"Control Groups V2"}),"\n",(0,i.jsxs)(n.p,{children:["RKE2 v1.19.5+ \u5185\u7f6e ",(0,i.jsx)(n.code,{children:"containerd"})," v1.4.x \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u56e0\u6b64\u5e94\u8be5\u5728\u652f\u6301 cgroups v2 \u7684\u7cfb\u7edf\u4e0a\u8fd0\u884c\u3002",(0,i.jsx)(n.br,{}),"\n","\u65e7\u7248\u672c (< 1.19.5) \u5185\u7f6e containerd 1.3.x \u5206\u652f\uff08\u4ece 1.4.x \u5411\u540e\u79fb\u690d SELinux commits\uff09\uff0c\u5b83\u4e0d\u652f\u6301 cgroups v2\uff0c\u9700\u8981\u4e00\u4e9b\u524d\u671f\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u8bbe\u4f7f\u7528\u57fa\u4e8e ",(0,i.jsx)(n.code,{children:"systemd"})," \u7684\u7cfb\u7edf\uff0c\u8bbe\u7f6e ",(0,i.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.html#systemd.unified_cgroup_hierarchy",children:"systemd.unified_cgroup_hierarchy=0"})," \u5185\u6838\u53c2\u6570\u5c06\u5411 systemd \u8868\u660e\u5b83\u5e94\u8be5\u4ee5\u6df7\u5408 (cgroups v1 + v2) \u65b9\u5f0f\u8fd0\u884c\u3002\n\u7ed3\u5408\u4e0a\u8ff0\u60c5\u51b5\uff0c\u8bbe\u7f6e ",(0,i.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.html#systemd.legacy_systemd_cgroup_controller",children:"systemd.legacy_systemd_cgroup_controller"})," \u5185\u6838\u53c2\u6570\u5c06\u5411 systemd \u8868\u660e\u5b83\u5e94\u8be5\u4ee5\u65e7\u7248\uff08cgroups v1\uff09\u7684\u65b9\u5f0f\u8fd0\u884c\u3002\n\u7531\u4e8e\u8fd9\u4e9b\u53c2\u6570\u662f\u5185\u6838\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u56e0\u6b64\u5fc5\u987b\u5728\u7cfb\u7edf\u5f15\u5bfc\u7a0b\u5e8f\u4e2d\u8bbe\u7f6e\uff0c\u4ee5\u4fbf\u5728 ",(0,i.jsx)(n.code,{children:"/sbin/init"})," \u4f5c\u4e3a PID 1 \u4f20\u9012\u7ed9 ",(0,i.jsx)(n.code,{children:"systemd"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u53c2\u9605\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.gnu.org/software/grub/manual/grub/grub.html#linux",children:"grub2 \u624b\u518c"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.html#Kernel%20Command%20Line",children:"systemd \u624b\u518c"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html",children:"cgroups v2"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"calico-\u4e0e-vxlan-\u5c01\u88c5",children:"Calico \u4e0e vxlan \u5c01\u88c5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 vxlan \u5c01\u88c5\u4ee5\u53ca\u542f\u7528\u4e86 vxlan \u63a5\u53e3\u7684\u6821\u9a8c\u548c\u5378\u8f7d\u65f6\uff0cCalico \u9047\u5230\u4e86\u4e00\u4e2a\u5185\u6838\u9519\u8bef\u3002\n",(0,i.jsx)(n.a,{href:"https://github.com/projectcalico/calico/issues/4865",children:"calico \u9879\u76ee"})," \u548c ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues",children:"rke2\u9879\u76ee"}),"\u4e2d\u63cf\u8ff0\u4e86\u8be5\u95ee\u9898\u3002\u6211\u4eec\u7684\u4e34\u65f6\u89e3\u51b3\u65b9\u6cd5\u662f\uff0c\u5728 ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-calico/rke2-calico/v3.25.001/values.yaml#L75-L76",children:"calico helm chart"})," \u4e2d\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"ChecksumOffloadBroken=true"})," \u7684\u503c\uff0c\u4ece\u800c\u9ed8\u8ba4\u7981\u7528\u6821\u9a8c\u548c\u5378\u8f7d\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u95ee\u9898\u5df2\u5728 Ubuntu 18.04\u3001Ubuntu 20.04 \u548c openSUSE Leap 15.3 \u4e2d\u53d1\u73b0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"wicked",children:"Wicked"}),"\n",(0,i.jsxs)(n.p,{children:["Wicked \u6839\u636e sysctl \u914d\u7f6e\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"/etc/sysctl.d/"})," \u76ee\u5f55\u4e0b\uff09\u914d\u7f6e\u4e3b\u673a\u7684\u7f51\u7edc\u8bbe\u7f6e\u3002\u5373\u4f7f RKE2 \u6b63\u5728\u5c06 ",(0,i.jsx)(n.code,{children:"/net/ipv4/conf/all/forwarding"})," \u4e4b\u7c7b\u7684\u53c2\u6570\u8bbe\u7f6e\u4e3a 1\uff0c\u4f46\u662f\u53ea\u8981\u91cd\u65b0\u5e94\u7528\u7f51\u7edc\u914d\u7f6e\uff08\u6709\u51e0\u4e2a\u4e8b\u4ef6\u4f1a\u5bfc\u81f4\u7f51\u7edc\u914d\u7f6e\u91cd\u65b0\u5e94\u7528\u4ee5\u53ca rcwicked \u5728\u66f4\u65b0\u671f\u95f4\u91cd\u542f\uff09\uff0cWicked \u5c31\u53ef\u4ee5\u6062\u590d\u8be5\u914d\u7f6e\u3002\u56e0\u6b64\uff0c\u5728 sysctl \u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528 ipv4\uff08\u548c\u53cc\u6808\u60c5\u51b5\u4e0b\u7684 ipv6\uff09\u8f6c\u53d1\u975e\u5e38\u91cd\u8981\u3002\u4f8b\u5982\uff0c\u5efa\u8bae\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"/etc/sysctl.d/90-rke2.conf"})," \u7684\u6587\u4ef6\uff0c\u6587\u4ef6\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff08\u4ec5\u5728\u53cc\u6808\u4e0b\u624d\u9700\u8981 ipv6\uff09\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"net.ipv4.conf.all.forwarding=1\nnet.ipv6.conf.all.forwarding=1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"canal-\u548c-ip-\u5730\u5740\u67af\u7aed",children:"Canal \u548c IP \u5730\u5740\u67af\u7aed"}),"\n",(0,i.jsx)(n.h2,{id:""}),"\n",(0,i.jsx)(n.p,{children:"\u4e24\u4e2a\u53ef\u80fd\u7684\u539f\u56e0\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iptables"})," \u4e8c\u8fdb\u5236\u6587\u4ef6\u672a\u5b89\u88c5\u5728\u4e3b\u673a\u4e2d\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u5b9a\u4e49 hostPort \u7684 pod\u3002Pod \u5c06\u83b7\u5f97\u4e00\u4e2a IP\uff0c\u4f46\u5b83\u7684\u521b\u5efa\u5c06\u5931\u8d25\uff0c\u800c\u4e14 Kubernetes \u4e0d\u4f1a\u505c\u6b62\u5c1d\u8bd5\u91cd\u65b0\u521b\u5efa\u5b83\uff0c\u6bcf\u6b21\u5c1d\u8bd5\u90fd\u4f1a\u6d88\u8017\u4e00\u4e2a IP\u3002containerd \u65e5\u5fd7\u4e2d\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u5982\u4e0b\u7684\u9519\u8bef\u4fe1\u606f\u3002\u8fd9\u662f\u663e\u793a\u9519\u8bef\u7684\u65e5\u5fd7\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'plugin type="portmap" failed (add): failed to open iptables: exec: "iptables": executable file not found in $PATH\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8bf7\u5b89\u88c5 iptables \u6216 xtables-nft \u5305\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCanal \u901a\u8fc7\u5728 ",(0,i.jsx)(n.code,{children:"/var/lib/cni/networks/k8s-pod-network"})," \u4e2d\u4e3a\u6bcf\u4e2a IP \u521b\u5efa\u4e00\u4e2a\u9501\u5b9a\u6587\u4ef6\u6765\u8ddf\u8e2a pod IP\u3002\u6bcf\u4e2a IP \u90fd\u5c5e\u4e8e\u4e00\u4e2a pod\uff0c\u4e00\u65e6 pod \u88ab\u5220\u9664\uff0cIP \u5c31\u4f1a\u88ab\u5220\u9664\u3002\u7136\u800c\uff0c\u4e07\u4e00 containerd \u65e0\u6cd5\u8ddf\u8e2a\u6b63\u5728\u8fd0\u884c\u7684 pod\uff0c\u9501\u5b9a\u6587\u4ef6\u53ef\u80fd\u4f1a\u6cc4\u9732\uff0cCanal \u5c06\u65e0\u6cd5\u518d\u91cd\u7528\u8fd9\u4e9b IP\u3002\u5982\u679c\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230 IP \u5730\u5740\u67af\u7aed\u7684\u9519\u8bef\uff0c\u4f8b\u5982\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"failed to allocate for range 0: no IP addresses available in range set\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u4ece\u8be5\u76ee\u5f55\u4e2d\u624b\u52a8\u5220\u9664\u672a\u4f7f\u7528\u7684 IP \u6216\u6e05\u7a7a\u8282\u70b9\uff0c\u8fd0\u884c rke2-killall.sh\uff0c\u542f\u52a8 rke2 systemd \u670d\u52a1\u5e76\u53d6\u6d88\u5bf9\u8282\u70b9\u7684\u5c01\u9501\u3002\u5982\u679c\u4f60\u9700\u8981\u6267\u884c\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u8bf7\u901a\u8fc7 GitHub \u62a5\u544a\u95ee\u9898\uff0c\u8bf7\u786e\u4fdd\u8bf4\u660e\u95ee\u9898\u662f\u5982\u4f55\u89e6\u53d1\u7684\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"cis-\u6a21\u5f0f\u4e0b\u7684-ingress",children:"CIS \u6a21\u5f0f\u4e0b\u7684 Ingress"}),"\n",(0,i.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53 RKE2 \u4f7f\u7528\u7531 ",(0,i.jsx)(n.code,{children:"profile"})," \u53c2\u6570\u9009\u62e9\u7684 CIS \u914d\u7f6e\u6587\u4ef6\u8fd0\u884c\u65f6\uff0c\u5b83\u4f1a\u5e94\u7528\u53ef\u4ee5\u9650\u5236 Ingress \u7684\u7f51\u7edc\u7b56\u7565\u3002\u6b64\u5916\uff0c",(0,i.jsx)(n.code,{children:"rke2-ingress-nginx"})," chart \u7684\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"hostNetwork: false"}),"\uff0c\u56e0\u6b64\uff0c\u7528\u6237\u9700\u8981\u8bbe\u7f6e\u81ea\u5df1\u7684\u7f51\u7edc\u7b56\u7565\u6765\u5141\u8bb8\u8bbf\u95ee Ingress URL\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7f51\u7edc\u7b56\u7565\u793a\u4f8b\uff0c\u8be5\u793a\u4f8b\u5141\u8bb8\u8fdb\u5165\u5b83\u6240\u5e94\u7528\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u3002\u6709\u5173\u66f4\u591a\u914d\u7f6e\u9009\u9879\uff0c\u8bf7\u53c2\u9605",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/",children:"\u6b64\u5904"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: ingress-to-backends\nspec:\n  podSelector: {}\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          kubernetes.io/metadata.name: kube-system\n      podSelector:\n        matchLabels:\n          app.kubernetes.io/name: rke2-ingress-nginx\n  policyTypes:\n  - Ingress\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues/3195",children:"\u6b64 issue"})," \u4e0a\u7684\u8bc4\u8bba\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"hardened-125",children:"\u5c06\u5f3a\u5316\u96c6\u7fa4\u4ece v1.24.x \u5347\u7ea7\u5230 v1.25.x"}),"\n",(0,i.jsxs)(n.p,{children:["Kubernetes \u4ece v1.25 \u4e2d\u5220\u9664\u4e86 PodSecurityPolicy\uff0c\u4ee5\u652f\u6301 Pod Security Standard\uff08PSS\uff09\u3002\u4f60\u53ef\u4ee5\u5728",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/",children:"\u4e0a\u6e38\u6587\u6863"}),"\u4e2d\u9605\u8bfb\u6709\u5173 PSS \u7684\u66f4\u591a\u4fe1\u606f\u3002\u5bf9\u4e8e RKE2\uff0c\u5982\u679c\u5728\u8282\u70b9\u4e0a\u8bbe\u7f6e\u4e86 ",(0,i.jsx)(n.code,{children:"profile"})," \u6807\u5fd7\uff0c\u5219\u5fc5\u987b\u624b\u52a8\u6267\u884c\u4e00\u4e9b\u6b65\u9aa4\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u6240\u6709\u8282\u70b9\u4e0a\uff0c\u5c06 ",(0,i.jsx)(n.code,{children:"profile"})," \u503c\u66f4\u65b0\u4e3a ",(0,i.jsx)(n.code,{children:"cis-1.23"}),"\uff0c\u4f46\u4e0d\u8981\u91cd\u542f\u6216\u5347\u7ea7 RKE2\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6b63\u5e38\u6267\u884c\u5347\u7ea7\u3002\u5982\u679c\u4f7f\u7528",(0,i.jsx)(n.a,{href:"/zh/upgrade/automated_upgrade",children:"\u81ea\u52a8\u5347\u7ea7"}),"\uff0c\u8bf7\u786e\u4fdd\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"system-upgrade-controller"})," pod \u7684\u547d\u540d\u7a7a\u95f4\u6309\u7167 ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-levels",children:"Pod \u5b89\u5168\u7ea7\u522b"}),"\u7684\u8981\u6c42\u8bbe\u7f6e\u4e3a privileged\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: system-upgrade\n  labels:\n    # This value must be privileged for the controller to run successfully.\n    pod-security.kubernetes.io/enforce: privileged\n    pod-security.kubernetes.io/enforce-version: v1.25\n    # We are setting these to our _desired_ `enforce` level, but note that these below values can be any of the available options.\n    pod-security.kubernetes.io/audit: privileged\n    pod-security.kubernetes.io/audit-version: v1.25\n    pod-security.kubernetes.io/warn: privileged\n    pod-security.kubernetes.io/warn-version: v1.25\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var i=s(7294);const r={},c=i.createContext(r);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);