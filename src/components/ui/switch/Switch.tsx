import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/react/switch';
import { forwardRef, type ReactNode } from 'react';
import { css, cx } from '@/styled/css';
import { splitCssProps } from '@/styled/jsx';
import { switchRecipe, type SwitchRecipeVariantProps } from '@/styled/recipes';
import type {JsxStyleProps } from '@/styled/types/system-types';

export type Assign<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] : T[K]
} & U
export interface SwitchProps extends Assign<JsxStyleProps, SwitchRootProps>, SwitchRecipeVariantProps {
  children?: ReactNode;
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const [variantProps, switchProps] = switchRecipe.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(switchProps);
  const { children, className, ...rootProps } = localProps;
  const styles = switchRecipe(variantProps);

  return (
    <ArkSwitch.Root ref={ref} className={cx(styles.root, css(cssProps), className)} {...rootProps}>
      <ArkSwitch.Control className={styles.control}>
        <ArkSwitch.Thumb className={styles.thumb} />
      </ArkSwitch.Control>
      {children && <ArkSwitch.Label className={styles.label}>{children}</ArkSwitch.Label>}
    </ArkSwitch.Root>
  );
});

Switch.displayName = 'Switch';
