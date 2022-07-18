import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/mypage">
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="마이페이지" />
    </ListItemButton>

    <ListItemButton href="/revise">
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="정보수정" />
    </ListItemButton>

    <ListItemButton href="/rent">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="임차현황" />
    </ListItemButton>

    <ListItemButton href="/borrow">
      <ListItemIcon>
      <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="임대현황" />
    </ListItemButton>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      ????
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="aaa" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="aaa" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="aaa" />
    </ListItemButton> */}
  </React.Fragment>
);
