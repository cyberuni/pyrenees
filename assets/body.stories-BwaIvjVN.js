import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as d}from"./index-CIfn4WAl.js";import{i as s,$ as _}from"./car-icon-Bu4lvwXj.js";import{t as F}from"./tw-CFT2Mbhn.js";import{S as t}from"./themed-doc-container-BZF8LrY6.js";import"./index-BlmOqGMO.js";import"./close-button-_T726qv-.js";import"./index-yBjzXJbu.js";import"./tw-merge-Dzlj8q8h.js";import"./index-C5H2Tgoy.js";import"./style-DwrwojIq.js";import"./index-DuqhnXMO.js";import"./index-fNjTmf9T.js";import"./_build_class_names_tagged_template-M4c5DjCo.js";import"./index-CEuh9JBA.js";import"./iframe-C2LMBDCt.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./utils-CXqIsMKi.js";const le={title:"components/typography/Body",component:s,tags:["snapshot"]},r={tags:["snapshot"],render(){return e.jsxs(t,{children:[e.jsx(s,{className:"pds:body-text-xs",children:"Alice in Wonderland (size: xs)"}),e.jsx(s,{className:"pds:body-text-sm",children:"Alice in Wonderland (size: sm)"}),e.jsx(s,{className:"pds:body-text-md",children:"Alice in Wonderland (size: md - default)"}),e.jsx(s,{className:"pds:body-text-lg",children:"Alice in Wonderland (size: lg)"})]})}},l={tags:["snapshot"],render(){return e.jsxs(t,{children:[e.jsx(s,{className:"pds:text-primary",children:"Alice in Wonderland (color: primary)"}),e.jsx(s,{className:"pds:text-secondary",children:"Alice in Wonderland (color: secondary)"}),e.jsx(s,{className:"pds:text-hint",children:"Alice in Wonderland (color: hint)"}),e.jsx(s,{className:"pds:text-disabled",children:"Alice in Wonderland (color: disabled)"}),e.jsx(s,{className:"pds:text-success",children:"Alice in Wonderland (color: success)"}),e.jsx(s,{className:"pds:text-error",children:"Alice in Wonderland (color: error)"})]})}},i={render:()=>e.jsxs(t,{children:[e.jsx(s,{"data-testid":"as-default",emphasized:!0,children:"Alice in Wonderland (emphasized)"}),e.jsx("div",{"data-font":"hans",children:e.jsx(s,{"data-testid":"as-hans",emphasized:!0,children:"良い一日をお過ごしください。"})})]}),async play({canvas:a}){const o=a.getByTestId("as-default"),n=a.getByTestId("as-hans");d(o).toHaveClass("pds:body-emphasized"),d(n).toHaveClass("pds:body-emphasized")}},c={render:()=>e.jsxs(t,{children:[e.jsx(s,{"data-testid":"as-default",strong:!0,children:"Alice in Wonderland (strong)"}),e.jsx("div",{"data-font":"hans",children:e.jsx(s,{"data-testid":"as-hans",strong:!0,children:"良い一日をお過ごしください。"})})]}),async play({canvas:a}){const o=a.getByTestId("as-default"),n=a.getByTestId("as-hans");d(o).toHaveClass("pds:body-strong"),d(n).toHaveClass("pds:body-strong")}},y={render:()=>e.jsxs(t,{children:[e.jsx(s,{"data-testid":"as-default",strong:!0,emphasized:!0,children:"Alice in Wonderland (strong emphasized)"}),e.jsx("div",{"data-font":"hans",children:e.jsx(s,{"data-testid":"as-hans",strong:!0,emphasized:!0,children:"良い一日をお過ごしください。"})})]}),async play({canvas:a}){const o=a.getByTestId("as-default"),n=a.getByTestId("as-hans");d(o).toHaveClass("pds:body-strong-emphasized"),d(n).toHaveClass("pds:body-strong-emphasized")}},p={tags:["snapshot"],render(){return e.jsxs(t,{children:[e.jsx(s,{className:"pds:font-normal",children:"Alice in Wonderland (weight: normal - default)"}),e.jsx(s,{className:"pds:font-semibold",children:"Alice in Wonderland (weight: semibold)"}),e.jsx(s,{className:"pds:font-bold",children:"Alice in Wonderland (weight: bold)"})]})}},m={parameters:{docs:{description:{story:"By default, the `Body` renders as a `p` element. But, you can use any element type with `as` prop."}}},render(){return e.jsxs(t,{children:[e.jsx(s,{children:"Alice in Wonderland (as: p - default)"}),e.jsx(s,{elementType:"div","data-testid":"as-div",children:"Alice in Wonderland (as: div)"}),e.jsx(s,{elementType:"blockquote","data-testid":"as-bq",children:"Alice in Wonderland (as: blockquote)"}),e.jsx(s,{elementType:"cite","data-testid":"as-cite",children:"Alice in Wonderland (as: cite)"}),e.jsx(s,{elementType:"del","data-testid":"as-del",children:"Alice in Wonderland (as: del)"})]})},async play({canvas:a}){const o=a.getByTestId("as-div"),n=a.getByTestId("as-bq"),$=a.getByTestId("as-cite"),P=a.getByTestId("as-del");d(o.nodeName).toEqual("DIV"),d(n.nodeName).toEqual("BLOCKQUOTE"),d($.nodeName).toEqual("CITE"),d(P.nodeName).toEqual("DEL")}},h={render(){return e.jsx(_.Provider,{value:{className:F`pds:body-text-2xs`},children:e.jsx(t,{children:e.jsx(s,{className:"pds:body-text-2xl",children:"Alice in Wonderland"})})})}};var B,u,x;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render() {
    return <StorySwatch>
                <Body className="pds:body-text-xs">Alice in Wonderland (size: xs)</Body>
                <Body className="pds:body-text-sm">Alice in Wonderland (size: sm)</Body>
                <Body className="pds:body-text-md">Alice in Wonderland (size: md - default)</Body>
                <Body className="pds:body-text-lg">Alice in Wonderland (size: lg)</Body>
            </StorySwatch>;
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,b,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render() {
    return <StorySwatch>
                <Body className="pds:text-primary">Alice in Wonderland (color: primary)</Body>
                <Body className="pds:text-secondary">Alice in Wonderland (color: secondary)</Body>
                <Body className="pds:text-hint">Alice in Wonderland (color: hint)</Body>
                <Body className="pds:text-disabled">Alice in Wonderland (color: disabled)</Body>
                <Body className="pds:text-success">Alice in Wonderland (color: success)</Body>
                <Body className="pds:text-error">Alice in Wonderland (color: error)</Body>
            </StorySwatch>;
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,v,W;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <StorySwatch>
            <Body data-testid="as-default" emphasized>
                Alice in Wonderland (emphasized)
            </Body>
            <div data-font="hans">
                <Body data-testid="as-hans" emphasized>
                    良い一日をお過ごしください。
                </Body>
            </div>
        </StorySwatch>,
  async play({
    canvas
  }) {
    const defaultBody = canvas.getByTestId('as-default');
    const hansBody = canvas.getByTestId('as-hans');
    expect(defaultBody).toHaveClass('pds:body-emphasized');
    expect(hansBody).toHaveClass('pds:body-emphasized');
  }
}`,...(W=(v=i.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var A,j,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <StorySwatch>
            <Body data-testid="as-default" strong>
                Alice in Wonderland (strong)
            </Body>
            <div data-font="hans">
                <Body data-testid="as-hans" strong>
                    良い一日をお過ごしください。
                </Body>
            </div>
        </StorySwatch>,
  async play({
    canvas
  }) {
    const defaultBody = canvas.getByTestId('as-default');
    const hansBody = canvas.getByTestId('as-hans');
    expect(defaultBody).toHaveClass('pds:body-strong');
    expect(hansBody).toHaveClass('pds:body-strong');
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var T,z,w;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <StorySwatch>
            <Body data-testid="as-default" strong emphasized>
                Alice in Wonderland (strong emphasized)
            </Body>
            <div data-font="hans">
                <Body data-testid="as-hans" strong emphasized>
                    良い一日をお過ごしください。
                </Body>
            </div>
        </StorySwatch>,
  async play({
    canvas
  }) {
    const defaultBody = canvas.getByTestId('as-default');
    const hansBody = canvas.getByTestId('as-hans');
    expect(defaultBody).toHaveClass('pds:body-strong-emphasized');
    expect(hansBody).toHaveClass('pds:body-strong-emphasized');
  }
}`,...(w=(z=y.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var I,C,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render() {
    return <StorySwatch>
                <Body className="pds:font-normal">Alice in Wonderland (weight: normal - default)</Body>
                <Body className="pds:font-semibold">Alice in Wonderland (weight: semibold)</Body>
                <Body className="pds:font-bold">Alice in Wonderland (weight: bold)</Body>
            </StorySwatch>;
  }
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var q,H,O;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'By default, the \`Body\` renders as a \`p\` element. But, you can use any element type with \`as\` prop.'
      }
    }
  },
  render() {
    return <StorySwatch>
                <Body>Alice in Wonderland (as: p - default)</Body>
                <Body elementType="div" data-testid="as-div">
                    Alice in Wonderland (as: div)
                </Body>
                <Body elementType="blockquote" data-testid="as-bq">
                    Alice in Wonderland (as: blockquote)
                </Body>
                <Body elementType="cite" data-testid="as-cite">
                    Alice in Wonderland (as: cite)
                </Body>
                <Body elementType="del" data-testid="as-del">
                    Alice in Wonderland (as: del)
                </Body>
            </StorySwatch>;
  },
  async play({
    canvas
  }) {
    const div = canvas.getByTestId('as-div');
    const bq = canvas.getByTestId('as-bq');
    const cite = canvas.getByTestId('as-cite');
    const del = canvas.getByTestId('as-del');
    expect(div.nodeName).toEqual('DIV');
    expect(bq.nodeName).toEqual('BLOCKQUOTE');
    expect(cite.nodeName).toEqual('CITE');
    expect(del.nodeName).toEqual('DEL');
  }
}`,...(O=(H=m.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var k,D,L;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render() {
    return <TextContext.Provider value={{
      className: tw\`pds:body-text-2xs\`
    }}>
                <StorySwatch>
                    <Body className="pds:body-text-2xl">Alice in Wonderland</Body>
                </StorySwatch>
            </TextContext.Provider>;
  }
}`,...(L=(D=h.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const ie=["Size","TextColor","Emphasized","Strong","StrongEmphasized","FontWeight","ElementType","OverrideContext"];export{m as ElementType,i as Emphasized,p as FontWeight,h as OverrideContext,r as Size,c as Strong,y as StrongEmphasized,l as TextColor,ie as __namedExportsOrder,le as default};
