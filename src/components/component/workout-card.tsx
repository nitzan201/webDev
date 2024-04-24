/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/lXnXMxSMT3h
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function WorkoutCard() {
  return (
    <>
      <Card>
        <CardHeader className="pb-0">
          <CardTitle>Exercise</CardTitle>
          <CardDescription>Select your exercise</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full justify-between text-left" variant="outline">
                Push-ups
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Push-ups</DropdownMenuItem>
              <DropdownMenuItem>Squats</DropdownMenuItem>
              <DropdownMenuItem>Plank</DropdownMenuItem>
              <DropdownMenuItem>Jumping jacks</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>
      <Card className="w-full max-w-sm">
        <CardHeader className="pb-0">
          <CardTitle>Repetitions</CardTitle>
          <CardDescription>Enter the number of repetitions</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Label className="sr-only" htmlFor="repetitions">
            Repetitions
          </Label>
          <Input className="w-12 text-center" id="repetitions" placeholder="10" />
        </CardContent>
      </Card>
    </>
  )
}
