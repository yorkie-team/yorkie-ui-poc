(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[3268,4014],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/icon/Icon.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Icon_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icon/Icon.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"icon",children:"Icon"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Icon_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Icon } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Menus empower users to take action with a single tap. Incorporate them into your design for a seamless and efficient user experience."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Icon_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:"\n      <Icon>\n        <CalendarIcon />\n      </Icon>\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sizes",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#icon-size",children:"Sizes"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["There are seven sizes available for an Icon box: xs, sm, md, lg, xl, and 2xl. The default size is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"md"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Icon_stories__WEBPACK_IMPORTED_MODULE_2__.Sizes,source:{format:!0,code:'\n      <Flex gap="6" align="center">\n        <Icon size="xs" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="sm" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="md" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="xl" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="2xl" {...args}>\n          <CalendarIcon />\n        </Icon>\n      </Flex>\n    '}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/icon/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Sizes_parameters,_Sizes_parameters_docs,_Sizes_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts"),_styled_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./styled-system/jsx/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"FORM / Icon",component:_components_ui__WEBPACK_IMPORTED_MODULE_1__.In,argTypes:{size:{control:{type:"radio"},options:["xs","sm","md","lg","xl","2xl"],description:"**Size of Icon - default: `md`. **\n      \n `xs:` height: 12px, width: 12px\n      \n `sm:` height: 16px, width: 16px\n      \n `md:` height: 20px, width: 20px\n      \n `lg:` height: 24px, width: 24px\n      \n `xl:` height: 28px, width: 28px\n      \n `2xl:` height: 32px, width: 32px"}}},Overview={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.In,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.CT,{})})},Sizes={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.so,{gap:"6",align:"center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.In,{size:"xs",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.CT,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.In,{size:"sm",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.CT,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.In,{size:"md",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.CT,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.In,{size:"xl",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.CT,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.In,{size:"2xl",...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.CT,{})})]})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"{\n  render: args => {\n    return <Icon {...args}>\n        <CalendarIcon />\n      </Icon>;\n  }\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Sizes.parameters={...Sizes.parameters,docs:{...null===(_Sizes_parameters=Sizes.parameters)||void 0===_Sizes_parameters?void 0:_Sizes_parameters.docs,source:{originalSource:'{\n  render: args => {\n    return <Flex gap="6" align="center">\n        <Icon size="xs" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="sm" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="md" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="xl" {...args}>\n          <CalendarIcon />\n        </Icon>\n        <Icon size="2xl" {...args}>\n          <CalendarIcon />\n        </Icon>\n      </Flex>;\n  }\n}',...null===(_Sizes_parameters1=Sizes.parameters)||void 0===_Sizes_parameters1||null===(_Sizes_parameters_docs=_Sizes_parameters1.docs)||void 0===_Sizes_parameters_docs?void 0:_Sizes_parameters_docs.source}}};const __namedExportsOrder=["Overview","Sizes"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);