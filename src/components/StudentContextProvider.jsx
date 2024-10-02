import { React, createContext, useState } from 'react'

const StudentContext = createContext()

function StudentContextProvider (data) {

    const [Student, setStudent] = useState([
        { id: 1, name: "Kumar", fav: false },
        { id: 2, name: "David", fav: false },
        { id: 3, name: "Velu", fav: false },
        { id: 4, name: "Akbar", fav: false },
        { id: 5, name: "Hendry", fav: false },
        
    
        
    ])

    return (
        <StudentContext.Provider value={{ Student, setStudent }}>
            {data.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;
export { StudentContext };