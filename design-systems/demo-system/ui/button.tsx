// Demo button for the demo system. Replace it with your own components.
// Styled only with the CSS variables from tokens.css.
import type {ButtonHTMLAttributes, CSSProperties} from 'react';

export type ButtonVariant = 'primary' | 'ghost';
export type ButtonSize = 'sm' | 'md';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  borderRadius: 'var(--radius)',
  border: '1px solid transparent',
  fontFamily: 'inherit',
  cursor: 'pointer',
  transition: 'opacity 150ms var(--ease-out)',
};

const variants: Record<ButtonVariant, CSSProperties> = {
  primary: {background: 'var(--foreground)', color: 'var(--background)'},
  ghost: {background: 'transparent', color: 'var(--foreground)', borderColor: 'var(--border)'},
};

const sizes: Record<ButtonSize, CSSProperties> = {
  sm: {padding: 'var(--space-1) var(--space-3)', fontSize: 'var(--text-sm)'},
  md: {padding: 'var(--space-2) var(--space-4)', fontSize: 'var(--text-base)'},
};

export function Button({variant = 'primary', size = 'md', style, type = 'button', ...rest}: ButtonProps) {
  return <button type={type} style={{...base, ...variants[variant], ...sizes[size], ...style}} {...rest} />;
}

export default Button;
