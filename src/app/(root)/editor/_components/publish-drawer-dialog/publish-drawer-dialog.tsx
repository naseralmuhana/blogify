"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { useEditorStore } from "../../_store"
import { PublishDialog } from "./components/publish-dialog"
import { PublishDrawer } from "./components/publish-drawer"

export const PublishDrawerDialog = () => {
  const isPublishDialogOpen = useEditorStore(
    (state) => state.isPublishDialogOpen,
  )
  const setIsPublishDialogOpen = useEditorStore(
    (state) => state.setIsPublishDialogOpen,
  )

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const handleOpenChange = (isOpen: boolean) => {
    setIsPublishDialogOpen(isOpen)
  }

  if (isDesktop) {
    return (
      <PublishDialog
        isOpen={isPublishDialogOpen}
        onOpenChange={handleOpenChange}
      />
    )
  }

  return (
    <PublishDrawer
      isOpen={isPublishDialogOpen}
      onOpenChange={handleOpenChange}
    />
  )
}
