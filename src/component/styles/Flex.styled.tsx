import styled from "styled-components";

type ResponsiveDisplay = "none" | "inline-flex" | "flex";
type ResponsiveDirection = "row" | "row-reverse" | "column" | "column-reverse";
type ResponsiveAlign =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";
type ResponsiveJustify = "start" | "center" | "end" | "between" | string;
type ResponsiveWrap = "nowrap" | "wrap" | "wrap-reverse";

export type FlexProps = {
  $display?: ResponsiveDisplay;
  $direction?: ResponsiveDirection;
  $align?: ResponsiveAlign;
  $justify?: ResponsiveJustify;
  $wrap?: ResponsiveWrap;
  $gap?: string;
  $gapX?: string;
  $gapY?: string;
  $p?: string;
  $px?: string;
  $py?: string;
  $pt?: string;
  $pr?: string;
  $pb?: string;
  $pl?: string;
  $m?: string;
  $mx?: string;
  $my?: string;
  $mt?: string;
  $mr?: string;
  $mb?: string;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
};

export const Flex = styled.div<FlexProps>`
  display: ${({ $display }) => $display || "flex"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: ${({ $align }) => $align || "stretch"};
  justify-content: ${({ $justify }) => {
    switch ($justify) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      case "between":
        return "space-between";
      default:
        return $justify || "flex-start";
    }
  }};
  flex-wrap: ${({ $wrap }) => $wrap || "nowrap"};

  ${({ $gap }) => $gap && `gap: ${$gap};`}
  ${({ $gapX }) => $gapX && `column-gap: ${$gapX};`}
  ${({ $gapY }) => $gapY && `row-gap: ${$gapY};`}

  ${({ $p }) => $p && `padding: ${$p};`}
  ${({ $px }) => $px && `padding-left: ${$px}; padding-right: ${$px};`}
  ${({ $py }) => $py && `padding-top: ${$py}; padding-bottom: ${$py};`}
  ${({ $pt }) => $pt && `padding-top: ${$pt};`}
  ${({ $pr }) => $pr && `padding-right: ${$pr};`}
  ${({ $pb }) => $pb && `padding-bottom: ${$pb};`}
  ${({ $pl }) => $pl && `padding-left: ${$pl};`}

  ${({ $m }) => $m && `margin: ${$m};`}
  ${({ $mx }) => $mx && `margin-left: ${$mx}; margin-right: ${$mx};`}
  ${({ $my }) => $my && `margin-top: ${$my}; margin-bottom: ${$my};`}
  ${({ $mt }) => $mt && `margin-top: ${$mt};`}
  ${({ $mr }) => $mr && `margin-right: ${$mr};`}
  ${({ $mb }) => $mb && `margin-bottom: ${$mb};`}

  ${({ $width }) => $width && `width: ${$width};`}
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth};`}
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth};`}
  ${({ $height }) => $height && `height: ${$height};`}
  ${({ $minHeight }) => $minHeight && `min-height: ${$minHeight};`}
  ${({ $maxHeight }) => $maxHeight && `max-height: ${$maxHeight};`}
`;
