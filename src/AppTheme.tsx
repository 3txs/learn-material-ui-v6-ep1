import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#f9f9f9"
        },
        primary: {
            main: "#374151"
        }
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
    },
    shape: {
        borderRadius: 12,
    }
});

export default function AppTheme({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>;

}