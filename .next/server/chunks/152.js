"use strict";
exports.id = 152;
exports.ids = [152];
exports.modules = {

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eu: () => (/* binding */ useAuthContext),
/* harmony export */   Ho: () => (/* binding */ AuthProvider),
/* harmony export */   Vo: () => (/* binding */ AuthContext),
/* harmony export */   he: () => (/* binding */ AuthConsumer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const HANDLERS = {
    INITIALIZE: "INITIALIZE",
    SIGN_IN: "SIGN_IN",
    SIGN_OUT: "SIGN_OUT"
};
const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
};
const handlers = {
    [HANDLERS.INITIALIZE]: (state, action)=>{
        const user = action.payload;
        return {
            ...state,
            ...// if payload (user) is provided, then is authenticated
            user ? {
                isAuthenticated: true,
                isLoading: false,
                user
            } : {
                isLoading: false
            }
        };
    },
    [HANDLERS.SIGN_IN]: (state, action)=>{
        const user = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    [HANDLERS.SIGN_OUT]: (state)=>{
        return {
            ...state,
            isAuthenticated: false,
            user: null
        };
    }
};
const reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;
// The role of this context is to propagate authentication state through the App tree.
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    undefined
});
const AuthProvider = (props)=>{
    const { children } = props;
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const initialized = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const initialize = async ()=>{
        // Prevent from calling twice in development mode with React.StrictMode enabled
        if (initialized.current) {
            return;
        }
        initialized.current = true;
        let isAuthenticated = false;
        try {
            isAuthenticated = window.sessionStorage.getItem("authenticated") === "true";
        } catch (err) {
            console.error(err);
        }
        if (isAuthenticated) {
            const user = {
                id: "5e86809283e28b96d2d38537",
                avatar: "/assets/avatars/avatar-anika-visser.png",
                name: "Test",
                email: "test@test.com"
            };
            dispatch({
                type: HANDLERS.INITIALIZE,
                payload: user
            });
        } else {
            dispatch({
                type: HANDLERS.INITIALIZE
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        initialize();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const skip = ()=>{
        try {
            window.sessionStorage.setItem("authenticated", "true");
        } catch (err) {
            console.error(err);
        }
        const user = {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Test",
            email: "test@test.com"
        };
        dispatch({
            type: HANDLERS.SIGN_IN,
            payload: user
        });
    };
    const signIn = async (email, password)=>{
        let responseData = {};
        try {
            const url = "https://dev.intgrow.co/api/auth/signIn";
            const data = {
                email,
                password
            };
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            responseData = await response.json();
            window.sessionStorage.setItem("authenticated", "true");
            window.localStorage.setItem("access_token", responseData.result.token);
        } catch (error) {
            console.error("Error:", error);
        }
        // const user = {
        //   id: '5e86809283e28b96d2d38537',
        //   avatar: '/assets/avatars/avatar-anika-visser.png',
        //   name: responseData.result.first_name,
        //   email: responseData.result.email
        // };
        const user = {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Test",
            email: "test@test.com"
        };
        dispatch({
            type: HANDLERS.SIGN_IN,
            payload: user
        });
    };
    const signUp = async (email, name, password)=>{
        try {
            const url = "https://dev.intgrow.co/api/auth/signUp";
            const data = {
                email,
                firstname: name,
                password
            };
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            console.log("--- response => ", response);
            return response;
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const signOut = ()=>{
        dispatch({
            type: HANDLERS.SIGN_OUT
        });
    };
    const updateUserInfo = async (name)=>{
        try {
            const url = "https://dev.intgrow.co/api/auth/me";
            const data = {
                first_name: name
            };
            const token = window.localStorage.getItem("access_token");
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            ...state,
            skip,
            signIn,
            signUp,
            signOut,
            updateUserInfo
        },
        children: children
    });
};
AuthProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};
const AuthConsumer = AuthContext.Consumer;
const useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);


/***/ }),

/***/ 7301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: external "@mui/x-date-pickers/LocalizationProvider"
var LocalizationProvider_ = __webpack_require__(5753);
// EXTERNAL MODULE: external "@mui/x-date-pickers/AdapterDateFns"
var AdapterDateFns_ = __webpack_require__(4046);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./src/contexts/auth-context.js
var auth_context = __webpack_require__(261);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
;// CONCATENATED MODULE: ./src/hooks/use-nprogress.js



function useNProgress() {
    (0,external_react_.useEffect)(()=>{
        router_default().events.on("routeChangeStart", (external_nprogress_default()).start);
        router_default().events.on("routeChangeError", (external_nprogress_default()).done);
        router_default().events.on("routeChangeComplete", (external_nprogress_default()).done);
        return ()=>{
            router_default().events.off("routeChangeStart", (external_nprogress_default()).start);
            router_default().events.off("routeChangeError", (external_nprogress_default()).done);
            router_default().events.off("routeChangeComplete", (external_nprogress_default()).done);
        };
    }, []);
}

// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
;// CONCATENATED MODULE: ./src/theme/colors.js

const withAlphas = (color)=>{
    return {
        ...color,
        alpha4: (0,styles_.alpha)(color.main, 0.04),
        alpha8: (0,styles_.alpha)(color.main, 0.08),
        alpha12: (0,styles_.alpha)(color.main, 0.12),
        alpha30: (0,styles_.alpha)(color.main, 0.30),
        alpha50: (0,styles_.alpha)(color.main, 0.50)
    };
};
const neutral = {
    50: "#F8F9FA",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D2D6DB",
    400: "#9DA4AE",
    500: "#6C737F",
    600: "#4D5761",
    700: "#2F3746",
    800: "#1C2536",
    900: "#111927"
};
const indigo = withAlphas({
    lightest: "#F5F7FF",
    light: "#EBEEFE",
    main: "#6366F1",
    dark: "#4338CA",
    darkest: "#312E81",
    contrastText: "#FFFFFF"
});
const success = withAlphas({
    lightest: "#F0FDF9",
    light: "#3FC79A",
    main: "#10B981",
    dark: "#0B815A",
    darkest: "#134E48",
    contrastText: "#FFFFFF"
});
const info = withAlphas({
    lightest: "#ECFDFF",
    light: "#CFF9FE",
    main: "#06AED4",
    dark: "#0E7090",
    darkest: "#164C63",
    contrastText: "#FFFFFF"
});
const warning = withAlphas({
    lightest: "#FFFAEB",
    light: "#FEF0C7",
    main: "#F79009",
    dark: "#B54708",
    darkest: "#7A2E0E",
    contrastText: "#FFFFFF"
});
const error = withAlphas({
    lightest: "#FEF3F2",
    light: "#FEE4E2",
    main: "#F04438",
    dark: "#B42318",
    darkest: "#7A271A",
    contrastText: "#FFFFFF"
});

;// CONCATENATED MODULE: ./src/theme/create-palette.js



function createPalette() {
    return {
        action: {
            active: neutral[500],
            disabled: (0,styles_.alpha)(neutral[900], 0.38),
            disabledBackground: (0,styles_.alpha)(neutral[900], 0.12),
            focus: (0,styles_.alpha)(neutral[900], 0.16),
            hover: (0,styles_.alpha)(neutral[900], 0.04),
            selected: (0,styles_.alpha)(neutral[900], 0.12)
        },
        background: {
            default: colors_.common.white,
            paper: colors_.common.white
        },
        divider: "#F2F4F7",
        error: error,
        info: info,
        mode: "light",
        neutral: neutral,
        primary: indigo,
        success: success,
        text: {
            primary: neutral[900],
            secondary: neutral[500],
            disabled: (0,styles_.alpha)(neutral[900], 0.38)
        },
        warning: warning
    };
}

;// CONCATENATED MODULE: ./src/theme/create-components.js

// Used only to create transitions
const muiTheme = (0,material_.createTheme)();
function createComponents(config) {
    const { palette } = config;
    return {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    textTransform: "none"
                },
                sizeSmall: {
                    padding: "6px 16px"
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    [`&.${material_.paperClasses.elevation1}`]: {
                        boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)"
                    }
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "32px 24px",
                    "&:last-child": {
                        paddingBottom: "32px"
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2"
                }
            },
            styleOverrides: {
                root: {
                    padding: "32px 24px 16px"
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                body: {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%"
                },
                "#__next": {
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                },
                "#nprogress": {
                    pointerEvents: "none"
                },
                "#nprogress .bar": {
                    backgroundColor: palette.primary.main,
                    height: 3,
                    left: 0,
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 2000
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&::placeholder": {
                        opacity: 1
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px",
                    "&::placeholder": {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    borderRadius: 8,
                    borderStyle: "solid",
                    borderWidth: 1,
                    overflow: "hidden",
                    borderColor: palette.neutral[200],
                    transition: muiTheme.transitions.create([
                        "border-color",
                        "box-shadow"
                    ]),
                    "&:hover": {
                        backgroundColor: palette.action.hover
                    },
                    "&:before": {
                        display: "none"
                    },
                    "&:after": {
                        display: "none"
                    },
                    [`&.${material_.filledInputClasses.disabled}`]: {
                        backgroundColor: "transparent"
                    },
                    [`&.${material_.filledInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        borderColor: palette.primary.main,
                        boxShadow: `${palette.primary.main} 0 0 0 2px`
                    },
                    [`&.${material_.filledInputClasses.error}`]: {
                        borderColor: palette.error.main,
                        boxShadow: `${palette.error.main} 0 0 0 2px`
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: palette.action.hover,
                        [`& .${material_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.neutral[200]
                        }
                    },
                    [`&.${material_.outlinedInputClasses.focused}`]: {
                        backgroundColor: "transparent",
                        [`& .${material_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.primary.main,
                            boxShadow: `${palette.primary.main} 0 0 0 2px`
                        }
                    },
                    [`&.${material_.filledInputClasses.error}`]: {
                        [`& .${material_.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: palette.error.main,
                            boxShadow: `${palette.error.main} 0 0 0 2px`
                        }
                    }
                },
                input: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: "24px"
                },
                notchedOutline: {
                    borderColor: palette.neutral[200],
                    transition: muiTheme.transitions.create([
                        "border-color",
                        "box-shadow"
                    ])
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    [`&.${material_.inputLabelClasses.filled}`]: {
                        transform: "translate(12px, 18px) scale(1)"
                    },
                    [`&.${material_.inputLabelClasses.shrink}`]: {
                        [`&.${material_.inputLabelClasses.standard}`]: {
                            transform: "translate(0, -1.5px) scale(0.85)"
                        },
                        [`&.${material_.inputLabelClasses.filled}`]: {
                            transform: "translate(12px, 6px) scale(0.85)"
                        },
                        [`&.${material_.inputLabelClasses.outlined}`]: {
                            transform: "translate(14px, -9px) scale(0.85)"
                        }
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: "auto",
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: "none",
                    "& + &": {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: palette.divider,
                    padding: "15px 16px"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: "none",
                    [`& .${material_.tableCellClasses.root}`]: {
                        borderBottom: "none",
                        backgroundColor: palette.neutral[50],
                        color: palette.neutral[700],
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: "uppercase"
                    },
                    [`& .${material_.tableCellClasses.paddingCheckbox}`]: {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled"
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/create-shadows.js
const createShadows = ()=>{
    return [
        "none",
        "0px 1px 2px rgba(0, 0, 0, 0.08)",
        "0px 1px 5px rgba(0, 0, 0, 0.08)",
        "0px 1px 8px rgba(0, 0, 0, 0.08)",
        "0px 1px 10px rgba(0, 0, 0, 0.08)",
        "0px 1px 14px rgba(0, 0, 0, 0.08)",
        "0px 1px 18px rgba(0, 0, 0, 0.08)",
        "0px 2px 16px rgba(0, 0, 0, 0.08)",
        "0px 3px 14px rgba(0, 0, 0, 0.08)",
        "0px 3px 16px rgba(0, 0, 0, 0.08)",
        "0px 4px 18px rgba(0, 0, 0, 0.08)",
        "0px 4px 20px rgba(0, 0, 0, 0.08)",
        "0px 5px 22px rgba(0, 0, 0, 0.08)",
        "0px 5px 24px rgba(0, 0, 0, 0.08)",
        "0px 5px 26px rgba(0, 0, 0, 0.08)",
        "0px 6px 28px rgba(0, 0, 0, 0.08)",
        "0px 6px 30px rgba(0, 0, 0, 0.08)",
        "0px 6px 32px rgba(0, 0, 0, 0.08)",
        "0px 7px 34px rgba(0, 0, 0, 0.08)",
        "0px 7px 36px rgba(0, 0, 0, 0.08)",
        "0px 8px 38px rgba(0, 0, 0, 0.08)",
        "0px 8px 40px rgba(0, 0, 0, 0.08)",
        "0px 8px 42px rgba(0, 0, 0, 0.08)",
        "0px 9px 44px rgba(0, 0, 0, 0.08)",
        "0px 9px 46px rgba(0, 0, 0, 0.08)"
    ];
};

;// CONCATENATED MODULE: ./src/theme/create-typography.js
const createTypography = ()=>{
    return {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.57
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 500,
            lineHeight: 1.66
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            lineHeight: 2.5,
            textTransform: "uppercase"
        },
        h1: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.2
        },
        h2: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.2
        },
        h3: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 1.2
        },
        h4: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.2
        },
        h5: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: 1.2
        },
        h6: {
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            lineHeight: 1.2
        }
    };
};

;// CONCATENATED MODULE: ./src/theme/index.js





function createTheme() {
    const palette = createPalette();
    const components = createComponents({
        palette
    });
    const shadows = createShadows();
    const typography = createTypography();
    return (0,material_.createTheme)({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1440
            }
        },
        components,
        palette,
        shadows,
        shape: {
            borderRadius: 8
        },
        typography
    });
}

