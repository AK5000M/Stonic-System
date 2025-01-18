// components/DataTable.tsx
import React from "react";
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography,
	Button,
} from "@mui/material";

interface DataTableProps {
	data: Array<Record<string, unknown>>;
	onEdit: (id: string | number) => void;
	onShow: (id: string | number) => void;
	onDelete: (id: string | number) => void;
}

const DataTable: React.FC<DataTableProps> = ({
	data,
	onEdit,
	onShow,
	onDelete,
}) => {
	if (!data || data.length === 0)
		return <Typography>No data available</Typography>;

	const columns = Object.keys(data[0]);

	return (
		<Box sx={{ mt: 3 }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{columns.map((col) => (
								<TableCell
									key={col}
									sx={{ fontWeight: "bold" }}
								>
									{col}
								</TableCell>
							))}
							<TableCell sx={{ fontWeight: "bold" }}>
								Actions
							</TableCell>{" "}
							{/* Actions column */}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row: any, index) => (
							<TableRow key={index}>
								{columns.map((col) => (
									<TableCell key={col}>{row[col]}</TableCell>
								))}
								<TableCell>
									{/* Action buttons */}
									<Button
										variant="outlined"
										color="primary"
										onClick={() => onShow(row.id)}
										sx={{ marginRight: 1 }}
									>
										Show
									</Button>
									<Button
										variant="outlined"
										color="secondary"
										onClick={() => onEdit(row.id)}
										sx={{ marginRight: 1 }}
									>
										Edit
									</Button>
									<Button
										variant="outlined"
										color="error"
										onClick={() => onDelete(row.id)}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default DataTable;
