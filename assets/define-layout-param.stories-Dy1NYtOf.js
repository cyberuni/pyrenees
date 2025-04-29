import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./themed-doc-container-CunK3dUS.js";import"./index-D4lIrffr.js";import"./index-C3br2WMt.js";import"./iframe-BXKmMoI6.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function d(f){return{layout:f}}const P={title:"storybook/parameters/defineLayoutParam",render:()=>e.jsx("div",{children:"test content"})},s={name:"padded",parameters:d("padded")},r={name:"centered",parameters:d("centered")},t={name:"fullscreen",parameters:d("fullscreen"),render:()=>e.jsx("div",{className:"pds:box-border pds:h-screen pds:w-screen pds:flex",children:e.jsxs("div",{className:"pds:w-full pds:flex pds:items-center pds:justify-center",children:["center",e.jsx("div",{className:"pds:absolute pds:top-0 pds:left-0",children:"top-left"}),e.jsx("div",{className:"pds:absolute pds:top-0 pds:right-0",children:"top-right"}),e.jsx("div",{className:"pds:absolute pds:bottom-0 pds:left-0",children:"bottom-left"}),e.jsx("div",{className:"pds:absolute pds:bottom-0 pds:right-0",children:"bottom-right"})]})})};var a,o,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'padded',
  parameters: defineLayoutParam('padded')
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var n,c,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'centered',
  parameters: defineLayoutParam('centered')
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,l,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'fullscreen',
  parameters: defineLayoutParam('fullscreen'),
  render: () => <div className="pds:box-border pds:h-screen pds:w-screen pds:flex">
            <div className="pds:w-full pds:flex pds:items-center pds:justify-center">
                center
                <div className="pds:absolute pds:top-0 pds:left-0">top-left</div>
                <div className="pds:absolute pds:top-0 pds:right-0">top-right</div>
                <div className="pds:absolute pds:bottom-0 pds:left-0">bottom-left</div>
                <div className="pds:absolute pds:bottom-0 pds:right-0">bottom-right</div>
            </div>
        </div>
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const L=["Padded","Centered","Fullscreen"];export{r as Centered,t as Fullscreen,s as Padded,L as __namedExportsOrder,P as default};
