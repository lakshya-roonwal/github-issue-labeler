"use client"

import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

const MainDashboard = ({signInWithGithub,signOut,setUser,user}) => {
  return (
    <div className="flex flex-col h-screen">
    <header className="border-b">
      <div className="container px-4 flex items-center justify-between h-[60px]">
        <nav className="flex items-center space-x-4">
          <div className="relative">
            <Button className="font-medium" variant="ghost">
              shadcn/ui
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="font-medium rounded-none px-2.5" id="issues" variant="ghost">
                  Issues
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="ml-2 w-max" id="issues" portal>
                <div />
                <div>
                  <div>Issues</div>
                  <div>Labels</div>
                  <div>Milestones</div>
                  <div>Projects</div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="relative">
            <Button className="font-medium rounded-none px-2.5" variant="ghost">
              Pull requests
            </Button>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full p-2" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Switch account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>octocat</DropdownMenuItem>
              <DropdownMenuItem checked>Space Explorer</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Add account{"\n                              "}
              </DropdownMenuItem>
              <DropdownMenuItem>
                Switch account
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="font-medium" variant="outline">
            Label & Send to AI
          </Button>
        </div>
      </div>
    </header>
    <main className="flex-1 border-b">
      <div className="container flex items-start p-4 gap-4">
        <div className="w-[250px]">
          <Card className="h-[calc(100vh_-_60px_-_60px_-_1px_-_4rem)]">
            <CardHeader>
              <CardTitle>Repositories</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div>
                <div>
                  <Link
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    href="#"
                  >
                    shadcn/ui
                  </Link>
                </div>
                <div>
                  <Link
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    href="#"
                  >
                    next.js
                  </Link>
                </div>
                <div>
                  <Link
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    href="#"
                  >
                    framework
                  </Link>
                </div>
                <div>
                  <Link
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    href="#"
                  >
                    components
                  </Link>
                </div>
                <div>
                  <Link
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    href="#"
                  >
                    runtime
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Issues</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div>
                <div>
                  <Button
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    variant="ghost"
                  >
                    Add support for customizing the appearance of the component
                  </Button>
                </div>
                <div>
                  <Button
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    variant="ghost"
                  >
                    Add support for customizing the appearance of the component
                  </Button>
                </div>
                <div>
                  <Button
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    variant="ghost"
                  >
                    Add support for customizing the appearance of the component
                  </Button>
                </div>
                <div>
                  <Button
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    variant="ghost"
                  >
                    Add support for customizing the appearance of the component
                  </Button>
                </div>
                <div>
                  <Button
                    className="block p-3 -mx-3 rounded-md text-sm font-medium
                    hover:bg-gray-50 dark:hover:bg-gray-900"
                    variant="ghost"
                  >
                    Add support for customizing the appearance of the component
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
  )
}

export default MainDashboard