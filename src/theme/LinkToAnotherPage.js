// src/components/DownloadButton.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function LinkToAnotherPage({ text, path }) {

    return (
        <a className="link-to-another-page" href={path}>{text}
        <div>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </div>
        </a>
    );
}
