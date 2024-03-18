"use strict";(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[217],{"./src/components/ui/input/Input.stories.tsx":(c,o,i)=>{i.r(o),i.d(o,{Overview:()=>p,Sizes:()=>d,__namedExportsOrder:()=>u,default:()=>r});var e=i("./node_modules/next/dist/compiled/react/jsx-runtime.js"),t=i("./src/components/ui/index.ts"),s=i("./styled-system/jsx/index.mjs");const r={title:"FORM / Input",component:t.Input,argTypes:{size:{control:{type:"radio"},options:["2xs","xs","sm","md","lg","xl","2xl"],description:"**Size of Input - default: `md`. **\n      \n `2xs:` fontSize: 12px, height: 28px\n      \n `xs:` fontSize: 12px, height: 32px\n      \n `sm:`: fontSize: 14px, height: 36px\n      \n `md:` fontSize: 16px, height: 40px\n      \n `lg:` fontSize: 16px, height: 44px\n      \n `xl:` fontSize: 18px, height: 48px\n      \n `2xl:` fontSize: 30px, height: 64px"},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled."},readOnly:{control:{type:"boolean"},description:"Whether the number input is readonly."},name:{control:{type:"text"},description:"The name attribute of the input. Useful for form submission."},title:{control:{type:"text"},description:"The custom id optionally set at `id` if it needs to differ from the id generated."},onChange:{description:"\nFunction callback when the input is changed. `() => void`"},onFocus:{description:"\nFunction callback when the input is focus. `() => void`"},onMouseEnter:{description:"\nFunction when the input is mouse enter. `() => void`"},onMouseLeave:{description:"\nFunction when the input is mouse leave. `() => void`"},onMouseOver:{description:"\nFunction when the input is mouse over. `() => void`"},placeholder:{control:{type:"text"},description:"Text displayed in the input field when it is empty, serving as a hint or suggestion for the user."},maxLength:{control:{type:"number"},description:"Specifies the maximum number of characters that a user can input into the field."},type:{control:{type:"text"},description:'The type of input, such as "text," "password," "number,"... determining the data type the input field will accept.'},onBlur:{description:"\n Events triggered when the input field gains or loses focus. `() => void`"}}},p={render:n=>(0,e.jsxs)(s.Stack,{gap:"1.5",width:"2xs",children:[(0,e.jsx)("label",{htmlFor:"name",children:"Name"}),(0,e.jsx)(t.Input,{id:"name",placeholder:"Your Name",...n})]})},d={render:n=>(0,e.jsxs)(s.Flex,{gap:"6",align:"center",children:[(0,e.jsx)(t.Input,{...n,size:"2xs"}),(0,e.jsx)(t.Input,{...n,size:"xs"}),(0,e.jsx)(t.Input,{...n,size:"sm"}),(0,e.jsx)(t.Input,{...n,size:"md"}),(0,e.jsx)(t.Input,{...n,size:"lg"}),(0,e.jsx)(t.Input,{...n,size:"xl"}),(0,e.jsx)(t.Input,{...n,size:"2xl"})]})},u=["Overview","Sizes"]}}]);
