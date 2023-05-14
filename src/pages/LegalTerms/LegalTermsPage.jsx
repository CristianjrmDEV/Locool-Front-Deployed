import React from 'react'
import './LegalTermsPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  darken,
} from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'
import CopyrightComponent from '../../components/Copyright/CopyrightComponent'
import { Link } from 'react-router-dom'
import { mainTheme } from '../../themes/mainTheme'
import { Accordion } from 'react-bootstrap'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const LegalTermsPage = () => {
  return (
    <Box>
      <Box
        width={'80%'}
        sx={{ m: '10px auto 50px auto' }}
      >
        <PageTitleComponent title={'Legal terms'} />
        <PageHeadingComponent text="Legal notice" />
        This website is owned by Locool, SL with address at Parque Santa
        Catalina Las Palmas de Gran Canaria, for communication purposes.
        <Link to="/app/legal-cookies">
          <PageHeadingComponent
            text="Cookies policy"
            colour="green"
          />
        </Link>
        <Link to="/app/legal-privacy">
          <PageHeadingComponent
            text="Privacy policy"
            colour="green"
          />
        </Link>
        <PageHeadingComponent text="Intellectual and industrial property" />
        The website design, source code, logos, brands and any other distinctive
        signs that appear in it, belong to Javier Garcia Gamez, Víctor Carmona
        Ojeda y Cristian Javier Rivero Martín and are accordingly protected by
        their intellectual and industrial rights. In the same way, all the
        projects, graphics, photos, images and designs have been fully or
        partially created by Javier Garcia Gamez, Víctor Carmona Ojeda y
        Cristian Javier Rivero Martín who reserve the intellectual, industrial
        and commercial exploitation rights, if that was possible.
        <CopyrightComponent />
      </Box>
    </Box>
  )
}

export default LegalTermsPage
