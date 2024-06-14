import * as React from "react"
import { X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TagInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  tags: string[] | undefined
  setTags: React.Dispatch<React.SetStateAction<string[] | undefined>>
  onRemoveTag: (tagToRemove: string) => void
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (props, ref) => {
    const { placeholder, tags, setTags, className, disabled, onRemoveTag } =
      props

    const [inputValue, setInputValue] = React.useState("")
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault()

        const newTag = inputValue.trim()
        if (newTag && tags && !tags.includes(newTag)) {
          setTags([...tags, newTag])
        }

        setInputValue("")
      }
    }

    const removeTag = (tagToRemove: string) => {
      tags && setTags(tags.filter((tag) => tag !== tagToRemove))
      onRemoveTag(tagToRemove)
    }

    return (
      <div>
        <div
          className={`flex flex-wrap gap-2 rounded-md ${tags?.length !== 0 && "mb-3"}`}
        >
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-flex h-8 items-center rounded-md border bg-secondary pl-2 text-sm text-secondary-foreground transition-all hover:bg-secondary/80"
            >
              {tag}
              <Button
                type="button"
                variant="ghost"
                onClick={() => removeTag(tag)}
                className={cn("h-full px-3 py-1 hover:bg-transparent")}
              >
                <X size={14} />
              </Button>
            </span>
          ))}
        </div>
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={className}
          disabled={disabled}
        />
      </div>
    )
  },
)

TagInput.displayName = "TagInput"

export { TagInput }
