import React from 'react'
import {Button} from '@mui/material'
import {Box} from '@mui/material'
import Section from '../components/Section'
import * as landingContent from '../data/landing_content_v1.json'

const LandingPage = () => {
    return (
        <Box alignContent={'center'}>
            <Section headerText={landingContent.sections[0]}>
                <Button href={`/home`}>
                    Learn More
                </Button>
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