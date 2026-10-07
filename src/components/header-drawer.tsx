import { Menu } from "lucide-react";
import {
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerFooter, 
  DrawerClose 
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

interface HeaderDrawerProps {
  navItems: NavItem[]
}

export function HeaderDrawer({ navItems }: HeaderDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu" className="h-9 w-9">
          <Menu strokeWidth={1.5} />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerFooter className="pt-10 pb-32">
          {navItems.map((item) => (
            <DrawerClose key={item.title} asChild>
              <Button asChild variant="outline" className="w-full text-lg uppercase opacity-70 hover:opacity-100 p-4">
                <a href={item.href} aria-label={`Go to ${item.title} page`}>
                  {item.title}
                </a>
              </Button>
            </DrawerClose>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
