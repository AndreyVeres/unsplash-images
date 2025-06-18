import { memo, type FC, type HTMLAttributes } from 'react';
import styled, { css, type RuleSet } from 'styled-components';

type Props = HTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary';
};

const StyledButton = styled.button<{ $css: RuleSet<object> }>`
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 13px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $css }) => $css && $css}
`;

const primaryStyles = css`
  color: ${({ theme }) => theme.typograph.dark};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const secondaryStyles = css`
  color: ${({ theme }) => theme.typograph.dark};
  background-color: ${({ theme }) => theme.bg.light};
`;
const stylesMap = {
  primary: primaryStyles,
  secondary: secondaryStyles,
};

export const Button: FC<Props> = memo(({ children, variant, ...props }) => {
  return (
    <StyledButton $css={stylesMap[variant]} {...props}>
      {children}
    </StyledButton>
  );
});
