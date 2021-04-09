import React, {createContext, useState} from 'react';

export const LanguageContext = createContext({});

function LanguageContextProvider({children}) {
    const [language, toggleLanguage] = useState('nl')

    function setNl() {
        toggleLanguage('nl')
    }

    function setES() {
        toggleLanguage('es')
    }

    const data = {
        activeLanguage: language,
        setNlFunction: setNl,
        setESFunction: setES,
    }
        return (
            <LanguageContext.Provider value={data}>
                {children}
            </LanguageContext.Provider>

        )
}
export default LanguageContextProvider