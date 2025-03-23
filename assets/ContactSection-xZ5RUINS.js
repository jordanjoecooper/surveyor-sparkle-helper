import{j as e}from"./ui-yMmktwXK.js";import{r as a,u as s}from"./vendor-Bk1VkXHQ.js";import{c as r}from"./Footer-Cf7aVE9s.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=r("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),o=r("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),n=r("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),i=()=>{const[r,t]=a.useState(""),[o,n]=a.useState(""),[i,d]=a.useState(!1),[l,c]=a.useState(null),m=s();return e.jsxs("form",{name:"contact",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:async e=>{e.preventDefault(),d(!0),c(null);const a=e.target,s=new FormData(a);try{const e=await fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(s).toString()});e.ok?m("/form-success"):(c("Form submission failed. Please try again or contact us directly."),e.ok||0!==e.status||(window.location.href=`mailto:info@gbsurveying.com?subject=Contact Form Submission&body=${encodeURIComponent(`Name: ${s.get("name")}\nEmail: ${s.get("email")}\nAddress: ${s.get("address")}\nPostcode: ${s.get("postcode")}\nMessage: ${s.get("message")}`)}`))}catch(r){c("Unable to submit form. Please try again or contact us directly."),window.location.href=`mailto:info@gbsurveying.com?subject=Contact Form Submission&body=${encodeURIComponent(`Name: ${s.get("name")}\nEmail: ${s.get("email")}\nAddress: ${s.get("address")}\nPostcode: ${s.get("postcode")}\nMessage: ${s.get("message")}`)}`}finally{d(!1)}},className:"space-y-6",children:[e.jsx("input",{type:"hidden",name:"form-name",value:"contact"}),e.jsx("input",{type:"hidden",name:"subject",value:"New Contact Form Submission"}),e.jsx("div",{hidden:!0,children:e.jsx("input",{name:"bot-field"})}),l&&e.jsx("div",{className:"p-4 text-red-600 bg-red-50 rounded-md",children:l}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"name",className:"block text-sm font-medium text-warmGray-700 mb-1",children:["Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"email",className:"block text-sm font-medium text-warmGray-700 mb-1",children:["Email ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"address",className:"block text-sm font-medium text-warmGray-700 mb-1",children:["Address ",e.jsx("span",{className:"text-warmGray-500 text-sm",children:"(optional)"})]}),e.jsx("input",{type:"text",id:"address",name:"address",value:o,onChange:e=>n(e.target.value),className:"w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200",placeholder:"Enter address"})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"postcode",className:"block text-sm font-medium text-warmGray-700 mb-1",children:["Postcode ",e.jsx("span",{className:"text-warmGray-500 text-sm",children:"(optional)"})]}),e.jsx("input",{type:"text",id:"postcode",name:"postcode",value:r,onChange:e=>t(e.target.value),className:"w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200",placeholder:"e.g. SW1A 1AA"})]})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"message",className:"block text-sm font-medium text-warmGray-700 mb-1",children:["Message ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{id:"message",name:"message",rows:4,required:!0,className:"w-full px-4 py-3 rounded-md border border-warmGray-300 focus:ring-2 focus:ring-warmGray-400 focus:border-transparent transition-colors duration-200"})]}),e.jsx("button",{type:"submit",disabled:i,className:"w-full bg-[#08979f] text-white px-6 py-3 rounded-md transition-colors duration-200 "+(i?"opacity-75 cursor-not-allowed":"hover:bg-[#078087]"),children:i?"Sending...":"Submit"})]})},d=()=>{const a=encodeURI("mailto:info@gbsurveying.com?subject=Survey Quote Request&body=I would like to request a survey quote.\n\nProperty Address:\n\nPostcode:\n\nEstate Agent:\n\nAsking Price:\n\nProperty Style (For example: Detached, Semi-Detached, Terraced, Flat):");return e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-warmGray-900 mb-6",children:"Get in Touch"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-warmGray-600",children:"Contact us using the details below. For a free, no-obligation survey quote, get in touch by phone, email, or by filling out the contact form. Please include the property address, postcode, selling agent’s name, asking price, property type and any other relevant information."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("a",{href:"tel:+441233367361",className:"flex items-center space-x-3 text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200",children:[e.jsx(n,{className:"w-5 h-5"}),e.jsx("span",{children:"Office: 01233 367361"})]}),e.jsxs("a",{href:a,className:"flex items-center space-x-3 text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200",children:[e.jsx(t,{className:"w-5 h-5"}),e.jsx("span",{children:"info@gbsurveying.com"})]}),e.jsxs("a",{href:"https://maps.google.com/?q=Hurstfield,Canterbury+Road,Challock,Ashford,Kent,TN25+4DW",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-3 text-warmGray-600 hover:text-warmGray-900 transition-colors duration-200",children:[e.jsx(o,{className:"w-5 h-5"}),e.jsx("span",{children:"Ashford, Kent"})]})]})]})]}),e.jsx(i,{})]})};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */export{d as C};
