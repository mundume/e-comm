import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    
    imgPath:
      'https://ke.jumia.is/cms/2022/W17/HP/Revised/KE_Influencers_Collections_0422_SB.jpg',
  },
  {
    
    imgPath:
      'https://ke.jumia.is/cms/2022/W17/HP/Default/Banners/_DB1-copy-6.jpg',
  },
  {
   
    imgPath:
      'https://ke.jumia.is/cms/2022/W17/HP/Default/HypeDeals/_DB1-copy.jpg',
  },
  {
    
    imgPath:
      'https://ke.jumia.is/cms/2022/W17/HP/Default/Banners/_DB1-copy-13.jpg',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width:'100%', flexGrow: 1 , margin:"0" ,bgcolor:'lightblue'}}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 125,
                  display: 'block',
                  bgcolor:'lightblue',
                  
                  overflow: 'none',
                  width: '100%',
                }}
                src={step.imgPath}
                alt="dfffff"
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
     
          
      
    </Box>
  );
}

export default Carousel;
