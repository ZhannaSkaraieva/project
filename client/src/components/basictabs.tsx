import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import DividerIcon from './icons/dividericon';
import AllIcon from './icons/allicon';
import AdventuresIcon from './icons/adventuresicon';
import HorrorIcon from './icons/horroricon';
import MysteryIcon from './icons/mysteryicon';
import DetectiveIcon from './icons/detectiveicon';
import ScifiIcon from './icons/scifiicon';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1029px',
        height: '40px',
        ml: '137px',
        mt: '48px',
        boxSizing: 'border-box',
       
      }}>
      <Box
        sx={{
          
        }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" 
          sx={{
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <AllIcon />      
          <Tab label="All quests" {...a11yProps(0)}
            sx={{
              color: 'var(--Base-text-White, #E5E5E5)',
              fontFamily: 'Raleway,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '140%', /* 19.6px */
              letterSpacing: '-0.28px',
              height: '20px',
            }} />
          <DividerIcon />

          <AdventuresIcon/>
          <Tab label="Adventures" {...a11yProps(1)}
            sx={{
              color: 'var(--Base-text-White, #E5E5E5)',
              fontFamily: 'Raleway,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '140%', /* 19.6px */
              letterSpacing: '-0.28px',
              height: '20px',
            }} />
          <DividerIcon />
          
          <HorrorIcon />
          <Tab label="Horror" {...a11yProps(2)}
            sx={{
              color: 'var(--Base-text-White, #E5E5E5)',
              fontFamily: 'Raleway,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '140%', /* 19.6px */
              letterSpacing: '-0.28px',
              height: '20px',
            }} />
          <DividerIcon />
          
          <MysteryIcon />
          <Tab label="Mystery" {...a11yProps(3)}
            sx={{
              color: 'var(--Base-text-White, #E5E5E5)',
              fontFamily: 'Raleway,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '140%', /* 19.6px */
              letterSpacing: '-0.28px',
              height: '20px',
            }} />
          <DividerIcon />
          
          <DetectiveIcon />
          <Tab label="Detective" {...a11yProps(4)}
            sx={{
              color: 'var(--Base-text-White, #E5E5E5)',
              fontFamily: 'Raleway,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '140%', /* 19.6px */
              letterSpacing: '-0.28px',
              height: '20px',
            }} />
          <DividerIcon />
          
          <ScifiIcon />
          <Tab label="Sci-Fi" {...a11yProps(5)}
            sx={{
              color: 'var(--Base-text-White, #E5E5E5)',
              fontFamily: 'Raleway,sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '140%', /* 19.6px */
              letterSpacing: '-0.28px',
              height: '20px',
            }} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
