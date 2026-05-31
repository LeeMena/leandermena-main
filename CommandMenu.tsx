import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from 'cmdk';
import { Search, FileText, ShoppingBag, Briefcase, Home, User, Mail, BookOpen, BarChart3 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  category: string;
}

const searchItems: SearchItem[] = [
  { id: 'home', title: 'Home', description: 'Landing page', href: '/', icon: <Home className="h-4 w-4" />, category: 'Pages' },
  { id: 'about', title: 'About', description: 'Learn about Leander', href: '/about', icon: <User className="h-4 w-4" />, category: 'Pages' },
  { id: 'services', title: 'Services', description: 'Consulting services', href: '/services', icon: <Briefcase className="h-4 w-4" />, category: 'Pages' },
  { id: 'products', title: 'Products', description: 'Digital products & courses', href: '/products', icon: <ShoppingBag className="h-4 w-4" />, category: 'Pages' },
  { id: 'shop', title: 'Shop', description: 'Browse all products', href: '/shop', icon: <ShoppingBag className="h-4 w-4" />, category: 'Pages' },
  { id: 'case-studies', title: 'Case Studies', description: 'Client results', href: '/case-studies', icon: <BarChart3 className="h-4 w-4" />, category: 'Pages' },
  { id: 'insights', title: 'Insights', description: 'Blog & articles', href: '/insights', description: 'Blog & articles', href: '/insights', icon: <BookOpen className="h-4 w-4" />, category: 'Pages' },
  { id: 'contact', title: 'Contact', description: 'Get in touch', href: '/contact', icon: <Mail className="h-4 w-4" />, category: 'Pages' },
  { id: 'book', title: 'Book a Call', description: 'Schedule consultation', href: '/book', icon: <Mail className="h-4 w-4" />, category: 'Pages' },
  { id: 'blueprint', title: 'Free Blueprint', description: 'Download the 90-day guide', href: '/blueprint', icon: <FileText className="h-4 w-4" />, category: 'Resources' },
  { id: 'profile', title: 'Profile', description: 'Professional profile', href: '/profile', icon: <User className="h-4 w-4" />, category: 'Pages' },
  { id: 'pre-opening', title: 'Pre-Opening', description: 'Pre-opening consulting', href: '/pre-opening', icon: <Briefcase className="h-4 w-4" />, category: 'Services' },
  { id: 'experience', title: 'Experience', description: 'Career history', href: '/experience', icon: <BarChart3 className="h-4 w-4" />, category: 'Pages' },
  { id: 'philosophy', title: 'Philosophy', description: 'Leadership philosophy', href: '/philosophy', icon: <BookOpen className="h-4 w-4" />, category: 'Pages' },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = useCallback((href: string) => {
    setOpen(false);
    navigate(href);
  }, [navigate]);

  const groupedItems = searchItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 gap-0 max-w-2xl overflow-hidden">
        <DialogTitle className="sr-only">Command Menu</DialogTitle>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
            <Command.Empty className="py-6 text-center text-sm">
              No results found.
            </Command.Empty>
            {Object.entries(groupedItems).map(([category, items]) => (
              <Command.Group key={category} heading={category}>
                {items.map((item) => (
                  <Command.Item
                    key={item.id}
                    onSelect={() => handleSelect(item.href)}
                    className="flex items-center gap-2 px-2 py-3 text-sm rounded-sm cursor-pointer hover:bg-accent hover:text-accent-foreground aria-selected:bg-accent aria-selected:text-accent-foreground"
                  >
                    {item.icon}
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>
          <div className="border-t px-3 py-2 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
              <span>to open</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                ↵
              </kbd>
              <span>to select</span>
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}