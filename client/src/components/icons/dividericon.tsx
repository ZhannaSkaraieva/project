import { SvgIcon } from '@mui/material';

export default function DividerIcon () {
    return (
      <SvgIcon sx={{
                  strokeWidth: '1px',
                  stroke:'rgba(255, 255, 255, 0.32)',
                  opacity: '0.54',
                  height: '40px',
                  flexShrink: '0',
                  }}
                  xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                  <path opacity="0.54" d="M1 0V40" stroke="white" stroke-opacity="0.32"/>
      </SvgIcon>
    );
}