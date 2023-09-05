import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 57,
    height: 36,
    padding: 0,
    borderRadius: "100px",
    "& .MuiSwitch-switchBase": {
        margin: 2,
        padding: 0,
        transform: "translateX(0px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb": {
                backgroundColor:
                    theme.palette.mode === "dark" ? "#FCF21A" : "#FCF21A",
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "black" : "black",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "white" : "white",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "black" : "black",
        borderRadius: 20 / 2,
    },
}));

export default CustomSwitch;
