import React from "react";
import Image from "next/image";
import ExternalLink from "@/components/ui/ExternalLink";

const UsesSection = ({ title, items, icon }) => {
    return (
        <div className="flex items-center lg:w-4/5 mx-auto rounded-3xl bg-neutral hypr-card p-8 sm:p-10 mb-10 sm:flex-row flex-col">
            <div className="w-48 h-auto sm:mr-10 inline-flex items-center justify-center rounded-2xl flex-shrink-0 p-3 bg-base-100/50 border border-base-300/60">
                <Image height={160} width={160} src={icon} alt="" className="object-contain" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="mb-3 text-3xl md:text-5xl font-semibold text-balance tracking-tight text-neutral-content">
                    {title}
                </h2>
                <ul className="list-disc list-inside">
                    {items.map((item, index) => (
                        <li key={index} className={item.className || ""}>
                            {item.prefix && <span className="font-semibold">{item.prefix}: </span>}
                            {item.link ? (
                                <ExternalLink
                                    href={item.link.href}
                                    className={item.link.className || "font-semibold underline"}
                                >
                                    {item.link.text}
                                </ExternalLink>
                            ) : (
                                item.text && <span className={item.textClassName || "font-medium"}>{item.text}</span>
                            )}
                            {item.content}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UsesSection;
