import React from "react";
import ExternalLink from "../components/ExternalLink";

export const usesData = [
    {
        title: "Operating System",
        icon: "files.svg",
        items: [
            {
                link: {
                    href: "https://ubuntu.com/download/desktop",
                    text: "Ubuntu",
                },
            },
            {
                prefix: "Desktop Environment",
                text: "Gnome",
                className: "font-semibold",
                textClassName: "font-medium",
            },
            {
                content: (
                    <span className="font-semibold">
                        Themes:{" "}
                        <span>
                            <ExternalLink
                                href="https://www.gnome-look.org/p/1403328"
                                className="underline font-medium"
                            >
                                Whitesur Dark,
                            </ExternalLink>
                        </span>
                    </span>
                ),
            },
        ],
    },
    {
        title: "Code Editor",
        icon: "coding.svg",
        items: [
            {
                link: {
                    href: "https://code.visualstudio.com/",
                    text: "Visual Studio Code",
                },
            },
            {
                content: (
                    <span className="font-semibold">
                        Themes:{" "}
                        <span>
                            <ExternalLink
                                href="https://draculatheme.com/visual-studio-code"
                                className="underline font-medium"
                            >
                                Dracula Official,
                            </ExternalLink>
                            <ExternalLink
                                href="https://github.com/Binaryify/OneDark-Pro"
                                className="underline font-medium"
                            >
                                {" "}
                                One Dark Pro
                            </ExternalLink>
                        </span>
                    </span>
                ),
            },
            {
                content: (
                    <span className="font-semibold">
                        Extensions:{" "}
                        <span>
                            <ExternalLink
                                href="https://prettier.io/"
                                className="underline font-medium"
                            >
                                Prettier,
                            </ExternalLink>
                            <ExternalLink
                                href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                                className="underline font-medium"
                            >
                                {" "}
                                Tailwind CSS IntelliSense,
                            </ExternalLink>
                            <ExternalLink
                                href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
                                className="underline font-medium"
                            >
                                {" "}
                                ES7+ React/Redux/React-Native snippets
                            </ExternalLink>
                        </span>
                    </span>
                ),
            },
        ],
    },
    {
        title: "Software",
        icon: "Typing.svg",
        items: [
            {
                prefix: "Browser",
                text: "Google Chrome, Firefox",
                className: "font-semibold",
                textClassName: "font-medium",
            },
            {
                prefix: "Miscellaneous",
                text: "Simple screen recorder, Auto-cpu-freq",
                className: "font-semibold",
                textClassName: "font-medium",
            },
        ],
    },
    {
        title: "Hardware",
        icon: "computer.svg",
        items: [
            {
                text: "Asus Vivobook 16x",
                className: "font-medium",
            },
            {
                text: "Iphone SE 2020",
                className: "font-medium",
            },
            {
                text: "CosmicByte CB-GK-26 Mechanical Keyboard ",
                className: "font-medium",
            },
        ],
    },
];
