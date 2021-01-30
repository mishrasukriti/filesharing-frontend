import React from 'react';

const DropZone = ()=>{

    return(
        <form action="">
            <div className="drop-zone" >
                <div className="icon-container">
                    <img src="https://www.pngfind.com/pngs/m/66-661812_upload-file-icon-png-small-file-image-icon.png" draggable="true" className="center" alt="File Icon"/>
                    <img src="https://www.pngfind.com/pngs/m/66-661812_upload-file-icon-png-small-file-image-icon.png" draggable="true" className="left" alt="File Icon"/>
                    <img src="https://www.pngfind.com/pngs/m/66-661812_upload-file-icon-png-small-file-image-icon.png" draggable="true" className="right" alt="File Icon"/>
                </div>
                <input type="file" id="fileInput"/>
                <div className="title">Drop your Files here or, <span id="browseBtn">browse</span>
                </div>
            </div>
        </form>

    )
}

export default DropZone;
