import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';

export default function LinkToAnotherPage({ text, path }) {

    return (
        <Link className="link-to-another-page" to={path}>
            {text}
            <div>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </Link>
    );
}