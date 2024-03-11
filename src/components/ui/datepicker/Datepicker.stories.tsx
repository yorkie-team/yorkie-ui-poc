import React from 'react';
import { DatePicker } from '@/components/ui/datepicker';

const meta = {
  title: 'FORM / Datepicker',
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '\nThe initial value of the tabs. `string[]`',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    value: {
      control: { type: 'text' },
      description: '\nThe keys of the selected items. `string[]`',
    },
    orientation: {
      description:
        '\nThe orientation of the tabs. Can be `horizontal` or `vertical` - `horizontal`: only left and right arrow key navigation will work. - `vertical`: only up and down arrow key navigation will work. `horizontal | vertical`',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    form: {
      control: { type: 'text' },
      description: 'The associate form of the underlying select.',
    },
    closeOnSelect: {
      control: { type: 'boolean' },
      description: 'Whether the select should close after an item is selected.',
    },
    highlightedValue: {
      control: { type: 'text' },
      description: 'The key of the highlighted item.',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'Whether the select is invalid.',
    },
    isItemDisabled: {
      description: '\nWhether the item is disabled. `(item: T) => boolean`',
    },
    itemToString: {
      description: '\nThe label of the item. `(item: T) => string`',
    },
    itemToValue: {
      description: '\nThe value of the item. `(item: T) => string`',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting.',
    },
    loop: {
      control: { type: 'boolean' },
      description: 'If `Whether to loop the keyboard navigation through the options.',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Whether to allow multiple selection.',
    },
    name: {
      control: { type: 'text' },
      description: 'The `name` attribute of the underlying select.',
    },
    onExitComplete: {
      description: '\nFunction called when the animation ends in the closed state. `() => void`',
    },
    onFocusOutside: {
      description:
        '\nFunction called when the focus is moved outside the component. `(event: FocusOutsideEvent) => void`',
    },
    onHighlightChange: {
      description:
        '\nThe callback fired when the highlighted item changes. `(details: HighlightChangeDetails<T>) => void`',
    },
    onInteractOutside: {
      description:
        '\nFunction called when an interaction happens outside the component. `	(event: InteractOutsideEvent) => void`',
    },
    onOpenChange: {
      description: '\nFunction called when the popup is opened. `(details: OpenChangeDetails) => void`',
    },
    onPointerDownOutside: {
      description:
        '\nFunction called when the pointer is pressed down outside the component. `(event: PointerDownOutsideEvent) => void`',
    },
    onValueChange: {
      description: '\nThe callback fired when the selected item changes. `(details: ValueChangeDetails<T>) => void`',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the select menu is open.',
    },
    positioning: {
      description: 'The positioning options of the menu.',
    },
    present: {
      control: { type: 'boolean' },
      description: 'Whether the node is present (controlled by the user).',
    },
    selectOnBlur: {
      control: { type: 'boolean' },
      description: 'Whether to select the highlighted item when the user presses Tab, and the menu is open..',
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
    },
  },
};

export default meta;

export const Overview = () => {
  return (
    <DatePicker.Root>
      <DatePicker.Label>Label</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger>📅</DatePicker.Trigger>
        <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
      </DatePicker.Control>
      <>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.YearSelect />
            <DatePicker.MonthSelect />
            <DatePicker.View view="day">
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableHead>
                      <DatePicker.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                        ))}
                      </DatePicker.TableRow>
                    </DatePicker.TableHead>
                    <DatePicker.TableBody>
                      {api.weeks.map((week, id) => (
                        <DatePicker.TableRow key={id}>
                          {week.map((day, id) => (
                            <DatePicker.TableCell key={id} value={day}>
                              <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.View>
            <DatePicker.View view="month">
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      {api.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                        <DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <DatePicker.TableCell key={id} value={month.value}>
                              <DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.View>
            <DatePicker.View view="year">
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <DatePicker.TableRow key={id}>
                          {years.map((year, id) => (
                            <DatePicker.TableCell key={id} value={year.value}>
                              <DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </>
    </DatePicker.Root>
  );
};

export const Standalone = () => {
  return (
    <DatePicker.Root open={true} closeOnSelect={false}>
      <DatePicker.Input />
      <DatePicker.View view="day">
        {(api) => (
          <>
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
            </DatePicker.ViewControl>
            <DatePicker.Table>
              <DatePicker.TableHead>
                <DatePicker.TableRow>
                  {api.weekDays.map((weekDay, id) => (
                    <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                  ))}
                </DatePicker.TableRow>
              </DatePicker.TableHead>
              <DatePicker.TableBody>
                {api.weeks.map((week, id) => (
                  <DatePicker.TableRow key={id}>
                    {week.map((day, id) => (
                      <DatePicker.TableCell key={id} value={day}>
                        <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </DatePicker.TableBody>
            </DatePicker.Table>
          </>
        )}
      </DatePicker.View>
      <DatePicker.View view="month">
        {(api) => (
          <>
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
            </DatePicker.ViewControl>
            <DatePicker.Table>
              <DatePicker.TableBody>
                {api.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                  <DatePicker.TableRow key={id}>
                    {months.map((month, id) => (
                      <DatePicker.TableCell key={id} value={month.value}>
                        <DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </DatePicker.TableBody>
            </DatePicker.Table>
          </>
        )}
      </DatePicker.View>
      <DatePicker.View view="year">
        {(api) => (
          <>
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
            </DatePicker.ViewControl>
            <DatePicker.Table>
              <DatePicker.TableBody>
                {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                  <DatePicker.TableRow key={id}>
                    {years.map((year, id) => (
                      <DatePicker.TableCell key={id} value={year.value}>
                        <DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </DatePicker.TableBody>
            </DatePicker.Table>
          </>
        )}
      </DatePicker.View>
    </DatePicker.Root>
  );
};
