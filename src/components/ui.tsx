import * as React from "react"
import { cn } from "@/lib/utils"

// --- Card Components ---
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Use Secondary (Cyan) for border and hover glow
    className={cn(
      "rounded-[var(--radius)] border border-border bg-card text-card-foreground shadow-lg shadow-black/30 transition-all duration-300 hover:border-secondary/80 hover:shadow-glow-secondary-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-2 p-5", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    // Card Titles use Primary (Pink)
    className={cn(
      "text-xl font-black leading-tight tracking-tight text-primary flex items-center gap-2.5 text-shadow-glow-primary-sm",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-base font-medium text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-2 pb-4", className)} {...props} />
))
CardContent.displayName = "CardContent"


// --- Table Components ---
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table ref={ref} className={cn("w-full text-sm border-collapse", className)} {...props} />
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  // Use Accent (Green) border bottom
  <thead ref={ref} className={cn("[&_tr]:border-b-2 [&_tr]:border-accent/80", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("divide-y divide-border/70", className)} {...props} />
))
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  // Hover uses Accent (Green) with low opacity
  <tr ref={ref} className={cn( "transition-colors hover:bg-accent/10 data-[state=selected]:bg-muted", className )} {...props} />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    // Use Accent (Green) for Table Headers
    className={cn( "h-11 px-4 text-left align-middle font-black text-accent tracking-wide uppercase text-sm [&:has([role=checkbox])]:pr-0 text-shadow-glow-accent-xs", // Smaller glow
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
))
TableCell.displayName = "TableCell"

// Export relevant components
export {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell
}