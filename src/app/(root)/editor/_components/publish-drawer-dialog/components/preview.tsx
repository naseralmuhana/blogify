"use client"

import Image from "next/image"
import { Gelasio } from "next/font/google"

import { cn } from "@/lib/utils"
import { useEditorStore } from "../../../_store"

const gelasio = Gelasio({ subsets: ["latin"], weight: "400" })

export const Preview = () => {
  const { bannerUrl, title, description } = useEditorStore(
    (state) => state.blog,
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full overflow-hidden">
        {bannerUrl && (
          <Image
            width={800}
            height={800}
            src={bannerUrl}
            alt="Cover"
            className="aspect-video rounded-sm"
          />
        )}
      </div>

      <h1 className="line-clamp-2 overflow-hidden text-2xl font-medium leading-tight">
        {title}
      </h1>

      <p
        className={cn(
          "line-clamp-3 overflow-hidden leading-6",
          gelasio.className,
        )}
      >
        {description}
      </p>
    </div>
  )
}
