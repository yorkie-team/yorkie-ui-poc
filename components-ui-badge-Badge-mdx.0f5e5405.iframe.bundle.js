(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[8732,1046],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/badge/Badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Badge_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/badge/Badge.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Badge } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Badge unequivocally generates a small badge that appears with utmost certainty at the top-right corner of its child elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sizes",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#badge-sizes",children:"Sizes"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["There are 6 sizes: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sm"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"md"}),",and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"lg"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Sizes,source:{format:!0,code:'\n      <div>\n        <Badge {...args} size="sm">\n          SM\n        </Badge>\n        <Badge {...args} size="md">\n          MD\n        </Badge>\n        <Badge {...args} size="lg">\n          LG\n        </Badge>\n      </div>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"variant",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#badge-variant",children:"Variant"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["There are 4 types: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"link"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"subtle"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Variant,source:{format:!0,code:'\n      <div>\n        <Badge {...args} variant="solid">\n          Solid\n        </Badge>\n        <Badge {...args} variant="outline">\n          Outline\n        </Badge>\n        <Badge {...args} variant="subtle">\n          Subtle\n        </Badge>\n      </div>\n    '}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/badge/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Sizes:()=>Sizes,Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Sizes_parameters,_Sizes_parameters_docs,_Sizes_parameters1,_Variant_parameters,_Variant_parameters_docs,_Variant_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/ui/index.ts")),_styled_jsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./styled-system/jsx/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DATA DISPLAY / Badge",argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],description:"**Size of Badge - default: `sm`. **\n    \n `sm:` height: 20px\n    \n `md:` height: 24px\n    \n `lg:` height: 28px"},variant:{control:{type:"radio"},options:["solid","outline","subtle"],description:"**Variant of Badge - default: `solid`. **\n        \n `solid:` uniform background color for buttons.\n        \n `outline:` the border or edge surrounding buttons.\n        \n `subtle:` typically have a minimalist design and may not draw much attention.\n        "}}},Overview=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Ex,{...props,children:"Yorkie UI"}),Sizes={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.so,{gap:"6",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Ex,{...args,size:"sm",children:"SM"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Ex,{...args,size:"md",children:"MD"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Ex,{...args,size:"lg",children:"LG"})]})},Variant={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_3__.so,{gap:"6",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Ex,{...args,variant:"solid",children:"Solid"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Ex,{...args,variant:"outline",children:"Outline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Ex,{...args,variant:"subtle",children:"Subtle"})]})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"(props: BadgeProps) => {\n  return <Badge {...props}>Yorkie UI</Badge>;\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Sizes.parameters={...Sizes.parameters,docs:{...null===(_Sizes_parameters=Sizes.parameters)||void 0===_Sizes_parameters?void 0:_Sizes_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Badge {...args} size="sm">\n          SM\n        </Badge>\n        <Badge {...args} size="md">\n          MD\n        </Badge>\n        <Badge {...args} size="lg">\n          LG\n        </Badge>\n      </Flex>;\n  }\n}',...null===(_Sizes_parameters1=Sizes.parameters)||void 0===_Sizes_parameters1||null===(_Sizes_parameters_docs=_Sizes_parameters1.docs)||void 0===_Sizes_parameters_docs?void 0:_Sizes_parameters_docs.source}}},Variant.parameters={...Variant.parameters,docs:{...null===(_Variant_parameters=Variant.parameters)||void 0===_Variant_parameters?void 0:_Variant_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Badge {...args} variant="solid">\n          Solid\n        </Badge>\n        <Badge {...args} variant="outline">\n          Outline\n        </Badge>\n        <Badge {...args} variant="subtle">\n          Subtle\n        </Badge>\n      </Flex>;\n  }\n}',...null===(_Variant_parameters1=Variant.parameters)||void 0===_Variant_parameters1||null===(_Variant_parameters_docs=_Variant_parameters1.docs)||void 0===_Variant_parameters_docs?void 0:_Variant_parameters_docs.source}}};const __namedExportsOrder=["Overview","Sizes","Variant"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);