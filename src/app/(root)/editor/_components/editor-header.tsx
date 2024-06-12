import { Header } from "@/components/shared/header"
import { ThemeDropdownMenu } from "@/components/shared/theme-dropdown-menu"
import { Button } from "@/components/ui/button"

export const EditorHeader = () => {
  return (
    <Header>
      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <ThemeDropdownMenu />
        <Button
          name="continue"
          size="md-rounded"
          form="editor-form"
          type="submit"
        >
          Continue
        </Button>
        <Button
          name="draft"
          variant="secondary"
          form="editor-form"
          type="submit"
          size="md-rounded"
        >
          Save Drift
        </Button>
      </div>
    </Header>
  )
}
