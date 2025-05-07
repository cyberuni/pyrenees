import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as A,u as j,e as h}from"./index-CIfn4WAl.js";import{r as B}from"./index-D4lIrffr.js";import{R as l}from"./themed-doc-container-BnVbRG0x.js";import"./_build_class_names_tagged_template-M4c5DjCo.js";import"./tw-merge-Dzlj8q8h.js";import"./index-DeiV5zXj.js";import"./iframe-B2Zlo6lX.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const Q={component:l,parameters:{sourceLink:"components/result_panel.tsx"}},t={render(){const[c,s]=B.useState([]);return e.jsxs("div",{className:"twds-flex twds-flex-col",children:[e.jsx("button",{type:"button","data-testid":"add",className:"twds-text-primary dark:twds-text-primary-dark twds-bg-primary dark:twds-bg-black twds-rounded",onClick:()=>s(u=>[...u,{a:1}]),children:"Add Result"}),e.jsx(l,{value:JSON.stringify(c)})]})},async play({canvasElement:c}){const s=A(c),u=await s.findByTestId("add");await j.click(u);const E=await s.findByTestId("result-panel");h(E.innerText).toEqual('[{"a":1}]')}},r={render(){return e.jsx(l,{label:"Custom Label",value:JSON.stringify({a:1},null,2)})}},a={render(){return e.jsx(l,{className:"twds-bg-blue-300 twds-rounded-md twds-border-solid twds-p-2 twds-border-white",value:JSON.stringify({a:1},null,"	")})}},n={args:{elementType:"samp",value:JSON.stringify({a:1,b:2,c:3},null,"	")}},o={args:{elementType:"code",value:JSON.stringify({a:1,b:2,c:3},null,"	")}},d={args:{elementType:"kbd",value:JSON.stringify({a:1,b:2,c:3},null,"	")}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render() {
    const [result, setResult] = useState<unknown[]>([]);
    return <div className="twds-flex twds-flex-col">
                <button type="button" data-testid="add" className="twds-text-primary dark:twds-text-primary-dark twds-bg-primary dark:twds-bg-black twds-rounded" onClick={() => setResult(v => [...v, {
        a: 1
      }])}>
                    Add Result
                </button>
                <ResultPanel value={JSON.stringify(result)} />
            </div>;
  },
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    const btn = await canvas.findByTestId('add');
    await userEvent.click(btn);
    const result = await canvas.findByTestId('result-panel');
    expect(result.innerText).toEqual(\`[{"a":1}]\`);
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,w,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render() {
    return <ResultPanel label="Custom Label" value={JSON.stringify({
      a: 1
    }, null, 2)} />;
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,S,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render() {
    return <ResultPanel className="twds-bg-blue-300 twds-rounded-md twds-border-solid twds-p-2 twds-border-white" value={JSON.stringify({
      a: 1
    }, null, '\\t')} />;
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,x,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    elementType: 'samp',
    value: JSON.stringify({
      a: 1,
      b: 2,
      c: 3
    }, null, '\\t')
  }
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var k,O,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    elementType: 'code',
    value: JSON.stringify({
      a: 1,
      b: 2,
      c: 3
    }, null, '\\t')
  }
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var J,T,R;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    elementType: 'kbd',
    value: JSON.stringify({
      a: 1,
      b: 2,
      c: 3
    }, null, '\\t')
  }
}`,...(R=(T=d.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const U=["Basic","CustomLabel","CustomCSS","AsSamp","AsCode","AsKbd"];export{o as AsCode,d as AsKbd,n as AsSamp,t as Basic,a as CustomCSS,r as CustomLabel,U as __namedExportsOrder,Q as default};
