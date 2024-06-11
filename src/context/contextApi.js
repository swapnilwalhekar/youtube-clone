import React, { createContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState(false)
    const [selectCategories, setSelectCategories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [])


    const fetchSelectedCategoryData = (query) => {
        setLoading(true)

        fetchDataFromApi(`search/?q=${query}`).then((response) => {
            console.log("response", response)
            setLoading(false)
        })
    }

    return (
        <Context.Provider value={{ loading, setLoading, searchResults, selectCategories, setSelectCategories, mobileMenu, setMobileMenu }}>
            {props.children}
        </Context.Provider>
    )
}
