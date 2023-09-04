import { Button, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import MapIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";

import Basemap from "./Basemap.jsx";
import About from "./About.jsx";
import SwitchBtn from "./SwitchBtn.jsx";

export default function App() {
    const [popup, setPopup] = useState(true);

    return (
        <>
            {popup && <About />}
            <Basemap />
            {/* <SwitchBtn /> */}
            <IconButton
                className="info_btn"
                style={{
                    backgroundColor: "#d62d3e",
                    color: "white",
                    padding: 12,
                }}
                onClick={() => {
                    setPopup(!popup);
                    console.log(popup);
                }}
            >
                {popup && (
                    <MapIcon
                        sx={{
                            padding: "2px",
                            margin: 0,
                            fontSize: "2rem",
                        }}
                    />
                )}
                {!popup && (
                    <HomeIcon
                        sx={{
                            padding: "2px",
                            margin: 0,
                            fontSize: "2rem",
                        }}
                    />
                )}
            </IconButton>
        </>
    );
}
