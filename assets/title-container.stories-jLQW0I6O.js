import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as I,e as c}from"./index-CIfn4WAl.js";import"./themed-doc-container-D04cVwP_.js";import"./index-D4lIrffr.js";import{w as j}from"./with-story-swatch-k9-RF9Vx.js";import{D as b}from"./dashboard-icon-CGQ1_vHc.js";import{T as C,H as B}from"./car-icon-81kKL5U6.js";import"./close-button-Cu-veUj0.js";import"./_build_class_names_tagged_template-M4c5DjCo.js";import"./tw-merge-Dzlj8q8h.js";import"./index-BGUvJ_20.js";import"./iframe-Cia2w8rj.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CKi3-S8O.js";import"./style-DwrwojIq.js";const U={title:"components/containers/TitleContainer",component:C,decorators:[j()],tags:["cat:container"]},n={args:{title:"String Title"},async play({canvasElement:t}){const a=await(await I(t)).getByRole("heading",{name:"String Title"});c(a).toBeInTheDocument()}},s={args:{title:e.jsx(B,{level:2,children:"H2 title"})},async play({canvasElement:t}){var p;const a=await(await I(t)).getByText("H2 title");c(a.nodeName).toEqual("H2"),c((p=a.parentElement)==null?void 0:p.nodeName,"parent should be div").toEqual("DIV")}},i={args:{title:"Title",description:"description"}},r={args:{title:"Title"},render(t){return e.jsx(C,{...t,description:e.jsxs("span",{children:[e.jsx("span",{className:"pds:text-red-600",children:"Custom"})," description"]})})}},o={args:{title:"Title with Icon",icon:e.jsx(b,{})}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'String Title'
  },
  async play({
    canvasElement
  }) {
    const canvas = await within(canvasElement);
    const title = await canvas.getByRole('heading', {
      name: 'String Title'
    });
    expect(title).toBeInTheDocument();
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: <Heading level={2}>H2 title</Heading>
  },
  async play({
    canvasElement
  }) {
    const canvas = await within(canvasElement);
    const title = await canvas.getByText('H2 title');
    expect(title.nodeName).toEqual('H2');
    expect(title.parentElement?.nodeName, 'parent should be div').toEqual('DIV');
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var T,w,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    description: 'description'
  }
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,y,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Title'
  },
  render(args) {
    return <TitleContainer {...args} description={<span>
                        <span className="pds:text-red-600">Custom</span> description
                    </span>} />;
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var D,E,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  /**
   * TODO: gap is set to \`gap-1\` instead of \`gap-0.5\` in figma.
   * \`gap-1\` should be a better choice as it is more consistent with the overall design.
   */
  args: {
    title: 'Title with Icon',
    icon: <DashboardIcon />
  }
}`,...(H=(E=o.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const X=["StringTitle","CustomTitle","WithDescription","WithCustomDescription","WithIcon"];export{s as CustomTitle,n as StringTitle,r as WithCustomDescription,i as WithDescription,o as WithIcon,X as __namedExportsOrder,U as default};
