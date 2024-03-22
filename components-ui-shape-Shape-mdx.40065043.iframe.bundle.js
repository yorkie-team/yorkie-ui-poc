(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[1296,4498],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/shape/Shape.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Shape_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/shape/Shape.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"shape",children:"Shape"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Shape_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Center, Square, Circle } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Center:"})})," centers its child given width and height"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Square:"})})," centers its child given size (width and height)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Circle:"})})," a Square with round border-radius"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"AbsoluteCenter:"})})," centers relative to its parent by given axis"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Component is a layout element that helps in centering its child element within itself. It is a useful feature for creating aesthetic designs and ensuring that the child element is positioned at the center of the parent element."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"center",children:"Center"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Shape_stories__WEBPACK_IMPORTED_MODULE_2__.CenterShape,source:{format:!0,code:'\n      <Box>\n        <Center bg="tomato" h="40px" color="white">\n          This is the Center\n        </Center>\n        <HStack mt="40px">\n          <Center w="40px" h="40px" bg="tomato">\n            <CalendarIcon />\n          </Center>\n          <Center w="40px" h="40px" bg="tomato" color="white">\n            <Box fontWeight="bold" fontSize="lg">\n              1\n            </Box>\n          </Center>\n        </HStack>\n      </Box>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"circle",children:"Circle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Shape_stories__WEBPACK_IMPORTED_MODULE_2__.CircleShape,source:{format:!0,code:'\n      <HStack mt="40px">\n        <Circle size="40px" bg="tomato" color="white">\n          <CalendarIcon />\n        </Circle>\n      </HStack>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"square",children:"Square"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Shape_stories__WEBPACK_IMPORTED_MODULE_2__.SquareShape,source:{format:!0,code:'\n      <Box>\n        <HStack mt="40px">\n          <Square size="40px" bg="tomato" color="white">\n            <CalendarIcon />\n          </Square>\n        </HStack>\n      </Box>\n    '}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/shape/Shape.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CenterShape:()=>CenterShape,CircleShape:()=>CircleShape,SquareShape:()=>SquareShape,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _CenterShape_parameters,_CenterShape_parameters_docs,_CenterShape_parameters1,_CircleShape_parameters,_CircleShape_parameters_docs,_CircleShape_parameters1,_SquareShape_parameters,_SquareShape_parameters_docs,_SquareShape_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/ui/index.ts"));const __WEBPACK_DEFAULT_EXPORT__={title:"LAYOUT / Shape",component:_components_ui__WEBPACK_IMPORTED_MODULE_2__.ov,argTypes:{ratio:{control:{type:"number"},description:"The aspect ratio of the box refers to the proportional relationship between its width and height. Common aspect ratio values include `21:9`, `16:9`, `9:16`, `4:3`, and `1.85:1`."}}},CenterShape={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.az,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.ov,{bg:"tomato",h:"40px",color:"white",children:"This is the Center"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zt,{mt:"40px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.ov,{w:"40px",h:"40px",bg:"tomato",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.CT,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.ov,{w:"40px",h:"40px",bg:"tomato",color:"white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.az,{fontWeight:"bold",fontSize:"lg",children:"1"})})]})]})},CircleShape={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zt,{mt:"40px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.jl,{size:"40px",bg:"tomato",color:"white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.CT,{})})})},SquareShape={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.az,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zt,{mt:"40px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.M6,{size:"40px",bg:"tomato",color:"white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.CT,{})})})})};CenterShape.parameters={...CenterShape.parameters,docs:{...null===(_CenterShape_parameters=CenterShape.parameters)||void 0===_CenterShape_parameters?void 0:_CenterShape_parameters.docs,source:{originalSource:'{\n  render: () => {\n    return <Box>\n        <Center bg="tomato" h="40px" color="white">\n          This is the Center\n        </Center>\n        <HStack mt="40px">\n          <Center w="40px" h="40px" bg="tomato">\n            <CalendarIcon />\n          </Center>\n          <Center w="40px" h="40px" bg="tomato" color="white">\n            <Box fontWeight="bold" fontSize="lg">\n              1\n            </Box>\n          </Center>\n        </HStack>\n      </Box>;\n  }\n}',...null===(_CenterShape_parameters1=CenterShape.parameters)||void 0===_CenterShape_parameters1||null===(_CenterShape_parameters_docs=_CenterShape_parameters1.docs)||void 0===_CenterShape_parameters_docs?void 0:_CenterShape_parameters_docs.source}}},CircleShape.parameters={...CircleShape.parameters,docs:{...null===(_CircleShape_parameters=CircleShape.parameters)||void 0===_CircleShape_parameters?void 0:_CircleShape_parameters.docs,source:{originalSource:'{\n  render: () => {\n    return <HStack mt="40px">\n        <Circle size="40px" bg="tomato" color="white">\n          <CalendarIcon />\n        </Circle>\n      </HStack>;\n  }\n}',...null===(_CircleShape_parameters1=CircleShape.parameters)||void 0===_CircleShape_parameters1||null===(_CircleShape_parameters_docs=_CircleShape_parameters1.docs)||void 0===_CircleShape_parameters_docs?void 0:_CircleShape_parameters_docs.source}}},SquareShape.parameters={...SquareShape.parameters,docs:{...null===(_SquareShape_parameters=SquareShape.parameters)||void 0===_SquareShape_parameters?void 0:_SquareShape_parameters.docs,source:{originalSource:'{\n  render: () => {\n    return <Box>\n        <HStack mt="40px">\n          <Square size="40px" bg="tomato" color="white">\n            <CalendarIcon />\n          </Square>\n        </HStack>\n      </Box>;\n  }\n}',...null===(_SquareShape_parameters1=SquareShape.parameters)||void 0===_SquareShape_parameters1||null===(_SquareShape_parameters_docs=_SquareShape_parameters1.docs)||void 0===_SquareShape_parameters_docs?void 0:_SquareShape_parameters_docs.source}}};const __namedExportsOrder=["CenterShape","CircleShape","SquareShape"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);