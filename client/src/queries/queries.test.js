import axios from "axios";
import {BASE_URL} from "config/api/url";
import catchAsync from "utils/catchAsync";

export const testQuery = catchAsync(async () => {
        const response = await axios({
            method: "get",
            url: `${BASE_URL}/`,
        });
        return response;
    }
);

export const getEventOfAgenda = catchAsync(async (pos) => {
        const response = await axios({
            method: "get",
            url: `${BASE_URL}/agenda`,
			params: pos
        });
        return response.data;
    }
);
