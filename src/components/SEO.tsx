"use client";
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "Expert Software Engineer specializing in high-performance digital experiences.",
    keywords,
    author = "John Doe"
}) => {
    const siteTitle = title ? `${title} | John Doe` : "John Doe | UI/UX Developer";

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;
