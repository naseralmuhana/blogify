"use client"

import { useState } from "react"

import { useEdgeStore } from "@/lib/edgestore/client"
import { useEditorStore } from "@/app/(root)/editor/_store"

interface useRemoveBannerProps {
  onChange: (...event: any[]) => void
}

export const useRemoveBanner = ({ onChange }: useRemoveBannerProps) => {
  const [disabled, setDisabled] = useState(false)

  const { edgestore } = useEdgeStore()

  const { bannerUrl } = useEditorStore((state) => state.blog)
  const setBlog = useEditorStore((state) => state.setBlog)

  const handleRemoveBanner = async () => {
    if (bannerUrl) {
      onChange("") // for the form validation
      setDisabled(true)

      await edgestore.publicImages.delete({ url: bannerUrl }) // remove the banner form edgestore

      setBlog({ bannerUrl: "" }) // reset the banner
      setDisabled(false)
    }
  }
  return { handleRemoveBanner, disabled }
}
