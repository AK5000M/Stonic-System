import Image from "next/image";

const Logo: React.FC = () => {
	return (
		<>
			<Image
				src="/assets/logo/logo.webp"
				alt="Logo"
				width={240}
				height={100}
			/>
		</>
	);
};

export default Logo;
