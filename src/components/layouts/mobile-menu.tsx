import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type NavLink = {
  to: string;
  label: string;
};

type MobileMenuProps = {
  links: NavLink[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <VisuallyHidden>
          <SheetTitle />
          <SheetDescription />
        </VisuallyHidden>

        <ul className="p-5 space-y-2">
          {links.map((link, i) => (
            <li key={i}>
              <a className="text-2xl font-semibold" href={link.to}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
