import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
	return (
		<>
			<nav>
				<Sheet>
					<SheetTrigger>Open</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>URL Shortner</SheetTitle>
						</SheetHeader>
						<div>
							<ul>
								<li>Item 1</li>
								<li>Item 2</li>
								<li>Item 3</li>
							</ul>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</>
	)
}
