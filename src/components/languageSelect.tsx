import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import Flag from "react-world-flags";

interface LanguageSelectProps {
	selectedLanguage: string;
	onLanguageChange: any;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
	selectedLanguage,
	onLanguageChange,
}) => {
	return (
		<FormControl variant="outlined" sx={{ minWidth: "auto" }}>
			<Select
				value={selectedLanguage}
				onChange={onLanguageChange}
				label="Language"
				sx={{ border: "noene" }}
			>
				<MenuItem value="en">
					<Flag
						code="US"
						style={{ width: 20, height: 15, marginRight: 10 }}
					/>
				</MenuItem>
				<MenuItem value="es">
					<Flag
						code="ES"
						style={{ width: 20, height: 15, marginRight: 10 }}
					/>
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default LanguageSelect;
