"use strict";(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[4371],{"./src/components/ui/pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DATA DISPLAY / Pagination",argTypes:{dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},count:{control:{type:"number"},description:"Total number of data items."},onPageChange:{description:"\nCalled when the page number is changed, and it takes the resulting page number argument. `(details: PageChangeDetails) => void`"},page:{control:{type:"number"},description:"The active page."},pageSize:{control:{type:"number"},description:"Number of data items per page."},siblingCount:{control:{type:"number"},description:"Number of pages to show beside active page."},translations:{control:{type:"boolean"},description:'\nFunction called when the pointer is pressed down outside the component. `{ nextTriggerLabel: "Next", prevTriggerLabel: "Prev", itemLabel: (details) => `Page ${details.page}`}`'},type:{control:{type:"radio"},options:["link","button"],description:"The type of the trigger element.",default:"button"}}},Overview={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.tl,{count:5e3,pageSize:10,siblingCount:2})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"{\n  render: () => {\n    return <Pagination count={5000} pageSize={10} siblingCount={2}></Pagination>;\n  }\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}};const __namedExportsOrder=["Overview"]}}]);