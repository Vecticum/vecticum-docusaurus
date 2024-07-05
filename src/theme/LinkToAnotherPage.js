// src/components/DownloadButton.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function LinkToAnotherPage({ fileName }) {

    return (
        <div className="file-download">
            <div className='icon'>
                <FontAwesomeIcon icon={faDownload} size="xl"/>
                <div className='size'>
                    {fileSize && <span> ({fileSize} KB)</span>}
                </div>
            </div>
            
            <div className='file'>
                <a href={fileUrl} download>{fileName}</a>
            </div>
        </div>
    );
}
