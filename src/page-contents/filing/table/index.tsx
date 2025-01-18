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
	Tooltip,
	Menu,
	MenuItem,
} from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

interface DataTableProps {
	data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State to manage menu anchor

	if (!data || data.length === 0)
		return <Typography>No data available</Typography>;

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

	const handleChangePage = (_: any, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const filteredData = data.filter(
		(row) =>
			row.tipoRadicado
				?.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			row.nombreCliente?.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const paginatedData = filteredData.slice(
		page * rowsPerPage,
		page * rowsPerPage + rowsPerPage
	);

	const handleRowSelect = (index: number) => {
		if (selectedRows.includes(index)) {
			setSelectedRows(selectedRows.filter((row) => row !== index));
		} else {
			setSelectedRows([...selectedRows, index]);
		}
	};

	const handleSelectAll = (checked: boolean) => {
		if (checked) {
			setSelectedRows(paginatedData.map((_, index) => index));
		} else {
			setSelectedRows([]);
		}
	};

	const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget); // Set the anchor for the menu
	};

	const handleCloseMenu = () => {
		setAnchorEl(null); // Close the menu
	};

	return (
		<Box
			sx={{
				mt: 3,
				backgroundColor: "white",
				borderRadius: "5px",
				padding: "20px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography variant="h6" gutterBottom sx={{ color: "#000" }}>
					Listado de radicados
				</Typography>
				<Stack
					direction="row"
					spacing={2}
					mb={2}
					sx={{ width: "300px" }}
				>
					<TextField
						className="table-seach-bar"
						variant="outlined"
						fullWidth
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Buscar por Tipo radicado o Cliente"
					/>
				</Stack>
			</Box>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell
								sx={{
									fontWeight: "bold",
									color: "black",
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
										color: "#444",
										textAlign: "center",
										fontFamily: "Inter, sans-serif",
										textTransform: "uppercase",
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
										: "inherit",
								}}
							>
								<TableCell sx={{ textAlign: "center" }}>
									<Checkbox
										color="default"
										checked={selectedRows.includes(index)}
										onChange={() => handleRowSelect(index)}
									/>
								</TableCell>
								{Object.entries(row).map(
									([key, value], colIndex) => (
										<TableCell
											key={colIndex}
											sx={{
												fontSize: "16px",
												textAlign: "center",
												fontFamily: "Inter, sans-serif",
												color: row.validDocument
													? "#0064ff"
													: "inherit",
											}}
										>
											<Typography
												variant="body1"
												sx={{
													fontFamily:
														"Inter, sans-serif",
													textAlign: "center",
													backgroundColor:
														key === "validDocument"
															? (value as boolean)
																? "#17f91745"
																: "#ff1f1f6b"
															: "inherit",
													borderRadius: "25px",
													color:
														key === "validDocument"
															? (value as boolean)
																? "green"
																: "red"
															: "inherit",
												}}
											>
												{key === "validDocument"
													? (value as boolean)
														? "Valid"
														: "Invalid"
													: (value as React.ReactNode)}{" "}
											</Typography>
										</TableCell>
									)
								)}
								<TableCell sx={{ textAlign: "center" }}>
									<Tooltip
										title="MÁS ACCIONES"
										arrow
										placement="top"
									>
										<IconButton
											aria-label="more"
											sx={{ marginRight: 1 }}
											onClick={handleOpenMenu}
										>
											<MoreHorizOutlinedIcon />
										</IconButton>
									</Tooltip>
									<Menu
										anchorEl={anchorEl}
										open={Boolean(anchorEl)}
										onClose={handleCloseMenu}
										anchorOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
										transformOrigin={{
											vertical: "top",
											horizontal: "right",
										}}
									>
										<MenuItem onClick={handleCloseMenu}>
											<VisibilityOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											View
										</MenuItem>
										<MenuItem onClick={handleCloseMenu}>
											<EditOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Edit
										</MenuItem>
										<MenuItem onClick={handleCloseMenu}>
											<PrintOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Print Stickers
										</MenuItem>
										<MenuItem onClick={handleCloseMenu}>
											<SwapHorizOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Reassign
										</MenuItem>
										<MenuItem onClick={handleCloseMenu}>
											<CloudUploadOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Upload Main Image
										</MenuItem>
										<MenuItem onClick={handleCloseMenu}>
											<FileCopyOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Copy to Informed
										</MenuItem>
										<MenuItem onClick={handleCloseMenu}>
											<InsertDriveFileOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Associate Template
										</MenuItem>
										<MenuItem onClick={handleCloseMenu}>
											<FolderOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Include in File
										</MenuItem>
									</Menu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
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
