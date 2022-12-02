import React from "react";

function WrapperRightModal() {
    return(
        <div className="WrapperRightModal">
            <div className="WrapperRightModal_header">
                <h3>Friend Activity</h3>
                <div className="WrapperRightModal_header_btn">
                    <img src="icons/right_block/add_people.svg" alt="" />
                    <img src="icons/right_block/close-icon.svg" alt="" />
                </div>
            </div>
            <p>Let friends and followers on Spotify see what you’re listening to.</p>
            <div className="Item_WrapperRightModal">
                <img src="/img/right_block_item-img.svg" alt="" />
                <img src="/img/right_block_item-img.svg" alt="" />
                <img src="/img/right_block_item-img.svg" alt="" />
            </div>
            <p>Go to Settings > Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
            <button>SETTINGS</button>
        </div>
    )
}

export default WrapperRightModal;