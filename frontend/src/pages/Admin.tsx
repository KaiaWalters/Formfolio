import React from 'react'
import Section from '../components/Section';
import Grid2 from '@mui/material/Grid2';
import CardForm from '../components/Form'
import * as contentList from '../data/home_content_v1.json';

const AdminHomePage = () => {
    return (
        <Grid2> 
          <Grid2>
            <Section headerText={contentList.sections[0]}>
              <p>Welcome to the admin page! Here you are able to update the content of the Home page using the form below. Enjoy!</p>
            </Section>
            <Section headerText={contentList.sections[1]}>
              <CardForm/>
            </Section>
          </Grid2>
        </Grid2>
      )
}

export default AdminHomePage