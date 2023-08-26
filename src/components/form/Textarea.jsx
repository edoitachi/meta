export default function Textarea(props) {
	return (
		<textarea
			className={`rounded-xl bg-primary/[.05] backdrop-blur-[15px] p-4 border-slate-600 border-2`}
			{...props}
		></textarea>
	)
}
