import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as c}from"./index-CIfn4WAl.js";import{S as m}from"./themed-doc-container-23MYOY87.js";import"./index-D4lIrffr.js";import{w as h}from"./with-story-swatch-splO2axp.js";import{H as n,i as v}from"./car-icon-BFl1wZbI.js";import"./close-button-DldS42sq.js";import"./_build_class_names_tagged_template-M4c5DjCo.js";import"./tw-merge-Dzlj8q8h.js";import"./index-DXMeLfcf.js";import"./iframe-C561ExEk.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CKi3-S8O.js";const V={title:"components/typography/Heading",component:n},a={render(){return e.jsxs(m,{children:[e.jsx(n,{fontSize:"xs",children:"Alice in Wonderland (size: xs)"}),e.jsx(n,{fontSize:"sm",children:"Alice in Wonderland (size: sm)"}),e.jsx(n,{fontSize:"md",children:"Alice in Wonderland (size: md - default)"}),e.jsx(n,{fontSize:"lg",children:"Alice in Wonderland (size: lg)"}),e.jsx(n,{fontSize:"xl",children:"Alice in Wonderland (size: xl)"}),e.jsx(n,{fontSize:"2xl",children:"Alice in Wonderland (size: 2xl)"}),e.jsx(n,{fontSize:"3xl",children:"Alice in Wonderland (size: 3xl)"}),e.jsx(n,{fontSize:"4xl",children:"Alice in Wonderland (size: 4xl)"})]})}},r={render(){return e.jsxs(m,{children:[e.jsx(n,{"data-testid":"as-xs-semibold",fontSize:"xs",children:"Alice in Wonderland (size: xs, weight: semibold - no option)"}),e.jsx(n,{"data-testid":"as-sm-semibold",fontSize:"sm",children:"Alice in Wonderland (size: sm, weight: semibold - no option)"}),e.jsx(n,{"data-testid":"as-base-medium",fontSize:"md",children:"Alice in Wonderland (size: base, weight: medium - default)"})]})}},t={parameters:{docs:{description:{story:"By default, `Title` renders as a `h1` element. But, you can use h1...h6 with the `as` prop."}}},render(){return e.jsxs(m,{children:[e.jsx(n,{"data-testid":"as-h1",children:"Alice in Wonderland (level: 1 - default)"}),e.jsx(n,{"data-testid":"as-h2",level:2,children:"Alice in Wonderland (level: 2)"}),e.jsx(n,{"data-testid":"as-h3",level:3,children:"Alice in Wonderland (level: 3)"}),e.jsx(n,{"data-testid":"as-h4",level:4,children:"Alice in Wonderland (level: 4)"}),e.jsx(n,{"data-testid":"as-h5",level:5,children:"Alice in Wonderland (level: 5)"}),e.jsx(n,{"data-testid":"as-h6",level:6,children:"Alice in Wonderland (level: 6)"})]})},async play({canvas:i}){const d=await(await Promise.all([i.findByTestId("as-h1"),i.findByTestId("as-h2"),i.findByTestId("as-h3"),i.findByTestId("as-h4"),i.findByTestId("as-h5"),i.findByTestId("as-h6")])).map(P=>P.nodeName);c(d).toEqual(["H1","H2","H3","H4","H5","H6"])}},s={decorators:[h()],render(){return e.jsx(v.Provider,{value:{level:2},children:e.jsx(n,{"data-testid":"override-level",children:"Heading in h2"})})},async play({canvas:i}){const d=await i.findByTestId("override-level");c(d.nodeName).toBe("H2")}},o={decorators:[h()],render(){return e.jsx(v.Provider,{value:{slots:{heading:{level:2}}},children:e.jsx(n,{"data-testid":"override-level",children:"Heading in h2"})})},async play({canvas:i}){const d=await i.findByTestId("override-level");c(d.nodeName).toBe("H2")}},l={decorators:[h()],render(){return e.jsx(v.Provider,{value:{slots:{sub:{level:2}}},children:e.jsx(n,{"data-testid":"override-level",slot:"sub",children:"Heading in h2"})})},async play({canvas:i}){const d=await i.findByTestId("override-level");c(d.nodeName).toBe("H2")}};var g,H,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render() {
    return <StorySwatch>
                <Heading fontSize="xs">Alice in Wonderland (size: xs)</Heading>
                <Heading fontSize="sm">Alice in Wonderland (size: sm)</Heading>
                <Heading fontSize="md">Alice in Wonderland (size: md - default)</Heading>
                <Heading fontSize="lg">Alice in Wonderland (size: lg)</Heading>
                <Heading fontSize="xl">Alice in Wonderland (size: xl)</Heading>
                <Heading fontSize="2xl">Alice in Wonderland (size: 2xl)</Heading>
                <Heading fontSize="3xl">Alice in Wonderland (size: 3xl)</Heading>
                <Heading fontSize="4xl">Alice in Wonderland (size: 4xl)</Heading>
            </StorySwatch>;
  }
}`,...(p=(H=a.parameters)==null?void 0:H.docs)==null?void 0:p.source}}};var x,u,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render() {
    return <StorySwatch>
                <Heading data-testid="as-xs-semibold" fontSize="xs">
                    Alice in Wonderland (size: xs, weight: semibold - no option)
                </Heading>
                <Heading data-testid="as-sm-semibold" fontSize="sm">
                    Alice in Wonderland (size: sm, weight: semibold - no option)
                </Heading>
                <Heading data-testid="as-base-medium" fontSize="md">
                    Alice in Wonderland (size: base, weight: medium - default)
                </Heading>
            </StorySwatch>;
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var S,y,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'By default, \`Title\` renders as a \`h1\` element. But, you can use h1...h6 with the \`as\` prop.'
      }
    }
  },
  render() {
    return <StorySwatch>
                <Heading data-testid="as-h1">Alice in Wonderland (level: 1 - default)</Heading>
                <Heading data-testid="as-h2" level={2}>
                    Alice in Wonderland (level: 2)
                </Heading>
                <Heading data-testid="as-h3" level={3}>
                    Alice in Wonderland (level: 3)
                </Heading>
                <Heading data-testid="as-h4" level={4}>
                    Alice in Wonderland (level: 4)
                </Heading>
                <Heading data-testid="as-h5" level={5}>
                    Alice in Wonderland (level: 5)
                </Heading>
                <Heading data-testid="as-h6" level={6}>
                    Alice in Wonderland (level: 6)
                </Heading>
            </StorySwatch>;
  },
  async play({
    canvas
  }) {
    const nodeNames = await (await Promise.all([canvas.findByTestId('as-h1'), canvas.findByTestId('as-h2'), canvas.findByTestId('as-h3'), canvas.findByTestId('as-h4'), canvas.findByTestId('as-h5'), canvas.findByTestId('as-h6')])).map(n => n.nodeName);
    expect(nodeNames).toEqual(['H1', 'H2', 'H3', 'H4', 'H5', 'H6']);
  }
}`,...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var W,w,A;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [withStorySwatch()],
  render() {
    return <HeadingContext.Provider value={{
      level: 2
    }}>
                <Heading data-testid="override-level">Heading in h2</Heading>
            </HeadingContext.Provider>;
  },
  async play({
    canvas
  }) {
    const overrideHeadingNode = await canvas.findByTestId('override-level');
    expect(overrideHeadingNode.nodeName).toBe('H2');
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var j,B,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [withStorySwatch()],
  render() {
    return <HeadingContext.Provider value={{
      slots: {
        heading: {
          level: 2
        }
      }
    }}>
                <Heading data-testid="override-level">Heading in h2</Heading>
            </HeadingContext.Provider>;
  },
  async play({
    canvas
  }) {
    const overrideHeadingNode = await canvas.findByTestId('override-level');
    expect(overrideHeadingNode.nodeName).toBe('H2');
  }
}`,...(N=(B=o.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var T,I,b;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: [withStorySwatch()],
  render() {
    return <HeadingContext.Provider value={{
      slots: {
        sub: {
          level: 2
        }
      }
    }}>
                <Heading data-testid="override-level" slot="sub">
                    Heading in h2
                </Heading>
            </HeadingContext.Provider>;
  },
  async play({
    canvas
  }) {
    const overrideHeadingNode = await canvas.findByTestId('override-level');
    expect(overrideHeadingNode.nodeName).toBe('H2');
  }
}`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const X=["Size","Normal","ElementType","OverrideLevel","OverrideWithSlot","OverrideWithDifferentSlot"];export{t as ElementType,r as Normal,s as OverrideLevel,l as OverrideWithDifferentSlot,o as OverrideWithSlot,a as Size,X as __namedExportsOrder,V as default};
