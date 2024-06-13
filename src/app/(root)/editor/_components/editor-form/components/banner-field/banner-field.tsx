"use client"

import { ControllerRenderProps } from "react-hook-form"

import type { EditorFieldsType } from "../../editor-form"

import { useUploadBanner } from "./hooks/use-upload-banner"
import { useRemoveBanner } from "./hooks/use-remove-banner"
import { FormItemWrapper } from "@/components/shared/form-item-wrapper"
import { SingleImageDropzone } from "@/components/shared/single-image-dropzone"
import { Progress } from "@/components/ui/progress"

interface BannerFieldProps {
  field: ControllerRenderProps<EditorFieldsType, "bannerUrl">
}

export const BannerField = ({ field }: BannerFieldProps) => {
  const { onChange, value, ...rest } = field

  const { file, handleUploadBanner, disabled, progress } = useUploadBanner({
    onChange,
  })
  const { handleRemoveBanner, disabled: removeDisabled } = useRemoveBanner({
    onChange,
  })

  return (
    <FormItemWrapper>
      <div className="relative">
        {disabled && (
          <div className="absolute inset-y-0 z-50 flex w-full flex-col items-center justify-center gap-2 bg-secondary/50">
            <Progress value={progress} className="w-[60%] shadow-lg" />
          </div>
        )}
        <SingleImageDropzone
          className="aspect-video"
          label="blog banner"
          value={file || value}
          disabled={disabled || removeDisabled}
          onChange={handleUploadBanner}
          onRemove={handleRemoveBanner}
          dropzoneOptions={{ maxFiles: 1 }}
        />
      </div>
    </FormItemWrapper>
  )
}
