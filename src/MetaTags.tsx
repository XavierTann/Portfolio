import React from "react";
import { Helmet } from "react-helmet-async";
import { PersonalInfo } from "./types";

const MetaTags: React.FC<{ info: PersonalInfo }> = ({ info }) => {
    return (
        <Helmet>
            <title>{info.name} — {info.role}</title>
            <meta name="description" content={info.intro} />
            <meta property="og:image" content={`${process.env.PUBLIC_URL}/favicon.ico`} />
        </Helmet>
    );
};

export default MetaTags;
