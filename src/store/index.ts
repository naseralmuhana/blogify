import { create } from "zustand"

type State = {
  isLoading: boolean
}

type Action = {
  setIsLoading: (isLoading: boolean) => void
}

const initialState: State = {
  isLoading: false,
}

export const useGlobalStore = create<State & Action>((set) => ({
  ...initialState,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
}))
