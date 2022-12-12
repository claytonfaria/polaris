import {forwardRef} from 'react';
import {Box, type WithAsProp} from '../Box';
import styles from './Stack.module.scss';

export interface StackProps {
  gap?:
    | '0'
    | '025'
    | '05'
    | '1'
    | '10'
    | '12'
    | '16'
    | '2'
    | '20'
    | '24'
    | '28'
    | '3'
    | '32'
    | '4'
    | '5'
    | '6'
    | '8';
}

export const Stack = forwardRef(
  ({gap = '0', style, className, ...props}, ref) => (
    <Box
      ref={ref}
      className={[styles.Stack, className]}
      style={{'--stack-gap-prop': `var(--p-space-${gap})`, ...style}}
      {...props}
    />
  ),
) as WithAsProp<StackProps>;

Stack.displayName = 'Stack';

export interface RowProps {
  wrap?: Boolean;
}

export const Row = forwardRef(({className, wrap, style, ...props}, ref) => (
  <Stack
    ref={ref}
    className={[styles.Row, className]}
    style={wrap && {'--row-wrap-prop': 'wrap', ...style}}
    {...props}
  />
)) as WithAsProp<RowProps, typeof Stack>;

Row.displayName = 'Row';