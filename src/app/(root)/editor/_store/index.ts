import { create } from "zustand"

type BlogType = {
  title?: string
  bannerUrl?: string
  content?: string
  tags?: string[]
  description?: string
}
type State = {
  blog: BlogType
  isPublishDialogOpen: boolean
}

type Action = {
  setBlog: (blog: BlogType) => void
  setIsPublishDialogOpen: (open: boolean) => void
  reset: () => void
}

const initialState: State = {
  blog: {
    bannerUrl: "",
    title: "",
    content: "",
    description: "",
    tags: [],
  },
  isPublishDialogOpen: false,
}

export const useEditorStore = create<State & Action>((set) => ({
  ...initialState,
  setBlog: (blog) => set((state) => ({ blog: { ...state.blog, ...blog } })),
  setIsPublishDialogOpen: (open) => set(() => ({ isPublishDialogOpen: open })),
  reset: () => {
    set(initialState)
  },
}))
