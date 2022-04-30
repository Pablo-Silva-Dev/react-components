import "styled-components";

declare module "styled-components";{
export interface DefaultTheme{
    colors: {
        primary: string;
        primary_light: string;
        primary_dark: string;
        secondary: string;
        secondary_light: string;
        secondary_dark: string;
        tertiary: string;
        tertiary_light: string;
        tertiary_dark: string;
        background_primary: string;
        background_secondary: string;
        title: string;
        text: string;
        element_base: string;
        success: string;
        alert: string;
        error: string;
        white: string;
        silver: string;
        black: string;
      },
      fonts: {
        default: string,
        secondary: string,
      },
      sizes: {
        xxsmall: string,
        xsmall: string,
        small: string,
        normal: string,
        medium: string,
        large: string,
        xlarge: string,
        xxlarge: string,
        huge: string,
        xhuge: string,
        xxhuge: string,
        hero: string,
        xhero: string,
        xxhero: string,
      },
}
}
