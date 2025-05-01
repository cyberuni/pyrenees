import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{C as e}from"./color-badge-DmkAv_GD.js";import"./index-BV_IynQ4.js";import"./badge-9TyooWln.js";const x={title:"components/ColorBadge",component:e,argTypes:{color:{control:"select",options:["sky","purple","cyan","green","pink","indigo","lime","steel-gray"],description:"Color variant of the badge"},children:{control:"text",description:"Content displayed inside the badge"}}},r={args:{children:"Default"}},s={args:{color:"sky",children:"Custom Class",className:"pds:px-6 pds:py-2"}},a={tags:["snapshot"],render:()=>o.jsxs("div",{className:"pds:flex pds:flex-wrap pds:gap-2",children:[o.jsx(e,{color:"sky",children:"Sky"}),o.jsx(e,{color:"purple",children:"Purple"}),o.jsx(e,{color:"cyan",children:"Cyan"}),o.jsx(e,{color:"green",children:"Green"}),o.jsx(e,{color:"pink",children:"Pink"}),o.jsx(e,{color:"indigo",children:"Indigo"}),o.jsx(e,{color:"lime",children:"Lime"}),o.jsx(e,{color:"steel-gray",children:"Steel Gray"})]})};var l,d,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,t,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'sky',
    children: 'Custom Class',
    className: 'pds:px-6 pds:py-2'
  }
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render: () => <div className="pds:flex pds:flex-wrap pds:gap-2">
            <ColorBadge color="sky">Sky</ColorBadge>
            <ColorBadge color="purple">Purple</ColorBadge>
            <ColorBadge color="cyan">Cyan</ColorBadge>
            <ColorBadge color="green">Green</ColorBadge>
            <ColorBadge color="pink">Pink</ColorBadge>
            <ColorBadge color="indigo">Indigo</ColorBadge>
            <ColorBadge color="lime">Lime</ColorBadge>
            <ColorBadge color="steel-gray">Steel Gray</ColorBadge>
        </div>
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const B=["Default","WithCustomClassName","AllColors"];export{a as AllColors,r as Default,s as WithCustomClassName,B as __namedExportsOrder,x as default};
