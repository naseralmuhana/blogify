import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { PublishForm } from "./publish-form"

interface PublishDrawerProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const PublishDrawer = ({ isOpen, onOpenChange }: PublishDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="px-4">
          <PublishForm />
        </div>

        <DrawerFooter>
          <div className="flex items-center justify-items-stretch gap-x-2">
            <Button
              name="publish"
              className="flex-1"
              type="submit"
              form="publish-form"
            >
              Publish
            </Button>
            <Button
              className="flex-1"
              name="draft"
              type="submit"
              variant="secondary"
              form="publish-form"
            >
              Draft
            </Button>
          </div>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
