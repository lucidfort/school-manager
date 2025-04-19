import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse border-gray-500 rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
