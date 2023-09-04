import { Box } from "@mui/material";

export default function Colophon() {
    const paths = ["cupum.png", "dvs.png", "hertziana.png", "uzh.png"];

    const sColophon = {
        width: "60%",
        margin: "50px auto",
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    direction: "row",
                    alignContent: "center",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginBottom: "100px",
                    ...sColophon,
                }}
            >
                {paths.map((path) => (
                    <img
                        src={path}
                        alt="process diagram"
                        width="200px"
                        height="auto"
                    ></img>
                ))}
            </Box>
        </>
    );
}
