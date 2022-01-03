import {quanlyPhimService} from '../../services/QuanLyPhimServices';
export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimService.LayDanhSachBanner();
            // đưa lên reducer
            // console.log('result',result);
            dispatch({
                type: 'SET_CAROUSEL',
                arrCarousel: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    }
};

