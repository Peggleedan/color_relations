import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}

const ScrollToPrivatePrice = () => {
    const height = window.innerHeight * 0.1;

    useEffect(() => {
        window.scrollTo(height, 0);
    }, [location]);

    return null;
}

const ScrollToGroupPrice = () => {
    const height = window.innerHeight * 0.3;

    useEffect(() => {
        window.scrollTo(height, 0);
    }, []);

    return null;
}

export {ScrollToTop, ScrollToPrivatePrice, ScrollToGroupPrice};