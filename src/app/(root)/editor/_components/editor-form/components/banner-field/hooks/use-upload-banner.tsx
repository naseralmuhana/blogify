"use client"

import { useState } from "react"

import { useEdgeStore } from "@/lib/edgestore/client"
import { useEditorStore } from "@/app/(root)/editor/_store"

interface useUploadBannerProps {
  onChange: (...event: any[]) => void
}

export const useUploadBanner = ({ onChange }: useUploadBannerProps) => {
  const [file, setFile] = useState<File>()
  const [progress, setProgress] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const { edgestore } = useEdgeStore()

  const { bannerUrl } = useEditorStore((state) => state.blog)
  const setBlog = useEditorStore((state) => state.setBlog)

  const handleUploadBanner = async (file?: File) => {
    // Will handle the replace too
    setFile(file)
    if (file) {
      setDisabled(true)

      const res = await edgestore.publicImages.upload({
        file,
        options: { temporary: true, replaceTargetUrl: bannerUrl },
        input: { type: "blog-banner" },
        onProgressChange: (progress) => {
          setProgress(progress)
        },
      })

      onChange(res.url) // for the form validation
      setBlog({ bannerUrl: res.url }) // for replacing or removing
      setDisabled(false)
    }
  }

  return { handleUploadBanner, file, progress, disabled, bannerUrl }
}
