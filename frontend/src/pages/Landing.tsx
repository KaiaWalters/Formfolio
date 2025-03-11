import React from 'react'
import {Box} from '@mui/material'
import CustomButton from '../components/Button'
import Section from '../components/Section'
import * as landingContent from '../data/landing_content_v1.json'

const LandingPage = () => {

    return (
        <Box alignContent={'center'}>
            <Section headerText={landingContent.sections[0]}>
                <CustomButton title={'Learn More'} to={'/home'}/>
            </Section>
                {
                    landingContent.social.map((social, index) => {
                        const {icon, link} = social
                        return (
                            <a key={index} href={link}>{icon}</a>
                        );
                    })
                }
        </Box>
    )
}

export default LandingPage