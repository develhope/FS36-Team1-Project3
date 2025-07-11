type ToastType = 'success' | 'danger' | 'warning' | 'info';

interface UseToastReturn {
    showToast: (message: string, type: ToastType, duration?: number) => void;
    hideToast: (toastId: string) => void;
}

const useToast = (): UseToastReturn => {
    const showToast = (message: string, type: ToastType, duration: number = 2000): void => {
        // Crea il container dei toast se non esiste
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('aside');
            toastContainer.id = 'toast-container';
            toastContainer.className = 'fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2';
            document.body.appendChild(toastContainer);
        }

        // Crea il wrapper del toast
        const toastWrapper = document.createElement('div');
        const toastId = `toast-${crypto.randomUUID()}`;
        toastWrapper.id = toastId;

        toastWrapper.className = 'px-5 py-3 rounded-lg shadow-lg transform -translate-y-full transition-transform duration-300 ease-in-out max-w-xs break-words opacity-90';
        toastWrapper.classList.add(`bg-my-dark-${type}`);
        
        // Crea il contenuto del toast
        const toastContent = document.createElement('article');
        toastContent.className = 'text-white font-medium';
        toastContent.textContent = message;

        // Posizione del contenuto 
        toastWrapper.appendChild(toastContent);
        toastContainer.appendChild(toastWrapper);

        // Animazione entrata
        setTimeout(() => {
            toastWrapper.classList.remove('-translate-y-full');
            toastWrapper.classList.add('translate-y-0');
        }, 10);

        // Auto-rimozione
        setTimeout(() => {
            hideToast(toastId);
        }, duration);
    };

    const hideToast = (toastId: string): void => {
        const toastWrapper = document.getElementById(toastId);
        if (toastWrapper) {
            // Animazione uscita
            toastWrapper.classList.remove('translate-y-0');
            toastWrapper.classList.add('-translate-y-full');
            setTimeout(() => {
                if (toastWrapper.parentNode) {
                    toastWrapper.parentNode.removeChild(toastWrapper);
                }
                
                // Rimuovi il container se non ci sono più toast
                const container = document.getElementById('toast-container');
                if (container && container.children.length === 0) {
                    container.remove();
                }
            }, 300);
        }
    };

    return {
        showToast,
        hideToast
    };
};

export default useToast;