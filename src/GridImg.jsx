import { Grid, Box, Button, Switch } from "@mui/material";
import { useState } from "react";
import CustomSwitch from "./SwitchBtn.jsx";

export default function GridImg() {
    const [vasi, setPopup] = useState(true);

    const arr = new Array(192).fill(0);

    const paths = [];
    for (let i = 0; i < 192; i++) {
        paths.push(`image_${i.toString().padStart(3, "0")}.jpg`);
    }
    return (
        <>
            <Grid
                className="full_screen blur"
                container
            >
                <Grid
                    item
                    sx={{
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignContent: "flex-end",
                        alignItems: "flex-end",
                        color: "white",
                        fontWeight: "light",
                    }}
                    xs={4}
                >
                    <div
                        style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            marginTop: 10,
                            paddingTop: 5,
                        }}
                    >
                        <h4>CLiP description</h4>
                        <p style={{ fontStyle: "italic" }}>
                            a black and white drawing of a city, lavish rococo
                            baroque setting, dark yellowish water, ( (
                            photograph ) ), listing image, nomadic urbanism, red
                            square, vatican, retracing, mossy buildings,
                            featuring flowing fountains, aspect ratio 16:9,
                            midday photograph, opera, all roads lead to rome,
                            glass domes, black oil bath
                        </p>
                    </div>
                    <div style={{ padding: 40 }}>
                        <img
                            src={"vasiPlate.jpeg"}
                            alt="Piazza Navola, Giuseppe Vasi PLate"
                            width="100%"
                            height="auto"
                            className="shadow"
                            style={{
                                borderRadius: "10px",
                                border: "1px solid white",
                                backgroundColor: "white",
                            }}
                        ></img>
                    </div>
                </Grid>
                <Grid
                    item
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                    xs={8}
                >
                    <Box
                        style={{
                            position: "absolute",
                            right: "30px",
                            top: "30px",
                            borderRadius: "50px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignContent: "flex-end",
                            alignItems: "center",
                            backgroundColor: "#FCF21A",
                            width: "500px",
                            color: "black",
                            fontWeight: "bold",
                            zIndex: 9999999,
                        }}
                        className="shadow"
                    >
                        Switch between original and Stable Diffusion outputs
                        <Button>
                            <CustomSwitch
                                sx={{ m: 1 }}
                                defaultChecked
                                onChange={() => {
                                    setPopup(!vasi);
                                    console.log(vasi);
                                }}
                            />
                        </Button>
                    </Box>
                    <Box
                        style={{
                            flexDirection: "row",
                            height: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            overflow: "auto",
                            justifyContent: "flex-end",
                            paddingTop: "100px",
                        }}
                    >
                        {paths.map((path) => (
                            <Box
                                style={{
                                    borderRadius: "10px",
                                    backgroundColor: "white",
                                    height: "300px",
                                    width: "300px",
                                }}
                                sx={{ margin: 1 }}
                            >
                                <img
                                    alt={path}
                                    src={
                                        vasi
                                            ? `imgs/vasi/${path}`
                                            : `imgs/original/${path}`
                                    }
                                    width="100%"
                                    height="auto"
                                    style={{
                                        borderRadius: "10px",
                                        border: "1px solid white",
                                    }}
                                    className={vasi ? "bw shadow" : "shadow"}
                                ></img>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
