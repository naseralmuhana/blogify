import { createElement } from "react"
import { LucideIcon, LucideProps, UserIcon } from "lucide-react"
import { IconBaseProps, IconType } from "react-icons"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type LucideFallbackIconProps = {
  icon?: LucideIcon
  props?: LucideProps
}

type ReactFallbackIconProps = {
  icon?: IconType
  props?: IconBaseProps
}

interface UserAvatarProps {
  image?: string | null
  fallbackIcon?: LucideFallbackIconProps | ReactFallbackIconProps
}

export const UserAvatar = ({ image, fallbackIcon }: UserAvatarProps) => {
  const avatarFallbackIcon = createElement(fallbackIcon?.icon || UserIcon, {
    ...fallbackIcon?.props,
  })

  return (
    <Avatar className="border border-border/40">
      {image && <AvatarImage src={image} />}
      <AvatarFallback>{avatarFallbackIcon}</AvatarFallback>
    </Avatar>
  )
}
