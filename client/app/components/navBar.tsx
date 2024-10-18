'use client'
import HomeIcon from '@mui/icons-material/Home'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import * as React from 'react'
import { Avatar } from '@mui/material';


export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          style={{backgroundColor: "#242424", color: "#fff"}}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction sx={{ color: "#fff", opacity: 0.5, ":active": { opacity: 1}}} label="Главная" icon={<HomeIcon sx={{fill: "#fff"}}/>}  />
          <BottomNavigationAction sx={{color: "#fff", opacity: 0.5}} label="Настройки" icon={<SettingsIcon sx={{fill: "#fff"}} />} />
          <BottomNavigationAction sx={{color: "#fff", opacity: 0.5}} label="Профиль" icon={<AccountCircleIcon sx={{fill: "#fff"}} />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
