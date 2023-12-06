"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[1880],{4187:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(5893),s=r(1151);const a={title:"Automated Upgrades"},o=void 0,l={id:"upgrade/automated_upgrade",title:"Automated Upgrades",description:"Overview",source:"@site/docs/upgrade/automated_upgrade.md",sourceDirName:"upgrade",slug:"/upgrade/automated_upgrade",permalink:"/upgrade/automated_upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/upgrade/automated_upgrade.md",tags:[],version:"current",lastUpdatedAt:1701884279,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{title:"Automated Upgrades"},sidebar:"mySidebar",previous:{title:"Manual Upgrades",permalink:"/upgrade/manual_upgrade"},next:{title:"About Hardened Images",permalink:"/security/about_hardened_images"}},i={},d=[{value:"Overview",id:"overview",level:3},{value:"Install the system-upgrade-controller",id:"install-the-system-upgrade-controller",level:3},{value:"Configure plans",id:"configure-plans",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["You can manage rke2 cluster upgrades using Rancher's system-upgrade-controller. This is a Kubernetes-native approach to cluster upgrades. It leverages a ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources",children:"custom resource definition (CRD)"}),", the ",(0,t.jsx)(n.code,{children:"plan"}),", and a ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/architecture/controller/",children:"controller"})," that schedules upgrades based on the configured plans."]}),"\n",(0,t.jsxs)(n.p,{children:["A plan defines upgrade policies and requirements. This documentation will provide plans with defaults appropriate for upgrading a rke2 cluster. For more advanced plan configuration options, please review the ",(0,t.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller/blob/master/pkg/apis/upgrade.cattle.io/v1/types.go",children:"CRD"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The controller schedules upgrades by monitoring plans and selecting nodes to run upgrade ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/",children:"jobs"})," on. A plan defines which nodes should be upgraded through a ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"label selector"}),". When a job has run to completion successfully, the controller will label the node on which it ran accordingly."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The upgrade job that is launched must be highly privileged. It is configured with the following:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Host ",(0,t.jsx)(n.code,{children:"IPC"}),", ",(0,t.jsx)(n.code,{children:"NET"}),", and ",(0,t.jsx)(n.code,{children:"PID"})," namespaces"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"CAP_SYS_BOOT"})," capability"]}),"\n",(0,t.jsxs)(n.li,{children:["Host root mounted at ",(0,t.jsx)(n.code,{children:"/host"})," with read and write permissions"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For more details on the design and architecture of the system-upgrade-controller or its integration with rke2, see the following Git repositories:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"system-upgrade-controller"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/rancher/rke2-upgrade",children:"rke2-upgrade"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To automate upgrades in this manner you must:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install the system-upgrade-controller into your cluster"}),"\n",(0,t.jsx)(n.li,{children:"Configure plans"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When attempting to upgrade to a new version of RKE2, the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/release/version-skew-policy/",children:"Kubernetes version skew policy"})," applies. Ensure that your plan does not skip intermediate minor versions when upgrading. The system-upgrade-controller itself will not protect against unsupported changes to the Kubernetes version."]})}),"\n",(0,t.jsx)(n.h3,{id:"install-the-system-upgrade-controller",children:"Install the system-upgrade-controller"}),"\n",(0,t.jsx)(n.p,{children:"The system-upgrade-controller can be installed as a deployment into your cluster. The deployment requires a service-account, clusterRoleBinding, and a configmap. To install these components, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/download/v0.13.2/system-upgrade-controller.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"The controller can be configured and customized via the previously mentioned configmap, but the controller must be redeployed for the changes to be applied."}),"\n",(0,t.jsx)(n.h3,{id:"configure-plans",children:"Configure plans"}),"\n",(0,t.jsx)(n.p,{children:"It is recommended that you minimally create two plans: a plan for upgrading server (master / control-plane) nodes and a plan for upgrading agent (worker) nodes. As needed, you can create additional plans to control the rollout of the upgrade across nodes. The following two example plans will upgrade your cluster to rke2 v1.27.7+rke2r2. Once the plans are created, the controller will pick them up and begin to upgrade your cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'# Server plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: server-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: server\nspec:\n  concurrency: 1\n  nodeSelector:\n    matchExpressions:\n       - {key: rke2-upgrade, operator: Exists}\n       - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n       # When using k8s version 1.19 or older, swap control-plane with master\n       - {key: node-role.kubernetes.io/control-plane, operator: In, values: ["true"]}\n  tolerations:\n  - key: "CriticalAddonsOnly"\n    operator: "Equal"\n    value: "true"\n    effect: "NoExecute"\n  serviceAccountName: system-upgrade\n  cordon: true\n#  drain:\n#    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.27.7-rke2r2\n---\n# Agent plan\napiVersion: upgrade.cattle.io/v1\nkind: Plan\nmetadata:\n  name: agent-plan\n  namespace: system-upgrade\n  labels:\n    rke2-upgrade: agent\nspec:\n  concurrency: 2\n  nodeSelector:\n    matchExpressions:\n      - {key: rke2-upgrade, operator: Exists}\n      - {key: rke2-upgrade, operator: NotIn, values: ["disabled", "false"]}\n      # When using k8s version 1.19 or older, swap control-plane with master\n      - {key: node-role.kubernetes.io/control-plane, operator: NotIn, values: ["true"]}\n  prepare:\n    args:\n    - prepare\n    - server-plan\n    image: rancher/rke2-upgrade\n  serviceAccountName: system-upgrade\n  cordon: true\n  drain:\n    force: true\n  upgrade:\n    image: rancher/rke2-upgrade\n  version: v1.27.7-rke2r2\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"There are a few important things to call out regarding these plans:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The plans must be created in the same namespace where the controller was deployed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"concurrency"})," field indicates how many nodes can be upgraded at the same time."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The server-plan targets server nodes by specifying a label selector that selects nodes with the ",(0,t.jsx)(n.code,{children:"node-role.kubernetes.io/control-plane"})," label (",(0,t.jsx)(n.code,{children:"node-role.kubernetes.io/master"}),' for 1.19 or older). The agent-plan targets agent nodes by specifying a label selector that select nodes without that label. Optionally, additional labels can be included, like in the example above, which requires label "rke2-upgrade" to exist and not have the value "disabled" or "false".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"prepare"})," step in the agent-plan will cause upgrade jobs for that plan to wait for the server-plan to complete before they execute."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Both plans have the ",(0,t.jsx)(n.code,{children:"version"})," field set to v1.27.7+rke2r2. Alternatively, you can omit the ",(0,t.jsx)(n.code,{children:"version"})," field and set the ",(0,t.jsx)(n.code,{children:"channel"})," field to a URL that resolves to a release of rke2. This will cause the controller to monitor that URL and upgrade the cluster any time it resolves to a new release. This works well with the ",(0,t.jsx)(n.a,{href:"/upgrade/manual_upgrade#release-channels",children:"release channels"}),". Thus, you can configure your plans with the following channel to ensure your cluster is always automatically upgraded to the newest stable release of rke2:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apiVersion: upgrade.cattle.io/v1\nkind: Plan\n...\nspec:\n  ...\n  channel: https://update.rke2.io/v1-release/channels/stable\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"As stated, the upgrade will begin as soon as the controller detects that a plan was created. Updating a plan will cause the controller to re-evaluate the plan and determine if another upgrade is needed."}),"\n",(0,t.jsx)(n.p,{children:"You can monitor the progress of an upgrade by viewing the plan and jobs via kubectl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl -n system-upgrade get plans -o yaml\nkubectl -n system-upgrade get jobs -o yaml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var t=r(7294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);