"use strict";(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[8793],{"./src/components/ui/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ColorPalette:()=>ColorPalette,Disabled:()=>Disabled,Overview:()=>Overview,Sizes:()=>Sizes,Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Basic_parameters,_Basic_parameters_docs,_Basic_parameters1,_Sizes_parameters,_Sizes_parameters_docs,_Sizes_parameters1,_Variant_parameters,_Variant_parameters_docs,_Variant_parameters1,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1,_ColorPalette_parameters,_ColorPalette_parameters_docs,_ColorPalette_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts"),_styled_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./styled-system/jsx/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"FORM / Button",component:_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,argTypes:{size:{control:{type:"radio"},options:["xs","sm","md","lg","xl","2xl"],description:"**Size of Button - default: `md`. **\n      \n `xs:` fontSize: 12px, height: 32px\n      \n `sm:`: fontSize: 14px, height: 36px\n      \n `md:` fontSize: 14px, height: 40px\n      \n `lg:` fontSize: 16px, height: 44px\n      \n `xl:` fontSize: 16px, height: 48px\n      \n `2xl:` fontSize: 18px, height: 64px "},variant:{control:{type:"radio"},options:["solid","outline","ghost","link"],description:"**Variant of Button - default: `solid`. **\n      \n `solid:` uniform background color for buttons\n      \n `outline:` the border or edge surrounding buttons\n      \n `ghost:` style characterized by a transparent or semi-transparent background and a visible border\n      \n `link:` styles designed to resemble traditional hyperlinks"},disabled:{control:{type:"boolean"},description:"Unavailable for selection"},hidden:{control:{type:"boolean"},description:"hidden for buttons"},children:{},colorPalette:{control:{type:"text"},description:"Use the defined color codes in the system to change the background for the button"}}},Overview={args:{children:"Default"}},Basic={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,variant:"outline",children:"Default"})},Sizes={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.kC,{gap:"6",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,size:"xs",children:"XS"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,size:"sm",children:"SM"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,size:"md",children:"MD"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,size:"lg",children:"LG"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,size:"xl",children:"XL"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,size:"2xl",children:"2XL"})]})},Variant={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.kC,{gap:"6",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,variant:"solid",children:"Solid"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,variant:"outline",children:"Outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,variant:"ghost",children:"Ghost"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,variant:"link",children:"Link"})]})},Disabled={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.kC,{gap:"6",align:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,disabled:!0,children:"Disabled"})})},ColorPalette={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.kC,{gap:"6",align:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{...args,colorPalette:"red",children:"Color Palette"})})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"{\n  args: {\n    children: 'Default'\n  }\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Basic.parameters={...Basic.parameters,docs:{...null===(_Basic_parameters=Basic.parameters)||void 0===_Basic_parameters?void 0:_Basic_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Button {...args} variant="outline">\n        Default\n      </Button>;\n  }\n}',...null===(_Basic_parameters1=Basic.parameters)||void 0===_Basic_parameters1||null===(_Basic_parameters_docs=_Basic_parameters1.docs)||void 0===_Basic_parameters_docs?void 0:_Basic_parameters_docs.source}}},Sizes.parameters={...Sizes.parameters,docs:{...null===(_Sizes_parameters=Sizes.parameters)||void 0===_Sizes_parameters?void 0:_Sizes_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Button {...args} size="xs">\n          XS\n        </Button>\n        <Button {...args} size="sm">\n          SM\n        </Button>\n        <Button {...args} size="md">\n          MD\n        </Button>\n        <Button {...args} size="lg">\n          LG\n        </Button>\n        <Button {...args} size="xl">\n          XL\n        </Button>\n        <Button {...args} size="2xl">\n          2XL\n        </Button>\n      </Flex>;\n  }\n}',...null===(_Sizes_parameters1=Sizes.parameters)||void 0===_Sizes_parameters1||null===(_Sizes_parameters_docs=_Sizes_parameters1.docs)||void 0===_Sizes_parameters_docs?void 0:_Sizes_parameters_docs.source}}},Variant.parameters={...Variant.parameters,docs:{...null===(_Variant_parameters=Variant.parameters)||void 0===_Variant_parameters?void 0:_Variant_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Button {...args} variant="solid">\n          Solid\n        </Button>\n        <Button {...args} variant="outline">\n          Outline\n        </Button>\n        <Button {...args} variant="ghost">\n          Ghost\n        </Button>\n        <Button {...args} variant="link">\n          Link\n        </Button>\n      </Flex>;\n  }\n}',...null===(_Variant_parameters1=Variant.parameters)||void 0===_Variant_parameters1||null===(_Variant_parameters_docs=_Variant_parameters1.docs)||void 0===_Variant_parameters_docs?void 0:_Variant_parameters_docs.source}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Button {...args} disabled>\n          Disabled\n        </Button>\n      </Flex>;\n  }\n}',...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source}}},ColorPalette.parameters={...ColorPalette.parameters,docs:{...null===(_ColorPalette_parameters=ColorPalette.parameters)||void 0===_ColorPalette_parameters?void 0:_ColorPalette_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Button {...args} colorPalette="red">\n          Color Palette\n        </Button>\n      </Flex>;\n  }\n}',...null===(_ColorPalette_parameters1=ColorPalette.parameters)||void 0===_ColorPalette_parameters1||null===(_ColorPalette_parameters_docs=_ColorPalette_parameters1.docs)||void 0===_ColorPalette_parameters_docs?void 0:_ColorPalette_parameters_docs.source}}};const __namedExportsOrder=["Overview","Basic","Sizes","Variant","Disabled","ColorPalette"]}}]);