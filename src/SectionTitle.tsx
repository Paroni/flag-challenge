import React from 'react';

function SectionTitle(props: { sectionTitle: string; }) {
    return (
        <div>
            <h2>{props.sectionTitle}</h2>
        </div>
    )
}

export default SectionTitle;