import axios from "axios";

const METHOD_KEY = "method";
const TYPE_KEY = "dataType";

const JSON_VALUE = "json";
const GET = "GET";

const API_KEY = "UTX8ajNfEPcu5QMjQPmXBU4pCqggJLiPg3rtu39Sw7G";
const API_SECRET = "ECNwCQi38rXl4VM25z2FOckgc09IKGXWYEZuAi8iUgi";
class Rest {

    doGet( url ) {
        const requestOptions = {
            url,
            [ TYPE_KEY ]: JSON_VALUE,
            [ METHOD_KEY ]: GET
        };
        return axios(requestOptions);
    }
}

export default new Rest();