// EXTERNAL MODULE: ./src/utils/create-emotion-cache.js
var create_emotion_cache = __webpack_require__(3822);
// EXTERNAL MODULE: ./node_modules/simplebar-react/dist/simplebar.min.css
var simplebar_min = __webpack_require__(8710);
;// CONCATENATED MODULE: ./src/pages/_app.js












const clientSideEmotionCache = (0,create_emotion_cache/* createEmotionCache */.S)();
const SplashScreen = ()=>null;
const App = (props)=>{
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    useNProgress();
    const getLayout = Component.getLayout ?? ((page)=>page);
    const theme = createTheme();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "IntGrow Corp."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(LocalizationProvider_.LocalizationProvider, {
                dateAdapter: AdapterDateFns_.AdapterDateFns,
                children: /*#__PURE__*/ jsx_runtime.jsx(auth_context/* AuthProvider */.Ho, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(styles_.ThemeProvider, {
                        theme: theme,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.CssBaseline, {}),
                            /*#__PURE__*/ jsx_runtime.jsx(auth_context/* AuthConsumer */.he, {
                                children: (auth)=>auth.isLoading ? /*#__PURE__*/ jsx_runtime.jsx(SplashScreen, {}) : getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                                        ...pageProps
                                    }))
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9552);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3822);





const Favicon = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            })
        ]
    });
const Fonts = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap"
            })
        ]
    });
class CustomDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Favicon, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fonts, {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
CustomDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const cache = (0,src_utils_create_emotion_cache__WEBPACK_IMPORTED_MODULE_4__/* .createEmotionCache */ .S)();
    const { extractCriticalToChunks } = _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3___default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>(props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                        emotionCache: cache,
                        ...props
                    })
        });
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    return {
        ...initialProps,
        styles: [
            ...react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(initialProps.styles),
            ...emotionStyleTags
        ]
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomDocument);


/***/ }),

/***/ 3822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const createEmotionCache = ()=>{
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "css"
    });
};


/***/ })

};
;