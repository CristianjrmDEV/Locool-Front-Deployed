import React from 'react'
import './LegalPrivacyPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { Box, Typography } from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'

const LegalPrivacyPage = () => {
  return (
    <Box>
      <Box
        width={'80%'}
        sx={{ m: '10px auto 50px auto' }}
      >
        <PageTitleComponent title={'Privacy policy'} />
        Privacy policy This website does collect personal data from users
        without their consent, nor give it to third parties. This website does
        not use cookies at all, collect data from users nor register IP address
        from accessing the site. This website contains links to external
        websites with private policies that are unrelated to this website. You
        can decide whether you accept them or not when you access those
        websites. In general, if you browse on the Internet, you can accept or
        reject third party cookies from your browser settings.
        <PageHeadingComponent text="Data Controler" />
        Personal data that could be collected will be treat it confidentially
        and can be modified or eliminated by contacting via email at
        locool@locool.com.
        <PageHeadingComponent text="Purpose" />
        The purpose of collecting data, if that happened, would be to assure
        communication client/provider with the sole purpose of performing a
        particular job.
        <PageHeadingComponent text="Data retention" />
        Any given personal data will be preserved during the necessary time in
        order to fulfill the need for which it was collected and to determine
        possible responsibilities caused by its purpose and from the periods of
        time established by the regulation.
        <PageHeadingComponent text="Data communication" />
        In general, personal data will not be communicated to third parties.
        <PageHeadingComponent text="Rights of concerned individuals" />
        Any person has the right to get information about how their personal
        data is treated in this website. Should you wish to exercise your rights
        of access, rectification, cancellation and objection in relation to your
        personal data processed by this website, if that happened, you may
        contact by writing to Parque Santa Catalina Las Palmas de Gran Canaria
        or via email at locool@locool.com
      </Box>
    </Box>
  )
}

export default LegalPrivacyPage