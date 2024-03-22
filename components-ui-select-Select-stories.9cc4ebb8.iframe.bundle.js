"use strict";(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[4428],{"./src/components/ui/select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Customization:()=>Customization,Multiple:()=>Multiple,MultipleSelection:()=>MultipleSelection,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Customization_parameters,_Customization_parameters_docs,_Customization_parameters1,_MultipleSelection_parameters,_MultipleSelection_parameters_docs,_MultipleSelection_parameters1,_Multiple_parameters,_Multiple_parameters_docs,_Multiple_parameters1,_Controlled_parameters,_Controlled_parameters_docs,_Controlled_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/index.ts"),_components_ui_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/icons/index.ts"),_button_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/button/Button.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"FORM / Select",argTypes:{closeOnSelect:{control:{type:"boolean"},description:"Whether the select should close after an item is selected"},defaultValue:{control:"text",description:"\nThe initial value of the select. `string[]`"},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},disabled:{control:{type:"boolean"},description:"Whether the select is disabled"},form:{control:{type:"boolean"},description:"The associate form of the underlying select."},getRootNode:{control:{type:"boolean"},description:"\nA root node to correctly resolve document in custom environments. E.x.: Iframes, Electron. `() => ShadowRoot | Node | Document"},highlightedValue:{control:{type:"text"},description:"The key of the highlighted item"},invalid:{control:{type:"boolean"},description:"Whether the select is invalid"},isItemDisabled:{description:"\nWhether the item is disabled. `(item: T) => boolean`"},itemToString:{description:"\nThe label of the item. `(item: T) => string`"},itemToValue:{description:"\nThe value of the item. `(item: T) => string`"},lazyMount:{control:{type:"boolean"},description:"Whether to enable lazy mounting"},loop:{control:{type:"boolean"},description:"Whether to loop the keyboard navigation through the options"},multiple:{control:{type:"boolean"},description:"Whether to loop the keyboard navigation through the options"},name:{control:{type:"text"},description:"The `name` attribute of the underlying select."},onExitComplete:{description:"\nFunction called when the animation ends in the closed state. `() => void`"},onFocusOutside:{description:"\nFunction called when the focus is moved outside the component. `(event: FocusOutsideEvent) => void`"},onHighlightChange:{description:"\nThe callback fired when the highlighted item changes. `(details: HighlightChangeDetails<T>) => void`"},onInteractOutside:{description:"\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`"},onOpenChange:{description:"\nFunction called when the popup is opened. `(details: OpenChangeDetails) => void`"},onPointerDownOutside:{description:"\nFunction called when the pointer is pressed down outside the component. `(details: ValueChangeDetails<T>) => void`"},onValueChange:{description:"\nThe callback fired when the selected item changes. `(details: ValueChangeDetails<T>) => void`"},open:{control:{type:"boolean"},description:"Whether the select menu is open"},positioning:{description:"\nThe positioning options of the menu. `PositioningOptions`"},present:{control:{type:"boolean"},description:"Whether the node is present (controlled by the user)"},openreadOnly:{control:{type:"boolean"},description:"Whether the select is read-only"},selectOnBlur:{control:{type:"boolean"},description:"Whether to select the highlighted item when the user presses Tab, and the menu is open."},unmountOnExit:{control:{type:"boolean"},description:"Whether to unmount on exit."},value:{control:"text",description:"The keys of the selected items"}}},Overview={render:()=>{const items=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Svelte",value:"svelte",disabled:!0},{label:"Vue",value:"vue"}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bL,{positioning:{sameWidth:!0},width:"2xs",height:"280px",items,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.JU,{children:"Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Ec,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.l9,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.zp,{placeholder:"Select a Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.k5,{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Pf,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.UC,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.te,{id:"framework",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bB,{htmlFor:"framework",children:"Framework"}),items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.q7,{item,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.p4,{children:item.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.VF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.k5,{})})]},item.value)))]})})})]})}},Customization={render:()=>{const items=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bL,{positioning:{sameWidth:!0},width:"2xs",height:"280px",items,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.JU,{children:"Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Ec,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.l9,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.zp,{placeholder:"Select a Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.C1,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.k5,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Gb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_Button__WEBPACK_IMPORTED_MODULE_4__.$,{children:"Clear"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Pf,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.UC,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.te,{id:"framework",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bB,{htmlFor:"framework",children:"Frameworks"}),items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.q7,{item,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.p4,{children:item.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.VF,{children:"✓"})]},item.value)))]})})})]})}},MultipleSelection={render:()=>{const items=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bL,{positioning:{sameWidth:!0},width:"2xs",height:"280px",items,multiple:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.JU,{children:"Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Ec,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.l9,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.zp,{placeholder:"Select a Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.C1,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.k5,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Gb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_Button__WEBPACK_IMPORTED_MODULE_4__.$,{children:"Clear"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Pf,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.UC,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.te,{id:"framework",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bB,{htmlFor:"framework",children:"Frameworks"}),items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.q7,{item,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.p4,{children:item.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.VF,{children:"✓"})]},item.value)))]})})})]})}},Multiple={render:()=>{const items=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bL,{items,multiple:!0,width:"2xs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.JU,{children:"Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Ec,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.l9,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.zp,{placeholder:"Select a Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.C1,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.k5,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Gb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_Button__WEBPACK_IMPORTED_MODULE_4__.$,{variant:"solid",children:"Clear"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Pf,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.UC,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.te,{id:"framework",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bB,{htmlFor:"framework",children:"Frameworks"}),items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.q7,{item,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.p4,{children:item.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.VF,{children:"✓"})]},item.value)))]})})})]})}},Controlled=()=>{const[,setSelectedItems]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),items=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bL,{items,width:"2xs",onValueChange:e=>setSelectedItems(e.items),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.JU,{children:"Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Ec,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.l9,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.zp,{placeholder:"Select a Framework"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.C1,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_icons__WEBPACK_IMPORTED_MODULE_3__.k5,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Gb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_Button__WEBPACK_IMPORTED_MODULE_4__.$,{variant:"solid",children:"Clear"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.Pf,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.UC,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.te,{id:"framework",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.bB,{htmlFor:"framework",children:"Frameworks"}),items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.q7,{item,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.p4,{children:item.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.l6.VF,{children:"✓"})]},item.value)))]})})})]})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"{\n  render: () => {\n    const items = [{\n      label: 'React',\n      value: 'react'\n    }, {\n      label: 'Solid',\n      value: 'solid'\n    }, {\n      label: 'Svelte',\n      value: 'svelte',\n      disabled: true\n    }, {\n      label: 'Vue',\n      value: 'vue'\n    }];\n    return <Select.Root positioning={{\n      sameWidth: true\n    }} width=\"2xs\" height=\"280px\" items={items}>\n        <Select.Label>Framework</Select.Label>\n        <Select.Control>\n          <Select.Trigger>\n            <Select.ValueText placeholder={'Select a Framework'} />\n            <DownIcon />\n          </Select.Trigger>\n        </Select.Control>\n        <Select.Positioner>\n          <Select.Content>\n            <Select.ItemGroup id=\"framework\">\n              <Select.ItemGroupLabel htmlFor=\"framework\">Framework</Select.ItemGroupLabel>\n              {items.map(item => <Select.Item key={item.value} item={item}>\n                  <Select.ItemText>{item.label}</Select.ItemText>\n                  <Select.ItemIndicator>\n                    <DownIcon />\n                  </Select.ItemIndicator>\n                </Select.Item>)}\n            </Select.ItemGroup>\n          </Select.Content>\n        </Select.Positioner>\n      </Select.Root>;\n  }\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Customization.parameters={...Customization.parameters,docs:{...null===(_Customization_parameters=Customization.parameters)||void 0===_Customization_parameters?void 0:_Customization_parameters.docs,source:{originalSource:"{\n  render: () => {\n    type Item = {\n      label: string;\n      value: string;\n      disabled?: boolean;\n    };\n    const items: Item[] = [{\n      label: 'React',\n      value: 'react'\n    }, {\n      label: 'Solid',\n      value: 'solid'\n    }, {\n      label: 'Vue',\n      value: 'vue'\n    }, {\n      label: 'Svelte',\n      value: 'svelte',\n      disabled: true\n    }];\n    return <Select.Root positioning={{\n      sameWidth: true\n    }} width=\"2xs\" height=\"280px\" items={items}>\n        <Select.Label>Framework</Select.Label>\n        <Select.Control>\n          <Select.Trigger>\n            <Select.ValueText placeholder=\"Select a Framework\" />\n            <Select.Indicator>\n              <DownIcon />\n            </Select.Indicator>\n          </Select.Trigger>\n          <Select.ClearTrigger>\n            <Button>Clear</Button>\n          </Select.ClearTrigger>\n        </Select.Control>\n        <Select.Positioner>\n          <Select.Content>\n            <Select.ItemGroup id=\"framework\">\n              <Select.ItemGroupLabel htmlFor=\"framework\">Frameworks</Select.ItemGroupLabel>\n              {items.map(item => <Select.Item key={item.value} item={item}>\n                  <Select.ItemText>{item.label}</Select.ItemText>\n                  <Select.ItemIndicator>✓</Select.ItemIndicator>\n                </Select.Item>)}\n            </Select.ItemGroup>\n          </Select.Content>\n        </Select.Positioner>\n      </Select.Root>;\n  }\n}",...null===(_Customization_parameters1=Customization.parameters)||void 0===_Customization_parameters1||null===(_Customization_parameters_docs=_Customization_parameters1.docs)||void 0===_Customization_parameters_docs?void 0:_Customization_parameters_docs.source}}},MultipleSelection.parameters={...MultipleSelection.parameters,docs:{...null===(_MultipleSelection_parameters=MultipleSelection.parameters)||void 0===_MultipleSelection_parameters?void 0:_MultipleSelection_parameters.docs,source:{originalSource:"{\n  render: () => {\n    type Item = {\n      label: string;\n      value: string;\n      disabled?: boolean;\n    };\n    const items: Item[] = [{\n      label: 'React',\n      value: 'react'\n    }, {\n      label: 'Solid',\n      value: 'solid'\n    }, {\n      label: 'Vue',\n      value: 'vue'\n    }, {\n      label: 'Svelte',\n      value: 'svelte',\n      disabled: true\n    }];\n    return <Select.Root positioning={{\n      sameWidth: true\n    }} width=\"2xs\" height=\"280px\" items={items} multiple>\n        <Select.Label>Framework</Select.Label>\n        <Select.Control>\n          <Select.Trigger>\n            <Select.ValueText placeholder=\"Select a Framework\" />\n            <Select.Indicator>\n              <DownIcon />\n            </Select.Indicator>\n          </Select.Trigger>\n          <Select.ClearTrigger>\n            <Button>Clear</Button>\n          </Select.ClearTrigger>\n        </Select.Control>\n        <Select.Positioner>\n          <Select.Content>\n            <Select.ItemGroup id=\"framework\">\n              <Select.ItemGroupLabel htmlFor=\"framework\">Frameworks</Select.ItemGroupLabel>\n              {items.map(item => <Select.Item key={item.value} item={item}>\n                  <Select.ItemText>{item.label}</Select.ItemText>\n                  <Select.ItemIndicator>✓</Select.ItemIndicator>\n                </Select.Item>)}\n            </Select.ItemGroup>\n          </Select.Content>\n        </Select.Positioner>\n      </Select.Root>;\n  }\n}",...null===(_MultipleSelection_parameters1=MultipleSelection.parameters)||void 0===_MultipleSelection_parameters1||null===(_MultipleSelection_parameters_docs=_MultipleSelection_parameters1.docs)||void 0===_MultipleSelection_parameters_docs?void 0:_MultipleSelection_parameters_docs.source}}},Multiple.parameters={...Multiple.parameters,docs:{...null===(_Multiple_parameters=Multiple.parameters)||void 0===_Multiple_parameters?void 0:_Multiple_parameters.docs,source:{originalSource:"{\n  render: () => {\n    type Item = {\n      label: string;\n      value: string;\n      disabled?: boolean;\n    };\n    const items: Item[] = [{\n      label: 'React',\n      value: 'react'\n    }, {\n      label: 'Solid',\n      value: 'solid'\n    }, {\n      label: 'Vue',\n      value: 'vue'\n    }, {\n      label: 'Svelte',\n      value: 'svelte',\n      disabled: true\n    }];\n    return <Select.Root items={items} multiple width=\"2xs\">\n        <Select.Label>Framework</Select.Label>\n        <Select.Control>\n          <Select.Trigger>\n            <Select.ValueText placeholder=\"Select a Framework\" />\n            <Select.Indicator>\n              <DownIcon />\n            </Select.Indicator>\n          </Select.Trigger>\n          <Select.ClearTrigger>\n            <Button variant=\"solid\">Clear</Button>\n          </Select.ClearTrigger>\n        </Select.Control>\n        <Select.Positioner>\n          <Select.Content>\n            <Select.ItemGroup id=\"framework\">\n              <Select.ItemGroupLabel htmlFor=\"framework\">Frameworks</Select.ItemGroupLabel>\n              {items.map(item => <Select.Item key={item.value} item={item}>\n                  <Select.ItemText>{item.label}</Select.ItemText>\n                  <Select.ItemIndicator>✓</Select.ItemIndicator>\n                </Select.Item>)}\n            </Select.ItemGroup>\n          </Select.Content>\n        </Select.Positioner>\n      </Select.Root>;\n  }\n}",...null===(_Multiple_parameters1=Multiple.parameters)||void 0===_Multiple_parameters1||null===(_Multiple_parameters_docs=_Multiple_parameters1.docs)||void 0===_Multiple_parameters_docs?void 0:_Multiple_parameters_docs.source}}},Controlled.parameters={...Controlled.parameters,docs:{...null===(_Controlled_parameters=Controlled.parameters)||void 0===_Controlled_parameters?void 0:_Controlled_parameters.docs,source:{originalSource:"() => {\n  type Item = {\n    label: string;\n    value: string;\n    disabled?: boolean;\n  };\n  const [, setSelectedItems] = useState({});\n  const items: Item[] = [{\n    label: 'React',\n    value: 'react'\n  }, {\n    label: 'Solid',\n    value: 'solid'\n  }, {\n    label: 'Vue',\n    value: 'vue'\n  }, {\n    label: 'Svelte',\n    value: 'svelte',\n    disabled: true\n  }];\n  return <Select.Root items={items} width=\"2xs\" onValueChange={e => setSelectedItems(e.items)}>\n      <Select.Label>Framework</Select.Label>\n      <Select.Control>\n        <Select.Trigger>\n          <Select.ValueText placeholder=\"Select a Framework\" />\n          <Select.Indicator>\n            <DownIcon />\n          </Select.Indicator>\n        </Select.Trigger>\n        <Select.ClearTrigger>\n          <Button variant=\"solid\">Clear</Button>\n        </Select.ClearTrigger>\n      </Select.Control>\n      <Select.Positioner>\n        <Select.Content>\n          <Select.ItemGroup id=\"framework\">\n            <Select.ItemGroupLabel htmlFor=\"framework\">Frameworks</Select.ItemGroupLabel>\n            {items.map(item => <Select.Item key={item.value} item={item}>\n                <Select.ItemText>{item.label}</Select.ItemText>\n                <Select.ItemIndicator>✓</Select.ItemIndicator>\n              </Select.Item>)}\n          </Select.ItemGroup>\n        </Select.Content>\n      </Select.Positioner>\n    </Select.Root>;\n}",...null===(_Controlled_parameters1=Controlled.parameters)||void 0===_Controlled_parameters1||null===(_Controlled_parameters_docs=_Controlled_parameters1.docs)||void 0===_Controlled_parameters_docs?void 0:_Controlled_parameters_docs.source}}};const __namedExportsOrder=["Overview","Customization","MultipleSelection","Multiple","Controlled"]}}]);