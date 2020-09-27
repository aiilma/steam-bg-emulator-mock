import React from "react";
import styled from "styled-components";

const ProfileHeaderBg = styled(({className, ...props}) => {
    const customizeCheckboxHandler = () => {
    }
    const autoCropHeight_2 = () => {
    }

    return <div className={`profile_header_bg ${className}`} {...props}>
        <div className="profile_header_bg_texture">
            <div className="profile_header">
                <div className="profile_header_content">
                    <div className="profile_header_centered_persona">
                        <div className="persona_name" style={{fontSize: 24}}>
                            <span className="actual_persona_name">VitalyXD</span>
                        </div>
                        <div className="bg_link">
                            <div className="gray_bevel for_text_input">
                                <input type="text" id="urlIn" className="dynInput bgUrl" name="real_name" size="30"
                                       placeholder="Paste a background URL here"/>
                            </div>
                            <div id="goUrl" className="btn_profile_action btn_medium"
                                 style={{left: 4, position: 'relative',}}>
                                <span>Change BG</span>
                            </div>
                        </div>
                    </div>
                    <div className="playerAvatar playerAvatarAutoSize profile_header_size offline">
                        <div className="playerAvatarAutoSizeInner">
                            <div id="avatar"/>
                        </div>
                    </div>
                    <div className="profile_header_badgeinfo">
                        <div className="profile_header_actions" style={{position: 'relative',}}>
                            <div id="customize" className="newmodal" style={{
                                position: 'fixed',
                                zIndex: 1000,
                                left: '50%',
                                top: '15%',
                                display: 'none',
                                transform: 'translateX(-50%)',
                            }}>
                                <div className="modal_top_bar"/>
                                <div className="newmodal_header_border">
                                    <div className="newmodal_header">
                                        <div id="customizeClose" className="newmodal_close"/>
                                    </div>
                                    <div className="newmodal_content_border">
                                        <div className="newmodal_content">
                                            <div className="market_dialog_content">
                                                <div className="market_dialog_iteminfo">
                                                    <div className="market_listing_row market_recent_listing_row">
                                                        <div className="bb_h1 customize_textbox">
                                                            <b>Artwork Showcase:</b>
                                                        </div>
                                                        <div id="AWSC_Checkbox"
                                                             className="commentthread_subscribe_ctn checked"
                                                             onClick={() => customizeCheckboxHandler(`this.id`)}>
                                                            <span className="commentthread_subscribe_checkbox">
                                                                <span className="commentthread_subscribe_check"/>
                                                            </span>
                                                            <span className="commentthread_subscribe_desc">Enable Artwork Showcase</span>
                                                        </div>
                                                        <div className="hiddenBelow">
                                                            <div id="AWSC_Long_Checkbox"
                                                                 className="commentthread_subscribe_ctn checked"
                                                                 onClick={() => customizeCheckboxHandler(`this.id`)}>
                                                                <span className="commentthread_subscribe_checkbox">
                                                                    <span className="commentthread_subscribe_check"/>
                                                                </span>
                                                                <span className="commentthread_subscribe_desc">Enable Long Images on Artwork Showcase</span>
                                                            </div>
                                                            <div className="hiddenBelow">
                                                                <div id="AWSC_Long_Minus70_Checkbox"
                                                                     className="commentthread_subscribe_ctn"
                                                                     onClick={() => customizeCheckboxHandler(`this.id`)}>
                                                                    <span className="commentthread_subscribe_checkbox">
                                                                        <span
                                                                            className="commentthread_subscribe_check"/>
                                                                    </span>
                                                                    <span className="commentthread_subscribe_desc">Shorten Right Image</span>
                                                                </div>
                                                                <div
                                                                    className="gray_bevel for_text_input showlong_buttons customize_textbox hidden"
                                                                    style={{
                                                                        position: 'relative',
                                                                        display: 'none',
                                                                        height: 15,
                                                                        width: 165,
                                                                        top: 2
                                                                    }}>
                                                                    <input type="text" className="dynInput hidden"
                                                                           size='10'
                                                                           placeholder='Enter a Custom Height Here'
                                                                           style={{
                                                                               height: 10,
                                                                               position: 'relative',
                                                                               bottom: 1
                                                                           }}/>
                                                                </div>
                                                                <div id="autoResize_AWSC"
                                                                     className="btn_grey_white_innerfade btn_small"
                                                                     style={{
                                                                         marginBottom: 5,
                                                                         marginLeft: 5,
                                                                         display: 'none',
                                                                     }}
                                                                     onClick={() => autoCropHeight_2(1)}>
                                                                    <span>Auto Resize</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="market_listing_row market_recent_listing_row">
                                                        <div className="bb_h1 customize_textbox">
                                                            <b>Screenshot Showcase:</b>
                                                        </div>
                                                        <div id="SSSC_Checkbox" className="commentthread_subscribe_ctn"
                                                             onClick={() => customizeCheckboxHandler(`this.id`)}>
                                                            <span className="commentthread_subscribe_checkbox">
                                                                <span className="commentthread_subscribe_check"/>
                                                            </span>
                                                            <span className="commentthread_subscribe_desc">Enable Screenshot Showcase</span>
                                                        </div>
                                                        <div className="hiddenBelow hidden">
                                                            <div id="SSSC_Long_Checkbox"
                                                                 className="commentthread_subscribe_ctn"
                                                                 onClick={() => customizeCheckboxHandler(`this.id`)}>
                                                                <span className="commentthread_subscribe_checkbox">
                                                                    <span className="commentthread_subscribe_check"/>
                                                                </span>
                                                                <span className="commentthread_subscribe_desc">Enable Long Images on Screenshot Showcase</span>
                                                            </div>
                                                            <div className="hiddenBelow hidden">
                                                                <div id="SSSC_Long_Minus70_Checkbox"
                                                                     className="commentthread_subscribe_ctn"
                                                                     onClick={() => customizeCheckboxHandler(`this.id`)}>
                                                                    <span className="commentthread_subscribe_checkbox">
                                                                        <span
                                                                            className="commentthread_subscribe_check"/>
                                                                    </span>
                                                                    <span className="commentthread_subscribe_desc">Shorten Right Image</span>
                                                                </div>
                                                                <div
                                                                    className="gray_bevel for_text_input showlong_buttons customize_textbox hidden"
                                                                    style={{
                                                                        position: 'relative',
                                                                        display: 'none',
                                                                        height: 15,
                                                                        width: 165,
                                                                        top: 2,
                                                                    }}>
                                                                    <input type="text" className="dynInput hidden"
                                                                           style={{
                                                                               height: 10,
                                                                               position: 'relative',
                                                                               bottom: 1
                                                                           }} size='10'
                                                                           placeholder='Enter a Custom Height Here'/>
                                                                </div>
                                                                <div id="autoResize_SSSC"
                                                                     className="btn_grey_white_innerfade btn_small"
                                                                     style={{
                                                                         marginBottom: 5,
                                                                         marginLeft: 5,
                                                                         display: 'none'
                                                                     }} onClick={() => autoCropHeight_2(2)}>
                                                                    <span>Auto Resize</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="market_listing_row market_recent_listing_row">
                                                        <div className="bb_h1 customize_textbox">
                                                            <b>Workshop Showcase:</b>
                                                        </div>
                                                        <div id="WSSC_Checkbox" className="commentthread_subscribe_ctn"
                                                             onClick={() => customizeCheckboxHandler(`this.id`)}>
                                                            <span className="commentthread_subscribe_checkbox">
                                                                <span className="commentthread_subscribe_check"/>
                                                            </span>
                                                            <span className="commentthread_subscribe_desc">Enable Workshop Showcase</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile_header_summary">
                        <div className="persona_name persona_name_spacer" style={{fontSize: 24}}>
                            <span className="actual_persona_name"/>
                        </div>
                        <div className="header_real_name_spacer"/>
                        <div className="profile_summary">
                            <div className="profile_summary_social"/>
                        </div>
                        <div className="profile_summary_footer">
                            <div id="getBg" className="btn_profile_action btn_medium">
                                <span>Get This BG</span>
                            </div>
                            <div id="randomBG" className="btn_profile_action btn_medium"
                                 style={{left: 3, position: 'relative'}}>
                                <span>| Random BG</span>
                            </div>
                            <div id="openCustomizeButton" className="btn_profile_action btn_medium"
                                 style={{left: 7, position: 'relative'}}>
                                <span style={{textAlign: "center",}}>
                                    Customize Cropping
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
})``

export {ProfileHeaderBg}
