import axios from 'axios';
import swal from 'sweetalert';

// 사용자 로그인을 처리하는 비동기 함수
export const loginUser = async (username, password) => {
    try {
        // 서버에 POST 요청을 보내어 로그인을 시도
        const response = await axios.post('https://devawsback.gongsacok.com/pub/login', {
            userid: username,
            passwd: password
        });
        // 서버에서 응답이 'success'일 경우 로그인 성공을 처리
        if (response.data.status === 'success') {
            swal('성공', '성공적으로 등록되었습니다!', 'success', {
                buttons: true,
                timer: 2000,})
            // 로컬 스토리지에 토큰과 사용자 정보를 저장
            localStorage.setItem('jtoken', response.data.jtoken);
            localStorage.setItem('user', JSON.stringify(response.data));
            // 로그인 성공 후 프로필 페이지로 이동
            window.location.href = '/profile';
        } else {
            // 로그인 실패 시 경고창을 띄움
            swal('실패', '로그인에 실패했습니다. 사용자 이름과 비밀번호를 확인해 주세요.', 'error');
        }
        return response.data;
    } catch (error) {
        // 로그인 도중 오류가 발생한 경우 경고창을 띄우고 콘솔에 오류를 출력
        swal('오류', '로그인 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.', 'error');
        console.error(error);
    }
};

// 사용자 등록을 처리하는 비동기 함수
export const registerUser = async (username, password) => {
    try {
        // 서버에 POST 요청을 보내어 사용자 등록을 시도
        const response = await axios.post('https://devawsback.gongsacok.com/pub/addUser', {
            userid: username,
            passwd: password
        });
        // 서버에서 응답이 'success'일 경우 사용자 등록 성공을 처리
        if (response.data.status === 'success') {
            // 사용자 등록 성공 시 알림창을 띄우고, 2초 후 메인 페이지로 이동
            swal('성공', '성공적으로 등록되었습니다!', 'success', {
                buttons: false,
                timer: 2000,
            }).then(() => {
                window.location.href = '/';
            });
        } else {
            // 사용자 등록 실패 시 경고창을 띄움
            swal('실패', '등록에 실패했습니다. 입력한 내용을 확인해 주세요.', 'error');
        }
        return response.data;
    } catch (error) {
        // 사용자 등록 도중 오류가 발생한 경우 경고창을 띄우고 콘솔에 오류를 출력
        swal('오류', '등록 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.', 'error');
        console.error(error);
    }
};
