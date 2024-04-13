const searchHistoryItems = [];
const searchTrendingItems = [];
for (let i = 0; i < 6; i++) {
    searchTrendingItems.push(
        {
            title: `Trending-Item-${i}`,
            description: 'Description of the trending item',
            subredditIconURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
            subredditName: 'r/Popular',
            imageURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
            href: '/',
        },
    );
}
for (let i = 0; i < 3; i++) {
    searchHistoryItems.push(
        {
            subredditIconURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
            label: `History-Item-${i}`,
            href: '/test',
        },
    );
}
for (let i = 3; i < 6; i++) {
    searchHistoryItems.push(
        {
            subredditIconURL: '',
            label: `History-Item-${i}`,
            href: '/test',
        },
    );
}

export {searchHistoryItems, searchTrendingItems};
