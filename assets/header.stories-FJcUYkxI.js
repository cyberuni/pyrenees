import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{w as R,e as d}from"./index-CIfn4WAl.js";import"./themed-doc-container-BZF8LrY6.js";import"./index-BlmOqGMO.js";import{w as z}from"./with-story-swatch-CptWhfTS.js";import{C as n}from"./copilot-icon-DA2-SEC0.js";import{D as A}from"./dashboard-icon-DNjLPLU9.js";import{g as V,H as F,T as _,c as O}from"./car-icon-Bu4lvwXj.js";import{C as G,I as o}from"./close-button-_T726qv-.js";import"./index-yBjzXJbu.js";import"./_build_class_names_tagged_template-M4c5DjCo.js";import"./tw-merge-Dzlj8q8h.js";import"./index-CEuh9JBA.js";import"./iframe-C2LMBDCt.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-C5H2Tgoy.js";import"./style-DwrwojIq.js";import"./utils-CXqIsMKi.js";function J(e){return{storySwatch:e}}const dt={title:"components/containers/Header",component:V,decorators:[z({className:"pds:w-80 pds:p-0 pds:items-stretch"})],tags:["cat:container"]},a={args:{title:"String Title"},async play({canvasElement:e}){const r=await(await R(e)).getByRole("heading",{name:"String Title"});d(r).toBeInTheDocument()}},s={args:{title:t.jsx(F,{level:2,children:"H2 title"})},async play({canvasElement:e}){var u;const r=await(await R(e)).getByText("H2 title");d(r.nodeName).toEqual("H2"),d((u=r.parentElement)==null?void 0:u.nodeName,"parent should be div").toEqual("DIV")}},i={args:{title:t.jsx(_,{title:"Title",description:"description"})}},c={args:{title:"Title",controls:t.jsx(G,{})}},l={args:{title:"Title",controls:t.jsx(o,{children:t.jsx(n,{})})}},p={parameters:J({className:"pds:w-80 pds:p-0 pds:items-stretch"}),args:{title:"Title"},render(e){return t.jsx(V,{...e,controls:t.jsxs(O,{children:[t.jsx(o,{children:t.jsx(n,{})}),t.jsx(o,{children:t.jsx(n,{})})]})})}},m={args:{title:t.jsx(_,{title:"Title",description:"description",icon:t.jsx(A,{})}),controls:t.jsxs(O,{children:[t.jsx(o,{children:t.jsx(n,{})}),t.jsx(o,{children:t.jsx(n,{})})]})}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,B,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,S,j;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: <TitleContainer title="Title" description="description" />
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,v,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    controls: <CloseButton />
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var H,E,W;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    controls: <IconButton>
                <CopilotIcon />
            </IconButton>
  }
}`,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var f,D,N;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: defineStorySwatchParam({
    className: 'pds:w-80 pds:p-0 pds:items-stretch'
  }),
  args: {
    title: 'Title'
  },
  render(args) {
    return <Header {...args} controls={<ControlBar>
                        <IconButton>
                            <CopilotIcon />
                        </IconButton>
                        <IconButton>
                            <CopilotIcon />
                        </IconButton>
                    </ControlBar>} />;
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var b,q,P;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: <TitleContainer title="Title" description="description" icon={<DashboardIcon />} />,
    controls: <ControlBar>
                <IconButton>
                    <CopilotIcon />
                </IconButton>
                <IconButton>
                    <CopilotIcon />
                </IconButton>
            </ControlBar>
  }
}`,...(P=(q=m.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const ut=["WithStringTitle","WithHeadingTitle","WithTitlePanel","WithClose","WithSingleControl","WithControlBar","WithEverything"];export{c as WithClose,p as WithControlBar,m as WithEverything,s as WithHeadingTitle,l as WithSingleControl,a as WithStringTitle,i as WithTitlePanel,ut as __namedExportsOrder,dt as default};
