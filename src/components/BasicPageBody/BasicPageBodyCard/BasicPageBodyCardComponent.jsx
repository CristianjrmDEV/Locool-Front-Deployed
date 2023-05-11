import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faTractor, faLeaf, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Box} from '@mui/material';
import { useTheme } from '@emotion/react';
useTheme
function BasicPageBodyCardComponent() {
    const icons = [faLocationDot, faTractor, faUser, faLeaf]
    const texts = ["Search for products and farms close to you!", "Discover local farms and start buying locally!", "Connect with a local population excited to support their farmers!", "Help making a positive difference in the environment"]
    return (
      <>
        {[0, 1, 2, 3].map((value, idx) => (
          <Grid
            key={idx}
            item
            xs={10}
            md={6}
          >
            <Card
              item
              sx={{ minWidth: 250 }}
            >
              <CardActionArea>
                <CardContent>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                  >
                    <Grid item>
 
                        <FontAwesomeIcon
                          icon={icons[value]}
                          fontSize={96}
                          
                        />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                    >
                      <Typography
                        sx={{ fontSize: '1.5rem', textAlign: 'center', color: 'primary.main' }}
                        variant="body2"
                      >
                        {texts[value]}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </>
    )
}

export default BasicPageBodyCardComponent