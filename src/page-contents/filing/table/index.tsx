import React, { useState } from "react";
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
	TablePagination,
	Checkbox,
	IconButton,
	TextField,
	Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface DataTableProps {
	data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
	const [page, setPage] = useState(0); // Current page
	const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page
	const [selectedRows, setSelectedRows] = useState<number[]>([]); // Track selected rows
	const [searchTerm, setSearchTerm] = useState(""); // Search term

	if (!data || data.length === 0)
		return <Typography>No data available</Typography>;

	// Define static column headers
	const columnHeaders = [
		"#",
		"Tipo radicado",
		"Número de radicado",
		"Fecha creación",
		"Cliente",
		"Asunto",
		"Tipo documental",
		"Fecha vencimiento",
		"Prioridad",
		"Documento",
		"Estado",
		"Actions",
	];

	// Handle pagination change
	const handleChangePage = (_: any, newPage: number) => {
		setPage(newPage);
	};

	// Handle rows per page change
	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// Filter data based on search term
	const filteredData = data.filter(
		(row) =>
			row.tipoRadicado
				?.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			row.nombreCliente?.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Paginated data
	const paginatedData = filteredData.slice(
		page * rowsPerPage,
		page * rowsPerPage + rowsPerPage
	);

	// Handle individual row selection
	const handleRowSelect = (index: number) => {
		if (selectedRows.includes(index)) {
			setSelectedRows(selectedRows.filter((row) => row !== index));
		} else {
			setSelectedRows([...selectedRows, index]);
		}
	};

	// Handle select all rows
	const handleSelectAll = (checked: boolean) => {
		if (checked) {
			setSelectedRows(paginatedData.map((_, index) => index));
		} else {
			setSelectedRows([]);
		}
	};

	return (
		<Box sx={{ mt: 3 }}>
			{/* Search Field */}
			<Stack direction="row" spacing={2} mb={2} sx={{ width: "350px" }}>
				<TextField
					className="text-field"
					label="Buscar"
					variant="outlined"
					fullWidth
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="Buscar por Tipo radicado o Cliente"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</Stack>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead sx={{ backgroundColor: "#0064ff" }}>
						<TableRow>
							<TableCell
								sx={{
									fontWeight: "bold",
									color: "white",
									textAlign: "center",
								}}
							>
								<Checkbox
									color="default"
									checked={
										selectedRows.length ===
											paginatedData.length &&
										paginatedData.length > 0
									}
									indeterminate={
										selectedRows.length > 0 &&
										selectedRows.length <
											paginatedData.length
									}
									onChange={(e) =>
										handleSelectAll(e.target.checked)
									}
								/>
							</TableCell>
							{columnHeaders.map((header) => (
								<TableCell
									key={header}
									sx={{
										fontWeight: "bold",
										color: "white",
										textAlign: "center",
									}}
								>
									{header}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{paginatedData.map((row, index) => (
							<TableRow
								key={index}
								sx={{
									"&:hover": { backgroundColor: "#f1f1f1" },
									color: row.validDocument
										? "#0064ff"
										: "inherit", // Set text color to red for validDocument === true
								}}
							>
								<TableCell sx={{ textAlign: "center" }}>
									<Checkbox
										color="default"
										checked={selectedRows.includes(index)}
										onChange={() => handleRowSelect(index)}
									/>
								</TableCell>
								{/* Render dynamic data for each column */}
								{Object.entries(row).map(
									([key, value], colIndex) => (
										<TableCell
											key={colIndex}
											sx={{
												fontSize: "16px",
												textAlign: "center",
												color:
													key === "validDocument"
														? (value as boolean)
															? "#0064ff"
															: "inherit"
														: "inherit",
											}}
										>
											{key === "validDocument"
												? (value as boolean)
													? "Valid"
													: "Invalid"
												: (value as React.ReactNode)}{" "}
										</TableCell>
									)
								)}
								<TableCell
									sx={{
										textAlign: "center",
									}}
								>
									<IconButton
										aria-label="show"
										sx={{
											marginRight: 1,
										}}
									>
										<VisibilityIcon />
									</IconButton>
									<IconButton
										aria-label="edit"
										sx={{ marginRight: 1 }}
									>
										<MoreHorizOutlinedIcon />
									</IconButton>
									{/* <IconButton
										color="error"
										aria-label="delete"
									>
										<DeleteIcon />
									</IconButton> */}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{/* Pagination Component */}
				<TablePagination
					rowsPerPageOptions={[5, 10, 15]}
					component="div"
					count={filteredData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</Box>
	);
};

export default DataTable;
