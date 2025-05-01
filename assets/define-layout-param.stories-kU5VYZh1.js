import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./themed-doc-container-RmCzMhYt.js";import"./index-D4lIrffr.js";import{d}from"./define-layout-param-ChIzxvD7.js";import"./index-_2eu7o43.js";import"./iframe-DebQzljN.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const L={title:"storybook/parameters/defineLayoutParam",render:()=>e.jsx("div",{children:"test content"})},s={name:"padded",parameters:d("padded")},r={name:"centered",parameters:d("centered")},t={name:"fullscreen",parameters:d("fullscreen"),render:()=>e.jsx("div",{className:"pds:box-border pds:h-screen pds:w-screen pds:flex",children:e.jsxs("div",{className:"pds:w-full pds:flex pds:items-center pds:justify-center",children:["center",e.jsx("div",{className:"pds:absolute pds:top-0 pds:left-0",children:"top-left"}),e.jsx("div",{className:"pds:absolute pds:top-0 pds:right-0",children:"top-right"}),e.jsx("div",{className:"pds:absolute pds:bottom-0 pds:left-0",children:"bottom-left"}),e.jsx("div",{className:"pds:absolute pds:bottom-0 pds:right-0",children:"bottom-right"})]})})};var a,o,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'padded',
  parameters: defineLayoutParam('padded')
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,c,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'centered',
  parameters: defineLayoutParam('centered')
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var n,l,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const w=["Padded","Centered","Fullscreen"];export{r as Centered,t as Fullscreen,s as Padded,w as __namedExportsOrder,L as default};
