import React from "react";
import ExternalLink from "@/components/ui/ExternalLink";

export const usesData = [
    {
        title: "Operating System",
        icon: "files.svg",
        items: [
            {
                link: {
                    href: "https://omarchy.org/",
                    text: "Omarchy",
                },
            },
        ],
    },
    {
        title: "Code Editor",
        icon: "coding.svg",
        items: [
            {
                link: {
                    href: "https://antigravity.google/",
                    text: "Google Antigravity",
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
                text: "Google Chrome, Brave",
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
                prefix: "Laptop",
                text: "Asus Vivobook 16x",
                className: "font-medium",
            },
            {
                prefix: "Phone",
                text: "Xiaomi 11 Lite NE 5G",
                className: "font-medium",
            },
            {
                prefix: "Keyboard",
                text: "CosmicByte CB-GK-26 Mechanical Keyboard",
                className: "font-medium",
            },
            {
                prefix: "Mouse",
                text: "Logitech M171 Mouse",
                className: "font-medium",
            },
        ],
    },
];
