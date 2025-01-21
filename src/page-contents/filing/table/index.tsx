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
import { useRouter } from "next/router";

interface DataTableProps {
	data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
	const router = useRouter();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	console.log({ data });
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
			row.TipoRadicado?.toLowerCase().includes(
				searchTerm.toLowerCase()
			) ||
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
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	// Edit Filing Redirect
	const handleEditFiling = (row: any) => {
		setAnchorEl(null);
		router.push(`/filing/edit/${row?.id}`); // Use the id instead of encryptId
	};

	// View Filing Redirect
	const handleViewFiling = (row: any) => {
		setAnchorEl(null);
		router.push(`/filing/detail/${row?.encryptId}`); // Use the id instead of encryptId
	};

	// Reassign Filing Redirect
	const handleReassign = (row: any) => {
		setAnchorEl(null);
		router.push(`/filing/reassign/${row?.encryptId}`); // Use the id instead of encryptId
	};

	// Upload Main Image Redirect
	const handleUploadImage = (row: any) => {
		setAnchorEl(null);
		router.push(`/filing/upload/${row?.encryptId}`);
	};

	// Copy Filing Redirect
	const handleCopyFiling = (row: any) => {
		setAnchorEl(null);
		router.push(`/filing/copy/${row?.encryptId}`);
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
								}}
							>
								<TableCell
									sx={{
										textAlign: "center",
									}}
								>
									<Checkbox
										color="default"
										checked={selectedRows.includes(index)}
										onChange={() => handleRowSelect(index)}
									/>
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.id}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.TipoRadicado}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.numeroRadiRadicado}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.creacionRadiRadicado}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.nombreCliente}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.asuntoRadiRadicado}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.nombreTipoDocumental}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.fechaVencimientoRadiRadicados}
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.prioridadRadicados}
								</TableCell>
								<TableCell sx={{ textAlign: "center" }}>
									<Typography
										variant="body1"
										sx={{
											textAlign: "center",
											backgroundColor: row.validDocument
												? "#17f91745"
												: "#ff1f1f6b",
											borderRadius: "25px",
											color: row.validDocument
												? "green"
												: "red",
										}}
									>
										{row.validDocument
											? "Valid"
											: "Invalid"}
									</Typography>
								</TableCell>
								<TableCell
									sx={{
										textAlign: "center",
										color: row.validDocument
											? "#0064ff"
											: "inherit",
										fontSize: "16px",
									}}
								>
									{row.statusText}
								</TableCell>
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
										className="filing-table-main-actions"
									>
										<MenuItem
											onClick={() =>
												handleViewFiling(row)
											}
										>
											<VisibilityOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											View
										</MenuItem>

										<MenuItem
											onClick={() =>
												handleEditFiling(row)
											}
										>
											<EditOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Edit
										</MenuItem>

										<MenuItem
											onClick={() => handleReassign(row)}
										>
											<SwapHorizOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Reassign
										</MenuItem>

										<MenuItem
											onClick={() =>
												handleUploadImage(row)
											}
										>
											<CloudUploadOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Upload File
										</MenuItem>

										<MenuItem
											onClick={() =>
												handleCopyFiling(row)
											}
										>
											<FileCopyOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Copy
										</MenuItem>

										<MenuItem>
											<InsertDriveFileOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Open File
										</MenuItem>

										<MenuItem>
											<FolderOutlinedIcon
												fontSize="small"
												sx={{ marginRight: 1 }}
											/>
											Move
										</MenuItem>
									</Menu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={filteredData.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Box>
	);
};

export default DataTable;
