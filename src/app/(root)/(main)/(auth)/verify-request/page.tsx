import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { VerifyEmailSvg } from "./_components/verify-email-svg"

export default async function VerifyRequestPage() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="space-y-4">
        <CardTitle>Check your email</CardTitle>
        <CardDescription className="text-lg">
          A sign in link has been sent to your email address.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <VerifyEmailSvg />
      </CardContent>
      <CardFooter className="flex w-full justify-center">
        <Button className="p-0" variant="link" asChild>
          <Link href="/">Go back to home</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
