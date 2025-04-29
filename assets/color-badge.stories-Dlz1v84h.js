import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{C as e}from"./color-badge-COu62KXZ.js";import"./badge-DsBEe7Yc.js";const x={title:"components/ColorBadge",component:e,argTypes:{color:{control:"select",options:["sky","purple","cyan","green","pink","indigo","lime","steel-gray"],description:"Color variant of the badge"},children:{control:"text",description:"Content displayed inside the badge"}}},r={args:{children:"Default"}},s={args:{color:"sky",children:"Custom Class",className:"pds:px-6 pds:py-2"}},l={render:()=>o.jsxs("div",{className:"pds:flex pds:flex-wrap pds:gap-2",children:[o.jsx(e,{color:"sky",children:"Sky"}),o.jsx(e,{color:"purple",children:"Purple"}),o.jsx(e,{color:"cyan",children:"Cyan"}),o.jsx(e,{color:"green",children:"Green"}),o.jsx(e,{color:"pink",children:"Pink"}),o.jsx(e,{color:"indigo",children:"Indigo"}),o.jsx(e,{color:"lime",children:"Lime"}),o.jsx(e,{color:"steel-gray",children:"Steel Gray"})]})};var a,n,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,t,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'sky',
    children: 'Custom Class',
    className: 'pds:px-6 pds:py-2'
  }
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,g,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const h=["Default","WithCustomClassName","AllColors"];export{l as AllColors,r as Default,s as WithCustomClassName,h as __namedExportsOrder,x as default};
