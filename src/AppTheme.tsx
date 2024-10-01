import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "class",
    },
    colorSchemes: { dark: true },
    palette: {
        background: {
            default: "#f5f5f5"
        },
        primary: {
            main: "#374151"
        },
        // secondary: {
        //     main: "#3b82f6"
        // },
        // error: {},
        // warning: {},
        // info: {},
        // success: {},
        grey: {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#e5e5e5',
            '300': '#d4d4d4',
            '400': '#a3a3a3',
            '500': '#737373',
            '600': '#525252',
            '700': '#404040',
            '800': '#262626',
            '900': '#171717',
        }
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.grey[400]
                    },
                })
            }
        },
        MuiCheckbox: {
            defaultProps: {
                icon: (
                    <Box
                        sx={(theme) => ({
                            borderRadius: "8px",
                            width: "1.5rem",
                            height: "1.5rem",
                            border: "2px solid transparent",
                            boxShadow: `inset 0px 0px 0px 1px ${(theme).palette.grey[300]
                                }`,
                            ".MuiCheckbox-root:hover &, .MuiFormControlLabel-root:hover &": {
                                boxShadow: `inset 0px 0px 0px 1px ${(theme).palette.grey[400]
                                    }`,
                            },
                            ...theme.applyStyles("dark", {
                                boxShadow: `inset 0px 0px 0px 1px ${(theme).palette.grey[700]
                                    }`,
                                ".MuiCheckbox-root:hover &, .MuiFormControlLabel-root:hover &":
                                {
                                    boxShadow: `inset 0px 0px 0px 1px ${(theme).palette.grey[600]
                                        }`,
                                },
                            }),
                        })}
                    />
                ),
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    textTransform: "none",
                    variants: [
                        {
                            props: { variant: "contained" },
                            style: {
                                boxShadow: "none",
                                "&:hover": { boxShadow: "none" },
                                "&:active": { boxShadow: "none" }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "primary" },
                            style: {
                                boxShadow: "none",
                                "&:hover": {
                                    boxShadow: "none",
                                    borderColor: theme.palette.grey[400]
                                },
                                "&:active": { boxShadow: "none" },
                                borderColor: theme.palette.grey[300]
                            }
                        }
                    ]
                }),
            }
        }
    }
});

export default function AppTheme({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>;

}