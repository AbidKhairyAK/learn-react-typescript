import { Button } from "@/components/ui/Button";
import { H3 } from "@/components/ui/Typography";
import { Heart, ShoppingBag } from "lucide-react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function PublicSite () : ReactElement {
	return <>
		<header className="container">
			<section className="border-b-4 border-black flex justify-between items-center">
				<H3 className="flex items-center gap-2 py-4">
					Learn React with Typescript
					<Heart />
				</H3>

				<Button asChild variant="ghost">
					<Link to="/carts">
						<ShoppingBag />
					</Link>
				</Button>
			</section>
		</header>
		<div className="container py-8">
			<Outlet />
		</div>
	</>
}