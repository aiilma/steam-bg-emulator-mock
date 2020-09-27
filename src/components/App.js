import React from 'react';
import {
    FullWidthBg, ProfileContent, ProfileContentInner,
    ProfileCountLink,
    ProfileCustomization, ProfileCustomizationBlock, ProfileCustomizationHeader,
    ProfileLeftCol,
    ProfileLinks,
    ProfileRightCol, ScreenshotShowcase
} from "./ui/profilev2";
import styled from 'styled-components'

const Wrapper = styled.div`
    font-family: Arial, Helvetica, Verdana, sans-serif;
`

function App() {

    return (<Wrapper>
            <FullWidthBg>


                <ProfileRightCol>
                    <ProfileLinks>
                        <ProfileCountLink label={`Guides`} count={1}/>
                        <ProfileCountLink label={`Artwork`} count={33}/>
                    </ProfileLinks>
                </ProfileRightCol>

                <ProfileLeftCol>
                    <ProfileCustomization>

                        <ProfileCustomizationHeader caption={`Artwork Showcase`}/>
                        <ProfileCustomizationBlock>


                            <ProfileContent>
                                <ProfileContentInner>
                                    <ScreenshotShowcase/>
                                </ProfileContentInner>
                            </ProfileContent>


                        </ProfileCustomizationBlock>

                    </ProfileCustomization>
                </ProfileLeftCol>

                <div style={{clear: 'both'}}/>

            </FullWidthBg>
        </Wrapper>
    );
}

export default App;
