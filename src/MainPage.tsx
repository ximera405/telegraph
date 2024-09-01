import axios from 'axios';
import { useState } from 'react';

export const MainPage = () => {
    const accessToken =
        'ebfda91abdf36f3bdb22c9deb8b8f5ec05db30094aa4c1210a5bc12de783';

    const [newContent, setNewContent] = useState<any>();

    const onClickCopy = () => {
        getPageData();
    };

    const getPageData = async () => {
        await fetch(
            `https://api.telegra.ph/getPage/Bella-Torn-08-31?return_content=true`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                return response.json();
            })
            .then((json) => {
                setNewContent(json.result);
                createPage(json);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const createPage = async (content: {
        title: any;
        author_name: any;
        author_url: any;
    }) => {
        console.log(content);
        // fetch(
        //     // `https://api.telegra.ph/createPage?access_token=${accessToken}&title=${content.title}&author_name=${content.author_name}&author_url=${content.author_url}&content=${JSON.stringify(content.content)}&return_content=true`
        //     `https://api.telegra.ph/createPage`
        // )
        //     .then((response) => {
        //         console.log(response);
        //         if (!response.ok) {
        //             throw new Error(`HTTP error: ${response.status}`);
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        axios.post('https://api.telegra.ph/createPage', {
            json: {
                access_token: accessToken,
                title: content.title,
                author_name: content.author_name,
                author_url: content.author_url,
                content: testContent,
                return_content: true,
            },
        });

        // fetch("https://api.telegra.ph/createPage", {
        //     mode: "cors",
        //     credentials: "include",
        //     method: "POST",
        //     headers: {
        //       'Access-Control-Allow-Origin':'*',
        //       'content-type':'application/json'
        //     },
        //     body: {
        //         json: JSON.stringify({
        //             access_token: accessToken,
        //             title: content.title,
        //             author_name: content.author_name,
        //             author_url: content.author_url,
        //             content: testContent,
        //             return_content: true,
        //         }),
        //     },
        // })
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error(`HTTP error: ${response.status}`);
        //         }

        //         return response.json();
        //     })
        //     .then((json) => {
        //         console.log(json);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <div>
            <h1>Копировать telegraph посты</h1>

            <label htmlFor="authorName">
                Имя автора
                <input id="authorName" />
            </label>

            <input />
            <button onClick={onClickCopy}>Копировать</button>
        </div>
    );
};
const testContent = [
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/7fad1afacce67fb35eb1b.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/f77e0de81c768022d4501.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/48d1837560819e73704b0.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/4951a591cf87a66e9636e.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/9079e6ce865c56c979ef6.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/706a1d9786e43793ffaef.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/3855dff5f25a54bccd03f.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/6a44170589aa74ba0e8e2.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/4f0073162a68546121630.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/6c82b01d09e4522712892.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/c17bb8942ba5e8ed6046b.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/22f93c31763d1d8711b6c.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/ebed3169417b528bf0993.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/48f081ab9a5e56b133f71.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/14f5e14da80fa916d4c97.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/9c38cac96362974946976.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/fc4f2d52535d13faa13fd.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/28daec577ee09908c3153.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/a6c033befede924bd3ae3.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/f0dc1c05475aa2999e4e1.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/3e574a50de566a1ef58d2.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/ed2b453a2996667c47344.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/d67f1a6a481d5c472bc6b.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/5a12fc53dae31bb8e5b05.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/cb598abd2b530d22fe4d6.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/1a66c1c0a271a0cab8b66.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/895e22ceeeed166cf1571.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/d8ad7c059ebd1af3cbffc.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/798693eba4ca601d11139.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/436652c02570c33db8d7c.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/07919699b739a55c5ca17.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/49d661e71985575f25e20.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/7c3efb84b8367b99e413e.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/09ee4b94480f09b51bb77.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/62642ab7350022727ede6.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/93b8e1ab865c16e113470.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/7869ed8fbf407a8e1cc11.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/0edfb538744774acff2be.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/0b72d25fb20a4f9eec1c1.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
    {
        tag: 'figure',
        children: [
            { tag: 'img', attrs: { src: '/file/29c0227919c8b649eccb7.png' } },
            { tag: 'figcaption', children: [''] },
        ],
    },
];
