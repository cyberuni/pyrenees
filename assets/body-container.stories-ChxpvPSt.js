import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as T}from"./badge-9TyooWln.js";import"./app-container-BBBQmT4f.js";import{B as E}from"./button-CnPLJJrL.js";import"./code-badge-BITTmjs9.js";import"./color-badge-DmkAv_GD.js";import"./severity-badge-qqqI3aSu.js";import"./index-D4lIrffr.js";import"./index-DEvoek5M.js";import"./index-BV_IynQ4.js";import"./index-DQD4w61r.js";import"./index-DsJinFGm.js";function C(t){return function(r,...s){if(!s.every(I))throw new Error(`tailwind does not support dynamic expression.
Please make sure each argument is evaluated to a valid tailwind class name`);return t(S(r,s))}}function S(t,d){return t.flatMap((r,s)=>[...r.split(" "),d[s]||""]).map(r=>`${r}`.trim())}function I(t){return typeof t=="string"||!t}const O=C(T),z={title:"components/layout/BodyContainer",component:E,tags:["cat:container"]},i={},a={args:{isLoading:!0}},n={args:{children:"content"}},o={args:{className:O`pds:border-solid pds:w-38`,children:"Overridden width"}},l={args:{className:O`pds:border pds:border-solid  pds:w-1/2 pds:h-[200px]`,overflow:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"pds:font-bold pds:mb-2",children:"Overflow Example"}),e.jsx("p",{children:"This is a short paragraph that fits within the container."}),e.jsx("p",{className:"pds:mt-2",children:"This is a longer paragraph containing approximately forty words. It demonstrates how text will behave when it flows within the container. The content might wrap to multiple lines depending on the available width of the parent container element."}),e.jsxs("ul",{className:"pds:mt-2",children:[e.jsx("li",{children:"List item 1"}),e.jsx("li",{children:"List item 2"}),e.jsx("li",{children:"List item 3"}),e.jsx("li",{children:"List item 4"}),e.jsx("li",{children:"List item 5"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var h,u,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(w=(u=a.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'content'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,b,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    className: tw\`pds:border-solid pds:w-38\`,
    children: 'Overridden width'
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var y,j,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    className: tw\`pds:border pds:border-solid  pds:w-1/2 pds:h-[200px]\`,
    overflow: true,
    children: <>
                <h3 className="pds:font-bold pds:mb-2">Overflow Example</h3>
                <p>This is a short paragraph that fits within the container.</p>
                <p className="pds:mt-2">
                    This is a longer paragraph containing approximately forty words. It demonstrates how text will behave when it
                    flows within the container. The content might wrap to multiple lines depending on the available width of the
                    parent container element.
                </p>
                <ul className="pds:mt-2">
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                    <li>List item 5</li>
                </ul>
            </>
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const A=["Empty","IsLoading","WithContent","OverrideWidth","Overflow"];export{i as Empty,a as IsLoading,l as Overflow,o as OverrideWidth,n as WithContent,A as __namedExportsOrder,z as default};
