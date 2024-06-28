// src/components/DownloadButton.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DownloadButton({ fileName }) {
    const [fileSize, setFileSize] = useState(null);
    const fileUrl = useBaseUrl(`/assets/files/${fileName}`);

    useEffect(() => {
        async function fetchFileSize() {
            try {
                const response = await fetch(fileUrl, { method: 'HEAD' });
                const size = response.headers.get('Content-Length');
                if (size) {
                    setFileSize((size / 1024).toFixed(2)); // Convert to KB and format
                }
            } catch (error) {
                console.error('Error fetching file size:', error);
            }
        }

        fetchFileSize();
    }, [fileUrl]);

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
