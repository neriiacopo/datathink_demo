// import * as React from "react";
// import Accordion from '@mui/material/Accordion';
import { useState } from "react";
import {
    Box,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Chip,
    Button,
} from "@mui/material";
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

export default function Steps() {
    const sBullet = {
        minHeight: 200,
        backgroundColor: "",
        margin: "50px auto",
        width: "50%",
    };

    const sections = [
        {
            title: `Phase 1 Vectorializing`,
            link: [
                "https://colab.research.google.com/drive/1um_bjfm0xb_X4ZEuoRKpdmD3UhEmNREQ?usp=share_link",
                "https://drive.google.com/drive/u/0/folders/1otoOMpGWax6QLkWjsOA8iL10vfzBIfk9",
            ],
            purpose: `We introduced the first day of Giuseppe Vasi’s “Itinerario istruttivo” (1761) as the main reference. We introduced an additional link to the historical city through Giovanni Battista Nolli’s Pianta Grande di Roma from 1748, which further contextualized the visual and textual entries from Vasi’s sources. Together, these two references acted as coordinates that permit the link between two cities - the historical Rome and its present-day version - which, overlaid in space, were misaligned in time.
            `,
            method: `The Nolli map was automatically vectorized by means of semantic segmentation. A Convolutional Neural Network was trained on historical map patches to detect which pixels represented buildings. Following the inference of the trained model on the Nolli map, the building-labeled pixel regions were converted to vector polygons. These vector polygons formed the first entries of a database to report and annotate information in a georeferenced fashion`,
        },
        {
            title: `Phase 2 Processing Sensor data`,
            link: ["https://github.com/Reivajar/datathink_2023"],
            purpose: `Loose mapping campaign of Rome with georeferenced data via sensors and mobile camera.`,
            method: `The participants captured instantaneous anonymous environmental data along the Vasi’s path using a CoSense unit for air quality monitoring (i.e. temperature, humidity, PM1, PM2.5, and PM10)  and a GQ EMF-390 sensor for electromagnetic activity (i.e. raw intensity of radiofrequency, electro-magnetic, and electric fields without gathering private information regarding WiFi and mobile networks) (Figure 2). The information retrieved was then paired with geographical data with the help of the mobile application Geo Tracker, which was simultaneously used to follow the position of the sensor and connect it to the basemap. This type of sensing, inconceivable in the 18th century, uncovers hidden aspects that reflect human activity and natural events. On the other hand, these invisible factors have an impact on human health and behavior and can affect urban life.`,
        },
        {
            title: `Phase 3 Field work data collection campaign `,
            link: [
                "https://colab.research.google.com/drive/1TvT7PQkhgK69Srry5NWeGmG3P-uQIU0f?usp=share_link",
            ],
            purpose: `On top of this environmental data, the participants were also asked to collect photographs and textual descriptions from the different monuments mentioned by Vasi along the route.`,
            method: `The Nolli map was used as a basemap to guide a hybrid and loose mapping campaign of Rome with georeferenced data via sensors and mobile cameras. In order to do so, cross-platform mobile applications were used, such as Avenza Map, which allows to visualize one’s location on the basemap and directly store images and texts on specific geographical coordinates`,
        },
        {
            title: `Phase 4 Postprocessing`,
            link: [
                "https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast_stable_diffusion_AUTOMATIC1111.ipynb#scrollTo=PjzwxTkPSPHf",
            ],
            purpose: `Machine learning models like Stable Diffusion make it easy and effortless to generate high-quality images that tightly represent textual prompts, allowing almost any user to engage in the process of creating visual content.
            We used the Automatic1111 WebUI framework – further adapted to run remotely in Google Colab –to control Stable Diffusion with text prompts to reproduce stylistically Vasi’s views, which were retrieved via CLiPInterrogator.
            Additionally, machine learning models such as ControlNet played an important part in influencing image generation by using depth maps at initiation, which are computed through MiDaS.`,
            method: `The independently captured multifold urban aspects were later collected in an interactive web map via Kepler.gl. This hypermap serves as a platform to communicate the results of the urban investigation as it did it in a collaborative way, de facto crowdsourcing the final output from the contribution of each participant.`,
        },
    ];

    const handleButtonClick = () => {
        window.open("https://www.example.com", "_blank");
    };
    console.log(`${sections[1].link[0]}`);

    return (
        <>
            <Box style={{ ...sBullet }}>
                {sections.map((section) => (
                    <AccordionCustom
                        title={section.title}
                        link={section.link}
                        purpose={section.purpose}
                        method={section.method}
                    />
                ))}
            </Box>
        </>
    );
}

const ChipLInk = ({ url, index }) => {
    const openPage = () => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <Chip
            label={`${index}`}
            variant="outlined"
            onClick={openPage}
            sx={{ pointerEvents: "auto" }}
        >
            Open Page
        </Chip>
    );
};

function AccordionCustom({ title, link, purpose, method }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                disableGutters
                elevation={0}
                square
                sx={{
                    backgroundColor: "transparent",
                    borderBottom: "1px solid black",
                    pointerEvents: "none",
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        sx={{
                            width: "90%",
                            flexShrink: 0,
                            fontWeight: "bold",
                            pointerEvents: "auto",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            color: "text.secondary",
                            float: "right",
                            backgroundColor: "transparent",
                        }}
                    >
                        {link.map((link, index) => (
                            <ChipLInk
                                url={`${link}`}
                                index={index + 1}
                            />
                        ))}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{ fontStyle: "italic", fontWeight: "light" }}
                    >
                        Purpose:
                    </Typography>
                    <Typography>{purpose}</Typography>
                    <br />

                    <Typography
                        sx={{ fontStyle: "italic", fontWeight: "light" }}
                    >
                        {" "}
                        Methodology:
                    </Typography>
                    <Typography>{method}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
