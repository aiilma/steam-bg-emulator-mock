import React from "react";
import styled from "styled-components";
import {Ellipsis, Link} from "./globalv2";
import primaryImage from './../../assets/saved_resource'
import secondaryImage from './../../assets/saved_resource(1)'
import iconRate from './../../assets/icon_rate.png'
import iconBtnComment from './../../assets/icon_btn_comment.png'

const ProfilePage = styled.div`
    position: relative;
    min-width: 950px;
    
    background-image: url(https://steamcommunity-a.akamaihd.net/public/images/profile/2020/bg_dots.png);
    background-position: center top;
    background-repeat: no-repeat;
    background-color: #000000;
`

const HasProfileBg = styled(ProfilePage)`
    background-image: none;
    background-color: #000000;
    background-position: center top;
    background-repeat: no-repeat;
    
    @media (max-width: 1920px) {
        background-size: auto;
    }
    
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
        background-position: 49.999% 0;    
    }
`

const FullWidthBg = styled(HasProfileBg)`
    background-size: 100%;
`


const ProfileRightCol = styled.div`
    background-color: #101214;
    background-color: rgba( 0, 0, 0, 0.3 );
    backdrop-filter: blur(20px);
    padding: 10px;
    border-radius: 0px;
    width: 268px;
    float: right;
`

const ProfileCustomization = styled.div`
    position: relative;
    background-position: top left;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    border-radius: 0px;
    padding: 0px 0px 0px 0px;
    margin-bottom: 12px;
    font-size: 13px;
    overflow: hidden;
`

const ProfileCustomizationHeader = styled(({caption, ...props}) => <div {...props}>{caption}</div>)`
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200;
    background: linear-gradient(90deg, rgba(155, 122, 54, 0.9) 0%, rgba(95, 72, 33, 0.82) 90%);
    padding: 5px 10px 5px 10px;
    color: #ffffff;
    font-size: 16px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
const ProfileCustomizationBlock = styled.div`
    position: relative;
    border-radius: 5px;
    padding: 15px 10px 11px 10px;
    margin-bottom: 0px;
    font-size: 13px;
    overflow: hidden;
`

const ProfileContent = styled((props) => <HasProfileBg {...props}>{props.children}</HasProfileBg>)`
    position: relative;
    background: radial-gradient( farthest-side at top right, rgba(156, 66, 17, 0.18), transparent 500px ), radial-gradient( farthest-corner at top left, rgba(213, 172, 81, 0.62), transparent 600px ), radial-gradient( farthest-corner at bottom right, rgba(0, 0, 0, 0), transparent 500px ), radial-gradient( farthest-corner at bottom left, rgba(243, 200, 9, 0.13), transparent 600px );
    background-color: rgba(61, 47, 20, 0.6);
    background-repeat: no-repeat;
    padding: 12px 12px 64px 12px;
    width: 952px;
    margin: 0 auto;
    font-size: 13px;
`

const ProfileContentInner = styled.div`
    position: relative;
`


// SHOWCASE START

const ScreenshotShowcase = styled((props) => {
    return <div {...props}>
        <ScPrimary>
            <Sc img={primaryImage} imgStyle={{maxWidth: 506}}/>
            <ScDesc inner={`🌸𝐋𝐢𝐟𝐞 𝐢𝐬 𝐫𝐚𝐢𝐧𝐲 𝐰𝐞𝐚𝐭𝐡𝐞𝐫🌸`}/>
            <ScStats/>
        </ScPrimary>

        <ScRightCol>
            <SmallSc>
                <Sc img={secondaryImage} imgStyle={{maxWidth: 100}}/>
            </SmallSc>
            <ScCount/>
        </ScRightCol>
        <div style={{clear: 'both'}}/>
    </div>
})`
`

const ScSlot = styled.div`
    display: block;
    float: left;
    position: relative;
`

const ScPrimary = styled(ScSlot)`
    width: 508px;
    max-width: calc( 83% - 7px );
    float: left;
    margin-right: 7px;
`
const ScDesc = styled(({inner, ...props}) => <div {...props}>{inner}</div>)`
`
const ScStats = styled(({...props}) => {
    return <div {...props}>
        <ScStatItem icon={iconRate} count={270}/>
        <ScStatItem icon={iconBtnComment} count={124}/>
    </div>
})`
line-height: 24px;
`
const ScStatItem = styled(({icon, count, ...props}) => {
    return <span {...props}>
        <img src={icon} alt={`Stats icon`}/>{count}
    </span>
})`
    margin-right: 12px;
    cursor: default;
    & > img {
        vertical-align: text-bottom;
    }
`
const ScRightCol = styled.div`
    overflow: hidden;
    max-width: 17%;
    width: 102px;
    text-align: center;
`
const SmallSc = styled(ScSlot)`
    float: none;
    margin-bottom: 11px;
`
const ScCount = styled.div`
    display: block;
    height: 57px;
    line-height: 57px;
    background-color: #222223;
    color: #ffffff;
`

const Sc = styled(({img, imgStyle, ...props}) => {
    return <div {...props}>
        <img width="100%" style={imgStyle} src={img} alt={`Showcase`}/>
    </div>
})`
    cursor: pointer;
    border: 1px solid #000000;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    
    ${ScPrimary} & {
        margin-bottom: 4px;
    }
    
    &:hover {
        border: 1px solid #97C0E3;
    }
`

// SHOWCASE END


const ProfileLeftCol = styled.div`
    width: 652px;
    float: left;
`


const ProfileLinks = styled.div`
    margin-bottom: 40px;
`

const CountLinkLabel = styled(({label, ...props}) => {
    return <span {...props}>{label}</span>
})`
`
const ProfileCountLinkTotal = styled(({count, ...props}) => {
    return <span {...props}>{count}</span>
})`
    font-family: "Motiva Sans", Sans-serif;
    font-weight: 200;
    color: #9b9b9b;
    font-size: 24px;
`

const ProfileCountLink = styled(({label, count, ...props}) => {
    return <Ellipsis {...props}>
        <Link>
            <CountLinkLabel label={label}/>&nbsp;
            <ProfileCountLinkTotal count={count}/>
        </Link>
    </Ellipsis>
})`
    font-size: 14px;
    margin-bottom: 4px;
    min-height: 29px;
    
    & a:hover ${CountLinkLabel} {
        text-decoration: underline;
    }
`

export {
    FullWidthBg, ProfileLinks, ProfileCountLink, ProfileRightCol, ProfileContent, ProfileContentInner,
    ProfileLeftCol, ProfileCustomization, ProfileCustomizationHeader, ProfileCustomizationBlock, ScreenshotShowcase,
}