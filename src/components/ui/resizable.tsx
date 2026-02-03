"use client"

import { GripVertical } from "lucide-react"
import { Group, Panel, Separator } from "react-resizable-panels"
import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Group>) => (
  <Group
    {...props}
    className={cn(
      "flex h-full w-full data-[orientation=vertical]:flex-col",
      className
    )}
  />
)

const ResizablePanel = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Panel>) => (
  <Panel {...props} className={cn("h-full w-full", className)}>
    {children}
  </Panel>
)

const ResizableHandle = ({ className }: { className?: string }) => (
  <Separator
    className={cn(
      "flex items-center justify-center bg-border cursor-col-resize data-[orientation=vertical]:cursor-row-resize",
      className
    )}
  >
    <div className="flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
      <GripVertical className="h-2.5 w-2.5" />
    </div>
  </Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
