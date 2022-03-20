import{j as b,r as p,R as T,a as I}from"./vendor.f11b6061.js";const x=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}};x();const n=b.exports.jsx,c=b.exports.jsxs;function W(t){const[e,i]=p.exports.useState(""),[a,s]=p.exports.useState(!1);return n("form",{action:"",onSubmit:function(o){o.preventDefault(),e.trim()?t.onSubmit(e):(s(!0),setTimeout(()=>s(!1),1e3)),i("")},className:"search",children:n(A,{value:e,onChange:o=>{i(o.target.value)},showError:a})})}function A(t){const{value:e,onChange:i,showError:a}=t;return n("input",{className:"search-input"+" error".repeat(a),type:"text",placeholder:"Which city?",onChange:i,value:e})}function F(t){const{show:e,ulClass:i}=t;return c("ul",{className:i,type:"none",children:[(e==null?void 0:e.temperature)!=null&&c("li",{children:["Temperature: ",n("span",{className:"temp grad",children:e.temperature})]}),(e==null?void 0:e.feelsLike)!=null&&c("li",{children:["Feels like: ",n("span",{className:"feels-like grad",children:e.feelsLike})]}),(e==null?void 0:e.weather)!=null&&c("li",{children:["Weather: ",n("span",{className:"cur-weather"}),e.weather]}),(e==null?void 0:e.sunrise)!=null&&c("li",{children:["Sunrise: ",n("span",{className:"sunrise"}),e.sunrise]}),(e==null?void 0:e.sunset)!=null&&c("li",{children:["Sunset: ",n("span",{className:"sunset",children:e.sunset})]})]})}function C(t){const{src:e,alt:i}=t;return n("img",{className:"weather-img",src:e,alt:i})}function y(t){return n("div",{className:"location-name",children:t.value})}function E(t){return n("span",{className:"temp grad",children:t.value})}function $(t){const{isActive:e,params:i,onLikeClick:a}=t,{cityName:s,temperature:r,weatherIcon:o,weather:m,isLiked:f}=i;return e?c("div",{className:"tab tab-now active",id:"tab01",children:[n("div",{className:"temperature",children:n(E,{value:r})}),n("div",{className:"img-wrap",children:n(C,{src:o,alt:m})}),c("div",{className:"bottom",children:[n(y,{value:s}),n("input",{type:"button",name:"like",className:"like-btn"+" active".repeat(f),id:"likeBtn",onClick:()=>{a(s)}})]})]}):null}function D(t){const{isActive:e,params:i}=t;return e?c("div",{className:"tab tab-details active",id:"tab02",children:[n(y,{value:i.cityName}),n(F,{show:i,ulClass:"details-list"})]}):null}function O(t){const{isActive:e,cityName:i,blockList:a}=t;return e?c("div",{className:"tab tab-forecast active",id:"tab03",children:[n("div",{className:"location-name",children:i||"oaoaoa"}),n("div",{className:"time-block-list",children:a})]}):null}function U(t){const{date:e,time:i,params:a}=t,{weatherIcon:s,weather:r,temperature:o,feelsLike:m}=a;return c("div",{className:"time-block",children:[c("div",{className:"time-block_top",children:[n("div",{className:"date",children:e}),n("div",{className:"time",children:i})]}),c("div",{className:"time-block_bot",children:[n("div",{className:"params",children:c("ul",{type:"none",children:[c("li",{children:["Temperature: ",n("span",{className:"temp grad",children:o})]}),c("li",{children:["Feels like: ",n("span",{className:"feels-like grad",children:m})]})]})}),c("div",{className:"time-block-weather",children:[n("div",{className:"time-weather-name",children:r}),n(C,{src:s,alt:r})]})]})]})}function j(t){const{changeTab:e,selectedTab:i}=t;return c("nav",{className:"tab-nav",children:[n("button",{className:"now-btn "+(i[0]&&"active"),"data-tab":"NOW",onClick:()=>{e(0)},children:"Now"}),n("button",{className:"details-btn "+(i[1]&&"active"),"data-tab":"DETAILS",onClick:()=>{e(1)},children:"Details"}),n("button",{className:"forecast-btn "+(i[2]&&"active"),"data-tab":"FORECAST",onClick:()=>{e(2)},children:"Forecast"})]})}function M(t){const{params:e}=t,[i,a]=p.exports.useState([!0,!1,!1]),s=function(r){let o=[!1,!1,!1];o[r]=!0,a(o)};return c("div",{className:"weather",children:[n($,{isActive:i[0],params:e,onLikeClick:t.onLikeClick}),n(D,{isActive:i[1],params:e}),n(O,{isActive:i[2],cityName:e.cityName,blockList:t.blockList}),n(j,{changeTab:s,selectedTab:i})]})}function R(t){const{likedCities:e}=t;return c("div",{className:"locations",children:[n("div",{className:"block-name",children:"Added locations:"}),n("div",{className:"locations-list",children:n("ul",{type:"none",className:"locations-ul",children:e})})]})}function q(t){const{value:e,removeCity:i,chooseCity:a}=t;return c("li",{children:[n("input",{type:"button",className:"liked-location",value:e,onClick:function(){a(e)}}),n("button",{className:"delete-location",onClick:function(){i(e)}})]})}const K={cityName:"City",temperature:"",feelsLike:"",weather:"",weatherIcon:"src/img/search.svg",sunrise:"",sunset:"",isLiked:!1,likedCities:[],get(t){try{let e=JSON.parse(localStorage.getItem("storage"));return e.likedCities=e.likedCities.map(t),e||this}catch(e){return console.log(e),this}}},w={serverUrl:"https://api.openweathermap.org/data/2.5/weather",apiKey:"3fe949c0b26e50dd4a636123c3945f54",serverIconUrl:"https://openweathermap.org/img/wn/",forecastServerUrl:"https://api.openweathermap.org/data/2.5/forecast",metric:"&units=metric",weatherNowUrl:function(t){return`${this.serverUrl}?q=${t}&appid=${this.apiKey}${this.metric}`},forecastUrl:function(t){return`${this.forecastServerUrl}?q=${t}&appid=${this.apiKey}${this.metric}`},getWeatherIcon:function(t){return`${this.serverIconUrl}${t}@4x.png`}};function P(t){return w.getWeatherIcon(t)}function g(t,e){const i=e+"Url",a=w[i](t);return B(a)}function B(t){try{return fetch(t).then(e=>e.json())}catch(e){console.log(e)}}function L(t,e){const i={};i.cityName=e,i.temperature=Math.round(t.main.temp),i.feelsLike=Math.round(t.main.feels_like),i.weather=t.weather[0].main,i.sunrise=v(t.sys.sunrise),i.sunset=v(t.sys.sunset);const a=t.weather[0].icon;return i.weatherIcon=P(a),i}function _(t,e){const i=[];return t.list.forEach(a=>{const s=J(a.dt),r=v(a.dt),o=L(a,e);i.push(n(U,{date:s,time:r,params:o},s+" "+r))}),i}function v(t){if(!t)return;let e=new Date(t*1e3),i=e.getHours(),a="0"+e.getMinutes();return i+":"+a.slice(-2)}function J(t){let e=new Date(t*1e3);return e.getDate()+" "+e.toLocaleString("en",{month:"short"})}function V(){const[t,e]=p.exports.useState(K.get(k)),[i,a]=p.exports.useState([]);p.exports.useEffect(function(){try{const u={};Object.assign(u,t),u.likedCities=u.likedCities.map(h=>h.props.value);const d=JSON.stringify(u);localStorage.setItem("storage",d)}catch(u){console.log(u)}});async function s(l){const u=await g(l,"weatherNow"),d=L(u,l);e(N=>(d.likedCities=N.likedCities,d.isLiked=r(l,N.likedCities),d));const h=await g(l,"forecast"),S=_(h,l);a(S)}function r(l,u){return!!u.find(d=>d.props.value===l)}function o(l){r(l,t.likedCities)?m(l):f(l)}function m(l){e(u=>{u.likedCities=u.likedCities.filter(h=>h.props.value!==l);const d={};return Object.assign(d,u),d})}function f(l){e(u=>{const d=u.likedCities.slice();d.push(k(l));const h={};return Object.assign(h,u),h.likedCities=d,h.isLiked=!0,h})}function k(l){return n(q,{value:l,removeCity:m,chooseCity:s},l)}return c("div",{className:"wrapper",children:[n(W,{onSubmit:s}),c("div",{className:"blocks",children:[n(M,{params:t,blockList:i,onLikeClick:o}),n(R,{likedCities:t.likedCities})]})]})}T.render(n(I.StrictMode,{children:n("div",{className:"content",children:n(V,{})})}),document.getElementById("root"));