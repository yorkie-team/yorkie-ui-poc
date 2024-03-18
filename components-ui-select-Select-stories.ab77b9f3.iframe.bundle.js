"use strict";(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[662],{"./src/components/ui/select/Select.stories.tsx":(j,c,n)=>{n.r(c),n.d(c,{Controlled:()=>x,Customization:()=>u,Multiple:()=>p,MultipleSelection:()=>m,Overview:()=>h,__namedExportsOrder:()=>S,default:()=>d});var e=n("./node_modules/next/dist/compiled/react/jsx-runtime.js"),a=n("./node_modules/next/dist/compiled/react/index.js"),t=n("./src/components/ui/index.ts"),i=n("./src/components/ui/icons/index.ts"),s=n("./src/components/ui/button/Button.tsx");const d={title:"FORM / Select",argTypes:{closeOnSelect:{control:{type:"boolean"},description:"Whether the select should close after an item is selected"},defaultValue:{control:"text",description:"\nThe initial value of the select. `string[]`"},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},disabled:{control:{type:"boolean"},description:"Whether the select is disabled"},form:{control:{type:"boolean"},description:"The associate form of the underlying select."},getRootNode:{control:{type:"boolean"},description:"\nA root node to correctly resolve document in custom environments. E.x.: Iframes, Electron. `() => ShadowRoot | Node | Document"},highlightedValue:{control:{type:"text"},description:"The key of the highlighted item"},invalid:{control:{type:"boolean"},description:"Whether the select is invalid"},isItemDisabled:{description:"\nWhether the item is disabled. `(item: T) => boolean`"},itemToString:{description:"\nThe label of the item. `(item: T) => string`"},itemToValue:{description:"\nThe value of the item. `(item: T) => string`"},lazyMount:{control:{type:"boolean"},description:"Whether to enable lazy mounting"},loop:{control:{type:"boolean"},description:"Whether to loop the keyboard navigation through the options"},multiple:{control:{type:"boolean"},description:"Whether to loop the keyboard navigation through the options"},name:{control:{type:"text"},description:"The `name` attribute of the underlying select."},onExitComplete:{description:"\nFunction called when the animation ends in the closed state. `() => void`"},onFocusOutside:{description:"\nFunction called when the focus is moved outside the component. `(event: FocusOutsideEvent) => void`"},onHighlightChange:{description:"\nThe callback fired when the highlighted item changes. `(details: HighlightChangeDetails<T>) => void`"},onInteractOutside:{description:"\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`"},onOpenChange:{description:"\nFunction called when the popup is opened. `(details: OpenChangeDetails) => void`"},onPointerDownOutside:{description:"\nFunction called when the pointer is pressed down outside the component. `(details: ValueChangeDetails<T>) => void`"},onValueChange:{description:"\nThe callback fired when the selected item changes. `(details: ValueChangeDetails<T>) => void`"},open:{control:{type:"boolean"},description:"Whether the select menu is open"},positioning:{description:"\nThe positioning options of the menu. `PositioningOptions`"},present:{control:{type:"boolean"},description:"Whether the node is present (controlled by the user)"},openreadOnly:{control:{type:"boolean"},description:"Whether the select is read-only"},selectOnBlur:{control:{type:"boolean"},description:"Whether to select the highlighted item when the user presses Tab, and the menu is open."},unmountOnExit:{control:{type:"boolean"},description:"Whether to unmount on exit."},value:{control:"text",description:"The keys of the selected items"}}},h={render:()=>{const o=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Svelte",value:"svelte",disabled:!0},{label:"Vue",value:"vue"}];return(0,e.jsxs)(t.Select.Root,{positioning:{sameWidth:!0},width:"2xs",height:"280px",items:o,children:[(0,e.jsx)(t.Select.Label,{children:"Framework"}),(0,e.jsx)(t.Select.Control,{children:(0,e.jsxs)(t.Select.Trigger,{children:[(0,e.jsx)(t.Select.ValueText,{placeholder:"Select a Framework"}),(0,e.jsx)(i.DownIcon,{})]})}),(0,e.jsx)(t.Select.Positioner,{children:(0,e.jsx)(t.Select.Content,{children:(0,e.jsxs)(t.Select.ItemGroup,{id:"framework",children:[(0,e.jsx)(t.Select.ItemGroupLabel,{htmlFor:"framework",children:"Framework"}),o.map(l=>(0,e.jsxs)(t.Select.Item,{item:l,children:[(0,e.jsx)(t.Select.ItemText,{children:l.label}),(0,e.jsx)(t.Select.ItemIndicator,{children:(0,e.jsx)(i.DownIcon,{})})]},l.value))]})})})]})}},u={render:()=>{const o=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,e.jsxs)(t.Select.Root,{positioning:{sameWidth:!0},width:"2xs",height:"280px",items:o,children:[(0,e.jsx)(t.Select.Label,{children:"Framework"}),(0,e.jsxs)(t.Select.Control,{children:[(0,e.jsxs)(t.Select.Trigger,{children:[(0,e.jsx)(t.Select.ValueText,{placeholder:"Select a Framework"}),(0,e.jsx)(t.Select.Indicator,{children:(0,e.jsx)(i.DownIcon,{})})]}),(0,e.jsx)(t.Select.ClearTrigger,{children:(0,e.jsx)(s.Button,{children:"Clear"})})]}),(0,e.jsx)(t.Select.Positioner,{children:(0,e.jsx)(t.Select.Content,{children:(0,e.jsxs)(t.Select.ItemGroup,{id:"framework",children:[(0,e.jsx)(t.Select.ItemGroupLabel,{htmlFor:"framework",children:"Frameworks"}),o.map(l=>(0,e.jsxs)(t.Select.Item,{item:l,children:[(0,e.jsx)(t.Select.ItemText,{children:l.label}),(0,e.jsx)(t.Select.ItemIndicator,{children:"\u2713"})]},l.value))]})})})]})}},m={render:()=>{const o=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,e.jsxs)(t.Select.Root,{positioning:{sameWidth:!0},width:"2xs",height:"280px",items:o,multiple:!0,children:[(0,e.jsx)(t.Select.Label,{children:"Framework"}),(0,e.jsxs)(t.Select.Control,{children:[(0,e.jsxs)(t.Select.Trigger,{children:[(0,e.jsx)(t.Select.ValueText,{placeholder:"Select a Framework"}),(0,e.jsx)(t.Select.Indicator,{children:(0,e.jsx)(i.DownIcon,{})})]}),(0,e.jsx)(t.Select.ClearTrigger,{children:(0,e.jsx)(s.Button,{children:"Clear"})})]}),(0,e.jsx)(t.Select.Positioner,{children:(0,e.jsx)(t.Select.Content,{children:(0,e.jsxs)(t.Select.ItemGroup,{id:"framework",children:[(0,e.jsx)(t.Select.ItemGroupLabel,{htmlFor:"framework",children:"Frameworks"}),o.map(l=>(0,e.jsxs)(t.Select.Item,{item:l,children:[(0,e.jsx)(t.Select.ItemText,{children:l.label}),(0,e.jsx)(t.Select.ItemIndicator,{children:"\u2713"})]},l.value))]})})})]})}},p={render:()=>{const o=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,e.jsxs)(t.Select.Root,{items:o,multiple:!0,width:"2xs",children:[(0,e.jsx)(t.Select.Label,{children:"Framework"}),(0,e.jsxs)(t.Select.Control,{children:[(0,e.jsxs)(t.Select.Trigger,{children:[(0,e.jsx)(t.Select.ValueText,{placeholder:"Select a Framework"}),(0,e.jsx)(t.Select.Indicator,{children:(0,e.jsx)(i.DownIcon,{})})]}),(0,e.jsx)(t.Select.ClearTrigger,{children:(0,e.jsx)(s.Button,{variant:"solid",children:"Clear"})})]}),(0,e.jsx)(t.Select.Positioner,{children:(0,e.jsx)(t.Select.Content,{children:(0,e.jsxs)(t.Select.ItemGroup,{id:"framework",children:[(0,e.jsx)(t.Select.ItemGroupLabel,{htmlFor:"framework",children:"Frameworks"}),o.map(l=>(0,e.jsxs)(t.Select.Item,{item:l,children:[(0,e.jsx)(t.Select.ItemText,{children:l.label}),(0,e.jsx)(t.Select.ItemIndicator,{children:"\u2713"})]},l.value))]})})})]})}},x=()=>{const[,o]=(0,a.useState)({}),l=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte",disabled:!0}];return(0,e.jsxs)(t.Select.Root,{items:l,width:"2xs",onValueChange:r=>o(r.items),children:[(0,e.jsx)(t.Select.Label,{children:"Framework"}),(0,e.jsxs)(t.Select.Control,{children:[(0,e.jsxs)(t.Select.Trigger,{children:[(0,e.jsx)(t.Select.ValueText,{placeholder:"Select a Framework"}),(0,e.jsx)(t.Select.Indicator,{children:(0,e.jsx)(i.DownIcon,{})})]}),(0,e.jsx)(t.Select.ClearTrigger,{children:(0,e.jsx)(s.Button,{variant:"solid",children:"Clear"})})]}),(0,e.jsx)(t.Select.Positioner,{children:(0,e.jsx)(t.Select.Content,{children:(0,e.jsxs)(t.Select.ItemGroup,{id:"framework",children:[(0,e.jsx)(t.Select.ItemGroupLabel,{htmlFor:"framework",children:"Frameworks"}),l.map(r=>(0,e.jsxs)(t.Select.Item,{item:r,children:[(0,e.jsx)(t.Select.ItemText,{children:r.label}),(0,e.jsx)(t.Select.ItemIndicator,{children:"\u2713"})]},r.value))]})})})]})},S=["Overview","Customization","MultipleSelection","Multiple","Controlled"]}}]);
