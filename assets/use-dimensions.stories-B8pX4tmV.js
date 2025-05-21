import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-BlmOqGMO.js";import"./index-yBjzXJbu.js";function f(e){return e instanceof HTMLElement?e.getBoundingClientRect():e===null?{}:{width:e.innerWidth,height:e.innerHeight}}function v(e){var d;const[t,p]=h.useState(f(e===void 0?window:((d=e.ref)==null?void 0:d.current)??null));return h.useEffect(()=>{var c;let u=!0;const s=e===void 0?window:((c=e.ref)==null?void 0:c.current)??null;function o(){u&&p(f(s))}let i=null;return s instanceof HTMLElement?(i=new ResizeObserver(o),i.observe(s)):e===void 0&&window.addEventListener("resize",o),()=>{u=!1,e===void 0?window.removeEventListener("resize",o):s&&(i==null||i.disconnect())}},[]),t}const x={title:"hooks/useDimensions",component:v,parameters:{docs:{description:{component:`
This hook is used to retrieve window dimensions.
`}}}};function n(){const{width:e,height:t}=v();return r.jsxs("div",{children:[r.jsxs("div",{children:["width: ",e]}),r.jsxs("div",{children:["height: ",t]})]})}n.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,l,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`function Default() {
  const {
    width,
    height
  } = useDimensions();
  return <div>
            <div>width: {width}</div>
            <div>height: {height}</div>
        </div>;
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const E=["Default"];export{n as Default,E as __namedExportsOrder,x as default};
