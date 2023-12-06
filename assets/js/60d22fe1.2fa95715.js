"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6691],{7109:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(5893),t=s(1151);const r={sidebar_label:"Known Issues and Limits",title:"Known Issues and Limitations"},o=void 0,a={id:"known_issues",title:"Known Issues and Limitations",description:"This section contains current known issues and limitations with rke2. If you come across issues with rke2 not documented here, please open a new issue here.",source:"@site/docs/known_issues.md",sourceDirName:".",slug:"/known_issues",permalink:"/known_issues",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/known_issues.md",tags:[],version:"current",lastUpdatedAt:1701884279,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{sidebar_label:"Known Issues and Limits",title:"Known Issues and Limitations"},sidebar:"mySidebar",previous:{title:"v1.28.X",permalink:"/release-notes/v1.28.X"}},l={},c=[{value:"Firewalld conflicts with default networking",id:"firewalld-conflicts-with-default-networking",level:2},{value:"NetworkManager",id:"networkmanager",level:2},{value:"Istio in Selinux Enforcing System Fails by Default",id:"istio-in-selinux-enforcing-system-fails-by-default",level:2},{value:"Control Groups V2",id:"control-groups-v2",level:2},{value:"Calico with vxlan encapsulation",id:"calico-with-vxlan-encapsulation",level:2},{value:"Wicked",id:"wicked",level:2},{value:"Canal and IP exhaustion",id:"canal-and-ip-exhaustion",level:2},{value:"Ingress in CIS Mode",id:"ingress-in-cis-mode",level:2},{value:"Upgrading Hardened Clusters from v1.24.x to v1.25.x",id:"hardened-125",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This section contains current known issues and limitations with rke2. If you come across issues with rke2 not documented here, please open a new issue ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"firewalld-conflicts-with-default-networking",children:"Firewalld conflicts with default networking"}),"\n",(0,i.jsx)(n.p,{children:"Firewalld conflicts with RKE2's default Canal (Calico + Flannel) networking stack. To avoid unexpected behavior, firewalld should be disabled on systems running RKE2."}),"\n",(0,i.jsx)(n.h2,{id:"networkmanager",children:"NetworkManager"}),"\n",(0,i.jsxs)(n.p,{children:["NetworkManager manipulates the routing table for interfaces in the default network namespace where many CNIs, including RKE2's default, create veth pairs for connections to containers. This can interfere with the CNI\u2019s ability to route correctly. As such, if installing RKE2 on a NetworkManager enabled system, it is highly recommended to configure NetworkManager to ignore calico/flannel related network interfaces. In order to do this, create a configuration file called ",(0,i.jsx)(n.code,{children:"rke2-canal.conf"})," in ",(0,i.jsx)(n.code,{children:"/etc/NetworkManager/conf.d"})," with the contents:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[keyfile]\nunmanaged-devices=interface-name:cali*;interface-name:flannel*\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you have not yet installed RKE2, a simple ",(0,i.jsx)(n.code,{children:"systemctl reload NetworkManager"})," will suffice to install the configuration. If performing this configuration change on a system that already has RKE2 installed, a reboot of the node is necessary to effectively apply the changes."]}),"\n",(0,i.jsxs)(n.p,{children:["In some operating systems like RHEL 8.4, NetworkManager includes two extra services called ",(0,i.jsx)(n.code,{children:"nm-cloud-setup.service"})," and ",(0,i.jsx)(n.code,{children:"nm-cloud-setup.timer"}),".  These services add a routing table that interfere with the CNI plugin's configuration. Unfortunately, there is no config that can avoid that as explained in the ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues/1053",children:"issue"}),". Therefore, if those services exist, they should be disabled."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Before NetworkManager-1.30.0-11.el8_4, the node must also be rebooted after disabling the extra services."})}),"\n",(0,i.jsx)(n.h2,{id:"istio-in-selinux-enforcing-system-fails-by-default",children:"Istio in Selinux Enforcing System Fails by Default"}),"\n",(0,i.jsx)(n.p,{children:"This is due to just-in-time kernel module loading of rke2, which is disallowed under Selinux unless the container is privileged.\nTo allow Istio to run under these conditions, it requires two steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://istio.io/latest/docs/setup/additional-setup/cni/",children:"Enable CNI"})," as part of the Istio install. Please note that this ",(0,i.jsx)(n.a,{href:"https://istio.io/latest/about/feature-stages/",children:"feature"})," is still in Alpha state at the time of this writing.\nEnsure ",(0,i.jsx)(n.code,{children:"values.cni.cniBinDir=/opt/cni/bin"})," and ",(0,i.jsx)(n.code,{children:"values.cni.cniConfDir=/etc/cni/net.d"})]}),"\n",(0,i.jsxs)(n.li,{children:["After the install is complete, there should be ",(0,i.jsx)(n.code,{children:"cni-node"})," pods in a CrashLoopBackoff. Manually edit their daemonset to include ",(0,i.jsx)(n.code,{children:"securityContext.privileged: true"})," on the ",(0,i.jsx)(n.code,{children:"install-cni"})," container."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This can be performed via a custom overlay as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n      k8s:\n        overlays:\n        - apiVersion: "apps/v1"\n          kind: "DaemonSet"\n          name: "istio-cni-node"\n          patches:\n          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged\n            value: true\n  values:\n    cni:\n      image: rancher/mirrored-istio-install-cni:1.9.3\n      excludeNamespaces:\n      - istio-system\n      - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For more information regarding exact failures with detailed logs when not following these steps, please see ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues/504",children:"Issue 504"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"control-groups-v2",children:"Control Groups V2"}),"\n",(0,i.jsxs)(n.p,{children:["RKE2 v1.19.5+ ships with ",(0,i.jsx)(n.code,{children:"containerd"})," v1.4.x or later, hence should run on cgroups v2 capable systems.",(0,i.jsx)(n.br,{}),"\n","Older versions (< 1.19.5) are shipped with containerd 1.3.x fork (with back-ported SELinux commits from 1.4.x)\nwhich does not support cgroups v2 and requires a little up-front configuration:"]}),"\n",(0,i.jsxs)(n.p,{children:["Assuming a ",(0,i.jsx)(n.code,{children:"systemd"}),"-based system, setting the ",(0,i.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.html#systemd.unified_cgroup_hierarchy",children:"systemd.unified_cgroup_hierarchy=0"}),"\nkernel parameter will indicate to systemd that it should run with hybrid (cgroups v1 + v2) support.\nCombined with the above, setting the ",(0,i.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.html#systemd.legacy_systemd_cgroup_controller",children:"systemd.legacy_systemd_cgroup_controller"}),"\nkernel parameter will indicate to systemd that it should run with legacy (cgroups v1) support.\nAs these are kernel command-line arguments they must be set in the system bootloader so that they will be\npassed to ",(0,i.jsx)(n.code,{children:"systemd"})," as PID 1 at ",(0,i.jsx)(n.code,{children:"/sbin/init"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"See:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.gnu.org/software/grub/manual/grub/grub.html#linux",children:"grub2 manual"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.html#Kernel%20Command%20Line",children:"systemd manual"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html",children:"cgroups v2"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"calico-with-vxlan-encapsulation",children:"Calico with vxlan encapsulation"}),"\n",(0,i.jsxs)(n.p,{children:["Calico hits a kernel bug when using vxlan encapsulation and the checksum offloading of the vxlan interface is on.\nThe issue is described in the ",(0,i.jsx)(n.a,{href:"https://github.com/projectcalico/calico/issues/4865",children:"calico project"})," and in\n",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues/1541",children:"rke2 project"}),". The workaround we are applying is disabling the checksum\noffloading by default by applying the value ",(0,i.jsx)(n.code,{children:"ChecksumOffloadBroken=true"})," in the ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-calico/rke2-calico/v3.25.001/values.yaml#L75-L76",children:"calico helm chart"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This issue has been observed in Ubuntu 18.04, Ubuntu 20.04 and openSUSE Leap 15.3"}),"\n",(0,i.jsx)(n.h2,{id:"wicked",children:"Wicked"}),"\n",(0,i.jsxs)(n.p,{children:["Wicked configures the networking settings of the host based on the sysctl configuration files (e.g. under /etc/sysctl.d/ directory). Even though rke2 is setting parameters such as ",(0,i.jsx)(n.code,{children:"/net/ipv4/conf/all/forwarding"})," to 1, that configuration could be reverted by Wicked whenever it reapplies the network configuration (there are several events that result in reapplying the network configuration as well as rcwicked restart during updates). Consequently, it is very important to enable ipv4 (and ipv6 in case of dual-stack) forwarding in sysctl configuration files. For example, it is recommended to create a file with the name ",(0,i.jsx)(n.code,{children:"/etc/sysctl.d/90-rke2.conf"})," containing these parameters (ipv6 only needed in case of dual-stack):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"net.ipv4.conf.all.forwarding=1\nnet.ipv6.conf.all.forwarding=1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"canal-and-ip-exhaustion",children:"Canal and IP exhaustion"}),"\n",(0,i.jsx)(n.p,{children:"There are two possible reasons for this:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iptables"})," binary is not installed in the host and there is a pod defining a hostPort. The pod will be given an IP but its creation will fail and Kubernetes will not cease trying to recreate it, consuming one IP every time it tries. Error messages similar to the following will appear in the containerd log. This is the log showing the error:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'plugin type="portmap" failed (add): failed to open iptables: exec: "iptables": executable file not found in $PATH \n'})}),"\n",(0,i.jsx)(n.p,{children:"Please install iptables or xtables-nft package to resolve this problem"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["By default Canal keeps track of pod IPs by creating a lock file for each IP in ",(0,i.jsx)(n.code,{children:"/var/lib/cni/networks/k8s-pod-network"}),". Each IP belongs to a single pod and will be deleted as soon as the pod is removed. However, in the unlikely event that containerd loses track of the running pods, lock files may be leaked and Canal will not be able to reuse those IPs anymore. If this occurs, you may experience IP exhaustion errors, for example:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"failed to allocate for range 0: no IP addresses available in range set\n"})}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to resolve this. You can either manually remove unused IPs from that directory or drain the node, run rke2-killall.sh, start the rke2 systemd service and uncordon the node. If you need to undertake any of these actions, please report the problem via GitHub, making sure to specify how it was triggered."}),"\n",(0,i.jsx)(n.h2,{id:"ingress-in-cis-mode",children:"Ingress in CIS Mode"}),"\n",(0,i.jsxs)(n.p,{children:["By default, when RKE2 is run with a CIS profile selected by the ",(0,i.jsx)(n.code,{children:"profile"})," parameter, it applies network policies that can be restrictive for ingress. This, coupled with the ",(0,i.jsx)(n.code,{children:"rke2-ingress-nginx"})," chart having ",(0,i.jsx)(n.code,{children:"hostNetwork: false"})," by default, requires users to set network policies of their own to allow access to the ingress URLs. Below is an example networkpolicy that allows ingress to any workload in the namespace it is applied in. See ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/",children:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"})," for more configuration options."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: ingress-to-backends\nspec:\n  podSelector: {}\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          kubernetes.io/metadata.name: kube-system\n      podSelector:\n        matchLabels:\n          app.kubernetes.io/name: rke2-ingress-nginx\n  policyTypes:\n  - Ingress\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information, refer to comments on ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/issues/3195",children:"https://github.com/rancher/rke2/issues/3195"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"hardened-125",children:"Upgrading Hardened Clusters from v1.24.x to v1.25.x"}),"\n",(0,i.jsxs)(n.p,{children:["Kubernetes removed PodSecurityPolicy from v1.25 in favor of Pod Security Standards. You can read more about PSS in the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/",children:"upstream documentation"}),". For RKE2, there are some manual steps that must be taken if the ",(0,i.jsx)(n.code,{children:"profile"})," flag has been set on the nodes."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On all nodes, update the ",(0,i.jsx)(n.code,{children:"profile"})," value to ",(0,i.jsx)(n.code,{children:"cis-1.23"}),", but do not restart or upgrade RKE2 yet."]}),"\n",(0,i.jsxs)(n.li,{children:["Perform the upgrade as normal. If using ",(0,i.jsx)(n.a,{href:"/upgrade/automated_upgrade",children:"Automated Upgrades"}),", ensure that the namespace where the ",(0,i.jsx)(n.code,{children:"system-upgrade-controller"})," pod is running in is setup to be privileged in accordance with the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-levels",children:"Pod Security levels"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: system-upgrade\n  labels:\n    # This value must be privileged for the controller to run successfully.\n    pod-security.kubernetes.io/enforce: privileged\n    pod-security.kubernetes.io/enforce-version: v1.25\n    # We are setting these to our _desired_ `enforce` level, but note that these below values can be any of the available options.\n    pod-security.kubernetes.io/audit: privileged\n    pod-security.kubernetes.io/audit-version: v1.25\n    pod-security.kubernetes.io/warn: privileged\n    pod-security.kubernetes.io/warn-version: v1.25\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);