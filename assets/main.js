const API = 'https://tiktok-video-no-watermark2.p.rapidapi.com/user/posts?unique_id=%40andresbadillo.co&count=10&cursor=0';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6d13ee849mshfa35706ec15b333p1d54acjsn731bf585d9d9',
		'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
	}
};

// fetch(API, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};

// ${videos.items.map(video => `

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
            ${videos.data.videos.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.cover}" alt="${video.title}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.title}
                        </h3>
                    </div>
                </div>
            `).slice(0, 8).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();