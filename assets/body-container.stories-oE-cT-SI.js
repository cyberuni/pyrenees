import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as T}from"./bundle-mjs-DrwMUFV_.js";import{B as E}from"./body-container-CdDR0-Ih.js";import"./index-D4lIrffr.js";import"./clsx-B-dksMZM.js";import"./index-CvSQSc7f.js";function C(t){return function(r,...s){if(!s.every(I))throw new Error(`tailwind does not support dynamic expression.
Please make sure each argument is evaluated to a valid tailwind class name`);return t(S(r,s))}}function S(t,d){return t.flatMap((r,s)=>[...r.split(" "),d[s]||""]).map(r=>`${r}`.trim())}function I(t){return typeof t=="string"||!t}const O=C(T),M={title:"components/layout/BodyContainer",component:E,tags:["cat:container"]},i={},n={args:{isLoading:!0}},a={args:{children:"content"}},o={args:{className:O`pds:border-solid pds:w-38`,children:"Overridden width"}},l={args:{className:O`pds:border pds:border-solid  pds:w-1/2 pds:h-[200px]`,overflow:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"pds:font-bold pds:mb-2",children:"Overflow Example"}),e.jsx("p",{children:"This is a short paragraph that fits within the container."}),e.jsx("p",{className:"pds:mt-2",children:"This is a longer paragraph containing approximately forty words. It demonstrates how text will behave when it flows within the container. The content might wrap to multiple lines depending on the available width of the parent container element."}),e.jsxs("ul",{className:"pds:mt-2",children:[e.jsx("li",{children:"List item 1"}),e.jsx("li",{children:"List item 2"}),e.jsx("li",{children:"List item 3"}),e.jsx("li",{children:"List item 4"}),e.jsx("li",{children:"List item 5"})]})]})}};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,u,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'content'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,b,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const P=["Empty","IsLoading","WithContent","OverrideWidth","Overflow"];export{i as Empty,n as IsLoading,l as Overflow,o as OverrideWidth,a as WithContent,P as __namedExportsOrder,M as default};
