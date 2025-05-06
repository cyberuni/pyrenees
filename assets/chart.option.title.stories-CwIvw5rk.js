import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{C as p,d as c}from"./options-DYktt96u.js";import"./index-D4lIrffr.js";import"./tw-merge-Dzlj8q8h.js";import"./style-DwrwojIq.js";const u={title:"components/charts/Chart/option/title",parameters:{layout:"centered"}},e={render(){return d.jsx(p,{id:"main",option:c({xAxis:{data:["shirt","cardigan","chiffon","pants","heels","socks"]},yAxis:{},series:[{name:"sales",type:"bar",color:"#333",data:[5,20,36,10,10,20]}]})})}},t={render(){return d.jsx(p,{id:"main",option:c({title:{text:"ECharts Getting Started Example"},xAxis:{data:["shirt","cardigan","chiffon","pants","heels","socks"]},yAxis:{},series:[{name:"sales",type:"bar",color:"#333",data:[5,20,36,10,10,20]}]})})}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render() {
    return <Chart id="main" option={defineChartOption({
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [{
        name: 'sales',
        type: 'bar',
        color: '#333',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })} />;
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render() {
    return <Chart id="main" option={defineChartOption({
      title: {
        text: 'ECharts Getting Started Example'
      },
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [{
        name: 'sales',
        type: 'bar',
        color: '#333',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })} />;
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["NoTitle","SingleTitle"];export{e as NoTitle,t as SingleTitle,g as __namedExportsOrder,u as default};
