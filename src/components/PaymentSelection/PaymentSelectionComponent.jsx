import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaymentSelectionComponent = () => {
  return (
    <Card sx={{ border: 'none', boxShadow: 'none', maxWidth: 477, margin: '0 auto', padding: '1em' }} >
      <CardHeader title="Choose payment method" sx={{ color: 'red.main', fontSize: '48px' }} titleTypographyProps={{ variant: 'h5', fontFamily: 'dosis', marginBottom: '14px' }} />
      <CardContent>

          <Button sx={{backgroundColor: 'secondary.main', width: '100%', textTransform: 'capitalize', justifyContent: "flex-start", marginBottom: '20px'}}>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            <FontAwesomeIcon icon={faCcPaypal} color='#253b80'/>

              Paypal
            </Typography>

          </Button>
          <PayPalScriptProvider options={{'client-id': "sb-xryib25894968@business.example.com"}}>
            <PayPalButtons/>
          </PayPalScriptProvider>
          <Button sx={{backgroundColor: 'secondary.main', width: '100%', textTransform: 'capitalize', justifyContent: "flex-start"}}>
            <Typography sx={{color: 'primary.main', fontSize: 18, textAlign:'left'}} color="text.secondary" gutterBottom>
              <FontAwesomeIcon icon={faCcVisa} color='#192061' />
              <FontAwesomeIcon icon={faCcMastercard} color="#FF5F00"/>
              Debit or credit card
            </Typography>
          </Button>
          <Button
          color="white"
          sx={{ height: '39.41px', margin:'0 auto', maxWidth: '100%', margin: '26px 0 0 0', borderRadius:'6px', backgroundColor: 'green.main', width: '100%', fontSize: '14px', textTransform: 'capitalize', fontWeight: 'bold',':hover': {
            bgcolor: 'primary.main', // theme.palette.primary.main
            color: 'white',
          }, }}
        >
          Pay
        </Button>
      </CardContent>
    </Card>
  );
}

export default PaymentSelectionComponent
