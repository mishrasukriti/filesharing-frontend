import React from 'react';
import DropZone from './DropZone';
import ProgressBar from './ProgressBar';
import SharingContainer from './SharingContainer';

const Upload = ()=>{

    return(
        <section className="upload-container">
            <DropZone/>
            <ProgressBar/>
            <SharingContainer/>
        </section>
    )
}

export default Upload;