import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

export default function Colophon() {
    const credits = [
        {
            path: "cupum.png",
            link: "https://www.unesco-paysage.umontreal.ca/en/",
        },
        {
            path: "dvs.png",
            link: "https://dvstudies.net/",
        },
        {
            path: "hertziana.png",
            link: "https://www.biblhertz.it/en/home",
        },
        {
            path: "uzh.png",
            link: "https://www.uzh.ch/en.html",
        },
    ];

    const sColophon = {
        width: "60%",
        margin: "50px auto",
        marginTop: "100px",
    };

    return (
        <>
            <Box
                sx={{
                    alignItems: "center",
                    marginBottom: "100px",
                    ...sColophon,
                }}
            >
                <p
                    style={{
                        textAlign: "center",
                        textJustify: "inter-word",
                        fontStyle: "italic",
                        padding: "0 200px",
                    }}
                >
                    DataThink: Transhistorical Urban Landscape as Hypermap is a
                    project by D. Negueruela del Castillo, I. Neri, P. Guhennec,
                    J. Argota Sánchez-Vaquerizo, L. Schaerf, V. Bernasconi, P.
                    Ballesteros Zapata, S. Koseki
                    <br /> <br />
                    for more info, please refer to <br />
                    <br />
                    <a
                        style={{
                            color: "black",
                            padding: 10,
                        }}
                        href="https://github.com/neriiacopo/datathink"
                        target="_blank"
                        aria-label="github repository"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        style={{
                            color: "black",
                            padding: 10,
                        }}
                        href="https://dl.acm.org/doi/10.1145/3603163.3609083"
                        target="_blank"
                        ariaLabel="article"
                    >
                        <ArticleIcon />
                    </a>
                </p>
                <Box
                    sx={{
                        display: "flex",
                        direction: "row",
                        alignContent: "center",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginBottom: "100px",
                        // ...sColophon,
                    }}
                >
                    {credits.map(({ path, link }) => (
                        <a
                            href={link}
                            target="_blank"
                        >
                            <img
                                src={path}
                                alt="process diagram"
                                width="200px"
                                height="auto"
                            ></img>
                        </a>
                    ))}
                </Box>
            </Box>
        </>
    );
}
