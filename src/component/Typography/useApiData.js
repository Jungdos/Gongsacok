import { useEffect, useState } from "react";
import axios from 'axios';

const useApiData = (longitude, latitude, radius, gongsaType, page) => {
    const [data, setData] = useState( {inputData: [], totalElements: 0, totalPages: 0} );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        // 데이터를 가져오는 비동기 함수를 선언함.
        const fetchData = async () => {
            try {
                setLoading(true);// 로딩 상태를 true로 설정
                setError(null);// 에러 상태를 null로 설정

                const res = await axios.post(
                    'https://devawsback.gongsacok.com/pub/listCompany',
                    {offset: page * 2, size: 2, longitude, latitude, radius, gongsaType}
                );//현재 페이지에 따라 offset을 설정 , 페이지 당 사이즈는 2로 설정
                
                // 응답에서 필요한 데이터만 추출함.
                const inputData = res.data.data.map( rowData => ({
                    cid: rowData. cid,
                    name: rowData.name,
                    createTime: rowData. createTime,
                    updateTime: rowData.updateTime
                }));

                // 상태를 업데이트함.
                setData({ inputData, totalElements: res.data.page.totalElements, totalPages: res.data.page.totalPages});
                setLoading(false);// 로딩 상태를 false로 설정
            } catch (e) {
                // 에러가 발생하면 상태를 업데이트함.
                setError('Failed to get data');// 에러 상태를 설정
                setLoading(false);// 로딩 상태를 false로 설정
            }
        };
        // 데이터를 가져옵니다.
        fetchData();
        //페이지가 바뀔 떄마다 useEffect를 재실행
        //반환하는 JSX에서 페이지 번호를 클릭하면 setPage를 호출하여 현재 페이지를 변경함
    }, [longitude, latitude, radius, gongsaType, page]);

    return { data, loading, error };
};

export default useApiData;