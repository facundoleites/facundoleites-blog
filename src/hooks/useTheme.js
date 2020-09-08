import { useContext } from "react"
import { ThemeContext } from "../context/Theme/Context"

export const useTheme = () => {
    const themes = useContext(ThemeContext);
    console.log({themes});
    return themes;
}