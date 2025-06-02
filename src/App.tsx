import {
	LargeHeading,
	MediumHeading,
	SmallHeading,
} from "./components/headings";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { toast } from "sonner";

function App() {
	function handleClick() {
		toast("I was clicked on! Yeah :D");
	}
	return (
		<>
			<LargeHeading>Hello, World!</LargeHeading>
			<MediumHeading>Hello, World!</MediumHeading>
			<SmallHeading>Hello, World!</SmallHeading>
			<Button
				className="bg-blue-500 text-white"
				onClick={handleClick}
				variant={"default"}
			>
				Ghosty
			</Button>
			<Alert variant="destructive">
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					You can add components and dependencies to your app using the cli.
				</AlertDescription>
			</Alert>
		</>
	);
}

export default App;
