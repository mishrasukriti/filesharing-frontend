import React from 'react';

const SharingContainer = ()=>{

    return(
        <div className="sharing-container">
            <p className="expire">Link expires in 24 hrs</p>

            <div className="input-container">
                <input type="text" id="fileURL" readonly/>
                <img src="data:image/png;base64,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" id="copyURLBtn" alt="copy to clipboard icon"/>
            </div>

            <p className="email-info">Or Send via Email</p>
            <div className="email-container">
                <form id="emailForm">
                    <div className="filed">
                        <label for="fromEmail"> Your email </label>
                        <input type="email" autocomplete="email" required name="from-email" id="fromEmail"/>
                    </div>

                    <div className="filed">
                        <label for="toEmail">Receiver's email</label>
                        <input type="email" required autocomplete="receiver" name="to-email" id="toEmail"/>
                    </div>

                    <div className="send-btn-container">
                        <button className="btn btn-primary btn-lg btn-block" type="submit"></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SharingContainer;
