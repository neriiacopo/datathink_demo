import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";

import Colophon from "./Colophon.jsx";
import Steps from "./Steps.jsx";

export default function About() {
    const large = "80%";
    const medium = "50%";
    const small = "30%";

    const sTitle = {
        paddingTop: 100,
        width: large,
        textAlign: "center",
        margin: "50px auto",
        fontSize: "10rem",
    };

    const sIntro = {
        marginTop: 300,
        width: medium,
        margin: "50px auto ",

        textAlign: "justify",
        textJustify: "inter-word",
        marginBottom: 100,
    };

    const sDiagram = {
        height: 700,
        width: large,

        margin: "50px auto",
    };

    const sContainer = {
        overflow: "auto",
    };

    return (
        <>
            <Box
                className="full_screen"
                sx={{
                    ...sContainer,
                }}
            >
                <Box style={{ ...sTitle }}>
                    DATATHINK
                    <p style={{ fontSize: "1.5rem", padding: 0, margin: 0 }}>
                        Transhistorical Urban Landscape as Hypermap / 2023
                    </p>
                </Box>

                <Box style={{ ...sIntro }}>
                    <p>
                        This website explores the conception, design, and
                        implementation of a hypertextual map that we call
                        hypermap. It is a proof of concept for an augmented
                        database of the urban landscape in Rome, and for new
                        ways to facilitate the access and enhancement of
                        cultural artifacts and knowledge. Using Giovanni Nolli’s
                        1748 map of the city of Rome as a backbone, we conducted
                        an experiment based on one of the routes defined by
                        Giuseppe Vasi’s Grand Tour of Rome to collect various
                        types of urban and environmental information, thus
                        aiming to connect a multiplicity of data from different
                        nature and times periods to enhance the serendipitous
                        elaboration of new narratives, interpretations, and
                        information (namely "unfolding") not implicitly enacted
                        by the pure analytical and mechanistic overlapping of
                        gathered data ("folding"). This experiment is part of
                        the research-focused educational workshop entitled
                        “Datathink, the City as Collection: Building an
                        Augmented Database for the Humanities and Social
                        Sciences”, conducted at the Bibliotheca Hertziana - Max
                        Planck Institute for Art History in Rome, from Feb 27th
                        to March 3rd, 2023.
                    </p>
                    <p>
                        On this website, you find the hypermap as a result of
                        the workshop, as well as a diagram that summarizes the
                        modules and phases of the workflow with links below. By
                        clicking on the bullet points below the diagram, you
                        will get to the diverse pieces of code involved in each
                        of the phases, conveniently collected in standalone
                        Google Colaboratory notebooks, so that you can re-run
                        the exercise with your own data or copy and modify the
                        code for other purposes.
                    </p>
                </Box>
                <Box style={{ ...sDiagram }}>
                    <img
                        src="diagram.png"
                        alt="process diagram"
                        width="100%"
                        height="auto"
                    ></img>
                </Box>
                <Steps />
                <Colophon />
            </Box>
        </>
    );
}
