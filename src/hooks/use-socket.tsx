import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
	socket: Socket | null;
	isConnected: boolean;
}

const SocketContext = createContext<SocketContextType>({
	socket: null,
	isConnected: false,
});

interface SocketContextProviderProps {
	children: ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
	children,
}) => {
	const [socket, setSocket] = useState<Socket | null>(null);
	const [isConnected, setIsConnected] = useState<boolean>(false);

	useEffect(() => {
		const socketInstance: Socket = io(
			process.env.NEXT_PUBLIC_SOCKETIO_URL || ""
		);

		socketInstance.on("connect", () => {
			console.log("socketIO connected");
			setIsConnected(true);
		});

		socketInstance.on("disconnect", () => {
			console.log("socketIO disconnected");
			setIsConnected(false);
		});

		socketInstance.on("error", (error: Error) => {
			console.error("SocketIO error:", error);
		});

		setSocket(socketInstance);

		return () => {
			if (socketInstance) {
				socketInstance.disconnect();
			}
		};
	}, []);

	if (!socket) {
		return <div>Loading...</div>;
	}

	return (
		<SocketContext.Provider value={{ socket, isConnected }}>
			{children}
		</SocketContext.Provider>
	);
};

export const useSocket = (): SocketContextType => {
	return useContext(SocketContext);
};

export default SocketContextProvider;
