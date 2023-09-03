const url = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1cacde308fmsh51530d9b1f4230dp1083b0jsn8a8655591289',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchDatafromAPI = async () => {
    return (
        fetch(url, options)
            .then(res => { return res.json() })
            .catch((error)=>{console.warn(error)})
    )
}