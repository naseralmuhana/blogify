"use client"

import { Dispatch, SetStateAction, useCallback, useState } from "react"

// Return type for the useToggle hook.
interface useToggleReturn {
  value: boolean
  toggle: () => void
  setValue: Dispatch<SetStateAction<boolean>>
  setFalse: () => void
  setTrue: () => void
}

// Custom React hook for managing a boolean toggle state.
export const useToggle = (defaultValue?: boolean): useToggleReturn => {
  // State for the toggle value
  const [value, setValue] = useState(!!defaultValue)

  // Toggle function to switch between true and false
  const toggle = useCallback(() => setValue((x) => !x), [])

  // Set the toggle value to false
  const setFalse = useCallback(() => setValue(false), [])

  // Set the toggle value to true
  const setTrue = useCallback(() => setValue(false), [])

  // Return an object with the toggle state and functions to manipulate it
  return { value, toggle, setValue, setFalse, setTrue }
}
