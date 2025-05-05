<<<<<<< HEAD
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

// Avatar component: This serves as the root container for the avatar.
=======
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

// AvatarImage component: This is used to display the image within the avatar.
=======
))
Avatar.displayName = AvatarPrimitive.Root.displayName

>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
<<<<<<< HEAD
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// AvatarFallback component: This will show if the image is unavailable (like initials or a placeholder).
=======
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
<<<<<<< HEAD
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// Exporting the components to be used elsewhere.
export { Avatar, AvatarImage, AvatarFallback };
=======
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)
