import { Dispatch, SetStateAction } from "react";

export interface modeProps {
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
}