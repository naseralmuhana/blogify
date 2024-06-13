"use client"

import { UploadCloudIcon, X } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import { useDropzone, type DropzoneOptions } from "react-dropzone"
import { twMerge } from "tailwind-merge"

const variants = {
  base: "relative rounded-md flex justify-center items-center flex-col cursor-pointer min-h-[150px] min-w-[200px] border border-dashed border-primary/40 transition-colors duration-200 ease-in-out",
  image:
    "border-0 p-0 min-h-0 min-w-0 relative shadow-md bg-slate-200 dark:bg-slate-900 rounded-md",
  active: "border-2",
  disabled:
    "bg-muted border-primary/40 cursor-default pointer-events-none bg-opacity-30",
  accept: "border border-blue-500 bg-blue-500 bg-opacity-10",
  reject: "border border-red-700 bg-red-700 bg-opacity-10",
}

type InputProps = {
  width?: number
  height?: number
  className?: string
  value?: File | string
  label?: string
  onChange?: (file?: File) => void | Promise<void>
  onRemove?: () => void | Promise<void>
  disabled?: boolean
  dropzoneOptions?: Omit<DropzoneOptions, "disabled">
}

const ERROR_MESSAGES = {
  fileTooLarge(maxSize: number) {
    return `The file is too large. Max size is ${formatFileSize(maxSize)}.`
  },
  fileInvalidType() {
    return "Invalid file type."
  },
  tooManyFiles(maxFiles: number) {
    return `You can only add ${maxFiles} file(s).`
  },
  fileNotSupported() {
    return "The file is not supported."
  },
}

const SingleImageDropzone = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      dropzoneOptions,
      width,
      height,
      value,
      label,
      className,
      disabled,
      onChange,
      onRemove,
    },
    ref,
  ) => {
    const imageUrl = React.useMemo(() => {
      if (typeof value === "string") {
        // in case a url is passed in, use it to display the image
        return value
      } else if (value) {
        // in case a file is passed in, create a base64 url to display the image
        return URL.createObjectURL(value)
      }
      return null
    }, [value])

    // dropzone configuration
    const {
      getRootProps,
      getInputProps,
      acceptedFiles,
      fileRejections,
      isFocused,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      accept: { "image/*": [] },
      multiple: false,
      disabled,
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0]
        if (file) {
          void onChange?.(file)
        }
      },
      ...dropzoneOptions,
    })

    // styling
    const dropZoneClassName = React.useMemo(
      () =>
        twMerge(
          variants.base,
          isFocused && variants.active,
          disabled && variants.disabled,
          imageUrl && variants.image,
          (isDragReject ?? fileRejections[0]) && variants.reject,
          isDragAccept && variants.accept,
          className,
        ).trim(),
      [
        isFocused,
        imageUrl,
        fileRejections,
        isDragAccept,
        isDragReject,
        disabled,
        className,
      ],
    )

    // error validation messages
    const errorMessage = React.useMemo(() => {
      if (fileRejections[0]) {
        const { errors } = fileRejections[0]
        if (errors[0]?.code === "file-too-large") {
          return ERROR_MESSAGES.fileTooLarge(dropzoneOptions?.maxSize ?? 0)
        } else if (errors[0]?.code === "file-invalid-type") {
          return ERROR_MESSAGES.fileInvalidType()
        } else if (errors[0]?.code === "too-many-files") {
          return ERROR_MESSAGES.tooManyFiles(dropzoneOptions?.maxFiles ?? 0)
        } else {
          return ERROR_MESSAGES.fileNotSupported()
        }
      }
      return undefined
    }, [fileRejections, dropzoneOptions])

    return (
      <div>
        <div
          {...getRootProps({
            className: dropZoneClassName,
            style: {
              width,
              height,
            },
          })}
        >
          {/* Main File Input */}
          <input ref={ref} {...getInputProps()} />

          {imageUrl ? (
            // Image Preview
            // <img
            //   className="h-full w-full rounded-md object-cover"
            //   src={imageUrl}
            //   alt={acceptedFiles[0]?.name}
            // />
            // Image Preview
            <Image
              className="h-full w-full rounded-md object-cover"
              fill
              src={imageUrl}
              alt={acceptedFiles[0]?.name || "blog banner"}
            />
          ) : (
            // Upload Icon
            <div className="flex flex-col items-center justify-center text-xs text-muted-foreground md:text-sm">
              <UploadCloudIcon className="mb-2 h-7 w-7 md:h-9 md:w-9" />
              <div>Click or drag & drop to upload {label}</div>
            </div>
          )}

          {/* Remove Image Icon */}
          {imageUrl && !disabled && (
            <div
              className="group absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform"
              onClick={(e) => {
                e.stopPropagation()
                void onChange?.(undefined)
                !!onRemove && onRemove()
              }}
            >
              <div className="group flex h-6 w-6 items-center justify-center rounded-md bg-primary shadow-md">
                <X className="text-primary-foreground transition-all duration-300 group-hover:rotate-180" />
              </div>
            </div>
          )}
        </div>

        {/* Error Text */}
        <div className="mt-1 text-sm text-destructive">{errorMessage}</div>
      </div>
    )
  },
)
SingleImageDropzone.displayName = "SingleImageDropzone"

function formatFileSize(bytes?: number) {
  if (!bytes) {
    return "0 Bytes"
  }
  bytes = Number(bytes)
  if (bytes === 0) {
    return "0 Bytes"
  }
  const k = 1024
  const dm = 2
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export { SingleImageDropzone }
