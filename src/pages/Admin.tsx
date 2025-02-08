import React from 'react'
import Section from '../components/Section';
import Grid2 from '@mui/material/Grid2';
import * as contentList from '../data/admin_content_v1.json';
import '../App.css'

const AdminHomePage = () => {

  return (
    <Grid2>
      <Section headerText={contentList.sections[0]}>
      </Section>
    </Grid2>
  )
}

export default AdminHomePage
