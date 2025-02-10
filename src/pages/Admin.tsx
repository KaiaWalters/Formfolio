import React from 'react'
import Section from '../components/Section';
import Grid2 from '@mui/material/Grid2';
import CardContainer from '../components/Card';
import * as contentList from '../data/home_content_v1.json';

const AdminHomePage = () => {
    return (
        <Grid2> 
          <Grid2>
            <Section headerText={contentList.sections[0]}>
              <p>What is my story?</p>
            </Section>
    
            <Section headerText={contentList.sections[1]}>
              <CardContainer projectList={contentList.projects}/>
            </Section>
    
            <Section headerText={contentList.sections[2]}>
              <p>This is the third section.</p>
            </Section>
          </Grid2>
        </Grid2>
      )
}


export default AdminHomePage