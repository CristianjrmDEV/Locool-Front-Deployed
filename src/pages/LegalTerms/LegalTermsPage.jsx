import React from 'react'
import './LegalTermsPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { Box, Typography } from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'

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
        <PageHeadingComponent text="Intellectual and industrial property" />
        The website design, source code, logos, brands and any other distinctive
        signs that appear in it, belong to JAVIER GARCIA GAMEZ, VÍCTOR CARMONA
        OJEDA y CRISTIAN JAVIER RIVERO MARTÍN and are accordingly protected by
        their intellectual and industrial rights. In the same way, all the
        projects, graphics, photos, images and designs have been fully or
        partially created by Javier Garcia Gamez, Víctor Carmona Ojeda y
        Cristian Javier Rivero Martín who reserve the intellectual, industrial
        and commercial exploitation rights, if that was possible.
        <PageHeadingComponent text="Content responsibility" />
        The owner of this website is not responsible about legality of third
        party websites accessible from this website. In the same way, the holder
        of this website is not responsible about legality of party websites
        which link towards this website. The owner of this website reserves the
        right to make changes in this website without any notice, with the
        objective of updating information, adding, modifying, correcting or
        eliminating published content as well as the design of the website
        itself. The owner of this website will not be responsible for the use
        that third parties can do with the information published on this
        website, any damage or economic loss that, directly or indirectly, can
        occur from its use as well as any economic, material or data harm caused
        by it.
      </Box>
    </Box>
  )
}

export default LegalTermsPage