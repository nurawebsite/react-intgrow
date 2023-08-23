"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 1644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);




const Logo = ()=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const fillColor = theme.palette.primary.main;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
        component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),
        href: "/",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/assets/logos/main-logo.png",
            alt: "intgrow_logo"
        })
    });
};


/***/ }),

/***/ 926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(261);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(src_contexts_auth_context__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .Vo);


/***/ }),

/***/ 9492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ usePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePopover() {
    const anchorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(false);
    }, []);
    const handleToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen((prevState)=>!prevState);
    }, []);
    return {
        anchorRef,
        handleClose,
        handleOpen,
        handleToggle,
        open
    };
}


/***/ }),

/***/ 1665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ AccountPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(926);






const AccountPopover = (props)=>{
    const { anchorEl, onClose, open } = props;
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const auth = (0,src_hooks_use_auth__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const handleSignOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onClose?.();
        auth.signOut();
        router.push("/auth/login");
    }, [
        onClose,
        auth,
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Popover, {
        anchorEl: anchorEl,
        anchorOrigin: {
            horizontal: "left",
            vertical: "bottom"
        },
        onClose: onClose,
        open: open,
        PaperProps: {
            sx: {
                width: 200
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                sx: {
                    py: 1.5,
                    px: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        variant: "overline",
                        children: "Account"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                        color: "text.secondary",
                        variant: "body2",
                        children: "Test"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuList, {
                disablePadding: true,
                dense: true,
                sx: {
                    p: "8px",
                    "& > *": {
                        borderRadius: 1
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                    onClick: handleSignOut,
                    children: "Sign out"
                })
            })
        ]
    });
};
AccountPopover.propTypes = {
    anchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
    open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool).isRequired
};


/***/ }),

/***/ 362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5856);
/* harmony import */ var _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1950);
/* harmony import */ var _heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2506);
/* harmony import */ var _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(521);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9492);
/* harmony import */ var _account_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1665);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_5__]);
([_heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;
const TopNav = (props)=>{
    const { onNavOpen } = props;
    const lgUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)((theme)=>theme.breakpoints.up("lg"));
    const accountPopover = (0,src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_8__/* .usePopover */ .S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                component: "header",
                sx: {
                    backdropFilter: "blur(6px)",
                    background: "linear-gradient(-45deg, #0e588d, #274685)",
                    position: "sticky",
                    left: {
                        lg: `${SIDE_NAV_WIDTH}px`
                    },
                    top: 0,
                    zIndex: (theme)=>theme.zIndex.appBar
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                    alignItems: "center",
                    direction: "row",
                    justifyContent: "space-between",
                    spacing: 2,
                    sx: {
                        minHeight: TOP_NAV_HEIGHT,
                        px: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                            alignItems: "center",
                            direction: "row",
                            spacing: 2,
                            children: [
                                !lgUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                                    onClick: onNavOpen,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
                                        fontSize: "small",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logo__WEBPACK_IMPORTED_MODULE_10__/* .Logo */ .T, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                            alignItems: "center",
                            direction: "row",
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
                                    title: "Contacts",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
                                            fontSize: "small",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
                                    title: "Notifications",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Badge, {
                                            badgeContent: 4,
                                            color: "success",
                                            variant: "dot",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.SvgIcon, {
                                                fontSize: "small",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                                    onClick: accountPopover.handleOpen,
                                    ref: accountPopover.anchorRef,
                                    sx: {
                                        cursor: "pointer",
                                        height: 40,
                                        width: 40
                                    },
                                    src: "/assets/avatars/avatar-anika-visser.png"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_account_popover__WEBPACK_IMPORTED_MODULE_9__/* .AccountPopover */ .x, {
                anchorEl: accountPopover.anchorRef.current,
                open: accountPopover.open,
                onClose: accountPopover.handleClose
            })
        ]
    });
};
TopNav.propTypes = {
    onNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;