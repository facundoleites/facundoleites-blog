import React from 'react';
export const ThemeContext = React.createContext(
    {
        theme:'Dark',
        setTheme:()=>{}
    }
);