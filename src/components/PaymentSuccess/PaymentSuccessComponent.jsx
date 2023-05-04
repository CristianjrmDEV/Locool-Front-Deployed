import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const PaymentSuccessComponent = () => {
    return (
        <Card sx={{border:'none', boxShadow:'none', maxWidth: 477, margin: '0 auto', padding: '1em'}} >
          <CardContent >
            
            <Card sx={{ backgroundColor: 'secondary.main', padding: '1em', }}>
                <Typography sx={{display:'flex', flexDirection: 'column', alignItems: "center", textAlign: 'center', color: 'primary.main', fontSize: 28 }} color="text.secondary" gutterBottom>
                    <VerifiedUserIcon sx={{color: 'green.main', width: 48, height: 59,}}/>  
                Your payment went through successfully!
                </Typography>
                <Typography sx={{textAlign: 'center', color: 'primary.main', fontSize: 28}} component="div">
                Thank you for your order
                </Typography>
            </Card>
            <Card sx={{padding: '0.5em', border:'none', boxShadow:'none',}}>
                <Typography sx={{textAlign: 'center', fontSize: '18px', mb: 1.5 }} color="text.secondary">
                You will be redirected to the home page soon. 
                </Typography>
                <Typography sx={{textAlign: 'center', fontSize: '18px', mb: 1.5 }} color="text.secondary">
                If it does not happen, please  
                    <Button  sx={{fontSize: '18px', textTransform: 'lowercase', paddingBottom: 1.3}} color='red' to="/" component={Link}>
                    click here.
                    </Button>
                
                </Typography>
            </Card>

            
          </CardContent>
        </Card>
      );
}

export default PaymentSuccessComponent
