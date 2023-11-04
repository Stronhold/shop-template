'use client';
import { Box, useTheme } from "@mui/material";

const MAX_WIDTH = 1000;

interface Props {
  children: React.ReactNode;
};
export const Content = ({ children }: Props) => {
  const currentTheme = useTheme();
  return (
    <Box component={'main'} sx={{
      maxWidth: MAX_WIDTH,
      marginTop: 2,
      marginX: 1,
      [currentTheme.breakpoints.up('lg')]: {
        marginX: 'auto'
      }
    }}
    >
      {children}
    </Box>
  );
}
