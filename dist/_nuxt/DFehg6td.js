import{d as B,g as m,l as R,a3 as A,c as h,o as r,X as T,b as s,e as c,F as p,r as _,f as v,p as F,i as j,w as S,h as H,x as q,n as z,a4 as L,q as N}from"./6wy3AQI5.js";import{_ as P}from"./iqNmcP2u.js";const $=B({__name:"SquaresBackground",props:{speed:{default:.5},borderColor:{default:"#999"},squareSize:{default:40}},setup(k){const t=k,l=m({x:0,y:0}),o=m(0),x=m(0),d=m(0),e=m(),u=m();R(()=>{e.value=document.querySelector("canvas"),e.value&&(u.value=e.value.getContext("2d"),u.value&&(f(),window.addEventListener("resize",f),o.value=requestAnimationFrame(n)))}),A(()=>{window.removeEventListener("resize",f),o.value&&cancelAnimationFrame(o.value)});const f=()=>{e.value&&(e.value.width=e.value.offsetWidth,e.value.height=e.value.offsetHeight,x.value=Math.ceil(e.value.width/t.squareSize)+1,d.value=Math.ceil(e.value.height/t.squareSize)+1)},a=()=>{if(!e.value||!u.value)return;const i=u.value;i.clearRect(0,0,e.value.width,e.value.height);const b=Math.floor(l.value.x/t.squareSize)*t.squareSize,D=Math.floor(l.value.y/t.squareSize)*t.squareSize;for(let y=b;y<e.value.width+t.squareSize;y+=t.squareSize)for(let w=D;w<e.value.height+t.squareSize;w+=t.squareSize){const C=y-l.value.x%t.squareSize,M=w-l.value.y%t.squareSize;i.strokeStyle=t.borderColor,i.strokeRect(C,M,t.squareSize,t.squareSize)}const g=i.createRadialGradient(e.value.width/2,e.value.height/2,0,e.value.width/2,e.value.height/2,Math.sqrt(e.value.width**2+e.value.height**2)/2);g.addColorStop(0,"rgba(0, 0, 0, 0)"),g.addColorStop(1,"#171717"),i.fillStyle=g,i.fillRect(0,0,e.value.width,e.value.height)},n=()=>{const i=Math.max(t.speed,.1);l.value.x=(l.value.x-i+t.squareSize)%t.squareSize,l.value.y=(l.value.y-i+t.squareSize)%t.squareSize,a(),o.value=requestAnimationFrame(n)};return(i,b)=>(r(),h("canvas",{ref_key:"canvas",ref:e,class:"w-full h-full border-none block"},null,512))}}),E={class:"md:min-h-[calc(100vh-11rem)] flex flex-col my-24 md:my-0 items-center justify-center container mx-auto"},X={class:"flex items-center gap-8"},G={class:"hidden dark:block absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-5"},V={class:"hidden md:flex flex-col gap-4 w-2/12 z-10"},Y={class:"flex flex-col gap-2 items-center"},I={class:"flex-1 z-10"},J={class:"space-y-8 z-10"},K={class:"space-y-4"},O={class:"font-semibold text-center text-lg text-black/50 dark:text-white/50 md:text-xl"},Q={class:"text-black/60 select-none dark:text-white/60 transition-colors bg-zinc-200 dark:bg-zinc-800 rounded-full align-middle py-2.5 pl-3 pr-4 gap-1 inline-flex items-center w-max font-medium"},U={class:"mt-8 flex items-center justify-center gap-x-3 gap-y-2 flex-wrap"},W={class:"hidden md:flex flex-col gap-4 w-2/12 z-10"},Z={class:"flex flex-col gap-2 items-center"},ee={class:"grid md:hidden grid-cols-2 gap-4 w-full mt-24 z-10"},te={class:"flex flex-col gap-2 items-center"},ne=B({__name:"index",setup(k){const t=[{title:"Blog",href:"/blog",icon:"line-md:document-list"},{title:"Projects",href:"/projects",icon:"line-md:cog"},{title:"Path",href:"/donate",icon:"mdi:highway"},{title:"Repos",href:"/me/repos",icon:"line-md:github"},{title:"Education",href:"/me/songs",icon:"mdi:school"},{title:"Contact",href:"/me/contact",icon:"line-md:at"}];return T({title:"Home"}),(l,o)=>{const x=$,d=H,e=P,u=L,f=F("tippy");return r(),h("div",E,[s("div",X,[s("div",G,[c(x,{speed:.3,"sqaure-size":5,class:"w-full h-full"})]),s("div",V,[(r(!0),h(p,null,_(t.slice(0,3),(a,n)=>(r(),j(e,{key:`card-ml-${n}`,title:a.title,href:a.href,class:z(["w-28 flex items-center justify-center transform hover:scale-105 transition-all dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]",{"ml-auto":n%2===0,"rotate-2":n===0,"-rotate-3":n===2}]),style:{aspectRatio:"1/1"}},{title:S(()=>[s("div",Y,[c(d,{name:a.icon,class:"h-8 w-8"},null,8,["name"]),v(" "+q(a.title),1)])]),_:2},1032,["title","href","class"]))),128))]),s("header",I,[s("div",J,[s("div",K,[s("h1",O,[o[1]||(o[1]=v(" Hi, my name is ")),s("span",Q,[c(u,{src:"/assets/images/memoji.png",class:"object-cover h-7 w-7"}),o[0]||(o[0]=v(" Abrar Ahmed"))])]),o[2]||(o[2]=s("h1",{class:"font-semibold text-center text-5xl text-black/90 dark:text-white/90 md:text-6xl"}," Researcher & Developer ",-1))])]),s("div",U,[(r(),h(p,null,_([{name:"TensorFlow",icon:"devicon:tensorflow"},{name:"PyTorch",icon:"devicon:pytorch"},{name:"Keras",icon:"devicon:keras"},{name:"Python",icon:"devicon:python"},{name:"JavaScript",icon:"devicon:javascript"},{name:"React.js",icon:"devicon:react"},{name:"Node.js",icon:"devicon:nodejs"},{name:"Express.js",icon:"devicon:express"},{name:"MySQL",icon:"devicon:mysql"},{name:"Git",icon:"devicon:git"},{name:"Adobe Premiere Pro",icon:"devicon:premierepro"}],a=>N(c(d,{key:a.name,name:a.icon,class:z({"h-[22px] w-[22px]":a.name==="Node.js","h-[25px] w-[25px]":["HTML5","TypeScript"].includes(a.name),"h-7 w-7":!["TypeScript","Node.js","HTML5"].includes(a.name)})},null,8,["name","class"]),[[f,{content:a.name,placement:"bottom"}]])),64))])]),s("div",W,[(r(!0),h(p,null,_(t.slice(3,6),(a,n)=>(r(),j(e,{key:`card-mr-${n}`,title:a.title,href:a.href,class:z(["w-28 flex items-center justify-center transform hover:scale-105 transition-all dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]",{"ml-auto":n%2!==0,"-rotate-2":n===0,"rotate-3":n===2}]),style:{aspectRatio:"1/1"}},{title:S(()=>[s("div",Z,[c(d,{name:a.icon,class:"h-8 w-8"},null,8,["name"]),v(" "+q(a.title),1)])]),_:2},1032,["title","href","class"]))),128))])]),s("div",ee,[(r(),h(p,null,_(t,(a,n)=>c(e,{key:`card-m-${n}`,title:a.title,href:a.href,class:"w-full flex items-center justify-center dark:!bg-[#1B1B1B] dark:hover:!bg-[#1D1D1D]"},{title:S(()=>[s("div",te,[c(d,{name:a.icon,class:"h-8 w-8"},null,8,["name"]),v(" "+q(a.title),1)])]),_:2},1032,["title","href"])),64))])])}}});export{ne as default};
