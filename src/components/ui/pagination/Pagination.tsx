import { Pagination as ArkPagination, type PaginationRootProps } from '@ark-ui/react/pagination';
import { forwardRef } from 'react';
import { css, cx } from '@/styled/css';
import { splitCssProps } from '@/styled/jsx';
import { pagination, type PaginationVariantProps } from '@/styled/recipes';
import type { Assign, JsxStyleProps } from '@/styled/types';
import { Button } from '@/components/ui/button';

export interface PaginationProps extends Assign<JsxStyleProps, PaginationRootProps>, PaginationVariantProps {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const [variantProps, paginationProps] = pagination.splitVariantProps(props);
  const [cssProps, localProps] = splitCssProps(paginationProps);
  const { className, ...rootProps } = localProps;
  const styles = pagination(variantProps);

  return (
    <ArkPagination.Root
      className={cx(styles.root, css(cssProps), className)}
      ref={ref}
      {...rootProps}
    >
      {({ pages }) => (
        <>
          <ArkPagination.PrevTrigger className={styles.prevTrigger} asChild>
            <Button variant="ghost" aria-label="Next Page">
              <ChevronLeftIcon />
            </Button>
          </ArkPagination.PrevTrigger>
          {pages.map((page, index) =>
            page.type === 'page' ? (
              <ArkPagination.Item className={styles.item} key={index} {...page} asChild>
                <Button variant="outline">{page.value}</Button>
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis className={styles.ellipsis} key={index} index={index}>
                &#8230;
              </ArkPagination.Ellipsis>
            ),
          )}
          <ArkPagination.NextTrigger className={styles.nextTrigger} asChild>
            <Button variant="ghost" aria-label="Next Page">
              <ChevronRightIcon />
            </Button>
          </ArkPagination.NextTrigger>
        </>
      )}
    </ArkPagination.Root>
  );
});

Pagination.displayName = 'Pagination';

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Left Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 18l-6-6l6-6"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Right Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
);
