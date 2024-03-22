"use strict";(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[6622],{"./src/components/ui/input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Sizes_parameters,_Sizes_parameters_docs,_Sizes_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts"),_styled_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./styled-system/jsx/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"FORM / Input",component:_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,argTypes:{size:{control:{type:"radio"},options:["2xs","xs","sm","md","lg","xl","2xl"],description:"**Size of Input - default: `md`. **\n      \n `2xs:` fontSize: 12px, height: 28px\n      \n `xs:` fontSize: 12px, height: 32px\n      \n `sm:`: fontSize: 14px, height: 36px\n      \n `md:` fontSize: 16px, height: 40px\n      \n `lg:` fontSize: 16px, height: 44px\n      \n `xl:` fontSize: 18px, height: 48px\n      \n `2xl:` fontSize: 30px, height: 64px"},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled."},readOnly:{control:{type:"boolean"},description:"Whether the number input is readonly."},name:{control:{type:"text"},description:"The name attribute of the input. Useful for form submission."},title:{control:{type:"text"},description:"The custom id optionally set at `id` if it needs to differ from the id generated."},onChange:{description:"\nFunction callback when the input is changed. `() => void`"},onFocus:{description:"\nFunction callback when the input is focus. `() => void`"},onMouseEnter:{description:"\nFunction when the input is mouse enter. `() => void`"},onMouseLeave:{description:"\nFunction when the input is mouse leave. `() => void`"},onMouseOver:{description:"\nFunction when the input is mouse over. `() => void`"},placeholder:{control:{type:"text"},description:"Text displayed in the input field when it is empty, serving as a hint or suggestion for the user."},maxLength:{control:{type:"number"},description:"Specifies the maximum number of characters that a user can input into the field."},type:{control:{type:"text"},description:'The type of input, such as "text," "password," "number,"... determining the data type the input field will accept.'},onBlur:{description:"\n Events triggered when the input field gains or loses focus. `() => void`"}}},Overview={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.BJ,{gap:"1.5",width:"2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.JU,{htmlFor:"name",children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{id:"name",placeholder:"Your Name",...args})]})},Sizes={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.so,{gap:"6",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{...args,size:"2xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{...args,size:"xs"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{...args,size:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{...args,size:"md"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{...args,size:"lg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{...args,size:"xl"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.pd,{...args,size:"2xl"})]})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Stack gap="1.5" width="2xs">\n        <Label htmlFor="name">Name</Label>\n        <Input id="name" placeholder="Your Name" {...args} />\n      </Stack>;\n  }\n}',...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Sizes.parameters={...Sizes.parameters,docs:{...null===(_Sizes_parameters=Sizes.parameters)||void 0===_Sizes_parameters?void 0:_Sizes_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Input {...args} size="2xs" />\n        <Input {...args} size="xs" />\n        <Input {...args} size="sm" />\n        <Input {...args} size="md" />\n        <Input {...args} size="lg" />\n        <Input {...args} size="xl" />\n        <Input {...args} size="2xl" />\n      </Flex>;\n  }\n}',...null===(_Sizes_parameters1=Sizes.parameters)||void 0===_Sizes_parameters1||null===(_Sizes_parameters_docs=_Sizes_parameters1.docs)||void 0===_Sizes_parameters_docs?void 0:_Sizes_parameters_docs.source}}};const __namedExportsOrder=["Overview","Sizes"]}}]);