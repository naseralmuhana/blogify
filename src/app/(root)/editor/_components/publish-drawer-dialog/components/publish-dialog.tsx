import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { Preview } from "./preview"
import { PublishForm } from "./publish-form"
import { Separator } from "@/components/ui/separator"

interface PublishDialogProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const PublishDialog = ({ isOpen, onOpenChange }: PublishDialogProps) => {
  return (
    <Dialog modal open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(90%)] w-11/12 max-w-full overflow-y-auto sm:overflow-auto md:w-3/4">
        <DialogHeader>
          <DialogDescription>Preview</DialogDescription>
        </DialogHeader>

        <div className="grid items-start gap-y-4 lg:grid-cols-2 lg:gap-x-4">
          <Preview />
          <Separator className="lg:hidden" />

          <PublishForm />
        </div>

        <DialogFooter className="gap-y-2 sm:justify-end">
          <Button
            name="draft"
            type="submit"
            variant="secondary"
            form="publish-form"
          >
            Draft
          </Button>
          <Button name="publish" type="submit" form="publish-form">
            Publish
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
