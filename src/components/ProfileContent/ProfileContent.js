import React from "react";
import styled from "styled-components";
import {Clear} from "../elements";

const ProfileContent = styled(({className, ...props}) => {
    const ShowModalContent = () => {
    }
    return <div className={`profile_content has_profile_background ${className}`} {...props}>
        <div className="profile_background_holder_content">
            <div className="profile_background_overlay_content"/>
            <div id="bg2" className="profile_background_image_content"/>
        </div>
        <div className="profile_content_inner">
            <div className="profile_leftcol">
                <div className="profile_customization_area">
                    <div id="cSize" className="profile_customization showcase_1">
                        <div className="profile_customization_header"/>
                        <div className="profile_customization_block">
                            <div id="artworkshowcase" className="screenshot_showcase" style={{display: "flow-root"}}>
                                <input type="text" id="AWSC_Location" className="locationvar hidden" value='1'/>
                                <div className="screenshot_showcase_primary showcase_slot">
                                    <div id="hBig1" className="screenshot_showcase_screenshot resizable-awsc"
                                         style={{height: 506}}>
                                        <div id="big1" className="imageHolder">
                                            <div className="imageGrabber"/>
                                        </div>
                                    </div>
                                    <div className="screenshot_showcase_itemname"
                                         style={{color: '#5491cf', fontWeight: 'bold'}}>
                                        <span>| Drag bottom of image to resize<span className="fa fa-arrow-up"
                                                                                    style={{fontSize: 10}}/></span>
                                    </div>
                                </div>
                                <div id="r11r" className="screenshot_showcase_rightcol r1">
                                    <div className="screenshot_showcase_smallscreenshot showcase_slot r1"
                                         style={{height: 82,}}>
                                        <div className="screenshot_showcase_screenshot">
                                            <div id="r11" className="r1"/>
                                        </div>
                                    </div>
                                    <div id="r12r"
                                         className="screenshot_showcase_smallscreenshot showcase_slot hidelong1 rightimages"
                                         style={{height: 82}}>
                                        <div className="screenshot_showcase_screenshot">
                                            <div id="r12" className="rightimages"/>
                                        </div>
                                    </div>
                                    <div id="r13r"
                                         className="screenshot_showcase_smallscreenshot showcase_slot hidelong1 rightimages"
                                         style={{height: 82}}>
                                        <div className="screenshot_showcase_screenshot">
                                            <div id="r13" className="rightimages"/>
                                        </div>
                                    </div>
                                    <a href="https://steamcommunity.com/id/ailmaiilma_/images/"
                                       className="screenshot_showcase_smallscreenshot screenshot_count artwork_ammount_1 hidelong1"
                                       style={{display: 'none', position: 'relative', top: 2}}>
                                        <div className="screenshot_showcase_screenshot artwork_ammount_1 hidelong1">| +
                                            8
                                        </div>
                                    </a>
                                </div>
                                <Clear />
                            </div>
                        </div>
                    </div>
                    <div id="sssc" className="profile_customization showcase_2 hidden">
                        <input type="text" id="SSSC_Location" className="locationvar hidden" value="2"/>
                        <div className="profile_customization_header">
                            | Screenshot Showcase
                        </div>
                        <div className="profile_customization_block">
                            <div className="screenshot_showcase" style={{display: "flow-root"}}>
                                <div className="screenshot_showcase_primary showcase_slot">
                                    <div id="hBig2" className="screenshot_showcase_screenshot resizable-sssc"
                                         style={{height: 284}}>
                                        <div id="big2"/>
                                    </div>
                                    <div className="screenshot_showcase_itemname">| Mabinogi</div>
                                </div>
                                <div className="screenshot_showcase_rightcol r2">
                                    <div className="screenshot_showcase_smallscreenshot showcase_slot r2"
                                         style={{height: 82,}}>
                                        <div className="screenshot_showcase_screenshot"
                                             onClick={() => ShowModalContent('https://steamcommunity.com/sharedfiles/filedetails/?id=299605809&insideModal=1', 'https://steamcommunity.com/sharedfiles/filedetails/?id=299605809', 'https://steamcommunity.com/sharedfiles/filedetails/?id=299605809', true)}>
                                            <div id="r21" className="r2"/>
                                        </div>
                                    </div>
                                    <div className="screenshot_showcase_smallscreenshot showcase_slot hidelong2"
                                         style={{height: 82}}>
                                        <div className="screenshot_showcase_screenshot"
                                             onClick={() => ShowModalContent('https://steamcommunity.com/sharedfiles/filedetails/?id=299605824&insideModal=1', 'https://steamcommunity.com/sharedfiles/filedetails/?id=299605824', 'https://steamcommunity.com/sharedfiles/filedetails/?id=299605824', true)}>
                                            <div id="r22" className="rightimages"/>
                                        </div>
                                    </div>
                                    <div className="screenshot_showcase_smallscreenshot showcase_slot hidelong2"
                                         style={{height: 82}}>
                                        <div className="screenshot_showcase_screenshot"
                                             onClick={() => ShowModalContent('https://steamcommunity.com/sharedfiles/filedetails/?id=299605839&insideModal=1', 'https://steamcommunity.com/sharedfiles/filedetails/?id=299605839', 'https://steamcommunity.com/sharedfiles/filedetails/?id=299605839', true)}>
                                            <div id="r23" className="rightimages"/>
                                        </div>
                                    </div>
                                    <a href="https://steamcommunity.com/id/wolfenstian/screenshots/"
                                       className="screenshot_showcase_smallscreenshot screenshot_count artwork_ammount_2 hidelong2">
                                        <div className="screenshot_showcase_screenshot artwork_ammount_2 hidelong2">| +
                                            685
                                        </div>
                                    </a>
                                </div>
                                <Clear />
                            </div>
                        </div>
                    </div>
                    <div id="ws" className="profile_customization showcase_3 hidden">
                        <input type="text" id="WSSC_Location" className="locationvar hidden" value="3"/>
                        <div className="profile_customization_header">| Workshop Showcase</div>
                        <div className="myworkshop_showcase_header"/>
                        <div className="profile_customization_block">
                            <div className="myworkshop_showcase">
                                <div className="workshop_showcase_mutiitem_ctn">
                                    <div className="workshop_showcase_multiitem showcase_slot">
                                        <div id="w1" style={{height: 119}}/>
                                    </div>
                                </div>
                                <div className="workshop_showcase_mutiitem_ctn">
                                    <div className="workshop_showcase_multiitem showcase_slot">
                                        <div id="w2" style={{height: 119}}/>
                                    </div>
                                </div>
                                <div className="workshop_showcase_mutiitem_ctn">
                                    <div className="workshop_showcase_multiitem showcase_slot">
                                        <div id="w3" style={{height: 119}}/>
                                    </div>
                                </div>
                                <div className="workshop_showcase_mutiitem_ctn">
                                    <div className="workshop_showcase_multiitem showcase_slot">
                                        <div id="w4" style={{height: 119}}/>
                                    </div>
                                </div>
                                <div className="workshop_showcase_mutiitem_ctn">
                                    <div className="workshop_showcase_multiitem showcase_slot">
                                        <div id="w5" style={{height: 119}}/>
                                    </div>
                                </div>
                                <Clear where='left' />
                                <div className="showcase_stats_row showcase_content_bg" style={{height: 70}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile_rightcol">
                <div className="rColAds" id="nn_mpu1"/>
                <div className="underfr" width='268'/>
            </div>

            <div id="nn_lb2"/>
        </div>
    </div>
})``

export {ProfileContent}