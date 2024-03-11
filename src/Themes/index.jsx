import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { themeOptions } from "./typography";

const baseOptions = {
  palette: {
    primary: {
      main: "#252020", // Customize this color as needed
    },
    secondary: {
      main: "#888792", // Customize this color as needed
    },
    background: {
      main: "#fff", // Customize this color as needed
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
    // Add more color definitions as needed
  },
  components: {
    MuiPickersCalendarHeader: {
      styleOverrides: {
        switchViewButton: {
          "&:hover": {
            backgroundColor: "#544FA7",
          },
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        button: {
          "&:hover": {
            background: "#544FA7",
          },
          marginRight: "0px",
        },
      },
    },

    MuiPickersModal: {
      styleOverrides: {
        dialogRoot: {
          background:
            "linear-gradient(261.87deg, #62D3F0 13.12%, #35A5F5 83.57%),linear-gradient(0deg, #51ACED, #51ACED)",
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        // dayLabel: {
        //   color: "#fff",
        // },
        iconButton: {
          padding: "6px",
        },
      },
    },
    MuiPickersToolbar: {
      styleOverrides: {
        toolbar: {
          background:
            "linear-gradient(261.87deg, #62D3F0 13.12%, #35A5F5 83.57%),linear-gradient(0deg, #51ACED, #51ACED)",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        // day: {
        //   color: "#fff",
        // },
        dayDisabled: {
          color: "#52565c",
        },
        selected: {
          background:
            "linear-gradient(100.67deg, #E2B418 -8.74%, #F1D067 27.07%, #CA9511 79.68%)",
        },
      },
    },
    MuiPickersBasePicker: {
      styleOverrides: {
        pickerView: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(261.87deg, #62D3F0 13.12%, #35A5F5 83.57%)",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          color: "#757575 !important",
          padding: "12px",
          width: "40px",
          height: "40px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#000",
          height: "50px",
          borderRadius: "10px !important",
          // input: {

          // }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        inputMultiline: {
          padding: "1px !important",
        },
        notchedOutline: { borderColor: "rgba(255, 255, 255, 0.1)" },
        root: {
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
          "&.Mui-disabled": {
            "& input": {
              "-webkit-text-fill-color": "#fff !important",
            },
          },
        },
        input: {
          borderRadius: "10px",
          color: "#fff",
          padding: "16px 14px",
          fontSize: "14px",
          fontWeight: "400",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#fff !important",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&::before": {
            display: "none",
          },
          "&::after": {
            display: "none",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: { minWidth: "30px" },
      },
    },

    MuiPaper: {
      styleOverrides: {
        outlined: {
          padding: "20px",
          width: "100%",
          backgroundColor: "#1B1B1B",
        },
        elevation1: {
          backgroundColor: `#1B1B1B`,
          borderRadius: "15px",
          padding: "35px",
          boxShadow: "none",
        },
        elevation2: {
          backgroundColor: `#1B1B1B`,
          // borderRadius: "15px",
          padding: "20px",
          boxShadow: "none",
        },
        root: {
          boxShadow: "none",
          color: "#fff",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.07)",
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          // background: "rgba(255, 255, 255, 0.04)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          // "&:hover": {
          //   backgroundColor: "#ffffff14",
          // },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          padding: "18px 14px",
          fontWeight: "400",
          color: "#FFFFFF",
          whiteSpace: "pre",
          fontSize: "14px",
        },
        body: {
          color: "rgba(255, 255, 255, 0.75)",
          whiteSpace: "pre",
          fontWeight: "300",
          fontSize: "14px",
        },
        root: {
          borderBottom: "none",
          padding: "16px 14px",
          textAlign: "center",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 99999,
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          alignItems: "self-start",
        },
        gutters: {
          paddingLeft: 0,
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 1)",
          boxShadow: "3px 5px 11.100000381469727px 2px rgba(0, 0, 0, 0.1)",
          "&:last-of-type": {
            borderRadius: "10px",
          },
          "&:first-of-type": {
            borderRadius: "10px",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#2E2E2E",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "4px",
          fontSize: "12px",
          color: "rgba(43, 145, 239, 1)",
          "&.Mui-checked": { color: "rgba(43, 145, 239, 1)" },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          paddingBottom: "0",
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperScrollPaper: {
          Width: 450,
          maxWidth: "100%",
        },
        paper: {
          borderRadius: "10px",
          background: "#1B1B1B",
          filter: "none",
        },
        paperWidthSm: {
          maxWidth: "673px !important",
        },
        paperWidthXs: {
          maxWidth: "450px !important",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "20px 30px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          // backgroundColor: "rgba(63, 59, 122, 1)",
          textAlign: "center",
          padding: "23px 24px 16px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "20px 30px 0px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: "#d32f2f !important",
          },
          marginRight: "0px",
          marginLeft: "0px",
          color: "#d32f2f !important",
        },
      },
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(232, 183, 18)",
          "&.Mui-disabled": {
            opacity: 0.38,
            background: "rgb(232, 183, 18)",
            color: "#fff",
          },
          "&.Mui-selected": {
            background: "#ffff",
            color: "#000",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          },
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "18px",
          letterSpacing: "0px",
          textAlign: "left",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          color: "#212121",
          border: "1px solid transparent",
          textTransform: "capitalize",
          background: "#F7F7F7",
          whiteSpace: "pre",
          boxShadow: "none",
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "5px",
          padding: "10px 35px",
          "&:hover": {
            color: "#212121",
            backgroundColor: "#F7F7F7",
            border: "1px solid transparent",
            boxShadow: "none",
          },
        },
        containedSizeSmall: { fontSize: "12px" },
        containedPrimary: {
          color: "#fff",
          padding: "10px 35px",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "5px",
          border: "1px solid transparent",
          background:
            "linear-gradient(100.67deg, #E2B418 -8.74%, #F1D067 27.07%, #CA9511 79.68%)",
          whiteSpace: "pre",
          "&:hover": {
            boxShadow: "none",
            color: "#FFFFFF",
            border: "1px solid transparent",
            borderRadius: "5px",
            borderImage:
              "linear-gradient(100.67deg, #E2B418 -8.74%, #F1D067 27.07%, #CA9511 79.68%) 1",
            background: "transparent",
          },
        },
        outlinedPrimary: {
          padding: "10px 35px",
          textTransform: "capitalize",
          fontSize: "16px",
          fontWeight: "600",
          color: "#252222",
          border: "1px solid #252222",
          borderRadius: "5px",

          whiteSpace: "pre",
          "&:hover": {
            boxShadow: "none",
            color: "#FFFFFF",
            border: "1px solid transparent",
            background:
              "linear-gradient(100.67deg, #E2B418 -8.74%, #F1D067 27.07%, #CA9511 79.68%)",
          },
        },
        outlined: {
          color: "#2B91EF",
          borderRadius: "100px",
          border: "1px solid #2B91EF",
          textTransform: "capitalize",
          background: "transparent",
          whiteSpace: "pre",
          padding: "5px 15px 7px",
          fontSize: "14px",
          fontWeight: "400",
          "&:hover": {
            color: "#fff",
            background: "#2B91EF",
            border: "1px solid transparent",
          },
        },

        root: {
          textTransform: "capitalize",
          lineHeight: "20px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: "0",
        },
        paper: {
          width: "250px",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          // border: "1px solid #E8E8E8",
          backgroundColor: "transparent",
          height: "50px !important",
          borderRadius: "10px !important",
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.1)",
            "-webkit-text-fill-color": "#fff !important",
          },
        },
        select: {
          color: "#fff !important",
          backgroundColor: "transparent",
          fontSize: 15,
        },
        icon: {
          color: "#fff ",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: { top: "47px" },
        list: {
          background:
            "linear-gradient(261.87deg, #62D3F0 13.12%, #35A5F5 83.57%)",
          color: "#fff",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { paddingLeft: "20px" },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: "#a7a2ee",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: "transparent !important",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        // root: {
        //   padding: "0px 65px !important",
        //   "@media (max-width: 780px)": {
        //     padding: "0px 16px !important",
        //   },
        // },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none !important",
          cursor: "pointer",
        },
      },
    },
  },
};

export const createCustomTheme = (config = {}) => {
  let theme = createTheme({ ...baseOptions, ...themeOptions });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
