import { END_POINT } from '../../../shared/constants/endPoint';
import apiClient from '../../../shared/api';

const userAPI = {
  kakaoLogin: async (code: string) => {
    const { data } = await apiClient.post<{
      message: string;
      accessToken: string;
    }>(END_POINT.KAKAO_LOGIN, {
      code,
    });
    return data;
  },
};

export default userAPI;
