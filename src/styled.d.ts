import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: {
        light: string;
        dark: string;
      };
      gray: {
        light: string;
        dark: string;
      };
      blue: {
        light: string;
        dark: string;
      };
    };
  }
}
