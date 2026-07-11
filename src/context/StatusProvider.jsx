import { createContext, useState } from "react";

// 1. Create and export the raw context instance (Default Export)
const StatusContext = createContext(null);
export default StatusContext;

// 2. Export the Provider component (Named Export)
export const StatusProvider = ({ children }) => {
    const [successModal, setSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [redirectPath, setRedirectPath] = useState(null);
    
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const showSuccess = (message, redirectPath = null) => {
        setSuccessMessage(message);
        setRedirectPath(redirectPath);
        setSuccessModal(true);
    };

    const showError = (message) => {
        setErrorMessage(message);
        setErrorModal(true);
    };

    return (
        <StatusContext.Provider
            value={{
                setSuccessModal,
                successModal,
                successMessage,
                setErrorModal,
                errorModal,
                errorMessage,
                showSuccess,
                showError,
                redirectPath,
                setRedirectPath,
            }}
        >
            {children}
        </StatusContext.Provider>
    );
};